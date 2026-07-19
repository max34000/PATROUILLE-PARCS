import { useEffect, useState } from "react";

import { parcs } from "./data/parcs";

import type { Parc } from "./types/Parc";

import { calculerItineraire } from "./services/routing";

import MapView from "./components/Map/MapView";
import NextStop from "./components/Route/NextStop";
import Tournee from "./components/Route/Tournee";
import PatrolMode from "./components/Patrol/PatrolMode";
import { trouverParcLePlusProche } from "./utils/nextPark";





function App() {


  const [listeParcs, setListeParcs] =
    useState<Parc[]>(() => {


      const sauvegarde =
        localStorage.getItem(
          "patrouille-parcs"
        );



      if (sauvegarde) {

        return JSON.parse(sauvegarde) as Parc[];

      }



      return parcs;

    });







  const [positionAgent, setPositionAgent] =
    useState<[number, number] | null>(null);







  const [modePatrouille, setModePatrouille] =
    useState(false);







  const [distanceProchain, setDistanceProchain] =
    useState<number | null>(null);




  const [dureeProchain, setDureeProchain] =
    useState<number | null>(null);









  useEffect(() => {


    localStorage.setItem(

      "patrouille-parcs",

      JSON.stringify(listeParcs)

    );


  }, [listeParcs]);









  const nombreParcs =

    listeParcs.filter(

      (parc)=> !parc.ferme

    ).length;









  const prochainParc =

  positionAgent

  ?

  trouverParcLePlusProche(

    positionAgent,

    listeParcs

  )

  :

  listeParcs.find(

    (parc)=> !parc.ferme

  ) || null;









  // Calcul route vers prochain parc

  useEffect(() => {


    async function calculerRoute() {


      if (

        !positionAgent ||

        !prochainParc

      ) {


        setDistanceProchain(null);

        setDureeProchain(null);

        return;

      }






      try {


        const resultat =

          await calculerItineraire(

            positionAgent,

            [

              prochainParc.latitude,

              prochainParc.longitude

            ]

          );





        setDistanceProchain(

          resultat.distance

        );




        setDureeProchain(

          resultat.duree

        );





        console.log(

          "Route patrouille",

          resultat

        );



      }

      catch(error) {


        console.error(

          "Erreur route",

          error

        );


      }


    }




    calculerRoute();




  }, [

    positionAgent,

    prochainParc

  ]);









  function fermerProchainParc() {


    if (!prochainParc) {

      return;

    }





    const heure =

      new Date()

      .toLocaleTimeString(

        "fr-FR",

        {

          hour:"2-digit",

          minute:"2-digit"

        }

      );






    setListeParcs(

      anciens =>


        anciens.map(

          (parc)=>


            parc.id === prochainParc.id


            ?


            {

              ...parc,

              ferme:true,

              heureFermeture:heure

            }


            :


            parc


        )


    );


  }











  return (

    <div className="
      min-h-screen
      bg-green-700
      text-white
      flex
      flex-col
      p-6
    ">







      <header className="
        text-center
        mt-4
        mb-6
      ">


        <h1 className="
          text-4xl
          font-bold
        ">

          🌳 Patrouille Parcs

        </h1>



        <p className="mt-3 text-lg">

          Fermeture des parcs

        </p>



        <p className="text-sm opacity-80">

          Castelnau-le-Lez

        </p>



      </header>








      <button

        onClick={()=>

          setModePatrouille(
            !modePatrouille
          )

        }


        className="
          bg-white
          text-green-700
          font-bold
          text-xl
          py-4
          rounded-2xl
          shadow-xl
          mb-6
        "

      >

        {modePatrouille

          ?

          "🖥️ Tableau de bord"

          :

          "🚓 Mode Patrouille"

        }


      </button>









      {modePatrouille && (


        <PatrolMode


          parcSuivant={prochainParc}


          distance={distanceProchain}


          duree={dureeProchain}


          onFermer={fermerProchainParc}


        />


      )}









      {!modePatrouille && (


        <>


          <section className="
            w-full
            bg-white
            rounded-2xl
            overflow-hidden
            shadow-xl
          ">


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









          <div className="
            bg-white
            text-green-800
            rounded-2xl
            p-6
            shadow-xl
            text-center
            mt-6
          ">


            <p className="text-lg">

              Parcs à fermer

            </p>



            <p className="
              text-6xl
              font-bold
              mt-2
            ">

              {nombreParcs}

            </p>


          </div>



        </>


      )}









      <footer className="
        mt-8
        text-center
      ">


        <p>

          🏁 Retour PC

        </p>



        <p className="
          text-sm
          opacity-80
        ">

          Rue des Églantiers

        </p>


      </footer>





    </div>

  );


}





export default App;