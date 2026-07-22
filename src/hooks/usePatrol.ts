import { useMemo } from "react";
import { parcs } from "../data/parcs";
import type { Parc } from "../types/Parc";
import { calculerTournee } from "../utils/routeOptimizer";
import { pc } from "../data/pc";
import { sauvegarderHistorique } from "../utils/historique";

type Position = [number, number] | null;

type Props = {
  listeParcs: Parc[];
  setListeParcs: React.Dispatch<React.SetStateAction<Parc[]>>;
  positionAgent: Position;
  setRetourPC: React.Dispatch<React.SetStateAction<boolean>>;
};

export function usePatrol({
  listeParcs,
  setListeParcs,
  positionAgent,
  setRetourPC,
}: Props) {
  const prochainParc = useMemo(() => {

  if (!positionAgent) {
    return null;
  }


  const tournee = calculerTournee(
    positionAgent,
    listeParcs,
    pc
  );


  return tournee[0] ?? null;


}, [positionAgent, listeParcs]);

  function fermerParc(id: string) {
    const parc = listeParcs.find((p) => p.id === id);

    if (!parc) return;

    const heure = new Date().toLocaleTimeString("fr-FR", {
      hour: "2-digit",
      minute: "2-digit",
    });

    sauvegarderHistorique({
      parcId: parc.id,
      parcNom: parc.nom,
      heure,
    });

    setListeParcs((anciens) =>
      anciens.map((p) =>
        p.id === id
          ? {
              ...p,
              ferme: true,
              heureFermeture: heure,
            }
          : p
      )
    );

    const reste = listeParcs.some(
      (p) => !p.ferme && p.id !== id
    );

    if (!reste) {
      setTimeout(() => setRetourPC(true), 1000);
    }
  }

  function nouvelleTournee() {
    localStorage.removeItem("historique");

    setListeParcs(
      parcs.map((p) => ({
        ...p,
        ferme: false,
        heureFermeture: undefined,
      }))
    );

    setRetourPC(false);
  }

  return {
    prochainParc,
    fermerParc,
    nouvelleTournee,
  };
}