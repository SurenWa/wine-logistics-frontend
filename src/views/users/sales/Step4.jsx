// material-ui
import { useTheme } from '@mui/material/styles';
import { Typography, Grid, Button } from '@mui/material';
import MuiTypography from '@mui/material/Typography';

// project imports
import MainCard from 'src/ui-component/cards/MainCard';

// third-party

// ==============================|| FORM WIZARD - VALIDATION  ||============================== //

const Step4 = () => {

    const theme = useTheme();


    return (
        <>
            <MainCard content={false}>
                <Grid container spacing={3} alignItems="center"
                    justifyContent="center" direction="column">
                    <Grid item xs={12} >
                        <Typography variant="h1" gutterBottom sx={{ mb: 2, mt: 2 }}>
                            Vil du sjekke inn eller sjekke ut en vin?
                        </Typography>
                    </Grid>


                    <Grid item xs={12} md={6} mt={4} >
                        <Button
                            variant="contained"
                            sx={{
                                background: theme.palette.error.main, '&:hover': { background: theme.palette.error.dark },
                                mt: -3,

                                maxWidth: '300px', maxHeight: '300px', minWidth: '300px', minHeight: '300px'
                            }}
                            size='large'
                            color="secondary"
                        >
                            <Grid container spacing={3} alignItems="center" justifyContent="center" direction="column">
                                <Grid item xs={12} >
                                    <MuiTypography variant="h1" sx={{ fontSize: 50 }} color="white">Sjekk Inn</MuiTypography>
                                </Grid>
                                <Grid item xs={12} >
                                    <MuiTypography variant="h3" sx={{ fontSize: 20 }} color="white">Retur</MuiTypography>
                                </Grid>
                            </Grid>
                        </Button>
                        <Button
                            variant="contained"
                            sx={{
                                background: theme.palette.success.dark,
                                '&:hover': { background: theme.palette.success.main },
                                mt: -3,
                                ml: 5,
                                maxWidth: '300px', maxHeight: '300px', minWidth: '300px', minHeight: '300px'
                            }}
                            size='large'
                        >   
                            <Grid container spacing={3} alignItems="center" justifyContent="center" direction="column">
                                <Grid item xs={12} >
                                    <MuiTypography variant="h1" sx={{ fontSize: 50 }} color="white">Sjekk Ut</MuiTypography>
                                </Grid>
                                <Grid item xs={12} >
                                    <MuiTypography variant="h3" sx={{ fontSize: 20 }} color="white">Salg</MuiTypography>
                                </Grid>
                            </Grid>
                        </Button>
                    </Grid>
                </Grid>
            </MainCard>
        </>
    );
};

export default Step4;
