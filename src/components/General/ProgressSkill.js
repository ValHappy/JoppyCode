import { Card, makeStyles } from '@material-ui/core';
import React from 'react';

function ProgressSkill({}) {
    const classes = useStyle();

    return (
        <Card className={classes.card}>

        </Card>
    );
}

const useStyle = makeStyles((theme) => ({
    progressSkill: {
    width: '40%',
    
    },
}));

export default ProgressSkill;