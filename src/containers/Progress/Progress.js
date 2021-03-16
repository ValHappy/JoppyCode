import React from 'react';
import { makeStyles } from '@material-ui/core';
import ProgressSkill from '../../components/Progress/ProgressSkill';
import colors from '../../config/colors';
import { ExtensionRounded } from '@material-ui/icons';
import ProgressPractice from '../../components/Progress/ProgressPractice';
import ProgressRecord from '../../components/Progress/ProgressRecord';

function Progress() {
    const classes = useStyles();

    return (
        <div className={classes.progress}>
            <h1 className={classes.title}>PROGRESO</h1>
            <div className={classes.container}>
                <ProgressSkill
                    icon={<ExtensionRounded className={classes.icon}
                        style={{ color: colors.pink }} />}
                    score={2347}
                    skill={"Descomposición"}
                />
                <ProgressSkill
                    icon={<ExtensionRounded className={classes.icon}
                        style={{ color: colors.blue }} />}
                    score={2347}
                    skill={"Abstracción"}
                />
                <ProgressSkill
                    icon={<ExtensionRounded className={classes.icon}
                        style={{ color: colors.acua }} />}
                    score={2347}
                    skill={"Generalización"}
                />
                <ProgressSkill
                    icon={<ExtensionRounded className={classes.icon}
                        style={{ color: colors.violet }} />}
                    score={2347}
                    skill={"Depuración"}
                />
            </div>
            <div className={classes.container}>
                <ProgressPractice title={"Frecuencia diaria"} />
                <ProgressRecord title={"Lorem Ipsum Dolor"} />
            </div>
        </div>
    );
}

const useStyles = makeStyles(theme => ({
    progress: {
        width: '90%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: "1.3vw",
    },
    container: {
        width: '100%',
        height: '100%',
        margin: '1em',
        marginTop: '3%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    icon: {
        fontSize: 30,
    }
}));

export default Progress;