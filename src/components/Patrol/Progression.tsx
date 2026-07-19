interface Props {

  total:number;

  fermes:number;

}



function Progression({

  total,

  fermes

}:Props){


  const pourcentage =

    total === 0

    ?

    100

    :

    Math.round(

      (fermes / total) * 100

    );




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
      text-center
    ">


      <h2 className="
        text-xl
        font-bold
      ">

        🚓 Tournée

      </h2>



      <p className="text-4xl font-bold mt-3">

        {fermes} / {total}

      </p>




      <div className="
        bg-gray-200
        rounded-full
        h-5
        mt-4
        overflow-hidden
      ">


        <div

          className="
            bg-green-600
            h-full
          "


          style={{

            width:`${pourcentage}%`

          }}

        />



      </div>



      <p className="mt-2">

        {pourcentage}% terminé

      </p>



    </div>

  );

}


export default Progression;