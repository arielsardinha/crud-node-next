import { createContext } from "react";
import { useRouter } from "next/router"
import { signInRequest } from "./services/auth";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
    const router = useRouter()
    async function signIn({ email, password }) {
        const { token } = await signInRequest({ email, password })
        localStorage.setItem('myToken', token)
        router.push('/sistem')
    }
    return (
        <AuthContext.Provider value={{ signIn }}>
            {children}
        </AuthContext.Provider>
    )
}