import { getInitialData } from '../utils/ReadableApi'
import { recivePosts } from './posts'
import { reciveCategories } from './categories'
import { setAuthedUser } from './autheduser'

export const RECEIVE_DATA = 'RECEIVE_DATA'

const user = 'GRGSb7g1BBTEhPbrwFyYf4XZEff1'

export function handleInitialData () { 
  return (dispatch) => {
    return getInitialData()
      .then(({ posts, categories }) => {
        dispatch(recivePosts(posts));
        dispatch(reciveCategories(categories));
        dispatch(setAuthedUser(user));
      });
  };
} 
