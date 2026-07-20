import { useEffect } from "react";

import {
  useMap
} from "react-leaflet";



interface Props {

  position:
    [number, number] | null;


  destination:
    [number, number] | null;

}





function MapCenter({

  position,

  destination

}: Props) {


  const map = useMap();





  useEffect(() => {


    if (!position) {

      return;

    }





    if (destination) {


      const bounds = [

        position,

        destination

      ] as [

        [number, number],

        [number, number]

      ];





      map.fitBounds(

        bounds,

        {

          padding: [
            50,
            50
          ]

        }

      );


    }

    else {


      map.flyTo(

        position,

        15,

        {

          duration: 1

        }

      );


    }



  }, [

    position,

    destination,

    map

  ]);





  return null;

}



export default MapCenter;
