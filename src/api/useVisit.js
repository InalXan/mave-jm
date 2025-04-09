import axios from 'axios'

const api = axios.create({
  baseURL: 'https://mave-jm.com/',
  withCredentials: true,
})

export default api
