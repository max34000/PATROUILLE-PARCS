import {
  pc
} from "../../data/pc";



function RetourPC() {



  return (

    <div className="
      bg-white
      text-green-800
      rounded-3xl
      shadow-xl
      p-8
      mt-6
      text-center
    ">



      <h2 className="
        text-3xl
        font-bold
      ">

        🏁 Retour PC Papa Charlie

      </h2>





      <p className="mt-4">

        📍 {pc.adresse}

      </p>





      <p className="mt-4">

        🚗 Itinéraire retour affiché sur la carte

      </p>



    </div>

  );

}



export default RetourPC;
