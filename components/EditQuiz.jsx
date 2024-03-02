'use client';

import { QuizForm } from '.';
import { updateQuiz } from '../services/quiz-service';

export default function EditQuiz({ userId, quiz }) {
  const saveQuizData = async (quizData) => {
    await updateQuiz(quiz?.id, quizData);
  };

  return <QuizForm onSave={saveQuizData} quiz={quiz} userId={userId} />;
}
