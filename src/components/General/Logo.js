import React from 'react';
import { makeStyles } from '@material-ui/core';
import logo from "./../../assets/logo/JoppyCode.svg";

function Logo() {
    const classes = useStyle();

    return (
        <img className={classes.logo} src={logo} alt="JoppyCode"></img>
    );
}

const useStyle = makeStyles((theme) => ({
    logo: {
        margin: 0,
        padding: '0.5em',
        width: '50%',
    },
}));

export default Logo;