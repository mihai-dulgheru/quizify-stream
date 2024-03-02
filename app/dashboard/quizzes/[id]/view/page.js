import { ViewQuiz } from '@/components';
import { withUser } from '@/hocs';
import { getUserQuiz } from '@/utils/get-user-quiz';

async function Page({ params: { id }, user }) {
  const quiz = await getUserQuiz(user?.id, id);

  return <ViewQuiz quiz={quiz} />;
}

export default withUser(Page);
