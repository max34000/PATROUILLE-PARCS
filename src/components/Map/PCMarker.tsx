import {
  Marker,
  Popup
} from "react-leaflet";

import L from "leaflet";

import {
  pc
} from "../../data/pc";



const iconePC = L.icon({

  iconUrl:
    "https://cdn-icons-png.flaticon.com/512/684/684908.png",

  iconSize:[
    45,
    45
  ],

  iconAnchor:[
    22,
    45
  ]

});





function PCMarker(){


  return (

    <Marker

      position={[

        pc.latitude,

        pc.longitude

      ]}

      icon={iconePC}

    >

      <Popup>

        🏠 {pc.nom}

        <br />

        📍 {pc.adresse}

      </Popup>


    </Marker>

  );

}



export default PCMarker;