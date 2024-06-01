import { toast } from 'react-toastify';
import { Question } from '../types/question';
import { api } from './api';

const BASE_ROUTE = "/questions"

export const QuestionService = {
    async getAll(): Promise<Question[]> {
      const questions = await api.get(BASE_ROUTE);
      return questions.data as Question[]
    },

    async getById(id: number): Promise<Question> {
      const questions = await api.get(`${BASE_ROUTE}/${id}`);
      return questions.data as Question
    },
};
