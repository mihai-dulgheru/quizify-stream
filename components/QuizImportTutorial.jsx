export default function QuizImportTutorial() {
  return (
    <div className="mb-4 rounded bg-white px-8 pb-8 pt-6 shadow-md">
      <h2 className="mb-2 block text-xl font-bold text-gray-700">
        Cum să importați un Quiz
      </h2>
      <ol className="list-inside list-decimal text-gray-600">
        <li>
          Deschideți un editor de texte sau un program de calcul tabelar, cum ar
          fi Microsoft Excel sau Google Sheets.
        </li>
        <li>Introduceți titlul quiz-ului pe prima linie a fișierului CSV.</li>
        <li>
          Introduceți întrebările și opțiunile de răspuns conform următorului
          format:
          <span className="block">
            <code>Întrebare,opțiune1,opțiune2,opțiune3,opțiune4,răspuns</code>
          </span>
          Fiecare întrebare ar trebui să fie pe o linie nouă, urmată de
          opțiunile de răspuns și răspunsul corect, toate separate prin virgule.
        </li>
        <li>
          Salvați fișierul ca CSV. Dacă folosiți un editor de texte,
          asigurați-vă că alegeți formatul{' '}
          <code>CSV (Comma delimited) (*.csv)</code> când salvați fișierul.
        </li>
        <li>În aplicație, navigați către pagina de import a quiz-urilor.</li>
        <li>
          Folosiți butonul de navigare pentru a selecta și încărca fișierul CSV
          pe care l-ați creat.
        </li>
        <li>
          Apăsați pe butonul <code>Importă Quiz</code> pentru a încărca și a
          importa întrebările din fișierul CSV în quiz.
        </li>
      </ol>
      <p className="mt-4 text-sm text-gray-500">
        Asigurați-vă că structurați corect fișierul CSV pentru a evita erorile
        de import.
      </p>
    </div>
  );
}
