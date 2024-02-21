import { cookies } from 'next/headers';
import Link from 'next/link';
import { getQuizzes } from '../utils/get-quizzes';

export default async function Page() {
  const cookieStore = cookies();
  const user = JSON.parse(cookieStore.get('user').value);
  const quizzes = await getQuizzes(user.id);

  return (
    <>
      {quizzes && quizzes.length > 0 ? (
        <div className="p-8">
          <h2 className="mb-4 text-center text-2xl font-bold">
            Quiz-urile tale
          </h2>
          <ul className="list-inside list-disc">
            {quizzes.map((quiz) => (
              <li
                key={quiz.id}
                className="mb-2 cursor-pointer text-blue-600 hover:underline"
              >
                <Link href={`/dashboard/quizzes/${quiz.id}/view`}>
                  {quiz.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>Nu ai niciun quiz creat.</p>
      )}
      <div className="flex justify-center space-x-4 p-6">
        <Link
          href="/dashboard/quizzes/new"
          className="block rounded-md bg-white p-4 text-center text-blue-600 hover:bg-blue-100"
        >
          Crează un nou quiz
        </Link>
        <Link
          href="/dashboard/quizzes/import"
          className="block rounded-md bg-blue-600 p-4 text-center text-white hover:bg-blue-700"
        >
          Importă un quiz
        </Link>
      </div>
    </>
  );
}
