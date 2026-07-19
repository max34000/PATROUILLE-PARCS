interface Props {

  onRetour: () => void;

}



function EndTournee({

  onRetour

}:Props){



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
        text-5xl
        font-bold
      ">

        🎉

      </h1>



      <h2 className="
        text-4xl
        font-bold
        mt-6
      ">

        Tournée terminée

      </h2>




      <p className="
        text-xl
        mt-6
      ">

        Tous les parcs sont fermés

      </p>





      <div className="
        bg-white
        text-green-800
        rounded-3xl
        shadow-xl
        p-8
        mt-8
        w-full
        max-w-md
      ">


        <h3 className="
          text-2xl
          font-bold
        ">

          🏁 Retour PC Papa Charlie

        </h3>



        <p className="mt-4">

          Rue des Églantiers

        </p>



      </div>





      <button

        onClick={onRetour}

        className="
          mt-8
          bg-white
          text-green-700
          text-2xl
          font-bold
          px-10
          py-6
          rounded-3xl
          shadow-xl
        "

      >

        🚗 NAVIGUER VERS LE PC

      </button>



    </div>

  );

}



export default EndTournee;
