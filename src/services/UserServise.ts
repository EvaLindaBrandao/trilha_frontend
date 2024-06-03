import { api } from "./api";

const BASE_URL = "/users"

export const UserService = {
  async createUser(
    name: string,
    password: string,
    email: string,
    userType: any,
    phoneNumber: string
  ) {
      const response = await api.post("/users", { name, password, email, userType, phoneNumber})
      return response  
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
