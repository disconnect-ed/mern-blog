import React, {FC} from 'react';
import {Button, Divider, makeStyles, Toolbar, Typography} from "@material-ui/core";
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const useStyles = makeStyles(theme => ({
    title: {
        flexGrow: 1
    },
    tagline: {
        fontSize: 20,
        textTransform: 'uppercase',
        justifyContent: 'center',
        fontFamily: 'Montserrat'
    }
}))

const Header: FC = () => {
    const classes = useStyles()
    return (
        <>
            <Toolbar>
               <IconButton color='inherit'>
                    <MenuIcon/>
               </IconButton>
                <Typography className={classes.title} variant="h6">
                    MERN Blog
                </Typography>
                {/*<IconButton color='inherit'>*/}
                {/*    <AccountCircleIcon/>*/}
                {/*</IconButton>*/}
                <div>
                    <Button>Регистрация</Button>
                    <Button>Войти</Button>
                </div>
            </Toolbar>
            <Divider/>
            <Toolbar className={classes.tagline}>Express your emotions through words</Toolbar>
        </>
    );
};

export default Header;