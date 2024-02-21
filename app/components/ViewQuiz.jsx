'use client';

import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

export default function ViewQuiz({ quiz }) {
  const router = useRouter();

  const handleViewAsVisitor = () => {
    router.push(`/quizzes/${quiz.id}`);
  };

  const handleEditQuiz = () => {
    router.push(`/quizzes/${quiz.id}/edit`);
  };

  const handleDeleteQuiz = async () => {
    if (!confirm('Ești sigur că vrei să ștergi acest quiz?')) return;

    try {
      const response = await fetch(`/api/quizzes/${quiz.id}/delete`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Eroare la ștergerea quiz-ului');
      }

      toast.success('Quiz șters cu succes');
      router.push('/dashboard');
      router.refresh();
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="p-4">
      <h1 className="mb-4 text-xl font-bold">{quiz.title}</h1>
      <button onClick={handleViewAsVisitor} className="btn btn-primary mr-2">
        Vizualizează ca vizitator
      </button>
      <button onClick={handleEditQuiz} className="btn btn-secondary mr-2">
        Editează Quiz
      </button>
      <button onClick={handleDeleteQuiz} className="btn btn-error">
        Șterge Quiz
      </button>
    </div>
  );
}
