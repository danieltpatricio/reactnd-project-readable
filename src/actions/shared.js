import { getInitialData } from '../utils/ReadableApi'
import { recivePosts } from './posts'
import { reciveCategories } from './categories'
import { setAuthedUser } from './autheduser'
import { showLoading, hideLoading } from 'react-redux-loading'

export const RECEIVE_DATA = 'RECEIVE_DATA'

const user = 'GRGSb7g1BBTEhPbrwFyYf4XZEff1'

export function handleInitialData () { 
  return (dispatch) => {
    dispatch(showLoading())
    return getInitialData()
      .then(({ posts, categories }) => {
        dispatch(setAuthedUser(user))
        dispatch(recivePosts(posts))
        dispatch(reciveCategories(categories))
        dispatch(hideLoading())
      })
  }
} 
