'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { QuizImportTutorial } from '.';
import { importQuiz } from '../services/quiz-service';

export default function ImportQuiz({ userId }) {
  const [file, setFile] = useState(null);
  const router = useRouter();

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      if (!file) return;

      const formData = new FormData();
      formData.append('userId', userId);
      formData.append('file', file);

      const response = await importQuiz(formData);

      if (response) {
        router.push('/dashboard');
        router.refresh();
        toast.success('Quiz-ul a fost importat cu succes');
      }
    } catch (error) {
      toast.error('Eroare la importul quiz-ului');
    }
  };

  return (
    <div>
      <QuizImportTutorial />
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleFileChange} />
        <button type="submit">Importă Quiz</button>
      </form>
    </div>
  );
}
