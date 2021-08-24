
interface PostData {
    title: string
    text: string
    imagePath: string
    _id: string
    createdAt: string
    likes: number
}

export interface PostState {
    posts: Array<PostData>
    post: PostData | {}
    error: string | null
    loading: boolean
}

export enum PostsActionTypes {
    FETCH_POSTS = 'FETCH_POSTS',
    FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS',
    FETCH_POST_SUCCESS = 'FETCH_POST_SUCCESS',
    FETCH_POSTS_ERROR = 'FETCH_POSTS'

}

interface FetchPostsAction {
    type: PostsActionTypes.FETCH_POSTS
}

interface FetchPostsSuccessAction {
    type: PostsActionTypes.FETCH_POSTS_SUCCESS
    payload: Array<PostData>
}

interface FetchPostSuccessAction {
    type: PostsActionTypes.FETCH_POST_SUCCESS
    payload: PostData
}

interface FetchPostsErrorAction {
    type: PostsActionTypes.FETCH_POSTS_ERROR
}

export type PostsAction = FetchPostsAction | FetchPostSuccessAction | FetchPostsSuccessAction
    | FetchPostsErrorAction
