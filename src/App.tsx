import { parcs } from "./data/parcs";

function App() {
  const nombreParcs = parcs.length;

  return (
    <div className="min-h-screen bg-green-700 text-white flex flex-col items-center justify-between p-6">

      <header className="text-center mt-8">
        <h1 className="text-4xl font-bold">
          🌳 Patrouille Parcs
        </h1>

        <p className="mt-3 text-lg">
          Fermeture des parcs
        </p>

        <p className="text-sm opacity-80">
          Castelnau-le-Lez
        </p>
      </header>


      <main className="w-full max-w-md">

        <div className="bg-white text-green-800 rounded-2xl p-6 shadow-xl text-center">
          
          <p className="text-lg">
            Parcs à fermer
          </p>

          <p className="text-6xl font-bold mt-2">
            {nombreParcs}
          </p>

        </div>


        <button
          className="
            mt-8
            w-full
            bg-white
            text-green-700
            font-bold
            text-xl
            py-4
            rounded-2xl
            shadow-lg
          "
        >
          🚀 Démarrer la tournée
        </button>

      </main>


      <footer className="mb-6 text-center">

        <p>
          🏁 Retour PC
        </p>

        <p className="text-sm opacity-80">
          Rue des Églantiers
        </p>

      </footer>

    </div>
  );
}

export default App;