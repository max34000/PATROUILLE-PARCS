import type { Parc } from "../types/Parc";


function distanceSimple(

  lat1:number,
  lon1:number,
  lat2:number,
  lon2:number

) {


  const R = 6371;


  const dLat =
    (lat2-lat1)
    *
    Math.PI
    /
    180;


  const dLon =
    (lon2-lon1)
    *
    Math.PI
    /
    180;



  const a =

    Math.sin(dLat/2)**2

    +

    Math.cos(lat1*Math.PI/180)

    *

    Math.cos(lat2*Math.PI/180)

    *

    Math.sin(dLon/2)**2;



  return (

    R *

    2 *

    Math.atan2(

      Math.sqrt(a),

      Math.sqrt(1-a)

    )

  );


}







export function trouverParcLePlusProche(

  position:[number,number],

  parcs:Parc[]

) {



  const ouverts =

    parcs.filter(

      (parc)=>

        !parc.ferme

    );



  if(ouverts.length===0){

    return null;

  }





  return ouverts.reduce(

    (plusProche, parc)=>{


      const distanceParc =

        distanceSimple(

          position[0],

          position[1],

          parc.latitude,

          parc.longitude

        );




      const distanceActuelle =

        distanceSimple(

          position[0],

          position[1],

          plusProche.latitude,

          plusProche.longitude

        );




      return distanceParc < distanceActuelle

        ?

        parc

        :

        plusProche;



    }

  );

}