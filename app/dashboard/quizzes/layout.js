import { BackButton } from '@/components';

export default function QuizLayout({ children }) {
  return (
    <div>
      <BackButton />
      {children}
    </div>
  );
}
