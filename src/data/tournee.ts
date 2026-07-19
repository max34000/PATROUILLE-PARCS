export type Tournee = {

  date: string;

  heureDebut: string | null;

  heureFin: string | null;

  distanceTotale: number;

};



export const tourneeInitiale: Tournee = {

  date: new Date().toLocaleDateString("fr-FR"),

  heureDebut: null,

  heureFin: null,

  distanceTotale: 0

};