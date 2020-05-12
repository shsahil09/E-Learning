import { Option } from './Option';

export interface QuizQuestion {
  questionId: number;
  questionText: string;
  options: Option[];
  explanation: string;
  answer: string;
  selectedOption: string;
}
