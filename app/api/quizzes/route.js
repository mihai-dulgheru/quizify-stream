import prisma from '@/prisma/client';

export async function POST(request) {
  const { quizTitle, questions, userId } = await request.json();

  try {
    const quiz = await prisma.quiz.create({
      data: {
        title: quizTitle,
        userId: userId,
        questions: {
          create: questions.map((question) => ({
            question: question.question,
            answer: question.answer,
            options: {
              create: question.options.map((option) => ({
                text: option.text,
              })),
            },
          })),
        },
      },
    });

    return new Response(
      JSON.stringify({ message: 'Quiz created successfully', quiz }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.log('🚀 ~ POST ~ error:', error);
    return new Response(JSON.stringify({ message: 'Something went wrong' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
