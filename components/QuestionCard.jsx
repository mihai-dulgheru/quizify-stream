export default function QuestionCard({
  currentQuestionIndex,
  onAnswerSelect,
  question,
  selectedOption,
  totalQuestions,
}) {
  return (
    <div className="grid w-full gap-4">
      <div className="grid w-full">
        <h1>
          Întrebarea {currentQuestionIndex + 1} din {totalQuestions}
        </h1>
        <h2 className="text-xl font-medium md:text-2xl md:font-semibold">
          {question.question}
        </h2>
      </div>
      <div className="grid w-full gap-2">
        {question.options.map((option, index) => (
          <button
            key={index}
            className={`block w-full rounded border p-2 text-left ${
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
