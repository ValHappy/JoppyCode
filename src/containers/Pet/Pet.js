import React from 'react';
import { makeStyles} from '@material-ui/core';

function Pet() {
    const classes = useStyles();

    return (
        <div className={classes.pet}>
        <h1 className={classes.title  + " " + "animate__animated animate__slideInDown"}>MASCOTA</h1>
        </div>
    );
}

const useStyles = makeStyles(theme => ({
    title: {
        fontSize: '1.3vw',
    },
}));

export default Pet;