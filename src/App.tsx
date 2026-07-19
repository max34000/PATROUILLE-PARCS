import { useEffect, useState } from "react";

import { parcs } from "./data/parcs";

import type { Parc } from "./types/Parc";

import MapView from "./components/Map/MapView";

import NextStop from "./components/Route/NextStop";
import Tournee from "./components/Route/Tournee";

import PatrolMode from "./components/Patrol/PatrolMode";
import Progression from "./components/Patrol/Progression";
import Historique from "./components/Patrol/Historique";
import EndTournee from "./components/Patrol/EndTournee";

import { calculerItineraire }
from "./services/routing";

import { trouverParcLePlusProche }
from "./utils/nextPark";

import { sauvegarderHistorique }
from "./utils/historique";





function App() {



  const [listeParcs, setListeParcs] =

    useState<Parc[]>(() => {


      const sauvegarde =

        localStorage.getItem(
          "patrouille-parcs"
        );


      return sauvegarde

        ?

        JSON.parse(sauvegarde)

        :

        parcs;


    });







  const [positionAgent, setPositionAgent] =

    useState<[number, number] | null>(null);






  const [modePatrouille, setModePatrouille] =

    useState(false);





  const [retourPC, setRetourPC] =

    useState(false);






  const [distanceProchain, setDistanceProchain] =

    useState<number | null>(null);






  const [dureeProchain, setDureeProchain] =

    useState<number | null>(null);









  useEffect(()=>{


    localStorage.setItem(

      "patrouille-parcs",

      JSON.stringify(listeParcs)

    );


  },[listeParcs]);









  const prochainParc =


    positionAgent


    ?


    trouverParcLePlusProche(

      positionAgent,

      listeParcs

    )


    :


    listeParcs.find(

      (parc)=>

        !parc.ferme

    )

    ||

    null;








  useEffect(()=>{


    async function chargerRoute(){


      if(

        !positionAgent ||

        !prochainParc

      ){

        setDistanceProchain(null);

        setDureeProchain(null);

        return;

      }





      try{


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



      }


      catch(error){

        console.error(

          "Erreur route",

          error

        );

      }


    }




    chargerRoute();



  },[

    positionAgent,

    prochainParc

  ]);









  function fermerProchainParc(){



    if(!prochainParc){

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






    sauvegarderHistorique({

      parcId: prochainParc.id,

      parcNom: prochainParc.nom,

      heure

    });







    setListeParcs((anciens)=>



      anciens.map((parc)=>



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







    const restants =

      listeParcs.filter(

        (parc)=>

          !parc.ferme &&

          parc.id !== prochainParc.id

      ).length;





    if(restants === 0){


      setTimeout(()=>{


        setRetourPC(true);


      },500);



    }



  }









  if(retourPC){


    return (

      <EndTournee

        onRetour={()=>


          setRetourPC(false)


        }

      />

    );


  }









  return (

    <div className="
      min-h-screen
      bg-green-700
      text-white
      p-6
    ">



      <h1 className="
        text-4xl
        font-bold
        text-center
        mb-6
      ">

        🌳 Patrouille Parcs

      </h1>






      <button

        onClick={()=>


          setModePatrouille(

            !modePatrouille

          )


        }


        className="
          bg-white
          text-green-700
          rounded-2xl
          p-4
          font-bold
          text-xl
          w-full
          mb-6
        "

      >


        {modePatrouille

          ?

          "🗺️ Carte"

          :

          "🚓 Mode Patrouille"

        }


      </button>








      {modePatrouille && (


        <>


          <Progression


            total={listeParcs.length}


            fermes={

              listeParcs.filter(

                (p)=>

                  p.ferme

              ).length

            }


          />





          <PatrolMode


            parcSuivant={prochainParc}


            distance={distanceProchain}


            duree={dureeProchain}


            onFermer={fermerProchainParc}


          />





          <Historique />



        </>


      )}









      {!modePatrouille && (


        <>


          <MapView


            parcs={listeParcs}


            setParcs={setListeParcs}


            positionAgent={positionAgent}


            setPositionAgent={setPositionAgent}


          />






          <NextStop


            parcs={listeParcs}


            positionAgent={positionAgent}


          />






          <Tournee


            parcs={listeParcs}


            positionAgent={positionAgent}


          />



        </>


      )}






    </div>

  );

}



export default App;