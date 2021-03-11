import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import colors from '../../config/colors';

//variables
const btnWidth = '85%';
const btnHeigth = 45;

function Btn({onClick,text, col = colors.pink}) {
    const classes = useStyle();

    return (
        <Button onClick={onClick} className={classes.btn} variant="outlined" style={{background: col}}> {text} </Button>
    );
}

const useStyle = makeStyles((theme) => ({
    btn: {
        margin: '1.5em',
        padding: '0.5em',
        width: btnWidth,
        height: btnHeigth,
        borderRadius: '5em',
        color: colors.white,
        
        '&:hover': {
            backgroundColor: colors.white,
            borderColor: colors.pink,
            opacity: 0.7,
            boxShadow: 'none',
        },
    }
}));

export default Btn;