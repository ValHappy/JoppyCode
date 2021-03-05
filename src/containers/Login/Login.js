import React from 'react';
import { makeStyles, TextField } from '@material-ui/core';
import Logo from '../../components/General/Logo';
import colors from '../../config/colors';
import Btn from '../../components/General/Btn';

function Login() {
    const classes = useStyle();

    return (
        <div className={classes.login}>
            <div className={classes.img}>

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
        background: colors.blue,
    },
    logo: {

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