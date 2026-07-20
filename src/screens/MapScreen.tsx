import type { Parc } from "../types/Parc";

import MapView from "../components/Map/MapView";
import NextStop from "../components/Route/NextStop";
import Tournee from "../components/Route/Tournee";

type Props = {
  parcs: Parc[];
  setParcs: React.Dispatch<React.SetStateAction<Parc[]>>;
  positionAgent: [number, number] | null;
  traceGPS: [number, number][];
  navigation: {
    points: [number, number][];
  };
  retourPC: boolean;
  onFermerParc: (id: string) => void;
};

export default function MapScreen({
  parcs,
  setParcs,
  positionAgent,
  traceGPS,
  navigation,
  retourPC,
  onFermerParc,
}: Props) {
  return (
    <>
      <MapView
        parcs={parcs}
        setParcs={setParcs}
        positionAgent={positionAgent}
        traceGPS={traceGPS}
        route={navigation.points}
        retourPC={retourPC}
        onFermerParc={onFermerParc}
      />

      <NextStop
        parcs={parcs}
        positionAgent={positionAgent}
      />

      <Tournee
        parcs={parcs}
        positionAgent={positionAgent}
      />
    </>
  );
}