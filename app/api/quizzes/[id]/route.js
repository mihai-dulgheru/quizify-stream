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

export async function PUT(request, context = { params }) {
  const { id } = context.params;
  const { quizTitle, questions, userId } = await request.json();

  try {
    const quiz = await prisma.quiz.findFirst({
      where: { id: parseInt(id), userId: parseInt(userId) },
    });

    if (!quiz) {
      return new Response(JSON.stringify({ message: 'Unauthorized' }), {
        status: 401,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    await prisma.option.deleteMany({
      where: { question: { quizId: parseInt(id) } },
    });
    await prisma.question.deleteMany({ where: { quizId: parseInt(id) } });

    const updatedQuiz = await prisma.quiz.update({
      where: { id: parseInt(id) },
      data: {
        title: quizTitle,
        questions: {
          create: questions.map((q) => ({
            question: q.question,
            answer: q.answer,
            options: {
              create: q.options.map((o) => ({ text: o.text })),
            },
          })),
        },
      },
    });

    return new Response(
      JSON.stringify({
        message: 'Quiz updated successfully',
        quiz: updatedQuiz,
      }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    return new Response(JSON.stringify({ message: 'Something went wrong' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
