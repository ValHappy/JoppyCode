import React from 'react';
import { makeStyles} from '@material-ui/core';

function Progress() {
    const classes = useStyles();

    return (
        <div className={classes.progress}>
        <h1>ESTO ES MI PROGRESO</h1>
        </div>
    );
}

const useStyles = makeStyles(theme => ({

}));

export default Progress;