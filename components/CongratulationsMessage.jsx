import { Confetti } from '.';

export default function CongratulationsMessage() {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-2xl font-medium md:text-3xl md:font-semibold">
        Felicitări! Nu ai niciun răspuns greșit.
      </h2>
      <Confetti showConfetti />
    </div>
  );
}
