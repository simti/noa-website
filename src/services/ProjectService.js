import axios from 'axios'

// const instance = axios.create({
//   baseURL: 'http://localhost:8080',
//   withCredentials: false,
//   headers: {
//     Accept: 'application/json',
//     'Content-Type': 'application/json'
//   }
// })

export default {
  getProjects() {
    let baseUrl = process.env.VUE_APP_BASE_URL
    let projects = []
    return axios.get(baseUrl + 'projects.json')
  }
}
