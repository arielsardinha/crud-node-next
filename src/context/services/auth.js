import axios from 'axios'
import { api } from './api'

export async function signInRequest(data) {
    return await new Promise((resolve) =>
        setTimeout(() => {
            console.log('avaliado')
            resolve()
            return 0
        }, 2000)
    )
    // return await api.post('URL', data)
}