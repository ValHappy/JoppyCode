import React, { useContext } from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Drawer, List, Divider } from '@material-ui/core';
import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import { withRouter } from 'react-router-dom';

//Context
import { MenuContext } from '../../containers/App/Provider';

//icons
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { HomeRounded, PetsRounded, TimelineRounded, ComputerRounded, SchoolRounded } from '@material-ui/icons';

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
                <IconButton
                    onClick={handleDrawerClose}>
                    {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                </IconButton>
            </div>

            <Divider />

            <List value={props.location.pathname} >

                <ListItem button key={"Home"} data-value="/" onClick={handleClick}>
                    <ListItemIcon value="/"> <HomeRounded /> </ListItemIcon>
                    <ListItemText primary="Inicio" />
                </ListItem>

                <ListItem button key={"Pet"} data-value="/Pet" onClick={handleClick}>
                    <ListItemIcon> <PetsRounded /> </ListItemIcon>
                    <ListItemText primary="Mi mascota" />
                </ListItem>

                <ListItem button key={"Progress"} data-value="/Progress" onClick={handleClick}>
                    <ListItemIcon> <TimelineRounded /> </ListItemIcon>
                    <ListItemText primary="Progreso" />
                </ListItem>

                <ListItem button key={"Skills"} data-value="/Skills" onClick={handleClick}>
                    <ListItemIcon> <ComputerRounded /> </ListItemIcon>
                    <ListItemText primary="Habilidades" />
                </ListItem>

                <ListItem button key={"Test"} data-value="/Test" onClick={handleClick}>
                    <ListItemIcon> <SchoolRounded /> </ListItemIcon>
                    <ListItemText primary="Ponte a prueba" />
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
}));

export default withRouter(NavDrawer);