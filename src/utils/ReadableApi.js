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

export const getInitPostPage = (id)=>{
    return Promise.all([
        getPost(id),
        getAllCommentsPost(id),
    ]).then(([ post, comments ]) => ({
        post,
        comments,
    }))
}
