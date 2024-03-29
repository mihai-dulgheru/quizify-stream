import { CreateQuiz } from '@/components';
import { withUser } from '@/hocs';

function Page({ user }) {
  return <CreateQuiz userId={user?.id} />;
}

export default withUser(Page);
