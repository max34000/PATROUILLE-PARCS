import {
  MapContainer,
  TileLayer
} from "react-leaflet";

import {
  useEffect
} from "react";

import type {
  Dispatch,
  SetStateAction
} from "react";

import "leaflet/dist/leaflet.css";

import type {
  Parc
} from "../../types/Parc";


import PositionMarker from "./PositionMarker";

import MapCenter from "./MapCenter";

import RouteLine from "./RouteLine";

import GPSTrace from "./GPSTrace";

import ParkMarkers from "./ParkMarkers";

import PCMarker from "./PCMarker";





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



  retourPC:

    boolean;



  onFermerParc:

    (id:string)=>void;


}







function MapView({

  parcs,

  positionAgent,

  traceGPS,

  retourPC,

  onFermerParc

}: Props) {





  const centreInitial:

    [number,number] =

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
        h-[500px]
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






        {/* Marqueurs des parcs */}

        <ParkMarkers

          parcs={parcs}

        />






        {/* PC Papa Charlie */}

        <PCMarker />







        {/* Centrage automatique GPS */}

        <MapCenter

          positionAgent={positionAgent}

        />







        {/* Position agent */}

        <PositionMarker

          positionAgent={positionAgent}

        />







        {/* Trace du déplacement */}

        <GPSTrace

          points={traceGPS}

        />







        {/* Route retour PC */}

        {retourPC && (


          <RouteLine


            points={

              positionAgent

              ?

              [

                positionAgent,

                [

                  43.644969,

                  3.910237

                ]

              ]

              :

              []

            }


            color="green"


          />


        )}





      </MapContainer>








      <div

        className="
          bg-white
          text-green-800
          rounded-2xl
          p-4
          mt-4
          shadow-xl
        "

      >



        <h2

          className="
            font-bold
            text-xl
          "

        >

          🌳 Parcs

        </h2>






        {parcs.map((parc)=>(


          <div

            key={parc.id}

            className="
              flex
              justify-between
              items-center
              border-b
              py-2
            "

          >



            <span>


              {parc.ferme

                ?

                "🔒"

                :

                "🌳"

              }

              {" "}

              {parc.nom}


            </span>






            {!parc.ferme && (


              <button


                onClick={()=>


                  onFermerParc(

                    parc.id

                  )


                }


                className="
                  bg-green-700
                  text-white
                  px-3
                  py-1
                  rounded-xl
                "


              >

                Fermer


              </button>


            )}



          </div>


        ))}





      </div>





    </div>

  );

}



export default MapView;