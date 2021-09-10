import { api } from './api'

export async function signInRequest(data) {
    return await api.post('user/token', data).then(({ data }) => data)
}

export async function registerRequest(data) {
    await api.post('/user/register', data)
}