import React from 'react';
import { Button, makeStyles } from '@material-ui/core';
import { ColorLensRounded, ContactSupportRounded, SmsRounded, SportsEsportsRounded } from '@material-ui/icons';
import colors from '../../config/colors';
import JoppyConejo from '../../assets/img/Joppy/Joppy.png';

function Pet() {
    const classes = useStyles();

    return (
        <div className={classes.pet}>
            <div className={classes.container}>
                <h1 className={classes.title + " animate__animated animate__slideInDown"}>JOPPY</h1>
            </div>
            <div className={classes.petContainer}>
                <img className={classes.Joppy + " animate__animated animate__slideInDown"} src={JoppyConejo} alt="Joppy el Conejo" />
            </div>
            <div className={classes.content + " animate__animated animate__slideInDown"}>
                <Button
                    className={classes.btn}
                    color="secondary"F
                   >
                    <SportsEsportsRounded fontSize="large"  style={{color: colors.white}}/>
                </Button>

                <Button
                    className={classes.btn}
                    color="secondary"F
                    >
                    <ContactSupportRounded fontSize="large"  style={{color: colors.white}}/>
                </Button>

                <Button
                    className={classes.btn}
                    color="secondary"F
                    >
                    <SmsRounded fontSize="large"  style={{color: colors.white}}/>
                </Button>

                <Button
                    className={classes.btn}
                    color="secondary"F
                    >
                    <ColorLensRounded fontSize="large"  style={{color: colors.white}}/>
                </Button>
            </div>
        </div>
    );
}

const useStyles = makeStyles(theme => ({
    pet: {
        width: '100%',
        height: '90%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        width: '100%',
        height: '10%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: '1.3vw',
    },
    petContainer: {
        width: '100%',
        height: '60%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    Joppy: {
        margin: 0,
        marginRight: '7%',
        padding: 0,
        height: '95%',
    },
    content: {
        width: '100%',
        height: '20%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    btn: {
        margin: '1em',
        padding: '1em',
        background: colors.pink,
        borderRadius: '5em',
    }
}));

export default Pet;