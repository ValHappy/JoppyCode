import React, { useContext, useState } from 'react';
import { Button, makeStyles } from '@material-ui/core';
import { ColorLensRounded, ContactSupportRounded, SmsRounded, SportsEsportsRounded } from '@material-ui/icons';
import colors from '../../config/colors';
import JoppyConejo from '../../assets/img/Joppy/Joppy.png';
import advicesImg from '../../assets/img/advices.png';
import {advices} from '../../const/advicesConst';
import { useHistory } from 'react-router';
import { MenuContext } from '../App/Provider';
import { abstra} from '../../const/exercisesConst';

function Pet() {
    const classes = useStyles();
    const [adviceIndex, setAdviceIndex] = useState(0)
    const [isSayingAdvices, setIsSayingAdvices] = useState(false);
    const history = useHistory();
    const [, , habilidad, setHabilidad, dificultad, setDificultad, , setInfoExcerse] = useContext(MenuContext);
    
    const handleClick = () => {
        if (!isSayingAdvices) {
            setTimeout(timeout=> setIsSayingAdvices(false), 5000)
        }
        const r = Math.floor(Math.random()*3);
        setAdviceIndex(r);
        setIsSayingAdvices(true);
    }
    const handleClickGame = ()=>{
        setInfoExcerse(abstra[0]);
        setHabilidad({value: 'abstraccion'});
        setDificultad('basico');
        history.push('/exercise?id=abstraccion?id=0?diffcult=basico');
    }

    return (

        <div className={classes.pet}>
            <div className={classes.container}>
                <h1 className={classes.title + " animate__animated animate__slideInDown"}>JOPPY</h1>
            </div>
            <div className={classes.petContainer}>
                <img className={classes.Joppy + " animate__animated animate__slideInDown"} src={JoppyConejo} alt="Joppy el Conejo" />
                {isSayingAdvices && <div className={classes.advices}>
                    <div className={classes['advices--textcontainer']}>
                    <p className={classes['advices--text']} >
                        {advices[adviceIndex]}
                    </p>
                    </div>
                </div>}
            </div>
            <div className={classes.content + " animate__animated animate__slideInDown"}>
                <Button
                    className={classes.btn}
                    color="secondary"
                    onClick={handleClickGame}
                >
                    <SportsEsportsRounded fontSize="large" style={{ color: colors.white }} />
                </Button>

                <Button
                    className={classes.btn}
                    color="secondary"
                >
                    <ContactSupportRounded fontSize="large" style={{ color: colors.white }} />
                </Button>

                <Button
                    className={classes.btn}
                    color="secondary"
                    onClick={handleClick}
                >
                    <SmsRounded fontSize="large" style={{ color: colors.white }} />
                </Button>

                <Button
                    className={classes.btn}
                    color="secondary"
                >
                    <ColorLensRounded fontSize="large" style={{ color: colors.white }} />
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
    advices: {
        width: '15vw',
        height: '13vw',
        position: 'absolute',
        background: 'url('+advicesImg+')',
        backgroundSize: '100% auto',
        backgroundRepeat: 'no-repeat',
        right: '45vw',
        top: '6vw',
    },
    'advices--textcontainer':{
        height: '7vw',
        display: 'flex',
        flexDirection: 'columns',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        marginTop: '0.5vw',
    },
    'advices--text':{
        color: colors.black,
        margin: '1.6vw 1.1vw 1vw 1.3vw',
        fontSize: '0.9em'
    },
    btn: {
        margin: '1em',
        padding: '1em',
        background: colors.pink,
        borderRadius: '5em',

        '&:hover': {
            backgroundColor: 'none',
            borderColor: colors.blue,
            color: colors.blue,
            boxShadow: 'none',
        }
    }
}));

export default Pet;