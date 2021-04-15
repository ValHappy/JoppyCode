import React, {useContext} from 'react';
import { makeStyles } from '@material-ui/core';
import colors from '../../config/colors';
import FichaExercise from '../../components/Ficha/FichaExercise';
import Step from '../../components/General/Step';
import img1 from './../../assets/img/Joppy.png';
import { MenuContext } from '../../containers/App/Provider';

function Exercises() {
    const classes = useStyles();
    const [, , habilidad] = useContext(MenuContext);

    return (
        <div className={classes.exercises}>
            <h1 className={classes.title + " animate__animated animate__slideInDown"}>EJERCICIOS DE {habilidad.name}</h1>

            <div className={classes.container}>
                <Step />
            </div>

            <div className={classes.container}>
                <FichaExercise
                    col={colors.pink}
                    img={img1}
                    titleExercise={"Ejercicio 1"}
                    value={"ejercicio1"}
                />
                <FichaExercise
                    col={colors.blue}
                    img={img1}
                    titleExercise={"Ejercicio 2"}
                    value={"ejercicio2"}
                />
                <FichaExercise
                    col={colors.acua}
                    img={img1}
                    titleExercise={"Ejercicio 3"}
                    value={"ejercicio3"}
                />
                <FichaExercise
                    col={colors.violet}
                    img={img1}
                    titleExercise={"Ejercicio 4"}
                    value={"ejercicio4"}
                />
                <FichaExercise
                    col={colors.lila}
                    img={img1}
                    titleExercise={"Ejercicio 5"}
                    value={"ejercicio5"}
                />
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