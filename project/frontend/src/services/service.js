import axios from 'axios'
const baseUrl = '/api/products'


const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}
const create = (newObject) => {
console.log(newObject, "here creating object");
  const request = axios.post('/api/products', newObject)
  return request.then(response => response.data)
}

// deleted update


export default { getAll, create }