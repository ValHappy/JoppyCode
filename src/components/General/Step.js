import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Button from '@material-ui/core/Button';
import { ChevronLeftRounded, ChevronRightRounded, MoodBadRounded, SentimentSatisfiedAltRounded, SentimentVeryDissatisfiedRounded, SentimentVerySatisfiedRounded } from '@material-ui/icons';
import { Step, StepLabel, Stepper } from '@material-ui/core';
import colors from '../../config/colors';

function ColorlibStepIcon(props) {
    const classes = useColorlibStepIconStyles();
    const { active, completed } = props;

    const icons = {
        1: <SentimentSatisfiedAltRounded fontSize="large" />,
        2: <SentimentVerySatisfiedRounded fontSize="large" />,
        3: <MoodBadRounded fontSize="large" />,
        4: <SentimentVeryDissatisfiedRounded fontSize="large" />,
    };

    return (
        <div
            className={clsx(classes.root,
                {
                    [classes.active]: active,
                    [classes.completed]: completed,
                }
            )} >
            {icons[String(props.icon)]}
        </div>
    );
}

const useColorlibStepIconStyles = makeStyles({
    root: {
        width: "100%",
        height: "90%",
        backgroundColor: '#ccc',
        color: colors.white,
        borderRadius: "50%",
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    active: {
        backgroundImage:
            'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
        boxShadow: '0 4px 8px 0 rgba(0,0,0,.15)',
    },
    completed: {
        backgroundImage:
            'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
    },
});

ColorlibStepIcon.propTypes = {
    active: PropTypes.bool,
    completed: PropTypes.bool,
    icon: PropTypes.node,
};

function getSteps() {
    return ['Principiante', 'Básico', 'Intermedio', 'Avanzado'];
}

export default function CustomizedSteppers() {
    const classes = useStyles();
    const [activeStep, setActiveStep] = useState(0);
    const steps = getSteps();

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    return (
        <div className={classes.root + " " + "animate__animated animate__slideInDown"}>
            <Button
                disabled={activeStep === 0}
                color="secondary"
                onClick={handleBack}
            >
                <ChevronLeftRounded />
            </Button>

            <div className={classes.stepper}>
                <Stepper alternativeLabel activeStep={activeStep} connector="none" style={{padding: 0, margin: 0}}>
                    {steps.map((label) => (
                        <Step key={label}>
                            <StepLabel StepIconComponent={ColorlibStepIcon} style={{ fontSize: '0.1vw',}}> {label} </StepLabel>
                        </Step>
                    ))}
                </Stepper>
            </div>

            <Button
                disabled={activeStep === 3}
                color="secondary"
                onClick={handleNext}
            >
                <ChevronRightRounded />
            </Button>
        </div>
    );
}

const useStyles = makeStyles((theme) => ({
    root: {
        width: '80%',
        margin: 0,
        padding: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '0.7vw',
    },
}));