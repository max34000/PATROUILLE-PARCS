import { calculerTournee } from "../../utils/routeOptimizer";
import { pc } from "../../data/pc";


type Parc = {
  id: string;
  nom: string;
  adresse: string;
  latitude: number;
  longitude: number;
  ferme: boolean;
};


type Props = {
  parcs: Parc[];
  positionAgent: [number, number] | null;
};



function Tournee({
  parcs,
  positionAgent
}: Props) {


  if (!positionAgent) {

    return (
      <div className="bg-white text-green-800 rounded-2xl p-5 mt-6 shadow-xl">
        📍 Attente GPS...
      </div>
    );

  }



  const ordre = calculerTournee(
    positionAgent,
    parcs,
    pc
  );



  return (

    <div className="bg-white text-green-800 rounded-2xl p-5 mt-6 shadow-xl">


      <h2 className="text-xl font-bold mb-4">
        🚓 Tournée proposée
      </h2>



      {ordre.map((parc, index) => (

        <div
          key={parc.id}
          className="border-b py-2"
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