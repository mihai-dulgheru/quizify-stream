import { QuizDetails } from '@/components';
import { getQuiz } from '@/utils/get-quiz';

export default async function Page({ params: { id } }) {
  const quiz = await getQuiz(id);

  return <QuizDetails quiz={quiz} />;
}
