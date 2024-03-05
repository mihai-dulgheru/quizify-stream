export default function WrongAnswer({ question, userAnswer, correctAnswer }) {
  return (
    <li>
      <h3 className="text-lg font-normal md:text-xl md:font-medium">
        {question}
      </h3>
      <p>
        Răspunsul tău:{' '}
        <span className="font-semibold text-red-600">{userAnswer}</span>
      </p>
      <p>
        Răspuns corect:{' '}
        <span className="font-semibold text-green-600">{correctAnswer}</span>
      </p>
    </li>
  );
}
