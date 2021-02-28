import React from 'react';
import { makeStyles} from '@material-ui/core';

function Test() {
    const classes = useStyles();

    return (
        <div className={classes.test}>
        <h1>ESTO ES MI PONTE A PRUEBA</h1>
        </div>
    );
}

const useStyles = makeStyles(theme => ({

}));

export default Test;