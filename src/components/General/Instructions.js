import React from 'react';
import { Dialog, DialogActions, DialogContent, makeStyles, TextField } from '@material-ui/core';
import Btn from '../General/Btn';
import { withRouter } from 'react-router-dom';
import colors from '../../config/colors';
import robo from './../../assets/img/robot.png';

function Instructions({ handleClose, open, img, info }) {

    const classes = useStyle();

    return (
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" maxWidth="md">
            <h1 className={classes.title}>Instrucciones</h1>

            <DialogContent className={classes.container}>
                <p className={classes.text}>
                    {info.instru}
                </p>
                <img className={classes.img} src={info.instruImg} alt="Imagen explicativa del ejercicio" />
            </DialogContent>
        </Dialog>
    );
}

const useStyle = makeStyles((theme) => ({
    title: {
        marginTop: '1em',
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