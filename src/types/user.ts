import { StatusType } from "./status";

export interface User {
  id: number;
  name: string;
  email: string;
  phoneNumber: string;
  password: string;
  birthdate: Date;
  userType: UserType;
  status: StatusType;
  createdAt: Date;
  updatedAt: Date;
}

export type UserType = 'mentee' | 'mentor' 
