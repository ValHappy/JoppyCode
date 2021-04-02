import React from 'react';
import { Dialog, DialogActions, DialogContent, makeStyles, TextField } from '@material-ui/core';
import Btn from '../General/Btn';
import { withRouter } from 'react-router-dom';
import colors from '../../config/colors';
import robo from '../../assets/img/robot.png';

function Instructions({ handleClose, open, img }) {

    const classes = useStyle();

    return (
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" maxWidth="md">
            <h1 className={classes.title}>Instrucciones</h1>

            <DialogContent className={classes.container}>
                <p className={classes.text}>
                    Lorem ipsum dolor sit amet consectetur adipiscing elit lectus sapien, cubilia mattis bibendum suscipit euismod metus proin convallis phasellus nisi, class fermentum id magnis accumsan vitae netus ad. Hendrerit fusce vestibulum placerat per primis mattis hac nostra.
                </p>
                <img className={classes.img} src={robo} alt="Imagen explicativa del ejercicio" />
                <p className={classes.text}>
                    Lorem ipsum dolor sit amet consectetur adipiscing elit lectus sapien, cubilia mattis bibendum suscipit euismod.
                </p>
            </DialogContent>
        </Dialog>
    );
}

const useStyle = makeStyles((theme) => ({
    title: {
        marginTop: '2em',
        color: colors.pink,
        textAlign: 'center',
    },
    container: {
        margin: 0,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        margin: '0',
        padding: '1em',
        color: colors.colortext,
        textAlign: 'center',
    },
    img: {
        width: '50%',
    }
}));

export default withRouter(Instructions);