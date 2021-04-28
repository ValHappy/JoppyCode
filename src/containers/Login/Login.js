import React from 'react';
import { makeStyles, TextField } from '@material-ui/core';
import Logo from '../../components/General/Logo';
import Btn from '../../components/General/Btn';
import JoppyLogin from '../../assets/img/Joppy/JoppyLogin.svg'

function Login() {
    const classes = useStyle();

    return (
        <div className={classes.login}>
            <div className={classes.img}>
                <img src={JoppyLogin} alt="Joppy greeting" />
            </div>
            <div className={classes.container}>
                <div className={classes.logo}>
                    <Logo />
                </div>
                <div className={classes.content}>
                    <TextField
                        className={classes.field}
                        id="name"
                        label="Nombres"
                        type="string"
                        variant="outlined"
                        size="medium"
                        color="secondary"
                    />
                    <TextField
                        className={classes.field}
                        id="lastname"
                        label="Apellidos"
                        type="string"
                        variant="outlined"
                        size="medium"
                        color="secondary"
                    />
                    <Btn text="Ingresar" />
                </div>
            </div>
        </div>

    );
}

const useStyle = makeStyles(() => ({
    login: {
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    img: {
        width: '50%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        width: '60%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        width: '50%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    content: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    field: {
        width: '50%',
        margin: '1em',
    },
}));

export default Login;