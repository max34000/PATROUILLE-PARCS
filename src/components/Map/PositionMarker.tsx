import {
  Marker,
  Popup
} from "react-leaflet";

import {
  useEffect,
  useState
} from "react";

import L from "leaflet";



interface Props {

  positionAgent:
    [number, number] | null;


  setPositionAgent:
    React.Dispatch<
      React.SetStateAction<
        [number, number] | null
      >
    >;

}





const iconeAgent = L.icon({

  iconUrl:
    "https://cdn-icons-png.flaticon.com/512/684/684908.png",

  iconSize: [
    40,
    40
  ],

  iconAnchor: [
    20,
    40
  ],

});






function PositionMarker({

  positionAgent,

  setPositionAgent

}: Props) {



  const [precision, setPrecision] =
    useState<number | null>(null);



  const [gpsEtat, setGpsEtat] =
    useState(
      "Recherche GPS..."
    );





  useEffect(() => {


    if (!navigator.geolocation) {


      setGpsEtat(
        "GPS non disponible"
      );


      console.error(
        "La géolocalisation n'est pas disponible"
      );


      return;

    }





    setGpsEtat(
      "Activation GPS..."
    );



    console.log(
      "📡 GPS temps réel activé"
    );





    const watcher =

      navigator.geolocation.watchPosition(


        (position) => {



          const coords:
            [number, number] = [


              position.coords.latitude,


              position.coords.longitude


            ];





          console.log(
            "📍 Position GPS",
            coords
          );





          setPositionAgent(
            coords
          );





          setPrecision(
            position.coords.accuracy
          );





          setGpsEtat(
            "GPS actif"
          );



        },





        (error) => {



          console.error(
            "Erreur GPS",
            error
          );



          switch(error.code){


            case error.PERMISSION_DENIED:

              setGpsEtat(
                "Autorisation GPS refusée"
              );

              break;



            case error.POSITION_UNAVAILABLE:

              setGpsEtat(
                "Position GPS indisponible"
              );

              break;



            case error.TIMEOUT:

              setGpsEtat(
                "Délai GPS dépassé"
              );

              break;



            default:

              setGpsEtat(
                "Erreur GPS inconnue"
              );

          }



        },





        {


          enableHighAccuracy:true,


          timeout:15000,


          maximumAge:3000


        }



      );







    return () => {


      navigator.geolocation.clearWatch(
        watcher
      );


      console.log(
        "📡 GPS arrêté"
      );


    };





  }, [setPositionAgent]);









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


        📍 {gpsEtat}



        {precision !== null && (


          <>


            <br />


            🎯 Précision :


            {" "}


            {Math.round(precision)}


            m


          </>


        )}



        <br />


        🌐


        {" "}

        {positionAgent[0].toFixed(6)}


        ,

        {" "}

        {positionAgent[1].toFixed(6)}



      </Popup>



    </Marker>


  );


}





export default PositionMarker;