'use client';

import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

export default function ViewQuiz({ quiz }) {
  const router = useRouter();

  const handleViewAsVisitor = () => {
    router.push(`/quizzes/${quiz.id}`);
  };

  const handleEditQuiz = () => {
    router.push(`/dashboard/quizzes/${quiz.id}/edit`);
  };

  const handleDeleteQuiz = async () => {
    if (!confirm('Ești sigur că vrei să ștergi acest quiz?')) return;

    try {
      const response = await fetch(`/api/quizzes/${quiz.id}`, {
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
    <div className="grid place-items-center p-4">
      <div className="mb-4">
        <h1 className="text-center text-2xl font-bold">{quiz.title}</h1>
        <ul className="list-none pl-5">
          {quiz.questions.map((question, index) => (
            <li key={index} className="mt-2">
              <p className="font-semibold">{`Întrebarea ${index + 1}: ${question.question}`}</p>
              <ul className="list-inside list-decimal">
                {question.options.map((option, optionIndex) => (
                  <li
                    key={optionIndex}
                    className={`${option.text === question.answer ? 'text-green-500' : ''}`}
                  >
                    {option.text}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex items-center justify-center gap-4">
        <button onClick={handleViewAsVisitor} className="btn btn-primary">
          Vizualizează
        </button>
        <button onClick={handleEditQuiz} className="btn btn-secondary">
          Editează
        </button>
        <button onClick={handleDeleteQuiz} className="btn btn-error">
          Șterge
        </button>
      </div>
    </div>
  );
}
