import { getAllPosts } from './PostsApi'
import { getAllCategories } from './CategoriesApi'

export function getInitialData (){
    return Promise.all([
        getAllCategories(),
        getAllPosts(),
    ]).then(([categories, posts]) => ({
        categories,
        posts,
    }))
}

