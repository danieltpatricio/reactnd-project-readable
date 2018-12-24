import { votePost, getAllPostsCategory, savePost} from '../utils/PostsApi'
import { showLoading, hideLoading } from 'react-redux-loading'

export const RECIVE_POSTS = 'RECIVE_POSTS'
export const ADD_POST = 'ADD_POST'
export const TOGGLE_POST = 'TOGGLE_POST'

function addPost(post) {
    return {
        type: ADD_POST,
        post
    }
}

export function handleAddPost(post){
    return (dispatch, getState)=>{
        const { authedUser } = getState()

        dispatch(showLoading)

        return savePost(post)
        .then ((post) => dispatch(post))
        .then(()=> dispatch(hideLoading))
    }
}


export function recivePosts(posts) {
    return {
        type: RECIVE_POSTS,
        posts
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
