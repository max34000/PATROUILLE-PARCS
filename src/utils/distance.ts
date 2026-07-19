// Distance en mètres
export function calculerDistance(
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number
) {

  const R = 6371000; // rayon Terre en mètres

  const φ1 = lat1 * Math.PI / 180;
  const φ2 = lat2 * Math.PI / 180;

  const Δφ =
    (lat2 - lat1) * Math.PI / 180;

  const Δλ =
    (lon2 - lon1) * Math.PI / 180;


  const a =
    Math.sin(Δφ / 2) ** 2 +
    Math.cos(φ1) *
    Math.cos(φ2) *
    Math.sin(Δλ / 2) ** 2;


  const c =
    2 *
    Math.atan2(
      Math.sqrt(a),
      Math.sqrt(1 - a)
    );


  return R * c;

}




// Distance en kilomètres
export function distanceKm(
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number
) {

  return (
    calculerDistance(
      lat1,
      lon1,
      lat2,
      lon2
    ) / 1000
  );

}