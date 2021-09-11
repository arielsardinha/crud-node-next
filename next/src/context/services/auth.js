import { api } from './api'

export async function signInRequest(data) {
    return await api.post('user/token', data).then(({ data }) => data).catch(() => {
        return { data: 'user undefined', token: 0 }
    })
}

export async function registerRequest(data) {
    return await api.post('/user/register', data).then(() => {
        return { date: 'concluido' }
    }).catch(() => {
        return { date: 'erro inesperado' }
    })
}