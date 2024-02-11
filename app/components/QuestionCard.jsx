export default function QuestionCard({
  question,
  onAnswerSelect,
  selectedOption,
}) {
  return (
    <div className="mb-4 w-full">
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
