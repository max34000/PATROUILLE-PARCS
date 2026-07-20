import {
  MapContainer,
  TileLayer,
  Marker,
  Popup
} from "react-leaflet";

import {
  useEffect
} from "react";

import type {
  Dispatch,
  SetStateAction
} from "react";

import L from "leaflet";

import "leaflet/dist/leaflet.css";

import type {
  Parc
} from "../../types/Parc";

import {
  pc
} from "../../data/pc";


import PositionMarker from "./PositionMarker";

import MapCenter from "./MapCenter";

import RouteLine from "./RouteLine";

import GPSTrace from "./GPSTrace";





interface Props {


  parcs: Parc[];


  setParcs:
    Dispatch<
      SetStateAction<Parc[]>
    >;


  positionAgent:
    [number, number] | null;


  traceGPS:
    [number, number][];


  route:
    [number, number][];


  retourPC:
    boolean;


  onFermerParc:
    (id:string)=>void;


}





const iconeParc = L.icon({

  iconUrl:
    "https://cdn-icons-png.flaticon.com/512/854/854878.png",

  iconSize:[
    35,
    35
  ],

  iconAnchor:[
    17,
    35
  ]

});





const iconePC = L.icon({

  iconUrl:
    "https://cdn-icons-png.flaticon.com/512/854/854878.png",

  iconSize:[
    45,
    45
  ],

  iconAnchor:[
    22,
    45
  ]

});







function MapView({

  parcs,

  positionAgent,

  traceGPS,

  route,

  retourPC,

  onFermerParc

}: Props) {



  const centreInitial:
    [number, number] =
    [
      43.6329,
      3.9025
    ];





  useEffect(()=>{


    console.log(
      "🗺️ Carte chargée"
    );


  },[]);







  return (

    <div

      className="
        w-full
        h-[600px]
        rounded-3xl
        overflow-hidden
        shadow-xl
        mt-6
      "

    >



      <MapContainer


        center={

          positionAgent

          ||

          centreInitial

        }


        zoom={15}


        style={{

          height:"100%",

          width:"100%"

        }}


      >



        <TileLayer


          attribution="&copy; OpenStreetMap"


          url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"


        />




        <MapCenter

          positionAgent={positionAgent}

        />





        <PositionMarker

          positionAgent={positionAgent}

        />





        <GPSTrace

          points={traceGPS}

        />





        <RouteLine

          points={route}

          color="blue"

        />






        {retourPC && positionAgent && (


          <RouteLine

            points={[

              positionAgent,

              [

                pc.latitude,

                pc.longitude

              ]

            ]}

            color="green"

          />

        )}







        <Marker


          position={[

            pc.latitude,

            pc.longitude

          ]}


          icon={iconePC}


        >

          <Popup>

            🏁

            <br />

            {pc.nom}

            <br />

            📍

            {pc.adresse}


          </Popup>


        </Marker>









        {parcs.map((parc)=>(


          <Marker


            key={parc.id}


            position={[

              parc.latitude,

              parc.longitude

            ]}


            icon={iconeParc}


          >

            <Popup>


              🌳

              <br />


              {parc.nom}


              <br />


              {parc.ferme

                ?

                "🔒 Fermé"

                :

                "✅ Ouvert"

              }





              {!parc.ferme && (


                <button


                  className="
                    mt-3
                    bg-green-700
                    text-white
                    px-3
                    py-1
                    rounded-xl
                  "


                  onClick={()=>


                    onFermerParc(

                      parc.id

                    )


                  }


                >

                  Fermer

                </button>


              )}



            </Popup>


          </Marker>


        ))}




      </MapContainer>


    </div>

  );


}





export default MapView;