import type { HistoriqueAction } from "../types/Historique";


const CLE_HISTORIQUE = "patrouille-historique";


/**
 * Ajoute une action à l'historique local
 */

export function sauvegarderHistorique(
  action: HistoriqueAction
): void {

  const historique = chargerHistorique();

  historique.push(action);

  localStorage.setItem(
    CLE_HISTORIQUE,
    JSON.stringify(historique)
  );
}



/**
 * Récupère l'historique de tournée
 */

export function chargerHistorique(): HistoriqueAction[] {

  const data = localStorage.getItem(
    CLE_HISTORIQUE
  );


  if (!data) {
    return [];
  }


  try {

    return JSON.parse(data) as HistoriqueAction[];

  } catch {

    return [];

  }
}



/**
 * Efface l'historique local
 */

export function effacerHistorique(): void {

  localStorage.removeItem(
    CLE_HISTORIQUE
  );

}
