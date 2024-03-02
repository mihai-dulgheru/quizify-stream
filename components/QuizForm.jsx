'use client';

import { validateQuiz } from '@/utils/quiz-validation';
import crypto from 'crypto';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { Question, QuizTitleInput } from '.';

const generateId = () => {
  return crypto.randomBytes(4).toString('hex');
};

export default function QuizForm({
  onSave = async () => {},
  quiz = null,
  userId = null,
}) {
  const [quizTitle, setQuizTitle] = useState(quiz?.title || '');
  const [questions, setQuestions] = useState(() => {
    if (quiz) {
      return quiz.questions.map((q) => ({
        ...q,
        options: q.options.map((o) => ({ ...o, id: generateId() })),
      }));
    } else {
      return [
        {
          id: generateId(),
          question: '',
          answer: null,
          options: Array.from({ length: 4 }, () => ({
            id: generateId(),
            text: '',
          })),
        },
      ];
    }
  });
  const router = useRouter();

  const handleAddQuestion = () => {
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

  const handleDeleteQuestion = (index) => {
    setQuestions((prevQuestions) =>
      prevQuestions.filter((_, idx) => idx !== index)
    );
  };

  const handleQuizTitleChange = (event) => {
    setQuizTitle(event.target.value);
  };

  const handleSave = async () => {
    if (!validateQuiz({ quizTitle, questions })) {
      return;
    }
    try {
      await onSave({ quizTitle, questions, userId });
      router.push('/dashboard');
      router.refresh();
      toast.success('Quiz salvat cu succes');
    } catch (error) {
      toast.error('Eroare la salvarea quiz-ului');
    }
  };

  const handleSelectAnswer = (questionIndex, optionText) => {
    setQuestions((prevQuestions) => {
      const updatedQuestions = [...prevQuestions];
      updatedQuestions[questionIndex].answer = optionText;
      return updatedQuestions;
    });
  };

  const handleUpdateOptionText = (questionIndex, optionIndex, value) => {
    setQuestions((prevQuestions) => {
      const updatedQuestions = [...prevQuestions];
      updatedQuestions[questionIndex].options[optionIndex].text = value;
      return updatedQuestions;
    });
  };

  const handleUpdateQuestionText = (index, value) => {
    setQuestions((prevQuestions) => {
      const updatedQuestions = [...prevQuestions];
      updatedQuestions[index].question = value;
      return updatedQuestions;
    });
  };

  return (
    <div className="p-4">
      <div className="flex flex-col items-center">
        <QuizTitleInput value={quizTitle} onChange={handleQuizTitleChange} />
        {questions.map((question, index) => (
          <Question
            key={question.id}
            deleteQuestion={handleDeleteQuestion}
            index={index}
            question={question}
            selectAnswer={handleSelectAnswer}
            updateOptionText={handleUpdateOptionText}
            updateQuestionText={handleUpdateQuestionText}
          />
        ))}
        <button onClick={handleAddQuestion} className="btn btn-primary mb-4">
          Adaugă întrebare
        </button>
        <button onClick={handleSave} className="btn btn-success">
          Salvează Quiz-ul
        </button>
      </div>
    </div>
  );
}
