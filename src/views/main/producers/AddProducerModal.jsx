// import React from 'react';
import PropTypes from 'prop-types';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid, InputLabel, TextField } from '@mui/material';

// ===============================|| UI DIALOG - RESPONSIVE ||=============================== //

export default function AddProducerModal({ open, fullScreen, onClose }) {
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
                        <DialogTitle id="responsive-dialog-title">Ny Produsent</DialogTitle>
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
                                    <InputLabel>Nettadresse</InputLabel>
                                    <TextField fullWidth placeholder="Nettadresse" />
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

AddProducerModal.propTypes = {
    open: PropTypes.bool,
    onClose: PropTypes.func,
    fullScreen: PropTypes.bool
};
