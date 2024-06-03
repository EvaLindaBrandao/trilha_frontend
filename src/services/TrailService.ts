import { Trail } from "@/types/trail";
import { api } from "./api"
import { toast } from "react-toastify";

const BASE_ROUTE = "/trails"

export const TrailService = {
    async getAll() {
        const trail = await api.get(BASE_ROUTE)
        return trail.data;
    },

    async getOne(id: number): Promise<Trail | undefined> {
        try {
            const trails = await api.get(`${BASE_ROUTE}/${id}`)
            return trails.data as Trail
        } catch (error: any) {
            console.log(error);
            toast.error(error.response.data.message.message);
        }
    },

    async getByCareer(careerId: number): Promise<Trail[]> {
        const trails = await api.get(`${BASE_ROUTE}/careers/${careerId}`)
        return trails.data as Trail[]
    }
}