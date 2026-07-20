import {
  Marker,
  Popup
} from "react-leaflet";

import L from "leaflet";



interface Props {

  positionAgent:
    [number, number] | null;

}





const iconeAgent = L.icon({

  iconUrl:

    "https://cdn-icons-png.flaticon.com/512/684/684908.png",


  iconSize:[

    40,

    40

  ],


  iconAnchor:[

    20,

    40

  ]


});







function PositionMarker({

  positionAgent

}: Props) {



  if(!positionAgent){


    return null;


  }







  return (


    <Marker


      position={positionAgent}


      icon={iconeAgent}


    >


      <Popup>


        🚓 Agent en patrouille


        <br />


        📍 GPS temps réel actif


        <br />


        Latitude :

        {" "}

        {positionAgent[0].toFixed(6)}


        <br />


        Longitude :

        {" "}

        {positionAgent[1].toFixed(6)}


      </Popup>


    </Marker>


  );

}




export default PositionMarker;