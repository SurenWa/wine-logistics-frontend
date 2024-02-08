import PropTypes from 'prop-types';

// material-ui
import { Button, Grid, Stack, TextField } from '@mui/material';

// project imports
import AnimateButton from 'src/ui-component/extended/AnimateButton';
import MainCard from 'src/ui-component/cards/MainCard';

// third-party
import { useFormik } from 'formik';
import * as yup from 'yup';

const validationSchema = yup.object({
    // firstName: yup.string().required('First Name is required'),
    // lastName: yup.string().required('Last Name is required'),
    userCode: yup.string().required('brukerkode kreves'),
});

// ==============================|| FORM WIZARD - VALIDATION  ||============================== //

const Step1 = ({ shippingData, setShippingData, handleNext, setErrorIndex }) => {
    const formik = useFormik({
        initialValues: {
            userCode: shippingData.userCode,
            // lastName: shippingData.lastName
        },
        validationSchema,
        onSubmit: (values) => {
            setShippingData({
                userCode: values.userCode,
                // lastName: values.lastName
            });
            handleNext();
        }
    });

    return (
        <>
            <MainCard title="Identifikasjon" content={false}>
                <form onSubmit={formik.handleSubmit} id="validation-forms">
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <TextField
                                id="userCode"
                                name="userCode"
                                label="Brukerkode *"
                                value={formik.values.userCode}
                                onChange={formik.handleChange}
                                error={formik.touched.userCode && Boolean(formik.errors.userCode)}
                                helperText={formik.touched.userCode && formik.errors.userCode}
                                fullWidth
                                autoComplete="given-name"
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <Stack direction="row" justifyContent="flex-end">
                                <AnimateButton>
                                    <Button variant="contained" sx={{ my: 3, ml: 1 }} type="submit" onClick={() => setErrorIndex(0)}>
                                        I dette
                                    </Button>
                                </AnimateButton>
                            </Stack>
                        </Grid>
                    </Grid>
                </form>
            </MainCard >
        </>
    );
};

Step1.propTypes = {
    shippingData: PropTypes.object,
    setShippingData: PropTypes.func,
    handleNext: PropTypes.func,
    setErrorIndex: PropTypes.func
};

export default Step1;
