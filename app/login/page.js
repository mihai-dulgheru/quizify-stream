import { LoginForm } from '@/components';
import Link from 'next/link';

export default function Login() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <h1 className="mb-6 text-3xl font-bold">Autentificare</h1>
      <LoginForm />
      <Link href="/sign-up">
        <span className="mt-4 text-blue-600">
          Nu ai un cont? Înregistrează-te
        </span>
      </Link>
    </div>
  );
}
