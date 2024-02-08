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
import AddStockCountDataTable from './AddStockCountDataTable';



// ==============================|| Columns Layouts ||============================== //
function AddStockCount() {    
    return (
        <Grid container spacing={gridSpacing}>
            <Grid item xs={12}>
                <MainCard title="Legg til brukere">
                    <Grid container spacing={4} alignItems="center">
                        <Grid item xs={12} lg={4}>
                            <InputLabel required>Dato</InputLabel>
                            <TextField required fullWidth placeholder="Enter Dato" />
                        </Grid>
                                                
                        <Grid item xs={12}>
                            <InputLabel>Notis</InputLabel>
                            <TextField
                                id="outlined-textarea"
                                placeholder="Notis"
                                rows={4}
                                fullWidth
                                multiline
                            />     
                        </Grid>
                        <Grid item xs={12}>
                            <Divider />
                        </Grid>
                        <Grid item xs={12}>
                            <AddStockCountDataTable />
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

export default AddStockCount;
