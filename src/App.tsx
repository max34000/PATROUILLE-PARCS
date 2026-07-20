import { useEffect, useState } from "react";

import { parcs } from "./data/parcs";

import type { Parc } from "./types/Parc";

import MapView from "./components/Map/MapView";

import NextStop from "./components/Route/NextStop";
import Tournee from "./components/Route/Tournee";

import PatrolMode from "./components/Patrol/PatrolMode";
import AgentMode from "./components/Patrol/AgentMode";
import Progression from "./components/Patrol/Progression";
import Historique from "./components/Patrol/Historique";
import RetourPC from "./components/Patrol/RetourPC";


import { calculerItineraire }
from "./services/routing";


import { trouverParcLePlusProche }
from "./utils/nextPark";


import { sauvegarderHistorique }
from "./utils/historique";


import { ouvrirNavigation }
from "./utils/navigation";


import { useGPS }
from "./hooks/useGPS";





function App(){



  const { position } = useGPS();


const positionAgent: [number, number] | null =
  position
    ? [
        position.latitude,
        position.longitude
      ]
    : null;







  const [listeParcs,setListeParcs] =

    useState<Parc[]>(()=>{


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







  const [modePatrouille,setModePatrouille] =

    useState(false);



  const [modeTerrain,setModeTerrain] =

    useState(false);



  const [retourPC,setRetourPC] =

    useState(false);




  const [distanceProchain,setDistanceProchain] =

    useState<number|null>(null);



  const [dureeProchain,setDureeProchain] =

    useState<number|null>(null);









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

      p=>!p.ferme

    )

    ||

    null;









  useEffect(()=>{



    async function chargerRoute(){


      if(

        !positionAgent ||

        !prochainParc

      ){

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

          error

        );


      }


    }




    chargerRoute();



  },[

    positionAgent,

    prochainParc

  ]);









  function fermerParc(id:string){



    const parc =

      listeParcs.find(

        p=>p.id===id

      );



    if(!parc){

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

      parcId:parc.id,

      parcNom:parc.nom,

      heure

    });







    setListeParcs(anciens=>


      anciens.map(p=>

        p.id===id

        ?

        {

          ...p,

          ferme:true,

          heureFermeture:heure

        }

        :

        p


      )


    );







    const restants =

      listeParcs.filter(

        p=>

          !p.ferme &&

          p.id!==id

      ).length;






    if(restants===0){


      setTimeout(()=>{


        setRetourPC(true);


      },1000);


    }


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







      <div className="
        flex
        gap-3
        mb-6
      ">



        <button

          onClick={()=>{

            setModePatrouille(false);

            setModeTerrain(false);

          }}

          className="
          bg-white
          text-green-700
          rounded-2xl
          p-4
          flex-1
          font-bold
          "

        >

          🗺️ Carte

        </button>







        <button

          onClick={()=>{

            setModePatrouille(true);

            setModeTerrain(false);

          }}

          className="
          bg-white
          text-green-700
          rounded-2xl
          p-4
          flex-1
          font-bold
          "

        >

          🚓 Patrouille

        </button>







        <button

          onClick={()=>{

            setModeTerrain(true);

            setModePatrouille(false);

          }}

          className="
          bg-white
          text-green-700
          rounded-2xl
          p-4
          flex-1
          font-bold
          "

        >

          📱 Terrain

        </button>



      </div>









      {retourPC && (

        <RetourPC />

      )}









      {!modePatrouille && !modeTerrain && (


        <>


          <MapView

            parcs={listeParcs}

            setParcs={setListeParcs}

            positionAgent={positionAgent}

            retourPC={retourPC}

            onFermerParc={fermerParc}

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









      {modeTerrain && (


        <AgentMode


          parcSuivant={prochainParc}


          distance={distanceProchain}


          duree={dureeProchain}


          onFermer={()=>{


            if(prochainParc){


              fermerParc(

                prochainParc.id

              );


            }


          }}



          onNaviguer={()=>{


            if(prochainParc){


              ouvrirNavigation(

                prochainParc

              );


            }


          }}


        />


      )}









      {modePatrouille && (


        <>


          <Progression


            total={listeParcs.length}


            fermes={

              listeParcs.filter(

                p=>p.ferme

              ).length

            }


          />







          <PatrolMode


            parcSuivant={prochainParc}


            distance={distanceProchain}


            duree={dureeProchain}


            onFermer={()=>{


              if(prochainParc){


                fermerParc(

                  prochainParc.id

                );


              }


            }}



            onNaviguer={()=>{


              setModeTerrain(true);

              setModePatrouille(false);


            }}


          />






          <Historique />


        </>


      )}





    </div>


  );

}



export default App;