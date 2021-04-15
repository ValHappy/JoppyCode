import React from 'react';
import { makeStyles } from '@material-ui/core';
import colors from '../../config/colors';
import JoppyConejo from '../../assets/img/Joppy.png';

function Home() {
    const classes = useStyles();

    return (
        <div className={classes.home}>
            <div className={classes.container}>
                <h1 className={classes.title + " animate__animated animate__slideInDown"}>Aprendamos Juntos</h1>
                <p className={classes.paragraph + " animate__animated animate__slideInDown"}> Soy Joppy y te acompañaré en esta aventura de programar ¡Vamos a divertirnos!.</p>
            </div>
            <div className={classes.content}>
                <img className={classes.Joppy} src={JoppyConejo} alt="Joppy el Conejo" />
            </div>
        </div>
    );
}

const useStyles = makeStyles(theme => ({
    home: {
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        width: '40%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    title: {
        margin: 0,
        padding: 0,
        fontSize: '2.5vw',
        color: colors.pink,
    },
    paragraph: {
        fontSize: '1vw'
    },
    content: {
        width: '50%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    Joppy: {
        margin: 0,
        padding: 0,
        width: '70%',
    }
}));

export default Home;