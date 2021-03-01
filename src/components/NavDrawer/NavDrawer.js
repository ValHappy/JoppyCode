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

    function handleChange(event, newValue) {
        props.history.push(newValue);
        console.log('se cambio');
        console.log(event.value);
        console.log(event.newValue);
    }
    function handleClick(event, newValue) {
        console.log('se clcikea');
        console.log(event);
        console.log(event.value);
        console.log(event.newValue);
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

            <List value={props.location.pathname} onChange={handleChange} onClick={handleClick}>

                <ListItem button key={"Home"} value="/" onClick={handleClick}>
                    <ListItemIcon value="/"> <HomeRounded value="/" /> </ListItemIcon>
                    <ListItemText primary="Home" value="/" />
                </ListItem>

                <ListItem button key={"Pet"} >
                    <ListItemIcon> <PetsRounded /> </ListItemIcon>
                    <ListItemText primary="Pet" value="/Pet" />
                </ListItem>

                <ListItem button key={"Progress"} >
                    <ListItemIcon> <TimelineRounded /> </ListItemIcon>
                    <ListItemText primary="Progress" value="/Progress" />
                </ListItem>
                
                <ListItem button key={"Skills"} >
                    <ListItemIcon> <ComputerRounded /> </ListItemIcon>
                    <ListItemText primary="Skills" value="/Skills" />
                </ListItem>

                <ListItem button key={"Test"} >
                    <ListItemIcon> <SchoolRounded /> </ListItemIcon>
                    <ListItemText primary="Test" value="/Test" />
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