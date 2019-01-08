//  local host (https://github.com/Danieltp123/reactnd-project-readable-started)
// export const api = "http://localhost:3001"

export const api = "https://reactnd-project-readable-dtp.herokuapp.com"
// Generate a unique token for storing your bookshelf data on the backend server.
const token = localStorage.token ? localStorage.token :localStorage.token = Math.random().toString(36).substr(-8)
console.log(token)
export const headers = {
  'Accept': 'application/json',
  'Authorization': token
}