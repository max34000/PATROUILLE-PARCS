import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import type { Dispatch, SetStateAction } from "react";

import { pc } from "../../data/pc";
import PositionMarker from "./PositionMarker";
import RouteLine from "./RouteLine";


type Parc = {
  id: string;
  nom: string;
  adresse: string;
  latitude: number;
  longitude: number;
  ferme: boolean;
  heureFermeture: string | null;
};


type MapViewProps = {

  parcs: Parc[];

  setParcs: Dispatch<
    SetStateAction<Parc[]>
  >;

  positionAgent: [number, number] | null;

  setPositionAgent: Dispatch<
    SetStateAction<[number, number] | null>
  >;

};





function MapView({

  parcs,

  setParcs,

  positionAgent,

  setPositionAgent

}: MapViewProps) {



  function fermerParc(id: string) {


  const maintenant = new Date();


  const heure =
    maintenant.toLocaleTimeString(
      "fr-FR",
      {
        hour: "2-digit",
        minute: "2-digit"
      }
    );



  setParcs((anciens) =>

    anciens.map((parc) =>


      parc.id === id

        ? {

            ...parc,

            ferme: true,

            heureFermeture: heure

          }

        : parc


    )

  );


}





  return (

    <MapContainer

      center={[
        43.633,
        3.902
      ]}

      zoom={14}

      style={{
        height: "400px",
        width: "100%"
      }}

    >



      <TileLayer

        url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"

        attribution="&copy; OpenStreetMap contributors"

      />




      {/* POSITION AGENT */}

      <PositionMarker

        setPositionAgent={
          setPositionAgent
        }

      />
      <RouteLine
  parcs={parcs}
  positionAgent={positionAgent}
/>





      {/* PARCS */}

      {parcs.map((parc) => (


        <Marker

          key={parc.id}

          position={[

            parc.latitude,

            parc.longitude

          ]}

        >


          <Popup>


            <div>


              <h3 className="font-bold text-lg">

                🌳 {parc.nom}

              </h3>



              <p>

                {parc.adresse}

              </p>




              <p className="mt-2">

Statut :

{parc.ferme

? " 🟢 Fermé"

: " 🔴 À fermer"

}

</p>


{parc.ferme && parc.heureFermeture && (

<p>

🕒 Fermé à : {parc.heureFermeture}

</p>

)}





              {!parc.ferme && (


                <button

                  onClick={() =>
                    fermerParc(parc.id)
                  }

                  style={{

                    marginTop: "10px",

                    background: "green",

                    color: "white",

                    padding: "8px",

                    borderRadius: "8px",

                    cursor: "pointer"

                  }}

                >

                  ✅ Fermer ce parc


                </button>


              )}



            </div>


          </Popup>



        </Marker>


      ))}







      {/* PC PAPA CHARLIE */}


      <Marker

        position={[

          pc.latitude,

          pc.longitude

        ]}

      >


        <Popup>


          <strong>

            🏁 PC Papa Charlie

          </strong>


          <br />


          {pc.adresse}


        </Popup>



      </Marker>





    </MapContainer>


  );

}



export default MapView;