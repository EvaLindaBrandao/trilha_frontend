import { toast } from "react-toastify";
import { api } from "./api";

export const UserService = {
  async createUser(
    name: string,
    password: string,
    email: string,
    isCoach: boolean,
  ) {
    try {
      const response = await api.post("user/create", {
        name,
        password,
        email,
        isCoach,
      });

      toast.success("Conta criada com sucesso !");
      return response;
    } catch (error: any) {
      console.log(error);
      toast.error(error.response.data.message.message);
    }
  },

  async getUserById(id: string) {
    try {
      const response = await api.get("/user/" + id);

      return response;
    } catch (error) {
      console.log(error);
    }
  },
};
