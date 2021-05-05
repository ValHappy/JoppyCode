import React from 'react';
import { makeStyles } from '@material-ui/core';
import FichaExercise from '../../components/Ficha/FichaExercise';
import colors from '../../config/colors';
import { test } from '../../const/testConst';


function Test({history}) {
    const classes = useStyles();
    const infos = test;

    function handleClick() {
        history.push("/");
    }

    return (
        <div className={classes.test}>
            <h1 className={classes.title + " " + "animate__animated animate__slideInDown"}>PONTE A PRUEBA</h1>
            <div className={classes.container}>
                {!!infos && infos.map((info) => {
                    return <FichaExercise
                        col={info.col}
                        img={info.img}
                        information={info}
                        handleClick={handleClick}
                    />;
                })}
            </div>
        </div>
    );
}

const useStyles = makeStyles(theme => ({
    test: {
        width: '100%',
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
        height: '100%',
        marginTop: '3%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
}));

export default Test;