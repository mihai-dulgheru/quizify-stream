import prisma from '@/prisma/client';

export async function DELETE(request, context = { params }) {
  const { id } = context.params;

  try {
    await prisma.option.deleteMany({
      where: { question: { quizId: parseInt(id) } },
    });
    await prisma.question.deleteMany({ where: { quizId: parseInt(id) } });
    await prisma.quiz.delete({ where: { id: parseInt(id) } });

    return new Response(JSON.stringify({ message: 'Quiz deleted' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(JSON.stringify({ message: 'Something went wrong' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
