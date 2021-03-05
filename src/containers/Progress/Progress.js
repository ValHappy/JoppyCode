import React from 'react';
import { makeStyles } from '@material-ui/core';
import ProgressSkill from '../../components/General/ProgressSkill';

function Progress() {
    const classes = useStyles();

    return (
        <div className={classes.progress}>
            <h1>ESTO ES MI PROGRESO</h1>
            <ProgressSkill />
        </div>
    );
}

const useStyles = makeStyles(theme => ({

}));

export default Progress;