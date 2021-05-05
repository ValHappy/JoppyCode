import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core';
import colors from '../../config/colors';
import { withRouter } from 'react-router-dom';
import { MenuContext } from '../../containers/App/Provider';

function FichaExercise({ value, col, img, location, information, handleClick}) {
    const classes = useStyles();
        

    return (
        <div className={classes.container + " animate__animated animate__zoomIn"} style={{ background: col }} data-value={location.pathname}>
            <div className={classes.content} onClick={handleClick} data-value={value}>
                <div className={classes.imgContent} data-value={value}>
                    <img className={classes.img} src={img} alt="imagen del ejercicio" data-value={value} />
                </div>
                <div className={classes.titleContent} data-value={value}>
                    <h1 className={classes.title} data-value={value}>{information.title}</h1>
                </div>
            </div>
        </div>
    );
}

const useStyles = makeStyles(theme => ({
    container: {
        width: '15%',
        height: '100%',
        margin: '0.5em',
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
    imgContent: {
        width: '100%',
        height: '80%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    img: {
        width: '50%',

    },
    titleContent: {
        width: '100%',
        height: '30%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        margin: '0',
        padding: '0.5em',
        fontSize: '1.1vw',
        textAlign: 'center',
        color: colors.white,
    },
}));

export default withRouter(FichaExercise);