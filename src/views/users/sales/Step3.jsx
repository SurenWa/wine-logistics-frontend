import PropTypes from 'prop-types';

// material-ui
import { Button, Grid, Stack } from '@mui/material';

// project imports
import AnimateButton from 'src/ui-component/extended/AnimateButton';
import UserSimpleCard from 'src/ui-component/cards/UserSimpleCard';
import SubCard from 'src/ui-component/cards/SubCard';
import MainCard from 'src/ui-component/cards/MainCard';

// ==============================|| FORM WIZARD - VALIDATION  ||============================== //

const Step3 = ({ handleNext, handleBack }) => {
    return (
        <>
            <MainCard title="Bekreft antall" content={false}>

                <Grid container spacing={3} alignItems="center" justifyContent="center">
                    <Grid item xs={4}>
                    </Grid>
                    <Grid container item xs={4} alignItems="center" justifyContent="center">
                        <Grid item >
                            <SubCard>
                                <UserSimpleCard />
                            </SubCard>
                        </Grid>

                    </Grid>
                    <Grid item xs={4}>
                    </Grid>

                    <Grid item xs={12}>
                        <Stack direction="row" justifyContent="space-between">
                            <Button onClick={handleBack} sx={{ my: 3, ml: 1 }}>
                                Tilbake
                            </Button>
                            <AnimateButton>
                                <Button variant="contained" type="submit" sx={{ my: 3, ml: 1 }} onClick={handleNext}>
                                    Neste
                                </Button>
                            </AnimateButton>
                        </Stack>
                    </Grid>
                </Grid>
            </MainCard>
        </>
    );
};

Step3.propTypes = {
    handleNext: PropTypes.func,
    handleBack: PropTypes.func
};

export default Step3;
