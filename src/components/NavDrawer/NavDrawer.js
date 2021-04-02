import React, { useContext } from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Drawer, List, Divider } from '@material-ui/core';
import { ListItem, ListItemIcon } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import { withRouter } from 'react-router-dom';

//Context
import { MenuContext } from '../../containers/App/Provider';

//icons
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { HomeRounded, PetsRounded, TimelineRounded, ComputerRounded, SchoolRounded } from '@material-ui/icons';
import colors from '../../config/colors';
import Logo from '../General/Logo';

// Variables
const drawerWidth = 240;

function NavDrawer(props) {
    const classes = useStyles();
    const theme = useTheme();
    const [openMenu, setState] = useContext(MenuContext);

    const handleDrawerClose = () => {
        setState(false);
    };

    function handleClick({ currentTarget }, newValue) {
        props.history.push(currentTarget.dataset.value);
    }


    return (
        <Drawer
            variant="permanent"
            className={clsx(classes.drawer, {
                [classes.drawerOpen]: openMenu,
                [classes.drawerClose]: !openMenu,
            })}
            classes={{
                paper: clsx({
                    [classes.drawerOpen]: openMenu,
                    [classes.drawerClose]: !openMenu,
                }),
            }}
        >
            <div className={classes.toolbar}>
                <div className={classes.logo}>
                    <Logo />
                </div>
                <div className={classes.iconContent}>
                    <IconButton
                        onClick={handleDrawerClose}>
                        {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                    </IconButton>
                </div>
            </div>

            <Divider />

            <List value={props.location.pathname} >

                <ListItem className={classes.item} button key={"Home"} data-value="/" onClick={handleClick}>
                    <ListItemIcon className={classes.icon}> <HomeRounded /> </ListItemIcon>
                    <label > Inicio</label>
                </ListItem>

                <ListItem className={classes.item} button key={"Pet"} data-value="/Pet" onClick={handleClick}>
                    <ListItemIcon className={classes.icon}> <PetsRounded /> </ListItemIcon>
                    <label > Mi mascota</label>
                </ListItem>

                <ListItem className={classes.item} button key={"Progress"} data-value="/Progress" onClick={handleClick}>
                    <ListItemIcon className={classes.icon}> <TimelineRounded /> </ListItemIcon>
                    <label > Progreso</label>
                </ListItem>

                <ListItem className={classes.item} button key={"Skills"} data-value="/Skills" onClick={handleClick}>
                    <ListItemIcon className={classes.icon}> <ComputerRounded /> </ListItemIcon>
                    <label > Habilidades</label>
                </ListItem>

                <ListItem className={classes.item} button key={"Test"} data-value="/Test" onClick={handleClick}>
                    <ListItemIcon className={classes.icon}> <SchoolRounded /> </ListItemIcon>
                    <label > Ponte a prueba</label>
                </ListItem>

            </List>
            <Divider />

        </Drawer>
    );
}

const useStyles = makeStyles((theme) => ({
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',

    },
    drawerOpen: {
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerClose: {
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: theme.spacing(7) + 1,
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9) + 1,
        },
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar,
    },
    item: {
        '&:hover': {
            color: colors.pink,
        },
    },
    icon: {
        '&:hover': {
            color: colors.pink,
        },
    },
    logo: {
        width: '100%',
        heigth: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    iconContent: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
}));

export default withRouter(NavDrawer);