import React from 'react';
import { makeStyles} from '@material-ui/core';

function Skills() {
    const classes = useStyles();

    return (
        <div className={classes.skills}>
        <h1>ESTO ES MI HABILIDADES</h1>
        </div>
    );
}

const useStyles = makeStyles(theme => ({

}));

export default Skills;