import { Card, CardContent, makeStyles } from '@material-ui/core';
import React from 'react';
import colors from '../../config/colors';

function ProgressPractice({ title }) {
    const classes = useStyle();

    return (
        <Card className={classes.practice + " " + "animate__animated animate__zoomIn"}>
            <CardContent className={classes.container}>
                <h1 className={classes.title}>{title}</h1>
                <div className={classes.content}>
                    <div className={classes.daily}>
                        <h2 className={classes.subtitle}>Insertar gráfica de practica diaria</h2>
                    </div>
                    <div className={classes.monthly}>
                        <h2 className={classes.subtitle}>Insertar gráfica de <br/>practica mensual</h2>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}

const useStyle = makeStyles((theme) => ({
    practice: {
        width: '72.5%',
        height: '100%',
        padding: '1em',
        background: colors.white,
        color: colors.colortext,
    },
    container: {
        width: '100%',
        height: '100%',
        background: colors.white,
    },
    title: {
        margin: '0',
        fontSize: '1.3vw',
        color: colors.black,
    },
    subtitle: {
        margin: '0',
        fontSize: '1vw',
    },
    content: {
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    daily: {
        width: '70%',
        height: '80%',
    },
    monthly: {
        width: '30%',
        height: '80%',
    },
}));

export default ProgressPractice;