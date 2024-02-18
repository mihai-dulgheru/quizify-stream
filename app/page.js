import Link from 'next/link';

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full bg-white shadow-md">
        <nav className="flex items-center justify-between px-6 py-4">
          <Link href="/">
            <span className="text-xl font-semibold text-blue-600">
              QuizifyStream
            </span>
          </Link>
          <div>
            <Link href="/login">
              <span className="rounded-md border border-blue-600 bg-white px-4 py-2 text-sm font-medium text-blue-600 hover:bg-blue-50 md:px-5 md:py-2.5 md:text-base">
                Autentificare
              </span>
            </Link>
            <Link href="/sign-up" className="hidden sm:inline-block">
              <span className="ml-4 rounded-md border border-transparent bg-green-600 px-4 py-2 text-sm font-medium text-white hover:bg-green-700 md:px-5 md:py-2.5 md:text-base">
                Înregistrare
              </span>
            </Link>
          </div>
        </nav>
      </header>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-6 text-center">
        <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl">
          Bine ai venit la <span className="text-blue-600">QuizifyStream</span>
        </h1>
        <p className="mt-3 text-xl sm:text-2xl">
          Descoperă și testează-ți cunoștințele cu quiz-urile noastre!
        </p>
        <div className="mt-6">
          <Link href="/quizzes">
            <span className="inline-block rounded-md border border-transparent bg-blue-600 px-6 py-3 text-base font-medium text-white hover:bg-blue-700 sm:px-8 sm:py-3.5 sm:text-lg">
              Explorează quiz-urile
            </span>
          </Link>
        </div>
      </main>
    </div>
  );
}
