import { api } from "./api"

export const CareerService = {
    async getAll() {
        const career = await api.get("/career")
        return career.data;
    }
}