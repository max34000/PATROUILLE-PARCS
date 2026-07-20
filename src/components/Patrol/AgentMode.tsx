import type { Parc } from "../../types/Parc";


interface Props {

  parcSuivant: Parc | null;

  distance: number | null;

  duree: number | null;

  onFermer: () => void;

  onNaviguer: () => void;

}



function AgentMode({

  parcSuivant,

  distance,

  duree,

  onFermer,

  onNaviguer,

}: Props) {



  if (!parcSuivant) {

    return (

      <div

        className="
          min-h-screen
          bg-green-700
          text-white
          flex
          items-center
          justify-center
          text-center
          p-6
        "

      >

        <h1 className="text-4xl font-bold">

          ✅ Tournée terminée

        </h1>

      </div>

    );

  }





  return (

    <div

      className="
        min-h-screen
        bg-green-700
        text-white
        p-6
      "

    >



      <h1

        className="
          text-4xl
          font-bold
          text-center
          mb-10
        "

      >

        🚓 MODE TERRAIN

      </h1>







      <div

        className="
          bg-white
          text-green-800
          rounded-3xl
          shadow-xl
          p-8
          text-center
        "

      >



        <p className="text-xl">

          Prochain parc

        </p>





        <h2

          className="
            text-4xl
            font-bold
            mt-5
          "

        >

          🌳 {parcSuivant.nom}

        </h2>





        <p className="mt-5 text-xl">

          📍 {parcSuivant.adresse}

        </p>







        {distance !== null && (

          <p

            className="
              text-3xl
              mt-8
            "

          >

            📏 {distance < 1

              ? `${Math.round(distance * 1000)} m`

              : `${distance.toFixed(1)} km`

            }

          </p>

        )}







        {duree !== null && (

          <p className="text-3xl">

            ⏱ {Math.round(duree)} min

          </p>

        )}



      </div>









      <button

        onClick={onNaviguer}

        className="
          mt-10
          w-full
          bg-white
          text-green-700
          text-3xl
          font-bold
          py-8
          rounded-3xl
          shadow-xl
        "

      >

        🧭 NAVIGUER

      </button>







      <button

        onClick={onFermer}

        className="
          mt-6
          w-full
          bg-green-500
          text-white
          text-3xl
          font-bold
          py-8
          rounded-3xl
          shadow-xl
        "

      >

        ✅ PARC FERMÉ

      </button>



    </div>

  );

}



export default AgentMode;