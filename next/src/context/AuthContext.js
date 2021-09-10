import { createContext, useState } from "react";
import { useRouter } from "next/router"
import { registerRequest, signInRequest } from "./services/auth";
import { setCookie } from "nookies";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
    const router = useRouter()
    const [data, setData] = useState({})

    // ? pega os dados que vem do login e envia para signInRequest onde faz a validação na api
    // ? retorna os dados da api
    async function signIn({ email, password }) {
        const { token, data } = await signInRequest({ email, password })
        localStorage.setItem('myToken', token)
        setData(data)
        setCookie(undefined, "nextauth-token", token, { maxAge: 60 * 60 * 1, })
        router.push('/user')
    }
    async function registerIn(data) {
        await registerRequest(data)
        router.push('/login')
    }
    return (
        <AuthContext.Provider value={{ signIn, data, registerIn }}>
            {children}
        </AuthContext.Provider>
    )
}