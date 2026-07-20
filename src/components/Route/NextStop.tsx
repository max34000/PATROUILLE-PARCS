import type { Parc } from "../../types/Parc";

import { distance, formatDistance } from "../../utils/distance";

import { ouvrirNavigation } from "../../utils/navigation";



interface Props {

  parcs: Parc[];

  positionAgent:
    [number, number] | null;

}





function NextStop({

  parcs,

  positionAgent

}: Props) {



  if (!positionAgent) {

    return (

      <div className="
        bg-white
        text-green-800
        rounded-2xl
        p-4
        mt-4
        text-center
      ">

        📍 Recherche de position...

      </div>

    );

  }






  const disponibles = parcs.filter(

    (parc) => !parc.ferme

  );






  if (disponibles.length === 0) {

    return (

      <div className="
        bg-white
        text-green-800
        rounded-2xl
        p-4
        mt-4
        text-center
      ">

        🎉 Tous les parcs sont fermés

      </div>

    );

  }






  const prochain = disponibles.reduce(

    (plusProche, parc) => {


      const distanceParc = distance(

        positionAgent[0],

        positionAgent[1],

        parc.latitude,

        parc.longitude

      );



      const distanceActuelle = distance(

        positionAgent[0],

        positionAgent[1],

        plusProche.latitude,

        plusProche.longitude

      );



      return distanceParc < distanceActuelle

        ? parc

        : plusProche;


    }

  );







  const distanceProchain = distance(

    positionAgent[0],

    positionAgent[1],

    prochain.latitude,

    prochain.longitude

  );







  return (

    <div className="
      bg-white
      text-green-800
      rounded-2xl
      p-5
      mt-4
      shadow-xl
    ">


      <h2 className="text-xl font-bold">

        📍 Prochain arrêt conseillé

      </h2>




      <p className="text-2xl mt-3">

        🌳 {prochain.nom}

      </p>




      <p className="mt-2">

        📏 Distance :

        {" "}

        {formatDistance(distanceProchain)}

      </p>






      <button

        onClick={() =>
          ouvrirNavigation(prochain)
        }

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
