import React, {useContext} from 'react';
import { makeStyles } from '@material-ui/core';
import colors from '../../config/colors';
import { withRouter } from 'react-router-dom';
import { MenuContext } from '../../containers/App/Provider';

function FichaExercise({ titleExercise,value, col, img, location, history }) {
    const classes = useStyles();
    const [, , habilidad, , dificultad, ] = useContext(MenuContext);

    function handleClick() {
        history.push("/exercise?id="+habilidad.value+ "?id="+value+"?diffcult="+dificultad);
    }

    return (
        <div className={classes.container +" animate__animated animate__zoomIn"} style={{ background: col }} data-value={location.pathname}>
            <div className={classes.content} onClick={handleClick}>
                <img className={classes.img} src={img} alt="imagen del ejercicio" />
                <h1 className={classes.title}>{titleExercise}</h1>
            </div>
        </div>
    );
}

const useStyles = makeStyles(theme => ({
    container: {
        width: '15%',
        height: '100%',
        padding: '0.5em',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
    },
    content: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',

        '&:hover': {
            cursor: 'pointer',
        },
    },
    img: {
        marginRight: '7%',
        height: '10em',
    },
    title: {
        margin: '0',
        marginTop: '1em',
        padding: '0.5em',
        fontSize: '1.3vw',
        color: colors.white,
    },
}));

export default withRouter(FichaExercise);