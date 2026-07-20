const API_KEY = import.meta.env.VITE_ORS_API_KEY;


interface ItineraireResultat {

  distance: number; // kilomètres

  duree: number; // minutes

  geometrie: [number, number][];

}



/**
 * Calcul d'un itinéraire routier via OpenRouteService
 */

export async function calculerItineraire(
  depart: [number, number],
  arrivee: [number, number]
): Promise<ItineraireResultat> {


  if (!API_KEY) {

    throw new Error(
      "Clé API OpenRouteService absente"
    );

  }



  const url =
    "https://api.openrouteservice.org/v2/directions/driving-car/geojson";



  const response = await fetch(
    url,
    {
      method: "POST",

      headers: {

        Authorization: API_KEY,

        "Content-Type": "application/json"

      },

      body: JSON.stringify({

        coordinates: [

          [
            depart[1],
            depart[0]
          ],

          [
            arrivee[1],
            arrivee[0]
          ]

        ]

      })

    }
  );



  if (!response.ok) {

    throw new Error(
      "Erreur itinéraire OpenRouteService"
    );

  }



  const data = await response.json();



  const trajet =
    data.features?.[0];



  if (!trajet) {

    throw new Error(
      "Aucun itinéraire trouvé"
    );

  }



  return {

    distance:
      trajet.properties.summary.distance / 1000,


    duree:
      trajet.properties.summary.duration / 60,


    geometrie:
      trajet.geometry.coordinates.map(
        (point: number[]) => [
          point[1],
          point[0]
        ]
      )

  };

}
