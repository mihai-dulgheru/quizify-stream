import Option from './Option';

export default function Question({
  deleteQuestion,
  index,
  question,
  selectAnswer,
  updateOptionText,
  updateQuestionText,
}) {
  return (
    <div className="mb-4 w-full max-w-md">
      <div className="flex justify-between">
        <input
          type="text"
          placeholder={`Întrebarea ${index + 1}`}
          value={question.question}
          onChange={(e) => updateQuestionText(index, e.target.value)}
          className="input input-bordered mb-2 w-full"
        />
        <button
          onClick={() => deleteQuestion(index)}
          className="btn btn-error mb-2 ml-2"
        >
          Șterge
        </button>
      </div>
      {question.options.map((option, optionIndex) => (
        <Option
          key={option.id}
          checked={question.answer === option.text}
          index={index}
          option={option}
          optionIndex={optionIndex}
          selectAnswer={selectAnswer}
          updateOptionText={updateOptionText}
        />
      ))}
    </div>
  );
}
