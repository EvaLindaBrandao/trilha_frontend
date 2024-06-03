import { api } from "./api"

export const AreaService = {
    async getAll() {
        const career = await api.get("/areas")
        return career.data;
    }
}