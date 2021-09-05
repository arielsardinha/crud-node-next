import axios from 'axios'

const token = localStorage.getItem('myToken')

export const api = axios.create({
    baseURL: "url"
})

if (token) {
    api.defaults.headers.common['Authorization'] = token;
}