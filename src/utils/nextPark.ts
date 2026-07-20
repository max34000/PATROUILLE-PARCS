import type { Parc } from "../types/Parc";
import { distance } from "./distance";


/**
 * Recherche le parc ouvert le plus proche
 * à partir de la position GPS de l'agent
 */

export function trouverParcLePlusProche(
  position: [number, number],
  parcs: Parc[]
): Parc | null {


  const parcsOuverts = parcs.filter(
    (parc) => !parc.ferme
  );


  if (parcsOuverts.length === 0) {
    return null;
  }


  return parcsOuverts.reduce(
    (plusProche, parcActuel) => {


      const distanceActuelle = distance(
        position[0],
        position[1],
        parcActuel.latitude,
        parcActuel.longitude
      );


      const distancePlusProche = distance(
        position[0],
        position[1],
        plusProche.latitude,
        plusProche.longitude
      );


      return distanceActuelle < distancePlusProche
        ? parcActuel
        : plusProche;

    }
  );
}
