import React, { useContext } from 'react';
import clsx from 'clsx';
import { AppBar, Toolbar, IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import MenuBar from '../../components/MenuBar/menuBar';

//Context
import { MenuContext } from '../../containers/App/Provider';

// Icons
import MenuIcon from '@material-ui/icons/Menu';

// Style guide
import colors from '../../config/colors';

// Variables
const drawerWidth = 240;

function NavBar() {
    const classes = useStyles();
    const [openMenu, setState] = useContext(MenuContext);

    const handleDrawerOpen = () => {
        setState(true);
    };

    return (
        <AppBar
            position="fixed"
            className={clsx(classes.appBar, {
                [classes.appBarShift]: openMenu,
            })}
        >
            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    onClick={handleDrawerOpen}
                    className={clsx(classes.menuButton, {
                        [classes.hide]: openMenu,
                    })}
                >
                    <MenuIcon />
                </IconButton>
                <MenuBar />
            </Toolbar>
        </AppBar>
    );
}

const useStyles = makeStyles((theme) => ({
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        background: colors.white,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: 36,
        color: colors.pink,
    },
    hide: {
        display: 'none',
    },
}));

export default NavBar;