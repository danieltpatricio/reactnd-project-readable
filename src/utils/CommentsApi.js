import { api, headers } from './ConfigApi'
import { generateUID } from './FormatItems'

// GET /posts/:id/comments	(Get all the comments for a single post).
export const getAllCommentsPost = (id) =>
  fetch(`${api}/posts/${id}/comments`, { headers })
    .then(res => res.json())
    .then(data => data)
    .catch(error => console.log(error))

// POST /comments	(Add a comment to a post).	
// id - Any unique ID. As with posts, UUID is probably the best here. 
// timestamp - [Timestamp] Get this however you want. 
// body - [String] 
// author - [String] 
// parentId - Should match a post id in the database.
export const saveComment = ({ timestamp, body, author, parentId }) =>
  fetch(`${api}/comments`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ id: generateUID(),timestamp,body,author,parentId })
  }).then(res => res.json())
    .then(data => data)
    .catch(error => console.log(error))

// GET /comments/:id	(Get the details for a single comment).	
export const getComment = (id) =>
  fetch(`${api}/comments/${id}`, { headers })
    .then(res => res.json())
    .then(data => data.comment)
    .catch(error => console.log(error))

// POST /comments/:id	(Used for voting on a comment).	
// option - [String]: Either "upVote" or "downVote".
export const voteComment = (id,option) =>
  fetch(`${api}/comments/${id}`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ option })
  }).then(res => res.json())
    .then(data => data.comment)
    .catch(error => console.log(error))

// PUT /comments/:id	(Edit the details of an existing comment).	
// timestamp - timestamp. Get this however you want. 
// body - [String]
export const editComment = (id,timestamp,body) =>
  fetch(`${api}/comments/${id}`, {
    method: 'PUT',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ timestamp,body })
  }).then(res => res.json())
    .catch(error => console.log(error))

// DELETE /comments/:id	(Sets a comment's deleted flag to true).
export const deleteComment = (id) =>
  fetch(`${api}/comments/${id}`, {
    method: 'DELETE', 
    headers
  }).then(res => res.json())
  .then(data => data.commentId)
    .catch(error => console.log(error))

