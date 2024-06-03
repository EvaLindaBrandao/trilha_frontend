import { Question } from "./question";

export interface Response {
  id: number;
  text: string;
  point: number;
  questionId: number;
  question?: Question
}