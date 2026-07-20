import {
  useEffect,
  useState
} from "react";


export interface GPSPosition {

  latitude:number;

  longitude:number;

  precision:number;

  vitesse:number | null;

  cap:number | null;

  heure:number;

}





export function useGPS(){


  const [position,setPosition] =

    useState<GPSPosition | null>(null);



  const [erreur,setErreur] =

    useState<string | null>(null);






  useEffect(()=>{


    if(!navigator.geolocation){


      setErreur(
        "GPS non disponible"
      );


      return;

    }






    const watcher =

      navigator.geolocation.watchPosition(


        (data)=>{


          const precision =

            data.coords.accuracy;





          /*
            On ignore les positions
            trop imprécises
          */

          if(precision > 80){

            console.log(
              "GPS ignoré précision",
              precision,
              "m"
            );

            return;

          }






          setPosition({


            latitude:

              data.coords.latitude,



            longitude:

              data.coords.longitude,



            precision,



            vitesse:

              data.coords.speed,



            cap:

              data.coords.heading,



            heure:

              Date.now()


          });



          setErreur(null);



          console.log(

            "📍 GPS",

            data.coords.latitude,

            data.coords.longitude,

            "precision",

            precision

          );


        },





        (error)=>{


          console.error(

            "Erreur GPS",

            error.message

          );


          setErreur(

            error.message

          );


        },





        {


          enableHighAccuracy:true,


          timeout:15000,


          maximumAge:2000


        }


      );







    return ()=>{


      navigator.geolocation.clearWatch(

        watcher

      );


    };




  },[]);






  return {


    position,

    erreur


  };


}