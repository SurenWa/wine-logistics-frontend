import PropTypes from 'prop-types';
// material-ui
import { useTheme } from '@mui/material/styles';
import { Card, Grid, TextField, InputLabel } from '@mui/material';

// project imports
import { gridSpacing } from 'src/store/constant';

// ==============================|| USER DETAILS CARD ||============================== //

const UserDetailsCard = () => {
    const theme = useTheme();


    return (
        <Card
            sx={{
                p: 2,
                background: theme.palette.mode === 'dark' ? theme.palette.dark.main : theme.palette.grey[50],
                border: theme.palette.mode === 'dark' ? '1px solid transparent' : `1px solid${theme.palette.grey[100]}`,
                '&:hover': {
                    borderColor: theme.palette.primary.main
                }
            }}
        >
            <Grid container spacing={gridSpacing}>
                <Grid item xs={12}>
                    <Grid container spacing={1}>
                        <Grid item xs={6}>
                            <InputLabel required>Navn</InputLabel>
                            <TextField required fullWidth placeholder="Enter Navn" />
                        </Grid>
                        <Grid item xs={6}>
                            <InputLabel required>PIN-kode</InputLabel>
                            <TextField type='number' required fullWidth placeholder="PIN-kode" />
                        </Grid>
                        <Grid item xs={6} mt={2}>
                            <InputLabel required>Email</InputLabel>
                            <TextField type='email' required fullWidth placeholder="Email" />
                        </Grid>
                        <Grid item xs={6} mt={2}>
                            <InputLabel required>Passord</InputLabel>
                            <TextField type='password' required fullWidth placeholder="Passord" />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Card>
    );
};

UserDetailsCard.propTypes = {
    about: PropTypes.string,

    contact: PropTypes.string,
    email: PropTypes.string,
    location: PropTypes.string,
    name: PropTypes.string,
    role: PropTypes.string
};

export default UserDetailsCard;
