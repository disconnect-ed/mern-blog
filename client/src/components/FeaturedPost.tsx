import React from 'react';
import {Button, Card, CardActions, CardContent, makeStyles, Typography} from "@material-ui/core";

const useStyles = makeStyles({
    title: {
        fontSize: 40,
        fontFamily: 'Montserrat'
    },
    cover: {
        backgroundImage: `url(https://images.unsplash.com/photo-1615469038804-6b91aef7026f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max)`,
        backgroundPosition: "center",
        padding: "35px 25px",
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
    },
    textContainer: {
        color: "white",
    },
    btn: {}
})

const FeaturedPost = () => {
    const classes = useStyles()
    return (
        <Card className={classes.cover}>
            <CardContent className={classes.textContainer}>
                <Typography className={classes.title} gutterBottom>
                    Lorem ipsum dolor sit amet, consectetur.
                </Typography>
                <Typography variant="h5">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate dolore fugit laborum natus numquam, omnis quae sed temporibus unde!
                </Typography>
            </CardContent>
            <CardActions>
                <Button variant="text" className={classes.btn}>Read More...</Button>
            </CardActions>
        </Card>
    );
};

export default FeaturedPost;