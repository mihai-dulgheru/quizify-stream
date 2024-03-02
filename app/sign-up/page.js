import { SignUpForm } from '@/components';
import Link from 'next/link';

export default function SignUp() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <h1 className="mb-4 text-3xl font-bold">Înregistrare</h1>
      <SignUpForm />
      <Link href="/login">
        <span className="mt-4 text-blue-600">
          Ai deja un cont? Autentifică-te
        </span>
      </Link>
    </div>
  );
}
