# 🌳 PATROUILLE-PARCS

![React](https://img.shields.io/badge/React-19-blue?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)
![Vite](https://img.shields.io/badge/Vite-8-purple?logo=vite)
![Leaflet](https://img.shields.io/badge/Leaflet-OpenStreetMap-green?logo=leaflet)
![PWA](https://img.shields.io/badge/PWA-Ready-success)
![GitHub Pages](https://img.shields.io/badge/Deployed-GitHub%20Pages-black?logo=github)

Application **PWA** destinée aux agents de surveillance des parcs municipaux.

PATROUILLE-PARCS permet de préparer et réaliser une tournée de fermeture des parcs en utilisant la géolocalisation GPS, une carte OpenStreetMap et un calcul automatique de l'ordre de visite.

L'application fonctionne aussi bien sur ordinateur que sur smartphone Android ou iPhone et peut être installée comme une véritable application grâce au mode **Progressive Web App (PWA)**.

---

# 📑 Sommaire

- Présentation
- Fonctionnalités
- Captures d'écran
- Technologies utilisées
- Installation
- Utilisation
- Déploiement GitHub Pages
- Installation PWA
- Architecture
- Structure du projet
- Roadmap
- Historique
- Auteur

---

# 🎯 Présentation

Lors d'une tournée quotidienne, un agent doit fermer plusieurs parcs répartis sur la commune.

PATROUILLE-PARCS permet de :

- connaître la position GPS de l'agent ;
- afficher tous les parcs sur une carte OpenStreetMap ;
- calculer automatiquement un ordre de visite cohérent ;
- guider l'agent vers le prochain parc ;
- enregistrer la fermeture des parcs ;
- suivre l'avancement de la tournée ;
- terminer automatiquement la tournée par un retour vers **PC Papa Charlie**.

L'objectif est de disposer d'un outil simple, rapide et utilisable directement sur le terrain.

---

# ✨ Fonctionnalités

## 📍 Géolocalisation

- Position GPS en temps réel
- Recentrage automatique de la carte
- Marqueur de position

## 🌳 Gestion des parcs

- Liste complète des parcs
- Affichage sur la carte
- État Ouvert / Fermé
- Fermeture en un clic
- Annulation immédiate

## 🗺️ Navigation

- Calcul automatique de la tournée
- Affichage du prochain parc
- Tracé de l'itinéraire
- Navigation Google Maps

## 📈 Progression

- Nombre de parcs restants
- Pourcentage d'avancement
- Mise à jour en temps réel

## 🏁 Fin de tournée

Lorsque tous les parcs sont fermés :

- affichage du trajet retour ;
- navigation vers **PC Papa Charlie**.

## 📱 Progressive Web App

- installation Android
- installation iPhone
- fonctionnement plein écran
- mise à jour automatique
- cache des tuiles OpenStreetMap

---

# 📸 Captures d'écran

> À compléter avec les captures de la V3.

- Accueil
- Carte
- Navigation
- Fermeture d'un parc
- Progression
- Retour PC
- Installation PWA

---

# 🛠️ Technologies utilisées

Le projet est développé avec des technologies modernes, légères et entièrement open source.

| Technologie     | Rôle                           |
| --------------- | ------------------------------ |
| React 19        | Interface utilisateur          |
| TypeScript      | Typage et robustesse du code   |
| Vite            | Build et développement         |
| Tailwind CSS    | Mise en page responsive        |
| Leaflet         | Affichage cartographique       |
| React-Leaflet   | Intégration Leaflet avec React |
| OpenStreetMap   | Fournisseur de cartes          |
| Vite PWA Plugin | Progressive Web App            |
| GitHub Pages    | Hébergement de l'application   |

---

# 🚀 Installation

## Prérequis

- Node.js 20 ou supérieur
- npm
- Git

Cloner le dépôt :

```bash
git clone https://github.com/max34000/PATROUILLE-PARCS.git
```

Entrer dans le projet :

```bash
cd PATROUILLE-PARCS
```

Installer les dépendances :

```bash
npm install
```

Lancer le serveur de développement :

```bash
npm run dev
```

L'application est alors disponible sur :

```
http://localhost:5173
```

---

# 📦 Compilation

Créer la version de production :

```bash
npm run build
```

Prévisualiser le build :

```bash
npm run preview
```

---

# 🌐 Déploiement

PATROUILLE-PARCS est déployé automatiquement grâce à **GitHub Actions**.

À chaque mise à jour de la branche **v3.0-final** :

1. compilation du projet ;
2. génération de la PWA ;
3. publication sur GitHub Pages.

Application en ligne :

**https://max34000.github.io/PATROUILLE-PARCS/**

---

# 📱 Installation sur smartphone

## Android

Ouvrir l'application avec Chrome.

Puis :

```
Menu
→ Installer l'application
```

ou

```
Ajouter à l'écran d'accueil
```

---

## iPhone

Ouvrir l'application avec Safari.

Puis :

```
Partager

↓

Sur l'écran d'accueil
```

PATROUILLE-PARCS devient alors une véritable application.

---

# 🎮 Utilisation

## Démarrer la tournée

Autoriser la géolocalisation.

L'application récupère automatiquement la position GPS.

---

## Calcul de la tournée

Le calcul est réalisé à partir de la position actuelle de l'agent.

Les parcs sont proposés dans un ordre optimisé afin de limiter les déplacements.

---

## Fermer un parc

Sur la carte :

```
Touchez un parc
↓

Fermer
```

Le parc passe immédiatement à l'état :

```
🔒 Fermé
```

La progression est mise à jour automatiquement.

---

## Annuler une fermeture

Une fermeture peut être annulée immédiatement si une erreur a été commise.

---

## Retour PC

Lorsque tous les parcs sont fermés :

- le bouton Retour PC apparaît ;
- un itinéraire est tracé jusqu'au poste de commandement ;
- la navigation peut être lancée directement.

---

# 📡 Fonctionnement hors connexion

Grâce à la PWA :

- les ressources de l'application sont mises en cache ;
- les icônes restent disponibles ;
- les cartes OpenStreetMap sont partiellement mises en cache afin d'améliorer les performances sur le terrain.

Une connexion Internet reste nécessaire pour charger les zones cartographiques non encore visitées.

---

# 🏗️ Architecture du projet

PATROUILLE-PARCS est développé en React avec une architecture modulaire.

Chaque composant possède une responsabilité unique afin de faciliter la maintenance et les évolutions.

## Organisation générale

```
App.tsx
│
├── Header
├── Controls
├── Progress
├── MapView
│     ├── MapCenter
│     ├── PositionMarker
│     ├── RouteLine
│     └── GPSTrace
│
├── Hooks
│     ├── useGPS
│     ├── useRoute
│     └── …
│
└── Data
      ├── parcs.ts
      └── pc.ts
```

---

# 📂 Structure du projet

```
PATROUILLE-PARCS
│
├── public/
│   ├── leaflet/
│   ├── pwa-192x192.png
│   ├── pwa-512x512.png
│   └── apple-touch-icon.png
│
├── src/
│   ├── components/
│   │     ├── Controls/
│   │     ├── Header/
│   │     ├── Map/
│   │     ├── Progress/
│   │     └── ...
│   │
│   ├── data/
│   ├── hooks/
│   ├── services/
│   ├── types/
│   ├── utils/
│   └── App.tsx
│
├── .github/
│   └── workflows/
│         deploy.yml
│
├── README.md
├── CHANGELOG.md
├── ROADMAP.md
└── README_CHATGPT.md
```

---

# 💡 Principes de conception

Le projet suit plusieurs principes simples :

- composants réutilisables ;
- séparation de la logique métier et de l'interface ;
- typage complet avec TypeScript ;
- architecture facilement maintenable ;
- compatibilité ordinateur et mobile ;
- fonctionnement en Progressive Web App.

---

# 🗺️ Roadmap

## ✅ Version 3.0

- Géolocalisation GPS
- Carte OpenStreetMap
- Calcul de tournée
- Fermeture des parcs
- Annulation d'une fermeture
- Progression
- Retour PC Papa Charlie
- Navigation Google Maps
- Progressive Web App
- Déploiement GitHub Pages

---

## 🚧 Version 3.1

Évolutions prévues :

- recalcul automatique de la tournée après fermeture d'un parc ;
- recalcul si l'agent s'éloigne fortement de l'itinéraire ;
- optimisation permanente de l'ordre des parcs ;
- amélioration de la navigation.

---

## 🔮 Version 3.2

- historique des tournées ;
- statistiques ;
- temps de parcours ;
- distance parcourue ;
- export PDF.

---

## 🚀 Version 4

- multi-agents ;
- authentification ;
- synchronisation ;
- base de données ;
- temps réel ;
- tableau de bord.

---

# 📜 Historique

| Version | Description                                   |
| ------- | --------------------------------------------- |
| V1      | Prototype de l'application                    |
| V2      | Première version opérationnelle               |
| V3.0    | Refactoring complet et architecture modulaire |
| V3.0.1  | Déploiement GitHub Pages + PWA                |

---

# 🤝 Contribution

Les suggestions et améliorations sont les bienvenues.

Avant toute évolution importante :

- créer une branche dédiée ;
- documenter les changements ;
- mettre à jour le CHANGELOG.

---

# 👨‍💻 Auteur

Projet développé par **Maxime** avec l'assistance de **ChatGPT (OpenAI)**.

L'objectif est de fournir un outil moderne et fiable pour la gestion des tournées de surveillance des parcs municipaux.

---

# 📄 Licence

Ce projet est distribué sous licence MIT.

Voir le fichier `LICENSE`.

---

# ⭐ Remerciements

Merci aux projets Open Source qui rendent cette application possible :

- React
- TypeScript
- Vite
- Leaflet
- React-Leaflet
- OpenStreetMap
- Tailwind CSS
- GitHub Pages

---

> **PATROUILLE-PARCS V3.0** constitue la première version stable déployée en production sous forme de Progressive Web App.
