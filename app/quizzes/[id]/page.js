import { QuizDetails } from '@/app/components';
import prisma from '@/prisma/client';

async function getData(quizId) {
  const quiz = await prisma.quiz.findUnique({
    where: { id: parseInt(quizId) },
    select: {
      id: true,
      title: true,
      questions: { select: { question: true, answer: true, options: true } },
    },
  });
  return quiz;
}

export default async function Page({ params: { id } }) {
  const quiz = await getData(id);

  return <QuizDetails quiz={quiz} />;
}
