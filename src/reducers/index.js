import { combineReducers } from 'redux'

import  posts from './posts'
import categories from './categories'
import authedUser from './authedUser'

export default combineReducers ({
    authedUser,
    posts,
    categories
},)