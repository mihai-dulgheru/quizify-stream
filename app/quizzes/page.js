import { QuizCard } from '@/components';
import { getQuizzes } from '../../utils/get-quizzes';

export default async function Page() {
  const quizzes = await getQuizzes();

  return (
    <div className="w-full max-w-5xl justify-self-center p-8">
      <div className="grid w-full grid-cols-1 gap-8">
        <h1 className="text-center text-3xl font-medium md:text-4xl md:font-semibold">
          Quiz-uri Disponibile
        </h1>
        <div className="grid grid-cols-1 gap-4">
          {quizzes.map((quiz) => (
            <QuizCard key={quiz.id} quiz={quiz} />
          ))}
        </div>
      </div>
    </div>
  );
}
