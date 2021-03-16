import React from 'react';
import { Card, CardContent, makeStyles } from '@material-ui/core';
import Btn from '../General/Btn';
import { withRouter } from 'react-router-dom';

function Ficha({ icon, skill, desc, col, location, history }) {
    const classes = useStyles();

    function handleClick() {
        history.push("/exercises");
    }

    return (
        <Card className={classes.container + " " + "animate__animated animate__zoomIn"} >
            <CardContent className={classes.content} data-value={location.pathname}>
                <div className={classes.icon} style={{ background: col }}>
                    {icon}
                </div>
                <h1 className={classes.title}>{skill}</h1>
                <p className={classes.desc}>{desc}</p>
                <Btn text={"Ir ahora"} col={col} onClick={handleClick}/>
            </CardContent>
        </Card>
    );
}

const useStyles = makeStyles(theme => ({
    container: {
        width: '20%',
        height: '100%',
        padding: '0.5em',
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
        width: '4em',
        height: '4em',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        //background: colors.pink,
        borderRadius: '1em',
    },
    title: {
        margin: '0',
        marginTop: '1em',
        padding: '0.5em',
        fontSize: '1.3vw',
    },
    desc: {
        margin: '0',
        marginBottom: '2em',
        padding: '0,5em',
        textAlign: 'center',
        fontSize: '1vw',
    },
}));

export default withRouter(Ficha);