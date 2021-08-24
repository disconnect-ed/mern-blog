import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from 'redux-thunk'
import {postReducer} from "./reducers/postReducer";

const rootReducer = combineReducers({
    posts: postReducer
})

export type RootState = ReturnType<typeof rootReducer>

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store