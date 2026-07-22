import type { Parc } from "../types/Parc";
import { distance } from "./distance";


export function trouverParcLePlusProche(
  position: [number, number],
  parcs: Parc[]
): Parc | null {


  const ouverts = parcs.filter(
    (parc) => !parc.ferme
  );


  if (ouverts.length === 0) {
    return null;
  }


  let meilleur = ouverts[0];

  let distanceMin = distance(
    position[0],
    position[1],
    meilleur.latitude,
    meilleur.longitude
  );


  ouverts.forEach((parc) => {

    const d = distance(
      position[0],
      position[1],
      parc.latitude,
      parc.longitude
    );


    if (d < distanceMin) {

      distanceMin = d;
      meilleur = parc;

    }

  });


  return meilleur;

}
