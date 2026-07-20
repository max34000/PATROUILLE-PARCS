import {
  pc
} from "../../data/pc";


import {
  ouvrirNavigation
} from "../../utils/navigation";







function RetourPC(){





  function naviguer(){


    ouvrirNavigation({

  id:"pc",

  nom:pc.nom,

  adresse:pc.adresse,

  latitude:pc.latitude,

  longitude:pc.longitude,

  ferme:false

});


  }








  return (

    <div

      className="
        bg-white
        text-green-800
        rounded-3xl
        shadow-xl
        p-8
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

        🏁 Retour PC Papa Charlie

      </h2>








      <p className="mt-4 text-xl">

        📍 {pc.adresse}

      </p>







      <button

        onClick={naviguer}

        className="
          mt-6
          bg-green-700
          text-white
          px-8
          py-4
          rounded-2xl
          font-bold
          text-xl
        "

      >

        🧭 Naviguer vers le PC

      </button>





    </div>

  );

}





export default RetourPC;