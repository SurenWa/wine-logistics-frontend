import PropTypes from 'prop-types';

// material-ui
import { Button, Grid, Stack } from '@mui/material';

// project imports
import AnimateButton from 'src/ui-component/extended/AnimateButton';
import ProducerList from './producer/ProducerList';

// ==============================|| FORM WIZARD - VALIDATION  ||============================== //

const Step2 = ({ handleNext, handleBack }) => {
    return (
        <>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <ProducerList />
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
        </>
    );
};

Step2.propTypes = {
    handleNext: PropTypes.func,
    handleBack: PropTypes.func
};

export default Step2;
