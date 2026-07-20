import {
  MapContainer,
  TileLayer,
  Marker,
  Popup
} from "react-leaflet";

import "leaflet/dist/leaflet.css";

import {
  useEffect,
  useState
} from "react";

import L from "leaflet";

import PositionMarker from "./PositionMarker";
import RouteLine from "./RouteLine";
import MapCenter from "./MapCenter";

import { pc } from "../../data/pc";

import { calculerItineraire }
from "../../services/routing";

import { trouverParcLePlusProche }
from "../../utils/nextPark";

import { sauvegarderHistorique }
from "../../utils/historique";


type Parc = {

  id:string;

  nom:string;

  adresse:string;

  latitude:number;

  longitude:number;

  ferme:boolean;

  heureFermeture?:string | null;

};



interface Props {

  parcs: Parc[];

  setParcs:
    React.Dispatch<
      React.SetStateAction<Parc[]>
    >;

  positionAgent:
    [number,number] | null;

  retourPC:boolean;

  onFermerParc:
    (id:string)=>void;

}





function MapView({

  parcs,

  setParcs,

  positionAgent,

  retourPC,

  onFermerParc

}:Props){



  const [itineraire,setItineraire] =
    useState<[number,number][]>([]);



  const [itineraireRetour,setItineraireRetour] =
    useState<[number,number][]>([]);



  const [calculRouteEnCours,setCalculRouteEnCours] =
    useState(false);




  const prochainParc =

    positionAgent

    ?

    trouverParcLePlusProche(

      positionAgent,

      parcs

    )

    :

    null;







  useEffect(()=>{


    delete (
      L.Icon.Default.prototype as any
    )._getIconUrl;



    L.Icon.Default.mergeOptions({

      iconRetinaUrl:
      "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",

      iconUrl:
      "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",

      shadowUrl:
      "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png"

    });


  },[]);









  useEffect(()=>{


    async function chargerRoute(){


      if(

        !positionAgent ||

        !prochainParc ||

        calculRouteEnCours

      ){

        return;

      }



      setCalculRouteEnCours(true);



      try{


        const resultat =

          await calculerItineraire(

            positionAgent,

            [

              prochainParc.latitude,

              prochainParc.longitude

            ]

          );



        setItineraire(

          resultat.geometrie

        );


      }


      catch(error){


        console.error(

          "Erreur itinéraire",

          error

        );


      }


      finally{


        setCalculRouteEnCours(false);


      }


    }



    chargerRoute();



  },[

    positionAgent,

    prochainParc

  ]);









  useEffect(()=>{


    async function chargerRetour(){


      if(

        !positionAgent ||

        !retourPC

      ){

        setItineraireRetour([]);

        return;

      }



      try{


        const resultat =

          await calculerItineraire(

            positionAgent,

            [

              pc.latitude,

              pc.longitude

            ]

          );



        setItineraireRetour(

          resultat.geometrie

        );


      }


      catch(error){


        console.error(

          error

        );


      }


    }



    chargerRetour();



  },[

    positionAgent,

    retourPC

  ]);









  function fermerLocal(id:string){


    const parc =

      parcs.find(

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



    setParcs(

      anciens =>

      anciens.map(

        p =>

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


    onFermerParc(id);


  }









  return (

    <MapContainer

      center={[

        pc.latitude,

        pc.longitude

      ]}

      zoom={14}

      style={{

        height:"500px",

        width:"100%"

      }}

    >



      <TileLayer

        url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"

      />





      <MapCenter

        position={positionAgent}

        destination={

          prochainParc

          ?

          [

            prochainParc.latitude,

            prochainParc.longitude

          ]

          :

          null

        }

      />






      <PositionMarker

        positionAgent={positionAgent}

      />








      {parcs.map(parc=>(


        <Marker

          key={parc.id}

          position={[

            parc.latitude,

            parc.longitude

          ]}

        >


          <Popup>


            <h3>

              🌳 {parc.nom}

            </h3>



            <p>

              {parc.adresse}

            </p>




            <p>

              {

              parc.ferme

              ?

              "🟢 Fermé"

              :

              "🔴 À fermer"

              }

            </p>





            {!parc.ferme && (

              <button

                onClick={()=>fermerLocal(parc.id)}

              >

                ✅ Fermer ce parc

              </button>

            )}


          </Popup>



        </Marker>


      ))}







      <Marker

        position={[

          pc.latitude,

          pc.longitude

        ]}

      >

        <Popup>

          🏁 PC Papa Charlie

        </Popup>


      </Marker>








      <RouteLine

        points={itineraire}

        color="blue"

      />





      <RouteLine

        points={itineraireRetour}

        color="green"

      />



    </MapContainer>

  );


}



export default MapView;