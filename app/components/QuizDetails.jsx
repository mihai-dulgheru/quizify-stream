'use client';

import { useState } from 'react';
import { WrongAnswer } from '.';
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

  const calculateScore = () => {
    return quiz.questions.reduce((score, question, index) => {
      if (selectedAnswers[index] === question.answer) {
        return score + 1;
      }
      return score;
    }, 0);
  };

  if (showResult) {
    const score = calculateScore();
    const wrongAnswers = quiz.questions.filter(
      (question, index) => selectedAnswers[index] !== question.answer
    );

    return (
      <div className="p-8">
        <h1 className="mb-8 text-center text-4xl font-bold">
          Rezultatul Quiz-ului
        </h1>
        <p className="mb-8 text-center">
          Scorul tău este {score} din {quiz.questions.length}.
        </p>
        {wrongAnswers.length > 0 && (
          <>
            <h2 className="mb-4 text-center text-3xl font-bold">
              Răspunsuri Greșite
            </h2>
            <ul className="grid grid-cols-1 gap-4">
              {wrongAnswers.map((question, index) => (
                <WrongAnswer
                  key={index}
                  question={question.question}
                  userAnswer={selectedAnswers[quiz.questions.indexOf(question)]}
                  correctAnswer={question.answer}
                />
              ))}
            </ul>
          </>
        )}
      </div>
    );
  }

  return (
    <div className="grid h-screen w-screen place-items-center p-8">
      <h1 className="mb-8 text-center text-4xl font-bold">{quiz.title}</h1>
      <QuestionCard
        question={question}
        onAnswerSelect={handleAnswerSelect}
        selectedOption={selectedOption}
      />
      <div className="mt-4 flex justify-center">
        <button
          className="rounded bg-blue-500 p-2 text-white"
          onClick={goToNextQuestion}
        >
          {isLastQuestion ? 'Submit' : 'Next Question'}
        </button>
      </div>
    </div>
  );
}
