import { votePost, savePost, delPost, updatePost } from '../utils/PostsApi';
import { showLoading, hideLoading } from 'react-redux-loading';

export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const RECEIVE_POST = 'RECEIVE_POST';
export const DELETE_POST = 'DELETE_POST';
export const EDIT_POST = 'EDIT_POST';
export const ADD_POST = 'ADD_POST';
export const TOGGLE_POST = 'TOGGLE_POST';
export const RECEIVE_POSTS_CATEGORY = 'RECEIVE_POSTS_CATEGORY';
export const ADD_COMMENT_COUNT = 'ADD_COMMENT_COUNT';
export const SUB_COMMENT_COUNT = 'SUB_COMMENT_COUNT';

export function receivePosts(posts) {
    return {
        type: RECEIVE_POSTS,
        posts
    }
}

export function receivePost(post) {
    return {
        type: RECEIVE_POST,
        post
    }
}

export function addCommentCount(id){
    return {
        type: ADD_COMMENT_COUNT,
        id
    }
}

export function subCommentCount(id){
    return {
        type: SUB_COMMENT_COUNT,
        id
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

function deletePost(id) {
    return {
        type: DELETE_POST,
        id,
    }
}

export function handleDeletePost(id) {
    return (dispatch) =>{
        dispatch(deletePost(id))
        return delPost(id)
        .catch((e)=>{
            console.warn('Error in handleDeletePost:',e)
            dispatch(deletePost(id))
            alert('The was an error delete the post, Try again.')
        })
        
    }
}
 
function editPost(post) {
    return {
        type: EDIT_POST,
        post,
    }
}

export function handleEditPost(post) {
    return (dispatch) =>{
        dispatch(editPost(post))
        return updatePost(post)
        .catch((e)=>{
            console.warn('Error in handleEditPost:',e)
            dispatch(editPost(post))            
            alert('The was an error edit the post, Try again.')
        })
    }
}