import {
  useEffect,
  useRef
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


  const premierFix = useRef(true);





  useEffect(()=>{


    if(

      !positionAgent

    ){

      return;

    }





    if(

      premierFix.current

    ){



      map.flyTo(

        positionAgent,

        map.getZoom(),

        {

          animate:true,

          duration:1

        }

      );



      premierFix.current = false;



    }



  },[

    positionAgent,

    map

  ]);





  return null;


}





export default MapCenter;