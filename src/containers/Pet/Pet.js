import React from 'react';
import { makeStyles} from '@material-ui/core';

function Pet() {
    const classes = useStyles();

    return (
        <div className={classes.pet}>
        <h1>ESTO ES MI MASCOTA</h1>
        </div>
    );
}

const useStyles = makeStyles(theme => ({

}));

export default Pet;