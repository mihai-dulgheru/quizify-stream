import prisma from '@/prisma/client';

export async function POST(request) {
  const formData = await request.formData();

  try {
    const userId = formData.get('userId');
    const file = formData.get('file');
    const buffer = await file.arrayBuffer();
    const data = new Uint8Array(buffer);
    const text = new TextDecoder().decode(data);

    const lines = text.split('\n').filter((line) => line.trim() !== '');
    const title = lines[0].trim().replace(/"/g, '');
    const questions = lines.slice(1).map((line) => {
      const [question, ...options] = line.split(',');
      const answer = options[options.length - 1].trim();
      const questionOptions = options.slice(0, options.length - 1);
      return {
        question: question.trim().replace(/"/g, ''),
        answer: answer.trim().replace(/"/g, ''),
        options: questionOptions.map((text) => ({
          text: text.trim().replace(/"/g, ''),
        })),
      };
    });

    await prisma.quiz.create({
      data: {
        title: title,
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
      JSON.stringify({ message: 'Quiz imported successfully' }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  } catch (error) {
    return new Response(JSON.stringify({ message: 'Something went wrong' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
