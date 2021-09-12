import { createContext, useState } from "react";
import { useRouter } from "next/router"
import { registerRequest, signInRequest, editRequest } from "./services/auth";
import { setCookie } from "nookies";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
    const router = useRouter()
    const [data, setData] = useState({})

    // ? pega os dados que vem do login e envia para signInRequest onde faz a validação na api
    // ? retorna os dados da api
    async function signIn({ email, password }) {
        const { token, data } = await signInRequest({ email, password })

        if (token !== 0) {
            localStorage.setItem('myToken', token)
            setData(data)
            setCookie(undefined, "nextauth-token", token, { maxAge: 60 * 60 * 1, })
            if (data.admin === true) {
                router.push('/admin')
            } else if (data.admin === false) {
                router.push('/user')
            }
        }

        return data
    }

    async function registerIn({ name, idade, data, cpf, email, password, admin }) {
        const { date } = await registerRequest({ name, idade, data, cpf, email, password, admin })
        return date
    }

    async function editUser({ data, id }) {
        const { date } = await editRequest({ data, id })
        return date
    }

    return (
        <AuthContext.Provider value={{ signIn, data, registerIn, editUser }}>
            {children}
        </AuthContext.Provider>
    )
}