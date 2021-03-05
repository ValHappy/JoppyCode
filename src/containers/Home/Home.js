import React from 'react';
import { makeStyles } from '@material-ui/core';

function Home() {
    const classes = useStyles();

    return (
        <div className={classes.home}>
            <h1>ESTO ES MI HOMEEEEEEEEEEEEEE</h1>
        </div>
    );
}

const useStyles = makeStyles(theme => ({

}));

export default Home;