import {createTheme, withStyles} from '@material-ui/core/styles';
import React, {useEffect} from 'react';
import './style.css'
import {postApi, userApi} from "./api/api";
import {useTypedSelector} from "./hooks/useTypedSelector";
import {fetchPosts} from "./redux/actions/postsAction";
import {useActions} from "./hooks/useActions";
import {Box, Grid, ThemeProvider} from "@material-ui/core";
import Container from "@material-ui/core/Container";
import Header from "./components/Header";
import FeaturedPost from "./components/FeaturedPost";
import PostCard from "./components/PostCard";
import Footer from "./components/Footer";

const darkTheme = createTheme({
    palette: {
        type: 'dark',
    },
});

function App() {
    const {posts} = useTypedSelector(state => state.posts)
    const {fetchPosts, fetchPost} = useActions()
    useEffect(() => {
        fetchPosts()
    }, [])
    return (
        <ThemeProvider theme={darkTheme}>
            <Container>
                <Header/>
                <FeaturedPost/>
                <br/>
                <Grid container spacing={4}>
                    {posts.map(post => {
                        return <PostCard text={post.text}
                                         title={post.title}
                                         image={post.imagePath}
                                         key={post._id}/>
                    })}
                </Grid>
                {/*<Grid container spacing={5}*/}
                {/*      // className={classes.mainGrid}*/}
                {/*>*/}
                {/*    /!*<Main/>*!/*/}
                {/*</Grid>*/}
                <Footer/>
            </Container>
        </ThemeProvider>
    );
}

export default App;
