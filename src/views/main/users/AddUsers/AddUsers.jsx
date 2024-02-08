// material-ui
import {
    Grid,
    InputAdornment,
    TextField,
    Button
} from '@mui/material';

// project imports
import MainCard from 'src/ui-component/cards/MainCard';
import InputLabel from 'src/ui-component/extended/Form/InputLabel';
import { gridSpacing } from 'src/store/constant';

// assets
import LockTwoToneIcon from '@mui/icons-material/LockTwoTone';


// ==============================|| Columns Layouts ||============================== //
function AddUsers() {
    return (
        <Grid container spacing={gridSpacing}>
            <Grid item xs={12}>
                <MainCard title="Legg til brukere">
                    <Grid container spacing={4} alignItems="center">
                        <Grid item xs={12} lg={6}>
                            <InputLabel required>Brukernavn</InputLabel>
                            <TextField required fullWidth placeholder="Enter Username" />
                        </Grid>
                        <Grid item xs={12} lg={6}>
                            <InputLabel required>Passord</InputLabel>
                            <TextField
                                type="password"
                                required
                                fullWidth
                                placeholder="Enter Password"
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <LockTwoToneIcon />
                                        </InputAdornment>
                                    )
                                }}
                            />
                        </Grid>
                        <Grid item xs={12} lg={6}>
                            <InputLabel>Brukerkode</InputLabel>
                            <TextField fullWidth placeholder="Enter Brukerkode" />
                        </Grid>
                        <Grid item xs={12} lg={6}>
                            <InputLabel>RFID</InputLabel>
                            <TextField fullWidth placeholder="Enter RFID" />
                        </Grid>
                        <Grid item xs={12} lg={6}>
                            <Grid container alignItems="center" justifyContent="flex-start" spacing={2}>
                                <Grid item>
                                    <Button variant="contained" color="secondary">
                                        Lagre
                                    </Button>
                                </Grid>
                                <Grid item>
                                    <Button variant="contained" color="error">Tilbake</Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </MainCard>
            </Grid>
        </Grid>
    );
}

export default AddUsers;
