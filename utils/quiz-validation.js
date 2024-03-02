import toast from 'react-hot-toast';

const validateQuiz = ({ quizTitle, questions }) => {
  if (!quizTitle.trim()) {
    toast.error('Vă rugăm să introduceți un titlu pentru quiz.');
    return false;
  }
  if (questions.length < 1) {
    toast.error('Vă rugăm să introduceți cel puțin o întrebare.');
    return false;
  }
  for (let question of questions) {
    if (!question.question.trim()) {
      toast.error('Există întrebări fără text.');
      return false;
    }
    for (let option of question.options) {
      if (!option.text.trim()) {
        toast.error('Există opțiuni de răspuns fără text.');
        return false;
      }
    }
    if (!question.answer) {
      toast.error('Există întrebări fără un răspuns corect selectat.');
      return false;
    }
  }
  return true;
};

export { validateQuiz };
