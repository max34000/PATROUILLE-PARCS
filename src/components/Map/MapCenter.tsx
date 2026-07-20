import {
  useEffect
} from "react";

import {
  useMap
} from "react-leaflet";




interface Props {


  positionAgent:

    [number,number] | null;


  destination:

    [number,number] | null;


}






function MapCenter({

  positionAgent,

  destination

}:Props){



  const map = useMap();






  useEffect(()=>{


    if(positionAgent){


      map.setView(

        positionAgent,

        map.getZoom(),

        {

          animate:true

        }

      );


    }



  },[

    positionAgent,

    destination,

    map

  ]);






  return null;

}



export default MapCenter;