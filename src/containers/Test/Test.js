import React from 'react';
import { makeStyles} from '@material-ui/core';

function Test() {
    const classes = useStyles();

    return (
        <div className={classes.test}>
         <h1 className={classes.title  + " " + "animate__animated animate__slideInDown"}>ESTO ES MI PONTE A PRUEBAA</h1>
        </div>
    );
}

const useStyles = makeStyles(theme => ({
    title: {
        fontSize: '1.3vw',
    },
}));

export default Test;