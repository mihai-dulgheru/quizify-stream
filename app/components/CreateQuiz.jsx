'use client';

import crypto from 'crypto';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { Question, QuizTitleInput } from '.';

const generateId = () => {
  return crypto.randomBytes(4).toString('hex');
};

export default function CreateQuiz({ userId }) {
  const [quizTitle, setQuizTitle] = useState('');
  const [questions, setQuestions] = useState([
    {
      id: generateId(),
      question: '',
      answer: null,
      options: Array.from({ length: 4 }, () => ({
        id: generateId(),
        text: '',
      })),
    },
  ]);
  const router = useRouter();

  const addQuestion = () => {
    setQuestions((prevQuestions) => [
      ...prevQuestions,
      {
        id: generateId(),
        question: '',
        answer: null,
        options: Array.from({ length: 4 }, () => ({
          id: generateId(),
          text: '',
        })),
      },
    ]);
  };

  const updateQuestionText = (index, value) => {
    setQuestions((prevQuestions) => {
      const newQuestions = [...prevQuestions];
      newQuestions[index].question = value;
      return newQuestions;
    });
  };

  const updateOptionText = (questionIndex, optionIndex, value) => {
    setQuestions((prevQuestions) => {
      const newQuestions = [...prevQuestions];
      newQuestions[questionIndex].options[optionIndex].text = value;
      return newQuestions;
    });
  };

  const selectAnswer = (questionIndex, optionText) => {
    setQuestions((prevQuestions) => {
      const newQuestions = [...prevQuestions];
      newQuestions[questionIndex].answer = optionText;
      return newQuestions;
    });
  };

  const deleteQuestion = (index) => {
    setQuestions((prevQuestions) =>
      prevQuestions.filter((_, idx) => idx !== index)
    );
  };

  const saveQuiz = async () => {
    if (!quizTitle.trim()) {
      toast.error('Vă rugăm să introduceți un titlu pentru quiz.');
      return;
    }
    if (questions.length < 1) {
      toast.error('Vă rugăm să introduceți cel puțin o întrebare.');
      return;
    }
    for (let question of questions) {
      if (!question.question.trim()) {
        toast.error('Există întrebări fără text.');
        return;
      }
      for (let option of question.options) {
        if (!option.text.trim()) {
          toast.error('Există opțiuni de răspuns fără text.');
          return;
        }
      }
      if (!question.answer) {
        toast.error('Există întrebări fără un răspuns corect selectat.');
        return;
      }
    }
    try {
      const response = await fetch('/api/quizzes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ quizTitle, questions, userId }),
      });
      if (!response.ok) {
        throw new Error('Eroare la salvarea quiz-ului');
      }
      router.push('/dashboard');
      router.refresh();
      toast.success('Quiz salvat cu succes');
    } catch (error) {
      toast.error('Eroare la salvarea quiz-ului');
    }
  };

  return (
    <div className="p-4">
      <div className="flex flex-col items-center">
        <QuizTitleInput
          value={quizTitle}
          onChange={(e) => setQuizTitle(e.target.value)}
        />
        {questions.map((question, index) => (
          <Question
            key={question.id}
            deleteQuestion={deleteQuestion}
            index={index}
            question={question}
            selectAnswer={selectAnswer}
            updateOptionText={updateOptionText}
            updateQuestionText={updateQuestionText}
          />
        ))}
        <button onClick={addQuestion} className="btn btn-primary mb-4">
          Adaugă întrebare
        </button>
        <button onClick={saveQuiz} className="btn btn-success">
          Salvează Quiz-ul
        </button>
      </div>
    </div>
  );
}
