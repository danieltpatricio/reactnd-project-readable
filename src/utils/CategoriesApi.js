import  {api,headers} from './ConfigApi'

// GET /categories (Get all of the categories available for the app. List is found in `categories.js`. Feel free to extend this list as you desire.) 
export const getAllCategories = () => 
  fetch(`${api}/categories`, { headers })
    .then(res => res.json())
    .then(data => data.categories)
    .catch(error => console.log(error))