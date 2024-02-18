import { CreateQuiz } from '@/app/components';
import { cookies } from 'next/headers';

export default function Page() {
  const cookieStore = cookies();
  const user = JSON.parse(cookieStore.get('user').value);

  return <CreateQuiz userId={user.id} />;
}
