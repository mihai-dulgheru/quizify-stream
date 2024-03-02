export default function OptionList({ options }) {
  return (
    <ul className="list-disc pl-8">
      {options.map((option, index) => (
        <li key={index}>{option.text}</li>
      ))}
    </ul>
  );
}
