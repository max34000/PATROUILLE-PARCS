export interface Parc {

  id: string;

  nom: string;

  adresse: string;

  latitude: number;

  longitude: number;

  ferme: boolean;

  heureFermeture?: string | null;

}