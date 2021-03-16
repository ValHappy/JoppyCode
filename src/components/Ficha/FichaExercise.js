import React from 'react';
import { makeStyles } from '@material-ui/core';
import colors from '../../config/colors';

function FichaExercise({ titleExercise, col, img }) {
    const classes = useStyles();
    return (
        <div className={classes.container} style={{ background: col }}>
            <div className={classes.content}>
                <img className={classes.img} src={img} alt="imagen del ejercicio" />
                <h1 className={classes.title}>{titleExercise}</h1>
            </div>
        </div>
    );
}

const useStyles = makeStyles(theme => ({
    container: {
        width: '15%',
        height: '100%',
        padding: '0.5em',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,

    },
    content: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    img: {
        width: '9em',
        height: '10em',
    },
    title: {
        margin: '0',
        marginTop: '1em',
        padding: '0.5em',
        fontSize: "1.3vw",
        color: colors.black,
    },
}));

export default FichaExercise;