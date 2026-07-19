import type { HistoriqueAction } from "../types/Historique";



export function sauvegarderHistorique(

  action: HistoriqueAction

) {


  const ancien =

    localStorage.getItem(
      "patrouille-historique"
    );



  const historique:

    HistoriqueAction[] =

      ancien

      ?

      JSON.parse(ancien)

      :

      [];




  historique.push(action);




  localStorage.setItem(

    "patrouille-historique",

    JSON.stringify(historique)

  );


}




export function chargerHistorique()

{

  const data =

    localStorage.getItem(
      "patrouille-historique"
    );



  return data

    ?

    JSON.parse(data) as HistoriqueAction[]

    :

    [];

}
