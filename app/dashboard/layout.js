import Link from 'next/link';
import { LogoutButton } from '../components';

export default function DashboardLayout({ children }) {
  return (
    <section>
      <nav className="sticky top-0 z-50 flex w-full items-center justify-between bg-white px-6 py-4 shadow-md">
        <Link href="/dashboard">
          <span className="text-xl font-semibold text-blue-600">
            QuizifyStream
          </span>
        </Link>
        <LogoutButton />
      </nav>
      {children}
    </section>
  );
}
