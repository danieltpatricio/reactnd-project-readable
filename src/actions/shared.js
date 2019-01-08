import { getInitialData, getInitialPostPage } from '../utils/ReadableApi'
import { receivePosts, receivePost } from './posts'
import { receiveCategories } from './categories'
import { receiveComments } from './comments'
import { setAuthedUser } from './autheduser'
import { showLoading, hideLoading } from 'react-redux-loading'

export const RECEIVE_DATA = 'RECEIVE_DATA'
export const RECEIVE_POST_DATA = 'RECEIVE_POST_DATA'

export function handleInitialData () { 
  return (dispatch) => {
    dispatch(showLoading())
    return getInitialData()
    .then(({ posts, categories, user }) => {
      dispatch(setAuthedUser(user))
      dispatch(receivePosts(posts))
      dispatch(receiveCategories(categories))
      dispatch(hideLoading())
    })
  }
} 

export function handleInitPostPage(id) {
  return (dispatch) =>{
    dispatch(showLoading())
    return getInitialPostPage(id) 
    .then(({ post, comments}) => {
      post && dispatch(receivePost(post))
      post && dispatch(receiveComments(comments))
      dispatch(hideLoading())
    })
    .catch((e)=>{
      console.warn('Error in handleInitPostPage:',e)
      dispatch(hideLoading())
    })
  }
  
}