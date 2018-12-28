import { getInitialData, getInitPostPage } from '../utils/ReadableApi'
import { recivePosts, recivePost } from './posts'
import { reciveCategories } from './categories'
import { setAuthedUser } from './autheduser'
import { reciveComments } from './comments'
import { showLoading, hideLoading } from 'react-redux-loading'

export const RECEIVE_DATA = 'RECEIVE_DATA'


export function handleInitialData () { 
  return (dispatch) => {
    dispatch(showLoading())
    return getInitialData()
      .then(({ posts, categories, user, comments }) => {
        dispatch(setAuthedUser(user))
        dispatch(recivePosts(posts))
        dispatch(reciveCategories(categories))
        dispatch(reciveComments(comments))
        dispatch(hideLoading())
      })
  }
} 

export function handleInitPostPage(id) {
  return (dispatch) =>{
    dispatch(showLoading())
    return getInitPostPage(id)
      .then( ({ post, comments  }) => {
        dispatch(recivePost(post)) 
        dispatch(reciveComments(comments))
        dispatch(hideLoading())
      })
  }
  
}