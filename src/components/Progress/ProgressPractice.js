import { Card, CardContent, makeStyles } from '@material-ui/core';
import React from 'react';
import colors from '../../config/colors';
import barras from '../../assets/img/graphics/barras.svg';
import torta from '../../assets/img/graphics/torta.svg';

function ProgressPractice({ title }) {
    const classes = useStyle();

    return (
        <Card className={classes.practice + " " + "animate__animated animate__zoomIn"}>
            <CardContent className={classes.container}>
                <h1 className={classes.title}>{title}</h1>
                <div className={classes.content}>
                    <div className={classes.daily}>
                        <img className={classes.barras} src={barras} alt="daily frequency of practice"/>
                    </div>
                    <div className={classes.monthly}>
                        <img className={classes.torta} src={torta} alt="monthly frequency of practice"/>
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
    barras: {
        width: '90%'
    },
    torta: {
        width: '90%'
    }
}));

export default ProgressPractice;