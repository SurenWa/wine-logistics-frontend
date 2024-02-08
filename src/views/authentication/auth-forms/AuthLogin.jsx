import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { Formik } from 'formik';

// material-ui
import { useTheme } from '@mui/material/styles';
import {
    Box,
    Button,
    FormControl,
    FormHelperText,
    Grid,
    IconButton,
    InputAdornment,
    InputLabel,
    OutlinedInput,
    Typography
} from '@mui/material';

// project imports
import AnimateButton from 'src/ui-component/extended/AnimateButton';
import LoaderButton from 'src/ui-component/LoaderButton';

// assets
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

//redux
import { useSelector, useDispatch } from 'src/store';
import { openSnackbar } from 'src/store/slices/snackbar';
import { loginAction, getCurrentUserAction, reset } from 'src/store/slices/auth/authSlices';


// ===============================|| JWT LOGIN ||=============================== //

const JWTLogin = ({ ...others }) => {
    
    const theme = useTheme();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { loading, success, user, message, error } = useSelector((state) => state?.auth);
    

    const [showPassword, setShowPassword] = React.useState(false);
    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const onSubmit = (values) => {
        // console.log(values);
        dispatch(loginAction(values));
    };

    useEffect(() => {
        if (success) {
            dispatch(reset());
            dispatch(getCurrentUserAction()).then(() => {
                // Check if user object exists and has a role property
                if (user?.role) {
                    const { role } = user;
                    if (role === "ADMIN") {
                        navigate('/admin/analytics');
                    } else if (role === "SUPERADMIN") {
                        navigate('/superadmin/analytics');
                    } else {
                        navigate('/');
                    }
                    dispatch(
                        openSnackbar({
                            open: true,
                            message: 'Login Successful',
                            variant: 'alert',
                            alert: {
                                color: 'success'
                            },
                            close: false
                        })
                    );
                } else {
                    navigate('/');
                    dispatch(
                        openSnackbar({
                            open: true,
                            message: 'Error logging in: Role not found',
                            variant: 'alert',
                            alert: {
                                color: 'error'
                            },
                            close: false
                        })
                    );
                }
            });
        }
    
        if (error) {
            dispatch(
                openSnackbar({
                    open: true,
                    message,
                    variant: 'error',
                    alert: {
                        color: 'error'
                    },
                    close: false
                })
            );
        }
    
        dispatch(reset());
    }, [success, error, dispatch, navigate, message, user]);
    
    
    

    return (
        <Formik
            initialValues={{
                email: 'info@abc.com',
                password: '123456',
                submit: null
            }}
            validationSchema={Yup.object().shape({
                email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
                password: Yup.string().max(255).required('Password is required')
            })}
            onSubmit={onSubmit}
        >
            {({ errors, handleBlur, handleChange, handleSubmit,  touched, values }) => (
                <form noValidate onSubmit={handleSubmit} {...others}>
                    <FormControl fullWidth error={Boolean(touched.email && errors.email)} sx={{ ...theme.typography.customInput }}>
                        <InputLabel htmlFor="outlined-adornment-email-login">Email Address / Username</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-email-login"
                            type="email"
                            value={values.email}
                            name="email"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            inputProps={{}}
                        />
                        {touched.email && errors.email && (
                            <FormHelperText error id="standard-weight-helper-text-email-login">
                                {errors.email}
                            </FormHelperText>
                        )}
                    </FormControl>

                    <FormControl fullWidth error={Boolean(touched.password && errors.password)} sx={{ ...theme.typography.customInput }}>
                        <InputLabel htmlFor="outlined-adornment-password-login">Password</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-password-login"
                            type={showPassword ? 'text' : 'password'}
                            value={values.password}
                            name="password"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                        size="large"
                                    >
                                        {showPassword ? <Visibility /> : <VisibilityOff />}
                                    </IconButton>
                                </InputAdornment>
                            }
                            inputProps={{}}
                            label="Password"
                        />
                        {touched.password && errors.password && (
                            <FormHelperText error id="standard-weight-helper-text-password-login">
                                {errors.password}
                            </FormHelperText>
                        )}
                    </FormControl>

                    <Grid container alignItems="center" justifyContent="space-between">
                        <Grid item>
                            <Typography
                                variant="subtitle1"
                                // component={Link}
                                // to={
                                //     loginProp
                                //         ? `/pages/forgot-password/forgot-password${loginProp}`
                                //         : '/pages/forgot-password/forgot-password3'
                                // }
                                // color="secondary"
                                // sx={{ textDecoration: 'none' }}
                            >
                                Forgot Password?
                            </Typography>
                        </Grid>
                    </Grid>

                    {errors.submit && (
                        <Box sx={{ mt: 3 }}>
                            <FormHelperText error>{errors.submit}</FormHelperText>
                        </Box>
                    )}
                    <Box sx={{ mt: 2 }}>
                        {loading ? (
                            <LoaderButton />
                        ) : (
                            <AnimateButton>
                                <Button color="secondary" fullWidth size="large" type="submit" variant="contained">
                                    Sign In
                                </Button>
                            </AnimateButton>
                        )}
                    </Box>
                </form>
            )}
        </Formik>
    );
};



export default JWTLogin;
