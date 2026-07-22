# 🚀 ROADMAP

Évolution prévue de PATROUILLE-PARCS.

Ce document décrit les fonctionnalités envisagées pour les prochaines versions.

---

# ✅ Version actuelle

## PATROUILLE-PARCS V3.0.1

Statut :

🟢 Production

Fonctionnalités disponibles :

- carte interactive ;
- GPS agent ;
- affichage des parcs ;
- calcul de tournée ;
- fermeture des parcs ;
- progression ;
- navigation ;
- retour PC Papa Charlie ;
- PWA ;
- déploiement GitHub Pages.

---

# 🚧 Version 3.1

## Objectif principal

## Recalcul dynamique de tournée

La V3.0 utilise un calcul initial.

La V3.1 doit permettre une adaptation permanente selon la position réelle de l'agent.

---

## Nouveau fonctionnement

Avant :

```
Position départ

↓

Calcul tournée

↓

Parc A

↓

Parc B

↓

Parc C
```

Après :

```
Position GPS actuelle

↓

Recherche meilleur prochain parc

↓

Navigation

↓

Fermeture

↓

Nouveau calcul
```

---

# Fonctionnalités V3.1

## 🔄 Recalcul automatique

Après fermeture d'un parc :

- suppression du parc terminé ;
- récupération nouvelle position GPS ;
- nouveau calcul de proximité ;
- mise à jour itinéraire.

---

## 📍 Correction trajet

Si l'agent quitte l'itinéraire :

- détection écart ;
- proposition nouveau trajet ;
- recalcul.

---

## 🗺️ Amélioration navigation

Prévoir :

- distance restante ;
- temps estimé ;
- prochain parc ;
- indication direction.

---

## 📊 Amélioration progression

Ajouter :

- distance parcourue ;
- distance restante ;
- temps de tournée ;
- heure estimée de fin.

---

# 🔮 Version 3.2

## Historique et statistiques

Objectif :

Conserver les tournées réalisées.

---

## Fonctionnalités envisagées

### Historique

Sauvegarder :

- date ;
- heure départ ;
- heure fin ;
- parcs visités.

---

### Statistiques

Afficher :

- nombre de tournées ;
- distance moyenne ;
- durée moyenne ;
- nombre de parcs fermés.

---

### Export

Possibilités :

- PDF ;
- CSV ;
- rapport quotidien.

---

# 🚀 Version 4

## Passage à une architecture connectée

Objectif :

Transformer PATROUILLE-PARCS en solution multi-utilisateurs.

---

# Fonctionnalités possibles

## 👥 Multi-agents

Gestion :

- plusieurs agents ;
- plusieurs tournées ;
- affectation des secteurs.

---

## ☁️ Serveur distant

Ajout :

- base de données ;
- synchronisation ;
- sauvegarde automatique.

---

## 🔐 Authentification

Possibilités :

- comptes agents ;
- rôles ;
- administration.

---

## 📱 Tableau de bord

Pour les responsables :

- suivi des tournées ;
- état des parcs ;
- statistiques globales.

---

# 💡 Idées futures

## Mode hors connexion avancé

Objectif :

Permettre une utilisation complète sans réseau.

---

## Notifications

Exemples :

- rappel de tournée ;
- problème GPS ;
- changement de mission.

---

## Gestion des incidents

Ajouter :

- signalement problème ;
- photo ;
- commentaire ;
- localisation.

---

## Maintenance des parcs

Possibilité :

- signaler une anomalie ;
- suivre les interventions.

---

# Principes d'évolution

Chaque évolution doit respecter :

## Stabilité

Une nouvelle fonctionnalité ne doit jamais casser une fonctionnalité existante.

---

## Simplicité

L'application doit rester utilisable rapidement sur le terrain.

---

## Mobilité

Chaque nouvelle fonction doit être pensée smartphone en priorité.

---

## Documentation

Chaque version doit mettre à jour :

- README.md ;
- README_CHATGPT.md ;
- CHANGELOG.md ;
- ROADMAP.md.

---

# Vision finale

PATROUILLE-PARCS doit devenir un outil terrain complet permettant :

- la préparation des tournées ;
- l'accompagnement GPS ;
- le suivi temps réel ;
- l'historique ;
- l'analyse des interventions.

---

# Version du document

Dernière mise à jour :

V3.0.1
