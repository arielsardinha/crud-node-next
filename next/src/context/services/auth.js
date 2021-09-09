import { api } from './api'

export async function signInRequest(data) {
    return await api.post('/token', data).then(({ data }) => data)
}