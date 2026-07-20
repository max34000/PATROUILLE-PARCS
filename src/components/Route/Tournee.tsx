import {
  useMemo
} from "react";

import type { Parc } from "../../types/Parc";

import {
  calculerTournee
} from "../../utils/routeOptimizer";

import {
  pc
} from "../../data/pc";



interface Props {

  parcs: Parc[];

  positionAgent:
    [number, number] | null;

}







function Tournee({

  parcs,

  positionAgent

}: Props) {





  const ordre = useMemo(() => {


    if (!positionAgent) {

      return [];

    }



    return calculerTournee(

      positionAgent,

      parcs,

      pc

    );


  }, [

    positionAgent,

    parcs

  ]);








  if (!positionAgent) {


    return (

      <div className="
        bg-white
        text-green-800
        rounded-2xl
        p-5
        mt-6
        shadow-xl
      ">

        📍 Attente GPS...

      </div>

    );

  }







  if (ordre.length === 0) {


    return (

      <div className="
        bg-white
        text-green-800
        rounded-2xl
        p-5
        mt-6
        shadow-xl
      ">

        🎉 Tournée terminée

      </div>

    );

  }








  return (

    <div className="
      bg-white
      text-green-800
      rounded-2xl
      p-5
      mt-6
      shadow-xl
    ">


      <h2 className="text-xl font-bold mb-4">

        🚓 Tournée proposée

      </h2>





      {ordre.map((parc, index) => (

        <div

          key={parc.id}

          className="
            border-b
            py-2
          "

        >

          <span className="font-bold">

            {index + 1}️⃣

          </span>


          {" "}


          {parc.nom}


        </div>

      ))}





      <div className="mt-4 font-bold">

        🏁 Retour PC

      </div>



    </div>

  );

}



export default Tournee;
