import { Polyline } from "react-leaflet";
import { pc } from "../../data/pc";
import { calculerTournee } from "../../utils/routeOptimizer";


type Parc = {
  id: string;
  nom: string;
  adresse: string;
  latitude: number;
  longitude: number;
  ferme: boolean;
};


type Props = {
  parcs: Parc[];
  positionAgent: [number, number] | null;
};



function RouteLine({
  parcs,
  positionAgent
}: Props) {


  if (!positionAgent) {
    return null;
  }



  const ordre = calculerTournee(
    positionAgent,
    parcs,
    pc
  );



  const points: [number, number][] = [];



  // départ
  points.push(positionAgent);



  // ordre optimisé
  ordre.forEach((parc) => {

    points.push([
      parc.latitude,
      parc.longitude
    ]);

  });



  // retour PC
  points.push([
    pc.latitude,
    pc.longitude
  ]);



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