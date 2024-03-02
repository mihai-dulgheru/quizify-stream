import { EditQuiz } from '@/components';
import { withUser } from '@/hocs';
import { getUserQuiz } from '@/utils/get-user-quiz';

async function Page({ params: { id }, user }) {
  const quiz = await getUserQuiz(user?.id, id);

  return <EditQuiz quiz={quiz} userId={user?.id} />;
}

export default withUser(Page);
