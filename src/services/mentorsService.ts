import { api } from "./api"


export const mentorsService = {
    async getAll(){
        return await api.get("/mentors")
    }
}