import prisma from '@/prisma/client';

export const getQuizzes = async () => {
  const quizzes = await prisma.quiz.findMany({
    select: { id: true, title: true },
  });

  return quizzes;
};
