import React from 'react';
import { makeStyles } from '@material-ui/core';
import Ficha from '../../components/Ficha/Ficha';
import { ComputerRounded } from '@material-ui/icons';
import colors from '../../config/colors';

function Skills() {
    const classes = useStyles();

    return (
        <div className={classes.skills}>
            <h1>HABILIDADES</h1>
            <div className={classes.container}>
                <Ficha
                    icon={<ComputerRounded className={classes.icon} />}
                    skill={"Descomposición"}
                    desc={"Lorem ipsum dolor sit amet consectetur adipiscing elit nam litora, pharetra etiam iaculis in duis netus rutrum nibh, nascetur"}
                />
                <Ficha
                    icon={<ComputerRounded className={classes.icon} />}
                    skill={"Abstracción"}
                    desc={"Lorem ipsum dolor sit amet consectetur adipiscing elit nam litora, pharetra etiam iaculis in duis netus rutrum nibh, nascetur"}
                />
                <Ficha
                    icon={<ComputerRounded className={classes.icon} />}
                    skill={"Generalización"}
                    desc={"Lorem ipsum dolor sit amet consectetur adipiscing elit nam litora, pharetra etiam iaculis in duis netus rutrum nibh, nascetur"}
                />
                <Ficha
                    icon={<ComputerRounded className={classes.icon} />}
                    skill={"Depuración"}
                    desc={"Lorem ipsum dolor sit amet consectetur adipiscing elit nam litora, pharetra etiam iaculis in duis netus rutrum nibh, nascetur"}
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
    container: {
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon: {
        color: colors.white,
    }
}));

export default Skills;