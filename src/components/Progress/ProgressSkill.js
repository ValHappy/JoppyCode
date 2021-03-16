import { Card, CardContent, makeStyles } from '@material-ui/core';
import React from 'react';
import colors from '../../config/colors';

function ProgressSkill({ icon, score, skill }) {
    const classes = useStyle();

    return (
        <Card className={classes.container + " " + "animate__animated animate__zoomIn"}>
            <CardContent className={classes.content}>
                <div className={classes.icon}>
                    {icon}
                </div>
                <div className={classes.info}>
                    <h2 className={classes.score}>{score}</h2>
                    <h3 className={classes.skillName}>{skill}</h3>
                </div>
            </CardContent>
        </Card>
    );
}

const useStyle = makeStyles((theme) => ({
    container: {
        width: '21%',
        height: '80%',
        padding: '1em',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: colors.white,
        color: colors.colortext,
    },
    content: {
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon:{
        width: '30%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    info: {
        width: '55%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    score: {
        margin: '0',
        color: colors.black,
        fontSize: '1.3vw',
    },
    skillName: {
        margin: '0',
        fontSize: '1vw',
    },
}));

export default ProgressSkill;