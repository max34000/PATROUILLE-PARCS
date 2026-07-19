import { useEffect } from "react";
import { useMap } from "react-leaflet";


type Props = {
  setPositionAgent: (
    position: [number, number]
  ) => void;
};



function PositionMarker({
  setPositionAgent
}: Props) {


  const map = useMap();



  useEffect(() => {


    if (!navigator.geolocation) {

      const positionTest: [number, number] = [
        43.633,
        3.902
      ];

      setPositionAgent(positionTest);
      map.setView(positionTest, 15);

      return;

    }



    navigator.geolocation.getCurrentPosition(


      (pos) => {


        const coords: [number, number] = [

          pos.coords.latitude,

          pos.coords.longitude

        ];


        setPositionAgent(coords);

        map.setView(coords, 16);


      },



      () => {


        console.log(
          "GPS indisponible - mode test"
        );

        const positionTest: [number, number] = [
          43.633,
          3.902
        ];


        setPositionAgent(positionTest);

        map.setView(
          positionTest,
          15
        );


      },



      {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 10000
      }


    );


  }, [map, setPositionAgent]);



  return null;

}


export default PositionMarker;