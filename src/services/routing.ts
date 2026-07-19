const API_KEY = import.meta.env.VITE_ORS_API_KEY;


export async function calculerItineraire(
  depart: [number, number],
  arrivee: [number, number]
) {


  const url =
    "https://api.openrouteservice.org/v2/directions/driving-car/geojson";


  const response = await fetch(
    url,
    {
      method: "POST",

      headers: {

        "Authorization": API_KEY,

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
    data.features[0];



  return {

    distance:
      trajet.properties.summary.distance / 1000,


    duree:
      trajet.properties.summary.duration / 60,


    geometrie:
      trajet.geometry.coordinates.map(
        (point:number[]) => [

          point[1],
          point[0]

        ]

      )

  };

}