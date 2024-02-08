//import React from 'react';

// material-ui
import {
    Grid,
    TextField,
    Button,
    Divider
} from '@mui/material';
// project imports
import MainCard from 'src/ui-component/cards/MainCard';
import InputLabel from 'src/ui-component/extended/Form/InputLabel';
import { gridSpacing } from 'src/store/constant';
import SubCard from 'src/ui-component/cards/SubCard';
import UserDetailsCard from 'src/ui-component/cards/UserDetailsCard';

const userDetails = {
    id: '#1Card_Phoebe',
    avatar: 'avatar-2.png',
    name: 'Gaetano',
    role: 'Investor Division Strategist',
    about: 'Try to connect the SAS transmitter, maybe it will index the optical hard drive!',
    email: 'alia_shields25@yahoo.com',
    contact: '253-418-5940',
    location: 'Herminahaven'
};
// ==============================|| Columns Layouts ||============================== //
function AddBusiness() {

    // const [value, setValue] = React.useState(options[0]);
    // const [yearValue, setYearValue] = React.useState(years[0])
    // const [inputValue, setInputValue] = React.useState('');
    // const [yearInputValue, setYearInputValue] = React.useState('');

    return (
        <Grid container spacing={gridSpacing}>
            <Grid item xs={12}>
                <MainCard title="Opprett virksomhet">
                    <Grid container spacing={4} alignItems="center">
                        <Grid item xs={12} lg={6}>
                            <InputLabel required>Navn</InputLabel>
                            <TextField required fullWidth placeholder="Navn" />
                        </Grid>
                        <Grid item xs={12} lg={6}>
                            <InputLabel>Adresse</InputLabel>
                            <TextField fullWidth placeholder="Adresse" />
                        </Grid>

                        <Grid item xs={12} lg={6}>
                            <InputLabel>Bedriftsnummer</InputLabel>
                            <TextField fullWidth placeholder="Bedriftsnummer" />
                        </Grid>
                        <Grid item xs={12} lg={6}>
                            <InputLabel>Telefonnummer</InputLabel>
                            <TextField fullWidth placeholder="Telefonnummer" />
                        </Grid>
                        <Grid item xs={12} lg={6}>
                            <InputLabel>Forretningsutvalg</InputLabel>
                            <TextField
                                type="number"
                                fullWidth
                                id="customerPhone"
                                name="customerPhone"
                                // value={formik.values.customerPhone}
                                // onBlur={formik.handleBlur}
                                // error={formik.touched.customerPhone && Boolean(formik.errors.customerPhone)}
                                // helperText={formik.touched.customerPhone && formik.errors.customerPhone}
                                // onChange={formik.handleChange}
                                placeholder="Forretningsutvalg"
                            />
                        </Grid>
                        <Grid item xs={12} lg={6}>
                            <InputLabel>Maks. tillat plasseringer</InputLabel>
                            <TextField fullWidth placeholder="Maks. tillat plasseringer" />
                        </Grid>
                        <Grid item xs={12}>
                            <Divider />
                        </Grid>
                        <Grid item xs={12}>
                            <SubCard title="Administrasjonskonto">
                                <UserDetailsCard {...userDetails} />
                            </SubCard>
                        </Grid>
                        <Grid item xs={12} lg={6}>
                            <Grid container alignItems="center" justifyContent="flex-start" spacing={2}>
                                <Grid item>
                                    <Button variant="contained" color="secondary">
                                        Skape
                                    </Button>
                                </Grid>
                                <Grid item>
                                    <Button variant="contained" color="error">Avbryt</Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </MainCard>
            </Grid>
        </Grid>
    );
}

export default AddBusiness;
