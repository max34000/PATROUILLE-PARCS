import {
  useEffect,
  useRef,
  useState
} from "react";


import type {
  Parc
} from "../types/Parc";


import {
  calculerItineraire
} from "../services/routing";





interface Navigation {


  points:

    [number, number][];


  distance:

    number | null;


  duree:

    number | null;


}








function distanceMetres(

  a:[number,number],

  b:[number,number]

){



  const R = 6371000;



  const lat1 =

    a[0] *

    Math.PI /

    180;



  const lat2 =

    b[0] *

    Math.PI /

    180;




  const dLat =

    (b[0]-a[0]) *

    Math.PI /

    180;




  const dLon =

    (b[1]-a[1]) *

    Math.PI /

    180;





  const x =


    Math.sin(dLat/2) ** 2 +

    Math.cos(lat1) *

    Math.cos(lat2) *

    Math.sin(dLon/2) ** 2;





  return (

    2 *

    R *

    Math.atan2(

      Math.sqrt(x),

      Math.sqrt(1-x)

    )

  );


}









export function useNavigation(


  positionAgent:

    [number,number] | null,


  parc:

    Parc | null


):Navigation {



  const [

    points,

    setPoints

  ] = useState<[number,number][]>([]);





  const [

    distance,

    setDistance

  ] = useState<number|null>(null);





  const [

    duree,

    setDuree

  ] = useState<number|null>(null);







  const dernierCalcul =

    useRef<[number,number]|null>(null);









  useEffect(()=>{



    async function charger(){



      if(

        !positionAgent ||

        !parc

      ){

        return;

      }







      if(

        dernierCalcul.current &&

        distanceMetres(

          dernierCalcul.current,

          positionAgent

        ) < 20

      ){

        return;

      }








      try{



        const resultat =

          await calculerItineraire(

            positionAgent,

            [

              parc.latitude,

              parc.longitude

            ]

          );







        setPoints(

  resultat.points

);







        setDistance(

          resultat.distance

        );







        setDuree(

          resultat.duree

        );







        dernierCalcul.current =

          positionAgent;



      }


      catch(error){



        console.error(

          "Erreur navigation",

          error

        );


      }



    }






    charger();





  },[

    positionAgent,

    parc

  ]);








  return {


    points,


    distance,


    duree


  };

}