import React, { useContext } from 'react';
import { makeStyles, TextField } from '@material-ui/core';
import Logo from '../../components/General/Logo';
import Btn from '../../components/General/Btn';
import JoppyLogin from '../../assets/img/Joppy/JoppyLogin.svg'
import { useHistory } from 'react-router';
import { MenuContext } from '../../containers/App/Provider';

function Login() {
    const classes = useStyle();
    const history = useHistory();

    const [,,,,,,,,isLogged,setIsLogged] = useContext(MenuContext);

    const onClick = () => {
        setIsLogged({name: document.getElementById("name").value + " " + document.getElementById("lastname").value, isLogged: true});
        history.replace('/home');
        
    }

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
                    <Btn text="Ingresar" onClick={onClick} />
                </div>
            </div>
        </div>

    );
}

const useStyle = makeStyles(() => ({
    login: {
        background: '#FFFFFF',
        width: '100vw',
        height: '100vh',
        position: 'absolute',
        left: 0,
        zIndex: 100,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    img: {
        width: '50%',
        height: '100%',
        display: 'flex',
    },
    logo: {
        width: '60%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
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
        width: '60%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    field: {
        width: '50%',
        marginBottom: '1em',
    },
}));

export default Login;