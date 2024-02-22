import prisma from '@/prisma/client';
import { cache } from 'react';

export const getQuiz = cache(async (userId, quizId) => {
  const quiz = await prisma.quiz.findFirst({
    where: { id: parseInt(quizId), userId },
    include: {
      questions: {
        select: {
          id: true,
          question: true,
          answer: true,
          options: {
            select: {
              id: true,
              text: true,
            },
          },
        },
      },
    },
  });

  return quiz;
});
