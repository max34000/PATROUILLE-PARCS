import type { Parc } from "../types/Parc";

import PatrolMode from "../components/Patrol/PatrolMode";
import Progression from "../components/Patrol/Progression";
import Historique from "../components/Patrol/Historique";

type Props = {
  listeParcs: Parc[];
  prochainParc: Parc | null;
  distance: number | null;
  duree: number | null;
  onFermer: () => void;
  onNaviguer: () => void;
};

export default function PatrolScreen({
  listeParcs,
  prochainParc,
  distance,
  duree,
  onFermer,
  onNaviguer,
}: Props) {
  return (
    <>
      <Progression
        total={listeParcs.length}
        fermes={listeParcs.filter((p) => p.ferme).length}
      />

      <PatrolMode
        parcSuivant={prochainParc}
        distance={distance}
        duree={duree}
        onFermer={onFermer}
        onNaviguer={onNaviguer}
      />

      <Historique />
    </>
  );
}