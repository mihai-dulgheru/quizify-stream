export default function QuizResultHeader({ score, quiz }) {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-3xl font-medium md:text-4xl md:font-semibold">
        Rezultatul Quiz-ului
      </h1>
      <p>
        Scorul tău este {score} din {quiz.questions.length}.
      </p>
    </div>
  );
}
