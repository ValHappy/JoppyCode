import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { MenuContext } from '../../containers/App/Provider';
import colors from '../../config/colors';
// Style guide


function MenuBar() {
    const classes = useStyles();
    const [auth, setAuth] = React.useState(true);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const [, , , , , , , , isLogged] = useContext(MenuContext);
    const handleChange = (event) => {
        setAuth(event.target.checked);
    };

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className={classes.profile}>
            {auth && (
                <div className={classes.container}>
                    <IconButton
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleMenu}
                        style={{ color: colors.blue }}
                    >
                        <label className={classes['profile--label']}>{isLogged.name}</label>
                        <AccountCircle fontSize="large" />
                    </IconButton>

                    <Menu
                        className={classes.menu}
                        id="menu-appbar"
                        anchorEl={anchorEl}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        open={open}
                        onClose={handleClose}
                    >
                        <MenuItem onClick={handleClose}>Username</MenuItem>
                        <MenuItem onClick={handleClose}>My account</MenuItem>
                        <MenuItem onClick={handleClose}>Logout</MenuItem>
                    </Menu>
                </div>
            )}
        </div>
    );
}

const useStyles = makeStyles((theme) => ({
    profile: {
        width: '100%',
        display: 'flex',
        justifyContent: 'flex-end',
        fontSize: "0.7vw",
    },
    'profile--label': {
        marginRight: '0.8vw',
    },
    container: {
        width: '22%',
        margin: '0',
        padding: '0,5em',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    menuButton: {
        marginRight: theme.spacing(3),
    },
    menu: {
        marginTop: '3em',
        marginLeft: '-1em',
    },
    switch: {
        paddingTop: "1em",
        color: colors.black,
    }
}));

export default MenuBar;