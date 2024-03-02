import { ImportQuiz } from '@/components';
import { withUser } from '@/hocs';

function Page({ user }) {
  return <ImportQuiz userId={user?.id} />;
}

export default withUser(Page);
