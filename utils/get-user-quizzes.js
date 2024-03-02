import prisma from '@/prisma/client';
import { cache } from 'react';

export const getUserQuizzes = cache(async (userId) => {
  const quizzes = await prisma.quiz.findMany({
    select: { id: true, title: true },
    where: { userId },
  });

  return quizzes;
});
