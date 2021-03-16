import React from 'react';
import { makeStyles } from '@material-ui/core';
import Ficha from '../../components/Ficha/Ficha';
import { AccountTreeRounded, AssignmentTurnedInRounded, BugReportRounded, ExtensionRounded } from '@material-ui/icons';
import colors from '../../config/colors';

function Skills() {
    const classes = useStyles();

    return (
        <div className={classes.skills}>
            <h1 className={classes.title}>HABILIDADES FUNDAMENTALES</h1>
            <div className={classes.container}>
                <Ficha
                    icon={
                        <AccountTreeRounded
                            className={classes.icon}
                            fontSize="large"
                        />}
                    skill={"Descomposición"}
                    desc={"¡Vamos a descomponer!"}
                    col={colors.pink}
                />
                <Ficha
                    icon={
                        <ExtensionRounded
                            className={classes.icon}
                            fontSize="large"
                        />}
                    skill={"Abstracción"}
                    desc={"¡Vamos a razonar!"}
                    col={colors.blue}
                />
                <Ficha
                    icon={
                        <AssignmentTurnedInRounded
                            className={classes.icon}
                            fontSize="large"
                        />}
                    skill={"Generalización"}
                    desc={"¡Diseñemos algoritmos!"}
                    col={colors.acua}
                />
                <Ficha
                    icon={
                        <BugReportRounded
                            className={classes.icon}
                            fontSize="large"
                        />}
                    skill={"Depuración"}
                    desc={"¡Vamos a evaluar!"}
                    col={colors.violet}
                />
            </div>
        </div>
    );
}

const useStyles = makeStyles(theme => ({
    skills: {
        width: '100%',
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
        marginTop: '3%',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    icon: {
        color: colors.white,
    }
}));

export default Skills;