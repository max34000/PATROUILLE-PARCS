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


import PositionMarker from "./PositionMarker";

import MapCenter from "./MapCenter";

import RouteLine from "./RouteLine";





interface Props {

  parcs: Parc[];

  setParcs:

    Dispatch<SetStateAction<Parc[]>>;


  positionAgent:

    [number, number] | null;


  retourPC:

    boolean;


  onFermerParc:

    (id:string)=>void;

}






const iconeParc = L.icon({

  iconUrl:
    "https://cdn-icons-png.flaticon.com/512/684/684908.png",

  iconSize:[
    32,
    32
  ],

  iconAnchor:[
    16,
    32
  ]

});







function MapView({

  parcs,

  positionAgent,

  retourPC,

  onFermerParc

}:Props){





  const centreInitial:
    [number,number] = [

      43.6329,

      3.9025

    ];





  useEffect(()=>{

    console.log(
      "🗺️ Carte GPS chargée"
    );

  },[]);







  return (

    <div className="
      w-full
      h-[500px]
      rounded-3xl
      overflow-hidden
      shadow-xl
      mt-6
    ">



      <MapContainer


        center={
          positionAgent || centreInitial
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

          destination={null}

        />






        <PositionMarker

          positionAgent={positionAgent}

        />








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


              <b>

                🌳 {parc.nom}

              </b>


              <br />


              {parc.adresse}


              <br />


              {parc.ferme

                ?

                "🔒 Fermé"

                :

                "🟢 Ouvert"

              }





              {!parc.ferme && (

                <button

                  style={{

                    marginTop:"10px",

                    background:"#15803d",

                    color:"white",

                    padding:"6px 12px",

                    borderRadius:"10px"

                  }}


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







        {retourPC && positionAgent && (


          <RouteLine


            points={[

              positionAgent,

              centreInitial

            ]}


            color="green"


          />


        )}






      </MapContainer>





    </div>

  );

}



export default MapView;