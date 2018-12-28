import { votePost, savePost } from '../utils/PostsApi'
import { showLoading, hideLoading } from 'react-redux-loading'

export const RECIVE_POSTS = 'RECIVE_POSTS'
export const RECIVE_POST = 'RECIVE_POST'
export const ADD_POST = 'ADD_POST'
export const TOGGLE_POST = 'TOGGLE_POST'
export const RECIVE_POSTS_CATEGORY = 'RECIVE_POSTS_CATEGORY'

export function recivePosts(posts) {
    return {
        type: RECIVE_POSTS,
        posts
    }
}

export function recivePost(post) {
    return {
        type: RECIVE_POST,
        post
    }
}

function addPost(post) {
    return {
        type: ADD_POST,
        post
    }
}

export function handleAddPost(post){
    return (dispatch)=>{
        dispatch(showLoading)
        return savePost(post)
        .then ( (post) => dispatch(addPost(post)) )
        .then(()=> dispatch(hideLoading))
    }
}

function togglePost({id, hasLiked}) {
    return {
        type: TOGGLE_POST,
        id,
        hasLiked
    }
}

export function handleTogglePost(info) {
    return (dispatch) =>{
        dispatch(togglePost(info))
        return votePost(info.id,info.hasLiked)
        .catch((e)=>{
            console.warn('Error in handleTogglePost:',e)
            dispatch(togglePost(info))
            alert('The was an error liking the post, Try again.')
        })
    }
}
 