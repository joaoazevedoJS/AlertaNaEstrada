import axios from 'axios'

const api = axios.create({
  baseURL: "Local"
})

export default api