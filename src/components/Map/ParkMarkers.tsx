import {
  Marker,
  Popup
} from "react-leaflet";

import L from "leaflet";

import type {
  Parc
} from "../../types/Parc";



interface Props {

  parcs: Parc[];

}





const iconeParc = L.icon({

  iconUrl:
    "https://cdn-icons-png.flaticon.com/512/854/854878.png",

  iconSize:[
    32,
    32
  ],

  iconAnchor:[
    16,
    32
  ]

});






function ParkMarkers({

  parcs

}: Props){



  return (

    <>

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


            🌳 {parc.nom}

            <br />


            {parc.ferme

              ?

              "🔒 Fermé"

              :

              "✅ Ouvert"

            }


          </Popup>


        </Marker>


      ))}


    </>

  );

}



export default ParkMarkers;