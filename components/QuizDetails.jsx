'use client';

import { useState } from 'react';
import { QuizResult } from '.';
import QuestionCard from './QuestionCard';

export default function QuizDetails({ quiz }) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showResult, setShowResult] = useState(false);

  const question = quiz.questions[currentQuestionIndex];
  const selectedOption = selectedAnswers[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === quiz.questions.length - 1;

  const handleAnswerSelect = (option) => {
    setSelectedAnswers({ ...selectedAnswers, [currentQuestionIndex]: option });
  };

  const goToNextQuestion = () => {
    if (isLastQuestion) {
      setShowResult(true);
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  if (showResult) {
    return <QuizResult quiz={quiz} selectedAnswers={selectedAnswers} />;
  }

  return (
    <div className="grid h-full w-full max-w-5xl items-center justify-self-center p-8">
      <div className="grid gap-8">
        <QuestionCard
          currentQuestionIndex={currentQuestionIndex}
          onAnswerSelect={handleAnswerSelect}
          question={question}
          selectedOption={selectedOption}
          totalQuestions={quiz.questions.length}
        />
        <div className="flex justify-center">
          <button
            className="rounded bg-blue-500 p-2 text-white"
            disabled={!selectedOption}
            onClick={goToNextQuestion}
          >
            {isLastQuestion ? 'Trimite' : 'Următoarea Întrebare'}
          </button>
        </div>
      </div>
    </div>
  );
}
