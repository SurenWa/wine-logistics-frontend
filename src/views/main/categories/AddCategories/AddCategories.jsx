import React from 'react';

// material-ui
import {
    Grid,
    TextField,
    Button,
    Autocomplete
} from '@mui/material';

// project imports
import MainCard from 'src/ui-component/cards/MainCard';
import InputLabel from 'src/ui-component/extended/Form/InputLabel';
import { gridSpacing } from 'src/store/constant';

const options = ['Hvitvin', 'Hvitvin=>Frankrike', 'Hvitvin=>Frankrike=>Alsace', 'Hvitvin=>Frankrike=>Bordeaux', 'Hvitvin=>Frankrike=>Borgund'];
// ==============================|| Columns Layouts ||============================== //
function AddCategories() {

    const [value, setValue] = React.useState(options[0]);
    const [inputValue, setInputValue] = React.useState('');

    return (
        <Grid container spacing={gridSpacing}>
            <Grid item xs={12}>
                <MainCard title="Legg til brukere">
                    <Grid container spacing={4} alignItems="center">
                        <Grid item xs={12} lg={6}>
                            <InputLabel required>Brukernavn</InputLabel>
                            <TextField required fullWidth placeholder="Enter Brukernavn" />
                        </Grid>
                        <Grid item xs={12} lg={6}>
                            <InputLabel required>Foreldrekategori</InputLabel>
                            <Autocomplete
                                value={value}
                                onChange={(event, newValue) => newValue && setValue(newValue)}
                                inputValue={inputValue}
                                onInputChange={(event, newInputValue) => {
                                    setInputValue(newInputValue);
                                }}
                                id="controllable-states-demo"
                                options={options}
                                renderInput={(params) => <TextField {...params} />}
                            />
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

export default AddCategories;
