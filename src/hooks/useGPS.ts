import {
  useEffect,
  useState
} from "react";


interface GPSPosition {

  latitude: number;

  longitude: number;

  precision: number;

  vitesse: number | null;

  heure: number;

}



export function useGPS() {


  const [position, setPosition] =
    useState<GPSPosition | null>(null);



  const [erreur, setErreur] =
    useState<string | null>(null);





  useEffect(() => {


    if (!navigator.geolocation) {

      setErreur(
        "GPS non disponible"
      );

      return;

    }





    const watcher =

      navigator.geolocation.watchPosition(


        (data)=>{


          setPosition({

            latitude:
              data.coords.latitude,


            longitude:
              data.coords.longitude,


            precision:
              data.coords.accuracy,


            vitesse:
              data.coords.speed,


            heure:
              Date.now()

          });


          setErreur(null);


        },



        (error)=>{


          console.error(
            "Erreur GPS",
            error
          );


          setErreur(
            error.message
          );


        },



        {


          enableHighAccuracy:true,


          timeout:15000,


          maximumAge:3000


        }



      );







    return ()=>{


      navigator.geolocation.clearWatch(
        watcher
      );


    };



  }, []);







  return {

    position,

    erreur

  };


}
