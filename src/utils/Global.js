import { handleTogglePost } from '../actions/posts'

export const handleLike = ( dispatch, e, id, hasLiked) =>{
    e.preventDefault()
    dispatch(handleTogglePost({
        id: id,
        hasLiked: hasLiked,
    }))
}