import React from 'react';
import { makeStyles } from '@material-ui/core';
import logo from "../../assets/img/JoppyCode.svg"

//variables
const logoWidth = 250;

function Logo() {
    const classes = useStyle();

    return (
        <img className={classes.logo} src={logo} alt="JoppyCode"></img>
    );
}

const useStyle = makeStyles((theme) => ({
    logo: {
        width: logoWidth,
        margin: '1em',
        padding: '2em',
    },
}));

export default Logo;