import axios from 'axios'
import { parseCookies } from "nookies";

const { "nextauth-token": token } = parseCookies();

export const api = axios.create({
    baseURL: "http://localhost:8090"
})

if (token) {
    // pega a api, envia uma informação default, coloca um novo cabeçalho padrao chamado "autorization"
    api.defaults.headers.common["Autorization"] = token;
}
