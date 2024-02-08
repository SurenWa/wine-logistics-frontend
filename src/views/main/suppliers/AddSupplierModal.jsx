// import React from 'react';
import PropTypes from 'prop-types';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid, InputLabel, TextField, Select, MenuItem } from '@mui/material';

// ===============================|| UI DIALOG - RESPONSIVE ||=============================== //

export default function AddSupplierModal({ open, fullScreen, onClose }) {
    const theme = useTheme();
    // const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

    // const [open, setOpen] = React.useState(false);
    // const handleClickOpen = () => {
    //     setOpen(true);
    // };

    // const handleClose = () => {
    //     setOpen(false);
    // };

    return (
        <div>
            {/* <Button variant="outlined" onClick={handleClickOpen}>
                Open responsive dialog
            </Button> */}
            <Dialog fullScreen={fullScreen} open={open} onClose={onClose} aria-labelledby="responsive-dialog-title" fullWidth
                maxWidth="lg">
                {open && (
                    <>
                        <DialogTitle id="responsive-dialog-title">Ny Leverandør</DialogTitle>
                        <DialogContent>
                            {/* <DialogContentText>
                                <Typography variant="body2" component="span">
                                    Let Google help apps determine location. This means sending anonymous location data to Google, even when
                                    no apps are running.
                                </Typography> */}
                            <Grid container spacing={4} alignItems="center">
                                <Grid item xs={12} lg={6}>
                                    <InputLabel required>Navn</InputLabel>
                                    <TextField required fullWidth placeholder="Navn" />
                                </Grid>
                                <Grid item xs={12} lg={6}>
                                    <InputLabel>Adresse</InputLabel>
                                    <TextField fullWidth placeholder="Adresse" />
                                </Grid>                                
                                <Grid item xs={12} lg={3}>
                                    <InputLabel>Telefone</InputLabel>
                                    <TextField fullWidth placeholder="Telefone" />
                                </Grid>
                                <Grid item xs={12} lg={3}>
                                    <InputLabel>E-post</InputLabel>
                                    <TextField fullWidth placeholder="E-post" />
                                </Grid>  
                                <Grid item xs={12} lg={2}>
                                    <InputLabel>Postnr</InputLabel>
                                    <TextField fullWidth placeholder="Postnr" />
                                </Grid> 
                                <Grid item xs={12} lg={2}>
                                    <InputLabel>Sted</InputLabel>
                                    <TextField fullWidth placeholder="Sted" />
                                </Grid> 
                                <Grid item xs={12} lg={2}>
                                    <InputLabel>Land</InputLabel>
                                    <Select
                                        id="orderStatus"
                                        name="orderStatus"  
                                        size='medium'                                      
                                    >
                                        <MenuItem value="pending">Norge</MenuItem>
                                        <MenuItem value="refund">Norge</MenuItem>
                                        <MenuItem value="paid">Norgefffff</MenuItem>
                                    </Select>
                                </Grid> 
                                <Grid item xs={12} lg={3}>
                                    <InputLabel>Kundenummer</InputLabel>
                                    <TextField fullWidth placeholder="Kundenummer" />
                                </Grid> 
                                <Grid item xs={12} lg={3}>
                                    <InputLabel>Konto</InputLabel>
                                    <TextField fullWidth placeholder="Konto" />
                                </Grid> 
                                <Grid item xs={12} lg={6}>
                                    <InputLabel>Nettadresse</InputLabel>
                                    <TextField fullWidth placeholder="Nettadresse" />
                                </Grid> 
                                <Grid item xs={12} lg={6}>
                                    <InputLabel>Betalingsinformasjon</InputLabel>
                                    <TextField
                                        id="outlined-textarea"
                                        placeholder="Betalingsinformasjon"
                                        rows={4}
                                        fullWidth
                                        multiline
                                    />     
                                </Grid> 
                                <Grid item xs={12} lg={6}>
                                    <InputLabel>Beskrivelse</InputLabel>
                                    <TextField
                                        id="outlined-textarea"
                                        placeholder="Beskrivelse"
                                        rows={4}
                                        fullWidth
                                        multiline
                                    />     
                                </Grid>                        
                            </Grid>

                        </DialogContent>
                        <DialogActions sx={{ pr: 2.5 }}>
                            <Button sx={{ color: theme.palette.error.dark }} autoFocus onClick={onClose} color="secondary">
                                Avbryt
                            </Button>
                            <Button variant="contained" size="medium" onClick={onClose} autoFocus>
                                Lagre
                            </Button>
                            <Button variant="contained" size="medium" onClick={onClose} autoFocus>
                                Lagre Og Ny
                            </Button>
                        </DialogActions>
                    </>
                )}
            </Dialog>
        </div>
    );
}

AddSupplierModal.propTypes = {
    open: PropTypes.bool,
    onClose: PropTypes.func,
    fullScreen: PropTypes.bool
};
