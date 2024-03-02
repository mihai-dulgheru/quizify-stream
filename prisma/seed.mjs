import { PrismaClient } from '@prisma/client';
import bcryptjs from 'bcryptjs';
const { hashSync } = bcryptjs;

const prisma = new PrismaClient();

async function main() {
  // Clear the database
  await prisma.option.deleteMany();
  await prisma.question.deleteMany();
  await prisma.quiz.deleteMany();
  await prisma.user.deleteMany();

  // Seed the database
  await prisma.user.create({
    data: {
      email: 'test@example.com',
      password: hashSync('securepassword'),
      quizzes: {
        create: [
          {
            title: 'Quiz de Cultură Generală',
            questions: {
              create: [
                {
                  question: 'Care este capitala României?',
                  answer: 'București',
                  options: {
                    create: [
                      { text: 'București' },
                      { text: 'Cluj-Napoca' },
                      { text: 'Iași' },
                      { text: 'Timișoara' },
                    ],
                  },
                },
                {
                  question: 'Care este capitala Franței?',
                  answer: 'Paris',
                  options: {
                    create: [
                      { text: 'Paris' },
                      { text: 'Londra' },
                      { text: 'Berlin' },
                      { text: 'Madrid' },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  });
}

main()
  .catch((e) => {
    console.error(e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
