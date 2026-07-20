import type { Parc } from "../types/Parc";

import AgentMode from "../components/Patrol/AgentMode";

type Props = {
  prochainParc: Parc | null;
  distance: number | null;
  duree: number | null;
  onFermer: () => void;
  onNaviguer: () => void;
};

export default function TerrainScreen({
  prochainParc,
  distance,
  duree,
  onFermer,
  onNaviguer,
}: Props) {
  return (
    <AgentMode
      parcSuivant={prochainParc}
      distance={distance}
      duree={duree}
      onFermer={onFermer}
      onNaviguer={onNaviguer}
    />
  );
}