import React from 'react';

// material-ui
import { Button, Step, Stepper, StepLabel, Stack, Typography, Grid } from '@mui/material';

// project imports
// import AddressForm from './AddressForm';
// import PaymentForm from './PaymentForm';
// import Review from './Review';
import { gridSpacing } from 'src/store/constant';
import MainCard from 'src/ui-component/cards/MainCard';
import AnimateButton from 'src/ui-component/extended/AnimateButton';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';

// step options
const steps = ['Trinn1', 'Trinn2', 'Trinn3', 'Trinn4'];

const getStepContent = (step, handleNext, handleBack, setErrorIndex, shippingData, setShippingData) => {
    switch (step) {
        case 0:
            return (
                <Step1
                    handleNext={handleNext}
                    setErrorIndex={setErrorIndex}
                    shippingData={shippingData}
                    setShippingData={setShippingData}
                />
            );
        case 1:
            return (
                <Step2
                    handleNext={handleNext}
                    // setErrorIndex={setErrorIndex}
                    // shippingData={shippingData}
                    // setShippingData={setShippingData}
                    handleBack={handleBack}
                />
            );
        case 2:
            return (
                <Step3
                    handleNext={handleNext}
                    // setErrorIndex={setErrorIndex}
                    // shippingData={shippingData}
                    // setShippingData={setShippingData}
                    handleBack={handleBack}
                />
            );
        case 3:
            return (
                <Step4
                    handleNext={handleNext}
                    setErrorIndex={setErrorIndex}
                    shippingData={shippingData}
                    setShippingData={setShippingData}
                />
            );
        default:
            throw new Error('Unknown step');
    }
};

// ==============================|| FORMS WIZARD - BASIC ||============================== //

const ValidationWizard = () => {
    const [activeStep, setActiveStep] = React.useState(0);
    const [shippingData, setShippingData] = React.useState({});
    // const [paymentData, setPaymentData] = React.useState({});
    const [errorIndex, setErrorIndex] = React.useState(null);

    const handleNext = () => {
        setActiveStep(activeStep + 1);
        setErrorIndex(null);
    };

    

    const handleBack = () => {
        setActiveStep(activeStep - 1);
    };

    return (
        <Grid container spacing={gridSpacing} justifyContent="center">
            <Grid item xs={12} md={12} lg={12}>
        <MainCard title="Salg">
            <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
                {steps.map((label, index) => {
                    const labelProps = {};

                    if (index === errorIndex) {
                        labelProps.optional = (
                            <Typography variant="caption" color="error">
                                Error
                            </Typography>
                        );

                        labelProps.error = true;
                    }

                    return (
                        <Step key={label}>
                            <StepLabel {...labelProps}>{label}</StepLabel>
                        </Step>
                    );
                })}
            </Stepper>
            <>
                {activeStep === steps.length ? (
                    <>
                        <Typography variant="h5" gutterBottom>
                            Thank you for your order.
                        </Typography>
                        <Typography variant="subtitle1">
                            Your order number is #2001539. We have emailed your order confirmation, and will send you an update when your
                            order has shipped.
                        </Typography>
                        <Stack direction="row" justifyContent="flex-end">
                            <AnimateButton>
                                <Button
                                    variant="contained"
                                    color="error"
                                    onClick={() => {
                                        setShippingData({});
                                        //setPaymentData({});
                                        setActiveStep(0);
                                    }}
                                    sx={{ my: 3, ml: 1 }}
                                >
                                    Reset
                                </Button>
                            </AnimateButton>
                        </Stack>
                    </>
                ) : (
                    <>
                        {getStepContent(
                            activeStep,
                            handleNext,
                            handleBack,
                            setErrorIndex,
                            shippingData,
                            setShippingData,
                            // paymentData,
                            // setPaymentData
                        )}
                        {activeStep === steps.length - 1 && (
                            <Stack direction="row" justifyContent={activeStep !== 0 ? 'space-between' : 'flex-end'}>
                                {activeStep !== 0 && (
                                    <Button onClick={handleBack} sx={{ my: 3, ml: 1 }}>
                                        Back
                                    </Button>
                                )}
                                
                                <AnimateButton>
                                    {/* <Button variant="contained" onClick={handleNext} sx={{ my: 3, ml: 1 }}>
                                        {activeStep === steps.length - 1 ? null : 'Next'}
                                    </Button> */}
                                    {activeStep === steps.length - 1 ? null : 
                                    <Button variant="contained" onClick={handleNext} sx={{ my: 3, ml: 1 }}>
                                        Neste
                                    </Button> }
                                </AnimateButton>
                            </Stack>
                        )}
                    </>
                )}
            </>
        </MainCard>
        </Grid>
        </Grid>
    );
};

export default ValidationWizard;
