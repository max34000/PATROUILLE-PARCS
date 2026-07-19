import { useEffect, useState } from "react";
import { parcs } from "./data/parcs";
import MapView from "./components/Map/MapView";
import NextStop from "./components/Route/NextStop";
import Tournee from "./components/Route/Tournee";


function App() {


  const [listeParcs, setListeParcs] = useState(() => {

    const sauvegarde = localStorage.getItem(
      "patrouille-parcs"
    );


    if (sauvegarde) {

      return JSON.parse(sauvegarde);

    }


    return parcs;

  });



  const [positionAgent, setPositionAgent] =
    useState<[number, number] | null>(null);




  // Sauvegarde automatique
  useEffect(() => {

    localStorage.setItem(
      "patrouille-parcs",
      JSON.stringify(listeParcs)
    );

  }, [listeParcs]);





  const nombreParcs = listeParcs.filter(
    (parc) => !parc.ferme
  ).length;





  return (

    <div className="min-h-screen bg-green-700 text-white flex flex-col p-6">



      {/* TITRE */}

      <header className="text-center mt-4 mb-6">

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





      {/* CARTE */}

      <section className="w-full bg-white rounded-2xl overflow-hidden shadow-xl">


        <MapView
          parcs={listeParcs}
          setParcs={setListeParcs}
          positionAgent={positionAgent}
          setPositionAgent={setPositionAgent}
/>


      </section>







      {/* PROCHAIN ARRET */}

      <NextStop

        parcs={listeParcs}

        positionAgent={positionAgent}

      />






      {/* TOURNEE COMPLETE */}

      <Tournee

        parcs={listeParcs}

        positionAgent={positionAgent}

      />







      {/* COMPTEUR */}

      <main className="w-full mt-6">


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
          mt-6
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






      {/* PC */}

      <footer className="mt-8 text-center">


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