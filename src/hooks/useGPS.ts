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





  const [

    position,

    setPosition

  ] = useState<GPSPosition | null>(null);





  const [

    erreur,

    setErreur

  ] = useState<string | null>(null);









  useEffect(()=>{



    console.log(

      "🚀 Démarrage GPS"

    );







    if(!navigator.geolocation){



      setErreur(

        "GPS non disponible sur cet appareil"

      );



      console.error(

        "❌ navigator.geolocation absent"

      );



      return;

    }









    const watcher =

      navigator.geolocation.watchPosition(





        (data)=>{





          const precision =

            data.coords.accuracy;







          console.log(

            "📡 Position reçue",

            {

              latitude:

                data.coords.latitude,


              longitude:

                data.coords.longitude,


              precision

            }

          );









          if(precision > 80){



            console.warn(

              "⚠️ Position ignorée précision",

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

              data.coords.speed ?? null,





            cap:

              data.coords.heading ?? null,





            heure:

              Date.now()



          });







          setErreur(null);





        },







        (error)=>{





          console.error(

            "❌ Erreur GPS",

            {

              code:error.code,

              message:error.message

            }

          );







          switch(error.code){



            case 1:



              setErreur(

                "Autorisation GPS refusée"

              );

              break;





            case 2:



              setErreur(

                "Position GPS indisponible"

              );

              break;





            case 3:



              setErreur(

                "Délai GPS dépassé"

              );

              break;





            default:



              setErreur(

                "Erreur GPS inconnue"

              );

          }



        },







        {



          enableHighAccuracy:true,



          timeout:15000,



          maximumAge:2000



        }



      );









    return ()=>{





      console.log(

        "🛑 Arrêt GPS"

      );





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