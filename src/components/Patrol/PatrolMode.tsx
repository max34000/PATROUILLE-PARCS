import type { Parc } from "../../types/Parc";


interface Props {

  parcSuivant: Parc | null;

  distance: number | null;

  duree: number | null;

  onFermer: () => void;

}





function PatrolMode({

  parcSuivant,

  distance,

  duree,

  onFermer

}: Props) {



  if (!parcSuivant) {


    return (

      <div className="
        min-h-screen
        bg-green-700
        text-white
        flex
        flex-col
        items-center
        justify-center
        p-6
        text-center
      ">


        <h1 className="
          text-4xl
          font-bold
        ">

          🎉 Tournée terminée

        </h1>



        <p className="text-xl mt-6">

          Tous les parcs sont fermés

        </p>


      </div>

    );

  }





  function ouvrirNavigation() {


    const url =

      `https://www.google.com/maps/dir/?api=1&destination=${parcSuivant.latitude},${parcSuivant.longitude}`;


    window.open(
      url,
      "_blank"
    );

  }







  return (

    <div className="
      min-h-screen
      bg-green-700
      text-white
      flex
      flex-col
      items-center
      p-6
    ">



      <h1 className="
        text-4xl
        font-bold
        mt-8
      ">

        🚓 PATROUILLE

      </h1>







      <div className="
        bg-white
        text-green-800
        rounded-3xl
        shadow-xl
        p-8
        mt-10
        w-full
        max-w-md
        text-center
      ">



        <p className="text-lg">

          Prochain arrêt

        </p>




        <h2 className="
          text-3xl
          font-bold
          mt-4
        ">

          🌳 {parcSuivant.nom}

        </h2>





        <p className="mt-4">

          📍 {parcSuivant.adresse}

        </p>







        {distance !== null && (


          <p className="
            text-xl
            mt-6
          ">

            📏 {distance.toFixed(2)} km

          </p>


        )}







        {duree !== null && (


          <p className="text-xl">

            ⏱ {Math.round(duree)} min

          </p>


        )}




      </div>









      <button


        onClick={ouvrirNavigation}


        className="
          mt-8
          w-full
          max-w-md
          bg-white
          text-green-700
          text-2xl
          font-bold
          py-6
          rounded-3xl
          shadow-xl
        "

      >

        🚗 Y ALLER


      </button>









      <button


        onClick={onFermer}


        className="
          mt-5
          w-full
          max-w-md
          bg-green-500
          text-white
          text-2xl
          font-bold
          py-6
          rounded-3xl
          shadow-xl
        "

      >

        ✅ PARC FERMÉ


      </button>





    </div>

  );

}





export default PatrolMode;