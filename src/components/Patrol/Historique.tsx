import { useEffect, useState } from "react";

import { chargerHistorique }
from "../../utils/historique";

import type { HistoriqueAction }
from "../../types/Historique";




function Historique() {


  const [historique, setHistorique] =

    useState<HistoriqueAction[]>([]);



  useEffect(()=>{


    setHistorique(

      chargerHistorique()

    );


  },[]);





  if(historique.length === 0){

    return null;

  }






  return (

    <div className="
      bg-white
      text-green-800
      rounded-3xl
      shadow-xl
      p-6
      mt-6
      w-full
      max-w-md
    ">


      <h2 className="
        text-2xl
        font-bold
        text-center
      ">

        📋 Historique tournée

      </h2>




      <div className="mt-5 space-y-4">


        {historique.map((action,index)=>(


          <div

            key={index}

            className="
              border-b
              pb-3
            "

          >


            <p className="
              font-bold
            ">

              ✅ {action.parcNom}

            </p>



            <p>

              🕒 {action.heure}

            </p>



          </div>


        ))}



      </div>



    </div>

  );

}



export default Historique;
