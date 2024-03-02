import { QuizCard } from '@/components';
import { getQuizzes } from '../../utils/get-quizzes';

export default async function Page() {
  const quizzes = await getQuizzes();

  return (
    <div className="p-8">
      <h1 className="mb-8 text-center text-4xl font-bold">
        Quiz-uri Disponibile
      </h1>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {quizzes.map((quiz) => (
          <QuizCard key={quiz.id} quiz={quiz} />
        ))}
      </div>
    </div>
  );
}
