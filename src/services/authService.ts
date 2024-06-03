import { api } from "./api"

const BASE_URL = "/auth"


export const AuthService = {
    async login(phoneOrEmail: string, password: string){
        const response = await api.post(BASE_URL, { phoneOrEmail, password })
        return response
    },

}
