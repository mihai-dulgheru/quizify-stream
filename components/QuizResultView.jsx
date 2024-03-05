import { WrongAnswer } from '.';

export default function QuizResultView({
  quiz,
  selectedAnswers,
  wrongAnswers,
}) {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-2xl font-medium md:text-3xl md:font-semibold">
        Răspunsuri Greșite
      </h2>
      <ul className="flex flex-col gap-4">
        {wrongAnswers.map((question, index) => (
          <WrongAnswer
            key={index}
            question={question.question}
            userAnswer={selectedAnswers[quiz.questions.indexOf(question)]}
            correctAnswer={question.answer}
          />
        ))}
      </ul>
    </div>
  );
}
