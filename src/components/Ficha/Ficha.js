import React from 'react';
import { Card, CardContent, makeStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import colors from '../../config/colors';

//Variables
const FichaWidth = 300;
const FichaHeight = 400;

function Ficha() {
    const classes = useStyles();

    return (
        <Card className={classes.container}>
            <CardContent className={classes.content}>

                <div className={classes.icon}>
                    <p>icon</p>
                </div>

                <h1 className={classes.title}>Titulo</h1>
                <p className={classes.desc}>Emmm</p>

                <Button
                className={classes.btn}
                variant="contained"
                disableElevation>
                    Action button
                </Button>

            </CardContent>
        </Card>
    );
}

const useStyles = makeStyles(theme => ({
    container: {
        width: FichaWidth,
        height: FichaHeight,
        display: 'flex',
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
    icon: {
        width: '5em',
        height: '5em',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: colors.pink,
        borderRadius: '1em',
    },
    title: {
        margin: '0',
        padding: '1em',
    },
    desc: {
        margin: '0',
        padding: '0,5em'
    },
    btn: {
        margin: '1em',
        padding: '0,5em',
        borderRadius: '2em',
        background: colors.pink,
    }
}));

export default Ficha;