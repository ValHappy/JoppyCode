import { Card, CardContent, makeStyles } from '@material-ui/core';
import React from 'react';
import colors from '../../config/colors';

function ProgressSkill({ title }) {
    const classes = useStyle();

    return (
        <Card className={classes.container}>
            <CardContent className={classes.content}>
                <h1 className={classes.title}>{title}</h1>

                <div className={classes.info}>
                </div>

            </CardContent>
        </Card>
    );
}

const useStyle = makeStyles((theme) => ({
    container: {
        width: '21%',
        height: '100%',
        padding: '1em',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: colors.violet,
        color: colors.colortext,
    },
    content: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        margin: '0',
        color: colors.white,
    },
    info: {
        width: 100,
        height: 140,
        margin: '0.5em',
        padding: '0.5em',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    },
}));

export default ProgressSkill;