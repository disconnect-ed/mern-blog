import {PostsAction, PostsActionTypes, PostState} from "../../models/post";


const initialState: PostState = {
    posts: [],
    post: {},
    error: null,
    loading: false
}

export const postReducer = (state = initialState, action: PostsAction):PostState => {
    switch (action.type) {
        case PostsActionTypes.FETCH_POSTS:
            return {
                ...state,
                loading: true,
                error: null
            }
        case PostsActionTypes.FETCH_POSTS_SUCCESS:
            return {
                ...state,
                posts: action.payload,
                loading: false,
                error: null
            }
        case PostsActionTypes.FETCH_POST_SUCCESS:
            return {
                ...state,
                post: action.payload,
                loading: false,
                error: null
            }
        default:
            return state
    }
}