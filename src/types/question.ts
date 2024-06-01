import { Response } from "./response";

export interface Question {
  id: number;
  text: string;
  response: Response[];
}