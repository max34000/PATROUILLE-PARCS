const API_KEY = import.meta.env.VITE_ORS_API_KEY;



export interface ItineraireResultat {


  distance:

    number;


  duree:

    number;


  points:

    [number, number][];


}







export async function calculerItineraire(


  depart:

    [number, number],


  arrivee:

    [number, number]


): Promise<ItineraireResultat> {



  if(!API_KEY){


    throw new Error(

      "Clé OpenRouteService absente"

    );


  }







  const response = await fetch(


    "https://api.openrouteservice.org/v2/directions/driving-car/geojson",


    {


      method:"POST",



      headers:{


        Authorization:API_KEY,


        "Content-Type":

          "application/json"


      },



      body:JSON.stringify({


        coordinates:[



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









  if(!response.ok){



    throw new Error(

      "Erreur OpenRouteService"

    );


  }







  const data =

    await response.json();







  const trajet =

    data.features?.[0];







  if(!trajet){



    throw new Error(

      "Aucun itinéraire trouvé"

    );


  }









  return {



    distance:


      trajet

      .properties

      .summary

      .distance

      /

      1000,







    duree:


      trajet

      .properties

      .summary

      .duration

      /

      60,







    points:


      trajet

      .geometry

      .coordinates

      .map(

        (point:number[])=>[


          point[1],


          point[0]


        ]


      )



  };



}