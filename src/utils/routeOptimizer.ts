import type { Parc } from "../types/Parc";
import { distance } from "./distance";


interface Point {
  latitude: number;
  longitude: number;
}


/**
 * Calcul d'une tournée optimisée par proximité
 *
 * Principe :
 * - part de la position actuelle de l'agent
 * - cherche le parc ouvert le plus proche
 * - continue jusqu'à avoir traité tous les parcs
 *
 * (Algorithme du plus proche voisin)
 */

export function calculerTournee(
  position: [number, number],
  parcs: Parc[],
  _pc: Point
): Parc[] {


  const restants = parcs.filter(
    (parc) => !parc.ferme
  );


  const tournee: Parc[] = [];


  let positionActuelle = {
    latitude: position[0],
    longitude: position[1]
  };



  while (restants.length > 0) {


    let indexPlusProche = 0;

    let distancePlusCourte = Infinity;



    restants.forEach(
      (parc, index) => {


        const distanceParc = distance(
          positionActuelle.latitude,
          positionActuelle.longitude,
          parc.latitude,
          parc.longitude
        );


        if (distanceParc < distancePlusCourte) {

          distancePlusCourte = distanceParc;
          indexPlusProche = index;

        }

      }
    );



    const parcChoisi =
      restants[indexPlusProche];



    tournee.push(parcChoisi);



    positionActuelle = {
      latitude: parcChoisi.latitude,
      longitude: parcChoisi.longitude
    };



    restants.splice(
      indexPlusProche,
      1
    );

  }


  return tournee;

}
