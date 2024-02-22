async function createQuiz(quizData) {
  const response = await fetch('/api/quizzes', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(quizData),
  });

  if (!response.ok) {
    throw new Error('Eroare la salvarea quiz-ului');
  }

  return response.json();
}

async function updateQuiz(quizId, quizData) {
  if (!quizId) {
    throw new Error('Id-ul quiz-ului este obligatoriu');
  }

  const response = await fetch(`/api/quizzes/${quizId}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(quizData),
  });

  if (!response.ok) {
    throw new Error('Eroare la salvarea quiz-ului');
  }

  return response.json();
}

export { createQuiz, updateQuiz };
