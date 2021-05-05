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
            <h1 className={classes.title  + " animate__animated animate__slideInDown"}>PROGRESO</h1>
            <div className={classes.containerSkill}>
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
                <ProgressPractice title={"Estimación de aprendizaje vs Frecuencia diaria"} />
                <ProgressRecord/>
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
        fontSize: '1.3vw',
    },
    container: {
        width: '100%',
        height: '70%',
        margin: '1em',
        marginTop: '3%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    containerSkill: {
        width: '100%',
        height: '30%',
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