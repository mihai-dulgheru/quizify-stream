function WrongAnswer({ question, userAnswer, correctAnswer }) {
  return (
    <li className="ml-4">
      <h3 className="text-xl font-semibold">{question}</h3>
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

export default WrongAnswer;
