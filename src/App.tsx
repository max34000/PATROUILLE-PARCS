import {
  useEffect,
  useState
} from "react";


import {
  parcs
} from "./data/parcs";


import type {
  Parc
} from "./types/Parc";


import MapScreen from "./screens/MapScreen";
import PatrolScreen from "./screens/PatrolScreen";
import TerrainScreen from "./screens/TerrainScreen";

import RetourPC from "./components/Patrol/RetourPC";


import {
  trouverParcLePlusProche
} from "./utils/nextPark";


import {
  sauvegarderHistorique
} from "./utils/historique";


import {
  ouvrirNavigation
} from "./utils/navigation";


import {
  useGPS
} from "./hooks/useGPS";


import {
  useNavigation
} from "./hooks/useNavigation";


import AppHeader from "./components/Layout/AppHeader";


import MenuDrawer from "./components/Layout/MenuDrawer";
import AboutModal from "./components/Layout/AboutModal";
import ConfirmDialog from "./components/Layout/ConfirmDialog";

import MainMenu from "./components/Layout/MainMenu";





function App(){



  const {
    position
  } = useGPS();





  const positionAgent:

    [number,number] | null =

    position

    ?

    [

      position.latitude,

      position.longitude

    ]

    :

    null;






  const [

    traceGPS,

    setTraceGPS

  ] = useState<[number,number][]>([]);






  useEffect(()=>{


    if(!positionAgent){

      return;

    }



    setTraceGPS((ancienne)=>{


      const dernier =

        ancienne[

          ancienne.length - 1

        ];



      if(

        dernier &&

        dernier[0] === positionAgent[0] &&

        dernier[1] === positionAgent[1]

      ){

        return ancienne;

      }




      return [

        ...ancienne,

        positionAgent

      ].slice(-500);



    });



  },[positionAgent]);








  const [

    listeParcs,

    setListeParcs

  ] = useState<Parc[]>(()=>{


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








  const [

    modePatrouille,

    setModePatrouille

  ] = useState(false);






  const [

    modeTerrain,

    setModeTerrain

  ] = useState(false);






  






  const [

    retourPC,

    setRetourPC

  ] = useState(false);

  const [menuOpen, setMenuOpen] = useState(false);

const [aboutOpen, setAboutOpen] = useState(false);

const [confirmResetOpen, setConfirmResetOpen] = useState(false);






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







  const navigation = useNavigation(

    positionAgent,

    prochainParc

  );





  const distanceProchain =

    navigation.distance;





  const dureeProchain =

    navigation.duree;

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






    setListeParcs((anciens)=>


      anciens.map((p)=>


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





    const encoreOuverts =

      listeParcs.some(

        p=>

          !p.ferme &&

          p.id!==id

      );





    if(!encoreOuverts){


      setTimeout(()=>{


        setRetourPC(true);


      },1000);


    }


  }









  return (

    <div

      className="
        min-h-screen
        bg-green-700
        text-white
        p-6
      "

    >





      <AppHeader
  gpsConnected={position !== null}
  onMenuClick={() => setMenuOpen(true)}
/>

<MenuDrawer
  isOpen={menuOpen}
  onClose={() => setMenuOpen(false)}
  onCarte={() => {
    setModePatrouille(false);
    setModeTerrain(false);
    setMenuOpen(false);
  }}
  onPatrouille={() => {
    setModePatrouille(true);
    setModeTerrain(false);
    setMenuOpen(false);
  }}
  onTerrain={() => {
    setModeTerrain(true);
    setModePatrouille(false);
    setMenuOpen(false);
  }}
  onNouvelleTournee={() => {
    setConfirmResetOpen(true);
    setMenuOpen(false);
  }}
  onAbout={() => {
    setAboutOpen(true);
    setMenuOpen(false);
  }}
/>

<AboutModal
  isOpen={aboutOpen}
  onClose={() => setAboutOpen(false)}
/>

<ConfirmDialog
  isOpen={confirmResetOpen}
  title="Nouvelle tournée"
  message="Tous les parcs seront rouverts et l'historique sera réinitialisé."
  confirmLabel="Commencer"
  cancelLabel="Annuler"
  onCancel={() => setConfirmResetOpen(false)}
  onConfirm={() => {
  setConfirmResetOpen(false);

  setListeParcs(
    parcs.map((p) => ({
      ...p,
      ferme: false,
      heureFermeture: undefined,
    }))
  );

  localStorage.removeItem("historique");

  setTraceGPS([]);

  setRetourPC(false);

  setModePatrouille(false);
  setModeTerrain(false);
}}
/>

<MainMenu
  modePatrouille={modePatrouille}
  modeTerrain={modeTerrain}
  onCarte={() => {
    setModePatrouille(false);
    setModeTerrain(false);
  }}
  onPatrouille={() => {
    setModePatrouille(true);
    setModeTerrain(false);
  }}
  onTerrain={() => {
    setModeTerrain(true);
    setModePatrouille(false);
  }}
/>








      {retourPC && (

        <RetourPC />

      )}








      {!modePatrouille && !modeTerrain && (
  <MapScreen
    parcs={listeParcs}
    setParcs={setListeParcs}
    positionAgent={positionAgent}
    traceGPS={traceGPS}
    navigation={navigation}
    retourPC={retourPC}
    onFermerParc={fermerParc}
  />
)}









{modeTerrain && (
  <TerrainScreen
    prochainParc={prochainParc}
    distance={distanceProchain}
    duree={dureeProchain}
    onFermer={() => {
      if (prochainParc) {
        fermerParc(prochainParc.id);
      }
    }}
    onNaviguer={() => {
      if (prochainParc) {
        ouvrirNavigation(prochainParc);
      }
    }}
  />
)}

{modePatrouille && (
  <PatrolScreen
    listeParcs={listeParcs}
    prochainParc={prochainParc}
    distance={distanceProchain}
    duree={dureeProchain}
    onFermer={() => {
      if (prochainParc) {
        fermerParc(prochainParc.id);
      }
    }}
    onNaviguer={() => {
      setModeTerrain(true);
      setModePatrouille(false);
    }}
  />
)}
    </div>
  );
}

export default App;