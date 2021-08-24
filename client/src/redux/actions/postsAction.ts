import {Dispatch} from "redux";
import {PostsAction, PostsActionTypes} from "../../models/post";
import {postApi} from "../../api/api";

export const fetchPosts = () => {
    return async (dispatch: Dispatch<PostsAction>) => {
        try {
            dispatch({type: PostsActionTypes.FETCH_POSTS})
            const {data} = await postApi.getAllPosts()
            console.log(data)
            dispatch({type: PostsActionTypes.FETCH_POSTS_SUCCESS, payload: data})
        } catch (e) {
            console.log(e)
        }
    }
}

export const fetchPost = (id: string) => {
    return async (dispatch: Dispatch<PostsAction>) => {
        try {
            dispatch({type: PostsActionTypes.FETCH_POSTS})
            const {data} = await postApi.getPost(id)
            console.log(data)
            dispatch({type: PostsActionTypes.FETCH_POST_SUCCESS, payload: data})
        } catch (e) {
            console.log(e)
        }
    }
}