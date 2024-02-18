export default function QuizTitleInput({ value, onChange }) {
  return (
    <input
      type="text"
      placeholder="Titlul Quiz-ului"
      value={value}
      onChange={onChange}
      className="input input-bordered mb-4 w-full max-w-md"
    />
  );
}
