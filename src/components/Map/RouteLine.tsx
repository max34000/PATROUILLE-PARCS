import { Polyline } from "react-leaflet";


interface RouteLineProps {

  points: [number, number][];

  color?: string;

}





function RouteLine({

  points,

  color = "blue"

}: RouteLineProps) {



  if (points.length === 0) {

    return null;

  }





  return (

    <Polyline

      positions={points}

      color={color}

      weight={6}

      opacity={0.9}

      lineCap="round"

      lineJoin="round"

    />

  );

}





export default RouteLine;
