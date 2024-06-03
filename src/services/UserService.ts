import { toast } from 'react-toastify';
import { User } from '../types/user';
import { api } from './api';
import { StatusType } from '../types/status';

const BASE_ROUTE = "/users"

export const UserService = {
    async getAll(): Promise<User[]> {
      const mentors = await api.get(BASE_ROUTE);
      return mentors.data as User[]
    },

    async changeStatus(userId: number, status: StatusType): Promise<User | undefined> {
      try {
        const user = await api.put(`${BASE_ROUTE}/${userId}`, { status })

        return user.data as User
      } catch (error: any) {
        toast.error(error.response.data.message)
      }
    },

    async me(token: string){
        const response = await api.get(`${BASE_ROUTE}/me`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        return response
    }
};
