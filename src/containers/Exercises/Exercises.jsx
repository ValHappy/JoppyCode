import React,{useContext} from 'react';
import { makeStyles } from '@material-ui/core';
import colors from '../../config/colors';
import FichaExercise from '../../components/Ficha/FichaExercise';
import Step from '../../components/General/Step';
import { MenuContext } from '../App/Provider';
import {selecInfo} from '../../helpers/getInfoExcersices';
import {selectColor} from '../../helpers/getColor';

function Exercises({history}) {
    const classes = useStyles();
    const [, , habilidad, , dificultad, , , setInfoExcerse] = useContext(MenuContext);
    const infos = selecInfo(habilidad.value);
    const col = selectColor(habilidad.value);

    function handleClick(e) {
        history.push("/exercise?id=" + habilidad.value + "?id=" + e.target.dataset.value + "?diffcult=" + dificultad);
        setInfoExcerse(infos[e.target.dataset.value]);
    }

    return (
        <div className={classes.exercises}>
            <h1 className={classes.title + " animate__animated animate__slideInDown"}>EJERCICIOS DE {habilidad.name}</h1>

            <div className={classes.container}>
                <Step />
            </div>

            <div className={classes.container}>
                {!!infos && infos.map((info,i)=>{
                    return <FichaExercise
                        col={col}
                        img={info.cover}
                        information = {info}
                        value={i}
                        handleClick={handleClick}
                    />;
                })}
            </div>
        </div>
    );
}

const useStyles = makeStyles(theme => ({
    exercises: {
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
        justifyContent: 'space-around',
        alignItems: 'center',
    },
}));

export default Exercises;