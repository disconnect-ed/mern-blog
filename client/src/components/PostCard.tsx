import {Card, CardActionArea, CardContent, CardMedia, Grid, Hidden, makeStyles, Typography} from '@material-ui/core';
import React, {FC} from 'react';

const useStyles = makeStyles({
    card: {
        display: 'flex'
    },
    cardDetails: {
        flex: 1
    },
    cardMedia: {
        width: 160
    }
})

interface PostCardProps {
    title: string
    image?: string
    text: string
}

const PostCard: FC<PostCardProps> = ({title, image, text}) => {
    const classes = useStyles()
    return (
        <Grid item xs={12} md={6}>
            <CardActionArea component='a' href='#'>
                <Card className={classes.card}>
                    <div className={classes.cardDetails}>
                        <CardContent>
                            <Typography component='h2' variant='h5'>
                                Lorem ipsum dolor sit amet, consectetur.
                            </Typography>
                            <Typography variant="subtitle1" color="textSecondary">
                                Dec 12
                            </Typography>
                            <Typography variant="subtitle1" paragraph>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate dolore fugit laborum natus numquam, omnis quae sed temporibus unde!
                            </Typography>
                            <Typography variant="subtitle1" style={{color: 'skyblue'}}>
                                Continue reading...
                            </Typography>
                        </CardContent>
                    </div>
                    <Hidden xsDown>
                        <CardMedia className={classes.cardMedia}
                                   image={image || 'https://www.yildizgaz.com.tr/Assets/images/no-img.jpg'}
                        />
                    </Hidden>
                </Card>
            </CardActionArea>
        </Grid>
    );
};

export default PostCard;