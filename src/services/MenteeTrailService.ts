import { api } from "./api"
import { toast } from "react-toastify";
import { CreateMenteeTrail, MenteeTrail } from "@/types/menteeTrail";

const BASE_ROUTE = "/mentee-trails"

export const MenteeTrailService = {
    async create(createMenteeTrial: CreateMenteeTrail) {
        try {
           const menteeTrial = (await api.post(BASE_ROUTE, createMenteeTrial)).data
    
          return menteeTrial
        } catch (error: any) {
          toast.error(error.response.data.message)
        }
    },

    async getAll() {
        const menteetrail = await api.get(BASE_ROUTE)
        return menteetrail.data;
    },

    async getOne(id: number): Promise<MenteeTrail | undefined> {
        try {
            const menteetrails = await api.get(`${BASE_ROUTE}/${id}`)
            return menteetrails.data as MenteeTrail
        } catch (error: any) {
            console.log(error);
            toast.error(error.response.data.message.message);
        }
    },

    async getByMentee(userId: number): Promise<MenteeTrail[]> {
        const menteetrails = await api.get(`${BASE_ROUTE}/meteens/${userId}`)
        return menteetrails.data as MenteeTrail[]
    },

    async getByMentor(mentorId: number): Promise<MenteeTrail[]> {
        const menteetrails = await api.get(`${BASE_ROUTE}/mentors/${mentorId}`)
        return menteetrails.data as MenteeTrail[]
    }
}