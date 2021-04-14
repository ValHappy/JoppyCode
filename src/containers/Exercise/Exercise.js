import React, { useState, useContext } from 'react';
import { makeStyles } from '@material-ui/core';
import colors from '../../config/colors';
import Btn from '../../components/General/Btn';
import Instructions from '../../components/General/Instructions';
import Nonogram from '../../components/Nonogram/Nonogram';
import Match3 from '../../components/Match3/Match3';
import { MenuContext } from '../../containers/App/Provider';

function Exercise() {
    const classes = useStyle();
    const [, , habilidad, , dificultad] = useContext(MenuContext);

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
        console.log('aqui se abre');
    };

    const handleClose = () => {
        setOpen(false);
    };

    const selectGame = () => {
        switch (habilidad.value) {
            case "abstraccion":
            return <Match3 difficult={dificultad} />;
                break;

            case "depuracion":
            return <Nonogram difficult={dificultad} />;
                break;
        }
    }

    return (
        <div className={classes.container}>
            <div className={classes.content}>
                <h1>Titulo</h1>
                <h3>Subtitulo</h3>
                <p className={classes.text}>Lorem ipsum dolor sit amet consectetur, adipiscing elit mi quisque laoreet felis, gravida duis nascetur sagittis. Molestie rutrum pulvinar vel nostra at aenean cursus, viverra blandit morbi nascetur tincidunt fermentum feugiat</p>
                <Btn text="Instrucciones" onClick={handleClickOpen} />
                <Instructions open={open} handleClose={handleClose} />
            </div>
            <div className={classes.exercise} id="exercise">
                {selectGame()}
            </div>

        </div>
    );
}

const useStyle = makeStyles(() => ({
    container: {
        margin: 0,
        padding: 0,
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    content: {
        margin: 0,
        padding: '1em',
        width: '40%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',

    },
    text: {
        textAlign: 'center',
    },
    exercise: {
        margin: 0,
        padding: '1em',
        width: '60%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    }
}));

export default Exercise;