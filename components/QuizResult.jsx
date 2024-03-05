import {
  BackToQuizzesLink,
  CongratulationsMessage,
  QuizResultHeader,
  QuizResultView,
} from '.';

export default function QuizResult({ quiz, selectedAnswers }) {
  const calculateScore = () => {
    return quiz.questions.reduce((score, question, index) => {
      if (selectedAnswers[index] === question.answer) {
        return score + 1;
      }
      return score;
    }, 0);
  };

  const score = calculateScore();
  const wrongAnswers = quiz.questions.filter(
    (question, index) => selectedAnswers[index] !== question.answer
  );

  return (
    <div className="flex flex-col gap-8 p-8">
      <QuizResultHeader score={score} quiz={quiz} />
      {wrongAnswers.length === 0 && <CongratulationsMessage />}
      {wrongAnswers.length > 0 && (
        <QuizResultView
          quiz={quiz}
          selectedAnswers={selectedAnswers}
          wrongAnswers={wrongAnswers}
        />
      )}
      <BackToQuizzesLink />
    </div>
  );
}
