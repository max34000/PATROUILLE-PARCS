/**
 * Calcul de distance GPS entre deux points
 * Retourne une distance en mètres
 */

export function distance(
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number
): number {

  const R = 6371000; // rayon moyen de la Terre en mètres

  const latRad1 = (lat1 * Math.PI) / 180;
  const latRad2 = (lat2 * Math.PI) / 180;

  const deltaLat = ((lat2 - lat1) * Math.PI) / 180;
  const deltaLon = ((lon2 - lon1) * Math.PI) / 180;

  const a =
    Math.sin(deltaLat / 2) ** 2 +
    Math.cos(latRad1) *
      Math.cos(latRad2) *
      Math.sin(deltaLon / 2) ** 2;

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  return Math.round(R * c);
}


/**
 * Alias de compatibilité
 * Permet aux anciens fichiers d'utiliser calculateDistance
 */

export const calculateDistance = distance;


/**
 * Formatage affichage terrain
 */

export function formatDistance(metres: number): string {

  if (metres < 1000) {
    return `${metres} m`;
  }

  return `${(metres / 1000).toFixed(1)} km`;
}