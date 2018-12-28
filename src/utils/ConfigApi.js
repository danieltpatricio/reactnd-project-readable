export const api = "http://localhost:3001"
// Generate a unique token for storing your bookshelf data on the backend server.
const token = localStorage.token ? localStorage.token :localStorage.token = Math.random().toString(36).substr(-8)
console.log(token)
export const headers = {
  'Accept': 'application/json',
  'Authorization': token
}