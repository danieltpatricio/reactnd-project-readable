import { combineReducers } from 'redux'
import { loadingBarReducer } from 'react-redux-loading'
import  posts from './posts'
import categories from './categories'
import authedUser from './authedUser'
import comments from './comments'

export default combineReducers ({
    authedUser,
    posts,
    categories,
    comments,
    loadingBar: loadingBarReducer,
},)