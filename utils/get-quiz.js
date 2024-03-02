import { shuffle } from '@/functions';
import prisma from '@/prisma/client';
import { cache } from 'react';

export const getQuiz = cache(async (quizId) => {
  const quiz = await prisma.quiz.findUnique({
    where: { id: quizId },
    select: {
      id: true,
      title: true,
      questions: { select: { question: true, answer: true, options: true } },
    },
  });

  // Shuffle the options for each question
  quiz.questions = quiz.questions.map((question) => {
    question.options = shuffle(question.options);
    return question;
  });

  return quiz;
});
