import React from 'react';
import { makeStyles } from '@material-ui/core';

function Home() {
    const classes = useStyles();

    return (
        <div className={classes.home}>
            <h1 className={classes.title  + " " + "animate__animated animate__slideInDown"}>ESTO ES MI HOMEEEEEEEEEEEEEE</h1>
            <p className={classes.paragraph  + " " + "animate__animated animate__slideInDown"}> Lorem ipsum dolor sit amet consectetur adipiscing elit parturient varius nullam, malesuada pellentesque vitae cum orci ultrices porttitor vulputate nec, sodales taciti tempor turpis accumsan feugiat nam sem nibh. Erat diam sodales turpis nulla vehicula phasellus dignissim suspendisse potenti consequat netus, ridiculus donec nascetur taciti non dictum conubia lectus litora. Quis vitae dui in montes vestibulum vel, quam fermentum eros sociosqu ultrices felis nibh, pretium erat habitasse massa a.</p>
        </div>
    );
}

const useStyles = makeStyles(theme => ({
    title: {
        fontSize: '1.3vw',
    },
    paragraph: {
        fontSize: 'o.8vw'
    }
}));

export default Home;