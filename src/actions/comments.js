import { saveComment } from '../utils/CommentsApi'
export const RECIVE_COMMENTS = 'RECIVE_COMMENTS'
export const ADD_COMMENT = 'ADD_COMMENT'
export const TOGGLE_COMMENTS = 'TOGGLE_COMMENT'




export function reciveComments(comments) {
    return {
        type: RECIVE_COMMENTS,
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
        .then ( (comment) => dispatch(addComment(comment)) )
    }
}
