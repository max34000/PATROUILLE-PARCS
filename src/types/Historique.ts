export interface HistoriqueAction {

  /**
   * Identifiant du parc contrôlé
   */
  parcId: string;


  /**
   * Nom affiché du parc
   */
  parcNom: string;


  /**
   * Heure du passage
   */
  heure: string;


  /**
   * Informations complémentaires futures
   * (commentaire agent, anomalie, intervention...)
   */
  commentaire?: string;


  /**
   * Photo ou pièce jointe future
   */
  photo?: string;

}
