import {
  useEffect
} from "react";

import {
  useMap
} from "react-leaflet";


interface Props {

  positionAgent:
    [number, number] | null;

}





function MapCenter({

  positionAgent

}: Props) {


  const map = useMap();




  useEffect(()=>{


    if(!positionAgent){

      return;

    }



    map.flyTo(

      positionAgent,

      map.getZoom(),

      {

        animate:true,

        duration:1

      }

    );



  },[

    positionAgent,

    map

  ]);




  return null;

}



export default MapCenter;