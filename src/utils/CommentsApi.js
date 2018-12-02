import ConfigApi from './ConfigApi';



export default class CommentsApi {
  api = ConfigApi.api
  headers = ConfigApi.headers

  // GET /posts/:id/comments	(Get all the comments for a single post).
  getAllCommentsPost = (id) =>
  fetch(`${this.api}/posts/${id}/comments`, { headers : this.headers })
    .then(res => res.json())
    .then(data => data.comments)
    .catch(error => console.log(error))

  // POST /comments	(Add a comment to a post).	
  // id - Any unique ID. As with posts, UUID is probably the best here. 
  // timestamp - [Timestamp] Get this however you want. 
  // body - [String] 
  // author - [String] 
  // parentId - Should match a post id in the database.
  addComment = (id,timestamp,body,author,parentId) =>
  fetch(`${this.api}/comments`, {
    method: 'POST',
    headers: {
      ...this.headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ id,timestamp,body,author,parentId })
  }).then(res => res.json())
    .then(data => data.commentId)
    .catch(error => console.log(error))

  // GET /comments/:id	(Get the details for a single comment).	
  getComment = (id) =>
  fetch(`${this.api}/comments/${id}`, { headers: this.headers })
    .then(res => res.json())
    .then(data => data.comment)
    .catch(error => console.log(error))

  // POST /comments/:id	(Used for voting on a comment).	
  // option - [String]: Either "upVote" or "downVote".
  voteComment = (id,option) =>
  fetch(`${this.api}/comments/${id}`, {
    method: 'POST',
    headers: {
      ...this.headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ option })
  }).then(res => res.json())
    .then(data => data.comment)
    .catch(error => console.log(error))

  // PUT /comments/:id	(Edit the details of an existing comment).	
  // timestamp - timestamp. Get this however you want. 
  // body - [String]
  editComment = (id,timestamp,body) =>
  fetch(`${this.api}/comments/${id}`, {
    method: 'PUT',
    headers: {
      ...this.headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ timestamp,body })
  }).then(res => res.json())
    .catch(error => console.log(error))

  // DELETE /comments/:id	(Sets a comment's deleted flag to true).
  deleteComment = (id) =>
  fetch(`${this.api}/comments/${id}`, {
    method: 'DELETE', 
    headers: this.headers
  }).then(res => res.json())
  .then(data => data.commentId)
    .catch(error => console.log(error))
} 
