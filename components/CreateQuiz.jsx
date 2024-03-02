'use client';

import { QuizForm } from '.';
import { createQuiz } from '../services/quiz-service';

export default function CreateQuiz({ userId }) {
  const saveQuizData = async (quiz) => {
    await createQuiz(quiz);
  };

  return <QuizForm onSave={saveQuizData} userId={userId} />;
}
