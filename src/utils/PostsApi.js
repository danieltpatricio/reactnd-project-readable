import { api, headers } from './ConfigApi';

// GET /:category/posts (Get all of the posts for a particular category).
export const getAllPostsCategory = (category) =>
fetch(`${api}/${category}/posts`, { headers })
  .then(res => res.json())
  .then(data => data.posts)
  .catch(error => console.log(error))

// GET /posts (Get all of the posts. Useful for the main page when no category is selected). 
export const getAllPosts = () =>
  fetch(`${api}/posts`, { headers })
    .then(res => res.json())
    .catch(error => console.log(error))

// POST /posts	(Add a new post).	
// id - UUID should be fine, but any unique id will work 
// timestamp - [Timestamp] Can in whatever format you like, you can use Date.now() if you like. 
// title - [String] 
// body - [String] 
// author - [String] 
// category - Any of the categories listed in categories.js. Feel free to extend this list as you desire.
export const addPost = (id,timestamp,title,body,author,category) =>
  fetch(`${api}/posts`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ id,timestamp,title,body,author,category })
  }).then(res => res.json())
    .then(data => data.postId)
    .catch(error => console.log(error))

// GET /posts/:id	(Get the details of a single post).
export const getPost = (id) =>
  fetch(`${api}/posts/${id}`, { headers })
    .then(res => res.json())
    .then(data => data.post)
    .catch(error => console.log(error))

// POST /posts/:id	(Used for voting on a post).	
// option - [String]: Either "upVote" or "downVote".
export const votePost = (id,option) =>
  fetch(`${api}/posts/${id}`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ option })
  }).then(res => res.json())
    .then(data => data.post)
    .catch(error => console.log(error))

// PUT /posts/:id	(Edit the details of an existing post).	
// title - [String] 
// body - [String]
export const editPost = (id,title,body) =>
  fetch(`${api}/posts/${id}`, {
    method: 'PUT',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ title,body })
  }).then(res => res.json())
    .then(data => data.postId)
    .catch(error => console.log(error))

// DELETE /posts/:id	Sets the deleted flag for a post to 'true'. 
// Sets the parentDeleted flag for all child comments to 'true'.
export const deletePost = (id) =>
  fetch(`${api}/posts/${id}`, {
    method: 'DELETE',
    headers: headers
  }).then(res => res.json())
    .then(data => data.postId)
    .catch(error => console.log(error)) 

