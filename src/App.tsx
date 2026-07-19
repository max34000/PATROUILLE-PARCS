import { useEffect, useState } from "react";

import { parcs } from "./data/parcs";
import { tourneeInitiale } from "./data/tournee";

import MapView from "./components/Map/MapView";
import NextStop from "./components/Route/NextStop";
import Tournee from "./components/Route/Tournee";
import { calculerItineraire } from "./services/routing";



function App() {
  
    console.log(import.meta.env.VITE_ORS_API_KEY);
    useEffect(() => {

  calculerItineraire(

    [
      43.644969,
      3.910237
    ],

    [
      43.630154,
      3.907396
    ]

  )
  .then((resultat)=>{

    console.log(
      "ITINERAIRE",
      resultat
    );

  })
  .catch(console.error);


}, []);


  const [listeParcs, setListeParcs] = useState(() => {

    const sauvegarde =
      localStorage.getItem(
        "patrouille-parcs"
      );


    if (sauvegarde) {

      return JSON.parse(sauvegarde);

    }


    return parcs;

  });




  const [positionAgent, setPositionAgent] =
    useState<[number, number] | null>(null);




  const [tournee, setTournee] =
    useState(() => {

      const sauvegarde =
        localStorage.getItem(
          "patrouille-tournee"
        );


      if (sauvegarde) {

        return JSON.parse(sauvegarde);

      }


      return tourneeInitiale;

    });







  // Sauvegarde des parcs

  useEffect(() => {

    localStorage.setItem(

      "patrouille-parcs",

      JSON.stringify(listeParcs)

    );

  }, [listeParcs]);







  // Sauvegarde tournée

  useEffect(() => {

    localStorage.setItem(

      "patrouille-tournee",

      JSON.stringify(tournee)

    );

  }, [tournee]);









  const nombreParcs =
    listeParcs.filter(

      (parc) => !parc.ferme

    ).length;









  function demarrerTournee() {


    const maintenant = new Date();


    const heure =
      maintenant.toLocaleTimeString(
        "fr-FR",
        {
          hour: "2-digit",
          minute: "2-digit"
        }
      );



    setTournee({

      ...tournee,

      heureDebut: heure

    });


  }









  return (

    <div className="min-h-screen bg-green-700 text-white flex flex-col p-6">



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







      <section className="w-full bg-white rounded-2xl overflow-hidden shadow-xl">


        <MapView

          parcs={listeParcs}

          setParcs={setListeParcs}

          positionAgent={positionAgent}

          setPositionAgent={setPositionAgent}

        />


      </section>







      <NextStop

        parcs={listeParcs}

        positionAgent={positionAgent}

      />







      <Tournee

        parcs={listeParcs}

        positionAgent={positionAgent}

      />









      <main className="w-full mt-6">



        <div className="bg-white text-green-800 rounded-2xl p-6 shadow-xl text-center">


          <p className="text-lg">

            Parcs à fermer

          </p>



          <p className="text-6xl font-bold mt-2">

            {nombreParcs}

          </p>


        </div>







        {tournee.heureDebut && (

          <div className="mt-4 bg-white text-green-800 rounded-xl p-4 text-center">


            <p className="font-bold">

              🟢 Tournée en cours

            </p>



            <p>

              Départ : {tournee.heureDebut}

            </p>


          </div>

        )}








        <button

          onClick={demarrerTournee}


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