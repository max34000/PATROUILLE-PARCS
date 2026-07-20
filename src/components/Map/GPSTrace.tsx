import {
  Polyline
} from "react-leaflet";



interface Props {

  points:
    [number, number][];

}




function GPSTrace({

  points

}: Props) {


  if(points.length < 2){

    return null;

  }





  return (

    <Polyline

      positions={points}

      color="blue"

      weight={5}

      opacity={0.8}

    />

  );

}



export default GPSTrace;