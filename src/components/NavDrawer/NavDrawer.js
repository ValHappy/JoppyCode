import React, { useContext } from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Drawer, List, Divider } from '@material-ui/core';
import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';

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

    const setIcons = (index) => {
        switch (index) {
            case 0:
                return (<HomeRounded />);
            case 1:
                return (<PetsRounded />);
            case 2:
                return (<TimelineRounded />);
            case 3:
                return (<ComputerRounded />);
            case 4:
                return (<SchoolRounded />);

            default:
                break;
        }
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
            <List>
                {['Inicio', 'Mi mascota', 'Progreso', 'Habilidades', 'Ponte a prueba'].map((text, index) => (
                    <ListItem button key={text}> <ListItemIcon>{setIcons(index)}</ListItemIcon> <ListItemText primary={text} /> </ListItem>
                ))}
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

export default NavDrawer;