export default function QuestionCard({
  currentQuestionIndex,
  onAnswerSelect,
  question,
  selectedOption,
  totalQuestions,
}) {
  return (
    <div className="mb-4 w-full">
      <h1>
        Întrebarea {currentQuestionIndex + 1} din {totalQuestions}
      </h1>
      <h2 className="text-2xl font-semibold">{question.question}</h2>
      <div>
        {question.options.map((option, index) => (
          <button
            key={index}
            className={`mt-2 block w-full rounded border p-2 text-left ${
              option.text === selectedOption
                ? 'bg-blue-200'
                : 'hover:bg-gray-100'
            }`}
            onClick={() => onAnswerSelect(option.text)}
          >
            {option.text}
          </button>
        ))}
      </div>
    </div>
  );
}
