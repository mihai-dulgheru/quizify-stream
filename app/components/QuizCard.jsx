import Link from 'next/link';

export default function QuizCard({ quiz }) {
  return (
    <Link href={`/quizzes/${quiz.id}`}>
      <div className="block max-w-sm rounded-lg border border-gray-200 bg-white p-6 shadow-md hover:bg-gray-100">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
          {quiz.title}
        </h5>
      </div>
    </Link>
  );
}
