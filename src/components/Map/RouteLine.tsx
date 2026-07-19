import { Polyline } from "react-leaflet";

interface RouteLineProps {
  points: [number, number][];
}

function RouteLine({ points }: RouteLineProps) {

  if (!points || points.length === 0) {
    return null;
  }


  return (
    <Polyline
      positions={points}
      color="blue"
      weight={6}
      opacity={0.9}
    />
  );

}

export default RouteLine;