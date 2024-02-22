'use client';

import { QuizForm } from '.';
import { createQuiz } from '../services/quiz-service';

export default function CreateQuiz({ userId }) {
  const handleSaveQuiz = async (quiz) => {
    await createQuiz(quiz);
  };

  return <QuizForm onSave={handleSaveQuiz} userId={userId} />;
}
