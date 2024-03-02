'use client';

import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

export default function LogoutButton() {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      const response = await fetch('/api/logout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
      });
      if (response.ok) {
        router.push('/');
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <button
      className="rounded-md border border-transparent bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700 md:px-5 md:py-2.5 md:text-base"
      onClick={handleLogout}
    >
      Deconectare
    </button>
  );
}
