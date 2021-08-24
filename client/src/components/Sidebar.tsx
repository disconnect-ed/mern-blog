import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles((theme) => ({
    sidebarAboutBox: {
        padding: theme.spacing(2),
    },
    sidebarSection: {
        marginTop: theme.spacing(3),
    },
}));

const Sidebar = () => {
    const classes = useStyles();

    return (
        <Grid item xs={12} md={4}>

        </Grid>
    );
};

export default Sidebar;