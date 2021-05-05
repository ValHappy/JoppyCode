import { Card, CardContent, makeStyles } from '@material-ui/core';
import React from 'react';
import colors from '../../config/colors';
import trofeo from '../../assets/img/graphics/trofeo.svg';

function ProgressSkill() {
    const classes = useStyle();

    return (
        <Card className={classes.container + " " + "animate__animated animate__zoomIn"}>
            <CardContent className={classes.content}>
                <img className={classes.img} src={trofeo} alt="Record"/>
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
    img: {
        width: '90%',
        margin: '0.5em',
        padding: '0.5em',
    },
}));

export default ProgressSkill;