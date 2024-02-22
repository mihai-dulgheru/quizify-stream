'use client';

import { QuizForm } from '.';
import { updateQuiz } from '../services/quiz-service';

export default function EditQuiz({ userId, quiz }) {
  const handleSaveQuiz = async (quizData) => {
    await updateQuiz(quiz?.id, quizData);
  };

  return <QuizForm onSave={handleSaveQuiz} quiz={quiz} userId={userId} />;
}
