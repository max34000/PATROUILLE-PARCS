import type {
  Parc
} from "../../types/Parc";





interface Props {


  parcSuivant:

    Parc | null;


  distance:

    number | null;


  duree:

    number | null;


  onFermer:

    ()=>void;


  onNaviguer:

    ()=>void;


}









function AgentMode({

  parcSuivant,

  distance,

  duree,

  onFermer,

  onNaviguer

}:Props){





  if(!parcSuivant){


    return (

      <div

        className="
          bg-white
          text-green-800
          rounded-3xl
          p-8
          shadow-xl
          text-center
        "

      >

        <h2 className="text-3xl font-bold">

          ✅ Patrouille terminée

        </h2>


      </div>

    );


  }








  return (

    <div

      className="
        bg-white
        text-green-800
        rounded-3xl
        p-8
        shadow-xl
        mt-6
        text-center
      "

    >





      <h2

        className="
          text-3xl
          font-bold
        "

      >

        🚓 Prochain parc

      </h2>







      <p

        className="
          text-2xl
          mt-6
          font-bold
        "

      >

        🌳 {parcSuivant.nom}

      </p>







      <div

        className="
          mt-6
          text-xl
        "

      >

        📍

        {

          distance !== null

          ?

          `${distance.toFixed(2)} km`

          :

          "Calcul..."

        }


        <br/>


        🚗

        {

          duree !== null

          ?

          `${Math.round(duree)} min`

          :

          "Calcul..."

        }


      </div>








      <button

        onClick={onNaviguer}

        className="
          w-full
          mt-8
          bg-blue-600
          text-white
          p-4
          rounded-2xl
          text-xl
          font-bold
        "

      >

        🧭 Naviguer

      </button>








      <button

        onClick={onFermer}

        className="
          w-full
          mt-4
          bg-green-700
          text-white
          p-4
          rounded-2xl
          text-xl
          font-bold
        "

      >

        🔒 Fermer le parc

      </button>





    </div>

  );

}





export default AgentMode;