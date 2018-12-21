import { votePost } from '../utils/PostsApi'


export const RECIVE_POSTS = 'RECIVE_POSTS'
export const TOGGLE_POST = 'TOGGLE_POST'

export function recivePosts(posts) {
    return {
        type: RECIVE_POSTS,
        posts
    }
    
}

function togglePost({id, authedUser, hasLiked}) {
    return {
        type: TOGGLE_POST,
        id,
        authedUser,
        hasLiked
    }
    
}

export function handleTogglePost(info) {
    return (dispatch) =>{
        dispatch(togglePost(info))
        return votePost(info)
        .catch((e)=>{
            console.warn('Error in handleTogglePost:',e)
            dispatch(togglePost(info))
            alert('The was an error liking the post, Try again.')
        })
    }
}
