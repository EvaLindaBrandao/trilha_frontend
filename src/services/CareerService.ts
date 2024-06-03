import { Career } from "@/types/career";
import { api } from "./api"
import { toast } from "react-toastify";

const BASE_ROUTE = "/careers"

export const CareerService = {
    async getAll() {
        const career = await api.get(BASE_ROUTE)
        return career.data;
    },

    async getRecommended(avarage: number): Promise<Career[]> {
        const careers = await api.get(`${BASE_ROUTE}/recommended/${avarage}`)
        return careers.data as Career[]
    },

    async getOne(id: number): Promise<Career | undefined> {
        try {
            const careers = await api.get(`${BASE_ROUTE}/${id}`)
            return careers.data as Career
        } catch (error: any) {
            console.log(error);
            toast.error(error.response.data.message.message);
        }
    }
}