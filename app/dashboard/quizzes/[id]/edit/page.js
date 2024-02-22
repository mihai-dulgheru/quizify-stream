import { EditQuiz } from '@/app/components';
import { getQuiz } from '@/app/utils/get-quiz';
import { cookies } from 'next/headers';

export default async function Page({ params: { id } }) {
  const cookieStore = cookies();
  const user = JSON.parse(cookieStore.get('user').value);
  const quiz = await getQuiz(user.id, id);

  return <EditQuiz quiz={quiz} userId={user.id} />;
}
