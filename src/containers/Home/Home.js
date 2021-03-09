import React from 'react';
import { makeStyles } from '@material-ui/core';

function Home() {
    const classes = useStyles();

    return (
        <div className={classes.home}>
            <h1>ESTO ES MI HOMEEEEEEEEEEEEEE</h1>
            <p> Lorem ipsum dolor sit amet consectetur adipiscing elit parturient varius nullam, malesuada pellentesque vitae cum orci ultrices porttitor vulputate nec, sodales taciti tempor turpis accumsan feugiat nam sem nibh. Erat diam sodales turpis nulla vehicula phasellus dignissim suspendisse potenti consequat netus, ridiculus donec nascetur taciti non dictum conubia lectus litora. Quis vitae dui in montes vestibulum vel, quam fermentum eros sociosqu ultrices felis nibh, pretium erat habitasse massa a.</p>
        </div>
    );
}

const useStyles = makeStyles(theme => ({

}));

export default Home;