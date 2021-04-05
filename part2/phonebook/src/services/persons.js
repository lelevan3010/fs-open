import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

const getAllPersons = () => {
  const req = axios.get(baseUrl)
  return req.then(res => res.data)
}

const createPerson = newObject => {
  const req = axios.post(baseUrl, newObject)
  return req.then(res => res.data).catch(err => console.log(err))
}

const updatePerson = (id, newObject) => {
  const req = axios.put(`${baseUrl}/${id}`, newObject)
  return req.then(res => {
    return res.data}).catch(err => console.log(err))
}

const deletePerson = (id) => {
  const req = axios.delete(`${baseUrl}/${id}`)
  return req.then(res => res.data).catch(err => console.log(err))
}

const personsService = { 
  getAllPersons, 
  createPerson, 
  updatePerson,
  deletePerson
}

export default personsService