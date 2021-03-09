import { Card, CardContent, makeStyles } from '@material-ui/core';
import React from 'react';
import colors from '../../config/colors';

function ProgressPractice({ title }) {
    const classes = useStyle();

    return (
        <Card className={classes.practice}>
            <CardContent className={classes.container}>
                <h1 className={classes.title}>{title}</h1>
                <div className={classes.content}>
                    <div className={classes.daily}>
                        <h2 className={classes.title}>Insertar gráfica de practica diaria</h2>
                    </div>
                    <div className={classes.monthly}>
                        <h2 className={classes.title}>Insertar gráfica de practica mensual</h2>
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
        color: colors.black,
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