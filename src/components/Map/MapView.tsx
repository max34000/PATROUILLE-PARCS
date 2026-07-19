import {
  MapContainer,
  TileLayer,
  Marker,
  Popup
} from "react-leaflet";

import "leaflet/dist/leaflet.css";

import { useEffect } from "react";

import L from "leaflet";

import PositionMarker from "./PositionMarker";
import RouteLine from "./RouteLine";

import { pc } from "../../data/pc";



type Parc = {

  id: string;
  nom: string;
  adresse: string;
  latitude: number;
  longitude: number;
  ferme: boolean;
  heureFermeture?: string | null;

};



type Props = {

  parcs: Parc[];

  setParcs: React.Dispatch<
    React.SetStateAction<Parc[]>
  >;

  positionAgent: [number, number] | null;

  setPositionAgent:
    React.Dispatch<
      React.SetStateAction<[number, number] | null>
    >;

};





function MapView({

  parcs,

  setParcs,

  positionAgent,

  setPositionAgent

}: Props) {



  useEffect(() => {


    delete (L.Icon.Default.prototype as any)
      ._getIconUrl;


    L.Icon.Default.mergeOptions({

      iconRetinaUrl:
        "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",

      iconUrl:
        "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",

      shadowUrl:
        "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png"

    });


  }, []);






  function fermerParc(id:string) {


    const heure =
      new Date()
      .toLocaleTimeString(
        "fr-FR",
        {
          hour:"2-digit",
          minute:"2-digit"
        }
      );



    setParcs((anciens)=>

      anciens.map((parc)=>

        parc.id === id

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



      <PositionMarker

        positionAgent={positionAgent}

        setPositionAgent={setPositionAgent}

      />



      {parcs.map((parc)=>(


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

                onClick={()=>
                  fermerParc(parc.id)
                }

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

        parcs={parcs}

        positionAgent={positionAgent}

      />


    </MapContainer>

  );

}



export default MapView;