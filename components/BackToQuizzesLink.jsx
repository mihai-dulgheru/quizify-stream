import Link from 'next/link';

export default function BackToQuizzesLink() {
  return (
    <Link href="/quizzes" className="inline-block text-blue-600 underline">
      Înapoi la Quiz-uri
    </Link>
  );
}
