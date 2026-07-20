import {
  MapContainer,
  TileLayer,
  Marker,
  Popup
} from "react-leaflet";


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





L.Icon.Default.mergeOptions({

  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png",

  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png",

  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png"

});








interface Props {


  parcs: Parc[];


  setParcs:

    Dispatch<

      SetStateAction<Parc[]>

    >;



  positionAgent:

    [number,number] | null;



  traceGPS:

    [number,number][];



  route:

    [number,number][];



  retourPC:

    boolean;



  onFermerParc:

    (id:string)=>void;


}









function MapView({

  parcs,

  positionAgent,

  traceGPS,

  route,

  retourPC,

  onFermerParc

}:Props){





  const centreInitial:

    [number,number] =

    [

      43.6329,

      3.9025

    ];








  return (

    <div

      className="
      w-full
      h-[550px]
      rounded-3xl
      overflow-hidden
      shadow-xl
      mt-6
      "

    >





      <MapContainer


        center={

          positionAgent ||

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







        {positionAgent && (

          <MapCenter

            positionAgent={positionAgent}

          />

        )}








        <PositionMarker

          positionAgent={positionAgent}

        />








        <GPSTrace

          points={traceGPS}

        />








        {route.length > 0 && (

          <RouteLine

            points={route}

            color="blue"

          />

        )}









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

        >

          <Popup>

            🏁

            <br/>

            {pc.nom}

            <br/>

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


          >

            <Popup>


              🌳

              <br/>

              <b>

                {parc.nom}

              </b>


              <br/>


              {

                parc.ferme

                ?

                "🔒 Fermé"

                :

                "Ouvert"

              }





              {!parc.ferme && (

                <button

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