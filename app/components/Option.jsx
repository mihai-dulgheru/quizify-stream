export default function Option({
  checked,
  index,
  option,
  optionIndex,
  selectAnswer,
  updateOptionText,
}) {
  return (
    <div className="mb-1 flex items-center">
      <input
        type="radio"
        name={`answer-${index}`}
        checked={checked}
        onChange={() => selectAnswer(index, option.text)}
        className="radio radio-primary mr-2"
      />
      <input
        type="text"
        placeholder={`Opțiunea ${optionIndex + 1}`}
        value={option.text}
        onChange={(e) => updateOptionText(index, optionIndex, e.target.value)}
        className="input input-bordered w-full"
      />
    </div>
  );
}
