import { makeStyles } from '@material-ui/core';
import { MailOutlineRounded, PhoneIphoneRounded } from '@material-ui/icons';
import React from 'react';

function Footer() {
    const classes = useStyle();

    return (
        <div className={classes.footer}>
            <div className={classes.container}>
                <div className={classes.content}>
                    <PhoneIphoneRounded className={classes.icon} />
                    <label>JoppyCode</label>
                </div>
                <div className={classes.content}>
                    <PhoneIphoneRounded className={classes.icon} />
                    <div className={classes.info}>
                        <label>318 272 6766</label>
                        <label>312 729 3950</label>
                    </div>
                </div>
                <div className={classes.content}>
                    <MailOutlineRounded className={classes.icon} />
                    <div className={classes.info}>
                        <label>val.happy.m@gmail.com</label>
                        <label>deirk@gmail.com</label>
                    </div>
                </div>
            </div>
            <div className={classes.social}>
                <label className={classes.red}>fb</label>
                <label className={classes.red}>ig</label>
                <label className={classes.red}>tt</label>
                <label className={classes.red}>yt</label>
                <label className={classes.red}>ms</label>
            </div>
            <div className={classes.derechos}>
                <label>JoppyCode 2021 © All rights reserved</label>
            </div>
        </div>
    );
}

const useStyle = makeStyles(() => ({
    footer: {
        width: '35%',
        padding: '0.5em',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        width: '100%',
        heigth: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
    },
    content: {
        width: '33%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    icon: {
        margin: '0.3em',
        marginRight: '1em',
        fontSize: 'small',
    },
    info: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    social: {
        width: '30%',
        heigth: '100%',
        margin: '1em',
        marginTop: '0.5em',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    derechos: {
        margin: '1em',
        marginTop: '0.5em',
    },
}));

export default Footer;