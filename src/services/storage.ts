export function sauvegarder<T>(cle: string, valeur: T) {
  localStorage.setItem(cle, JSON.stringify(valeur));
}

export function charger<T>(cle: string, valeurParDefaut: T): T {
  const contenu = localStorage.getItem(cle);

  if (!contenu) {
    return valeurParDefaut;
  }

  try {
    return JSON.parse(contenu);
  } catch {
    return valeurParDefaut;
  }
}