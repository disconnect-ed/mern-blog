import React, {FC} from 'react';
import {Divider, makeStyles, Toolbar, Typography} from "@material-ui/core";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

const useStyles = makeStyles({
    footer: {
        marginTop: 20,
    },
    link: {
        color: 'white'
    },
    icon: {
        marginRight: 15
    },
    content: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',

    },
    date: {}
})


const Footer: FC = () => {
    const classes = useStyles()
    const currentYer = new Date().getFullYear()
    return (
        <footer className={classes.footer}>
            <Divider/>
            <Toolbar className={classes.content}>
                <Typography className={classes.date}>
                    © {currentYer} Ruslan Dolgopol
                </Typography>
                <div>
                    <a href="https://www.linkedin.com/in/ruslan-dolgopol/"
                       target='_blank' className={classes.link}>
                        <LinkedInIcon className={classes.icon} fontSize='large'/>
                    </a>
                    <a href="https://github.com/disconnect-ed"
                       target='_blank' className={classes.link}>
                        <GitHubIcon fontSize='large'/>
                    </a>
                </div>
            </Toolbar>
        </footer>
    );
};

export default Footer;