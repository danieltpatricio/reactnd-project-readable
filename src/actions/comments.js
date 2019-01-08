import { saveComment, voteComment, delComment, updateComment } from '../utils/CommentsApi'

export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS'
export const ADD_COMMENT = 'ADD_COMMENT'
export const EDIT_COMMENT = 'EDIT_COMMENT'
export const TOGGLE_COMMENT = 'TOGGLE_COMMENT'
export const DELETE_COMMENT = 'DELETE_COMMENT'

export function receiveComments(comments) {
    return {
        type: RECEIVE_COMMENTS,
        comments
    }
}


function addComment(comment) {
    return {
        type: ADD_COMMENT,
        comment
    }
}

export function handleAddComment(comment){
    return (dispatch)=>{
        return saveComment(comment)
        .then( (comment) => dispatch(addComment(comment)) )
    }
}

function toggleComment({id, hasLiked}) {
    return {
        type: TOGGLE_COMMENT,
        id,
        hasLiked
    }
}

export function handleToggleComment(info) {
    return (dispatch) =>{
        dispatch(toggleComment(info))
        return voteComment(info.id,info.hasLiked)
        .catch((e)=>{
            console.warn('Error in handleToggleComment:',e)
            dispatch(toggleComment(info))
            alert('The was an error liking the comment, Try again.')
        })
    }
}

function deleteComment(id) {
    return {
        type: DELETE_COMMENT,
        id,
    }
}

export function handleDeleteComment(id) {
    return (dispatch) =>{
        dispatch(deleteComment(id))
        return delComment(id)
        .catch((e)=>{
            console.warn('Error in handleDeleteComment:',e)
            dispatch(deleteComment(id))
            alert('The was an error delete the comment, Try again.')
        })
        
    }
}

function editComment(comment) {
    return {
        type: EDIT_COMMENT,
        comment,
    }
}

export function handleEditComment(comment) {
    return (dispatch) =>{
        dispatch(editComment(comment))
        return updateComment(comment)
        .catch((e)=>{
            console.warn('Error in handleEditComment:',e)
            dispatch(editComment(comment))            
            alert('The was an error delete the comment, Try again.')
        })
    }
}