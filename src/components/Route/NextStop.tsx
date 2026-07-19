import { calculerDistance } from "../../utils/distance";


type Parc = {

  id: string;
  nom: string;
  adresse: string;
  latitude: number;
  longitude: number;
  ferme: boolean;
  heureFermeture?: string | null;

};



type Props = {

  parcs: Parc[];

  positionAgent: [number, number] | null;

};





function NextStop({

  parcs,

  positionAgent

}: Props) {



  if (!positionAgent) {

    return (

      <div className="bg-white text-green-800 rounded-2xl p-4 mt-4 text-center">

        📍 Recherche de position...

      </div>

    );

  }




  const disponibles = parcs.filter(

    (parc) => !parc.ferme

  );




  if (disponibles.length === 0) {

    return (

      <div className="bg-white text-green-800 rounded-2xl p-4 mt-4 text-center">

        🎉 Tous les parcs sont fermés

      </div>

    );

  }




  let prochain = disponibles[0];

  let distanceMin = Infinity;



  disponibles.forEach((parc) => {


    const distance = calculerDistance(

      positionAgent[0],

      positionAgent[1],

      parc.latitude,

      parc.longitude

    );



    if (distance < distanceMin) {

      distanceMin = distance;

      prochain = parc;

    }


  });






  function naviguer() {


    const url =

      `https://www.google.com/maps/dir/?api=1` +

      `&destination=${prochain.latitude},${prochain.longitude}`;



    window.open(

      url,

      "_blank"

    );


  }







  return (

    <div className="bg-white text-green-800 rounded-2xl p-5 mt-4 shadow-xl">


      <h2 className="text-xl font-bold">

        📍 Prochain arrêt conseillé

      </h2>




      <p className="text-2xl mt-3">

        🌳 {prochain.nom}

      </p>



      <p className="mt-2">

        📏 Distance :

        {" "}

        {Math.round(distanceMin)}

        {" m"}

      </p>




      <button

        onClick={naviguer}

        className="

        mt-4

        w-full

        bg-green-700

        text-white

        font-bold

        py-3

        rounded-xl

        "

      >

        🚗 Y ALLER

      </button>




    </div>

  );

}



export default NextStop;