import { distanceKm } from "./distance";


type Point = {
  latitude:number;
  longitude:number;
};


type Parc = Point & {
  id:string;
  nom:string;
  adresse:string;
  ferme:boolean;
};



export function calculerTournee(
  position:[number,number],
  parcs:Parc[],
  pc:Point
) {


  const restants = parcs.filter(
    (parc)=>!parc.ferme
  );


  const tournee:Parc[] = [];

  let positionActuelle = {
    latitude:position[0],
    longitude:position[1]
  };



  while(restants.length > 0) {


    let indexPlusProche = 0;


    let distancePlusCourte =
      Infinity;



    restants.forEach((parc,index)=>{


      const d = distanceKm(
        positionActuelle.latitude,
        positionActuelle.longitude,
        parc.latitude,
        parc.longitude
      );


      if(d < distancePlusCourte){

        distancePlusCourte = d;
        indexPlusProche = index;

      }

    });



    const choisi =
      restants[indexPlusProche];


    tournee.push(choisi);



    positionActuelle = {
      latitude:choisi.latitude,
      longitude:choisi.longitude
    };


    restants.splice(
      indexPlusProche,
      1
    );


  }



  return tournee;

}