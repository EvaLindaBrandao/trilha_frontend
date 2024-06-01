import { Career } from "@/types/career";
import { api } from "./api"

const BASE_ROUTE = "/careers"

export const CareerService = {
    async getAll() {
        const career = await api.get(BASE_ROUTE)
        return career.data;
    },

    async getRecommended(avarage: number): Promise<Career[]> {
        const careers = await api.get(`${BASE_ROUTE}/recommended/${avarage}`)
        return careers.data as Career[]
    }
}