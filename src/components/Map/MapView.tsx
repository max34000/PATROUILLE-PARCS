import {
  MapContainer,
  TileLayer,
  Marker,
  Popup
} from "react-leaflet";

import {
  useEffect,
  useState
} from "react";

import L from "leaflet";

import "leaflet/dist/leaflet.css";

import type { Parc } from "../../types/Parc";

import PositionMarker from "./PositionMarker";
import RouteLine from "./RouteLine";
import MapCenter from "./MapCenter";

import { pc } from "../../data/pc";

import { calculerItineraire } from "../../services/routing";

import { trouverParcLePlusProche } from "../../utils/nextPark";





interface Props {

  parcs: Parc[];

  setParcs: React.Dispatch<
    React.SetStateAction<Parc[]>
  >;

  positionAgent:
    [number, number] | null;

  setPositionAgent:
    React.Dispatch<
      React.SetStateAction<
        [number, number] | null
      >
    >;

  retourPC: boolean;

  onFermerParc:
    (id: string) => void;

}







function MapView({

  parcs,

  positionAgent,

  setPositionAgent,

  retourPC,

  onFermerParc

}: Props) {



  const [itineraire, setItineraire] =
    useState<[number, number][]>([]);



  const [itineraireRetour, setItineraireRetour] =
    useState<[number, number][]>([]);



  const [calculRouteEnCours, setCalculRouteEnCours] =
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







  useEffect(() => {


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


  }, []);








  useEffect(() => {


    async function chargerRoute() {


      if (

        !positionAgent ||

        !prochainParc ||

        calculRouteEnCours

      ) {

        return;

      }




      setCalculRouteEnCours(true);



      try {


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

      catch(error) {

        console.error(
          "Erreur route",
          error
        );

      }

      finally {

        setCalculRouteEnCours(false);

      }


    }




    const timer =

      window.setTimeout(

        chargerRoute,

        2000

      );



    return () => {

      clearTimeout(timer);

    };


  }, [

    positionAgent,

    prochainParc,

    calculRouteEnCours

  ]);









  useEffect(() => {


    async function chargerRetourPC() {


      if (

        !positionAgent ||

        !retourPC

      ) {


        setItineraireRetour([]);

        return;

      }



      try {


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

      catch(error) {

        console.error(
          "Erreur retour PC",
          error
        );

      }


    }



    chargerRetourPC();


  }, [

    positionAgent,

    retourPC

  ]);









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

        setPositionAgent={setPositionAgent}

      />









      {parcs.map((parc) => (

        <Marker

          key={parc.id}

          position={[

            parc.latitude,

            parc.longitude

          ]}

        >

          <Popup>


            <h3 className="font-bold">

              🌳 {parc.nom}

            </h3>


            <p>

              {parc.adresse}

            </p>



            <p>

              {parc.ferme

                ?

                "🟢 Fermé"

                :

                "🔴 À fermer"

              }

            </p>





            {parc.ferme &&
              parc.heureFermeture && (

              <p>

                🕒 {parc.heureFermeture}

              </p>

            )}







            {!parc.ferme && (

              <button

                onClick={() =>
                  onFermerParc(parc.id)
                }

                className="
                  bg-green-600
                  text-white
                  px-3
                  py-2
                  rounded
                "

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
