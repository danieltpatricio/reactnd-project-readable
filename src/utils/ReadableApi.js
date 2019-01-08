import { getAllPosts, getPost } from './PostsApi'
import { getAllCategories } from './CategoriesApi'
import { authedUser } from './AuthedUsers'
import { getAllCommentsPost } from './CommentsApi'

export const getInitialData = ()=>{
    return Promise.all([
        getAllCategories(),
        getAllPosts(),
        authedUser(),
    ]).then(([ categories, posts, user, ]) => ({
        categories,
        posts,
        user,
    }))
}

export const getInitialPostPage = (id)=>{
    return Promise.all([
        getPost(id)
        .catch((error)=>{
            console.warn('Error in getInitialPostPage:',error)
        }),
        getAllCommentsPost(id),
    ]).then(([ post, comments ]) => ({
        post,
        comments,
    }))
}
