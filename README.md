# 🌳 PATROUILLE-PARCS

## Application mobile de surveillance des parcs

![Version](https://img.shields.io/badge/version-V3.0.1-blue)
![React](https://img.shields.io/badge/React-TypeScript-61dafb)
![PWA](https://img.shields.io/badge/PWA-ready-green)
![GitHub Pages](https://img.shields.io/badge/deploy-GitHub%20Pages-black)

---

## 📱 Présentation

**PATROUILLE-PARCS** est une application mobile destinée aux agents de surveillance des espaces publics.

Elle permet de réaliser une tournée terrain complète :

- localisation GPS de l'agent ;
- affichage des parcs sur carte ;
- calcul d'une tournée ;
- navigation ;
- fermeture des parcs visités ;
- suivi de progression ;
- retour au point PC Papa Charlie.

L'application est pensée pour une utilisation :

✅ sur smartphone  
✅ sur le terrain  
✅ avec une interface simple et rapide

---

# 🎯 Objectif

Remplacer une gestion papier ou manuelle des tournées par un outil numérique permettant :

- une meilleure organisation ;
- un suivi en temps réel ;
- une réduction des déplacements inutiles ;
- une traçabilité des interventions.

---

# 🗺️ Fonctionnalités principales

## Carte interactive

Basée sur :

- Leaflet ;
- React-Leaflet ;
- OpenStreetMap.

Fonctions :

✅ affichage des parcs  
✅ affichage du PC Papa Charlie  
✅ position GPS agent  
✅ tracé GPS  
✅ itinéraire de tournée

---

## 🚶 Gestion d'une tournée

L'agent peut :

- démarrer une tournée ;
- visualiser les prochains parcs ;
- naviguer vers un parc ;
- fermer un parc ;
- suivre son avancement.

---

## 🌳 Gestion des parcs

Chaque parc possède un état :

```
Ouvert
   |
   ↓
Fermé
```

Lorsqu'un parc est fermé :

- il est retiré de la tournée active ;
- la progression est mise à jour ;
- il n'est plus proposé comme étape suivante.

---

# 📍 Position GPS

L'application utilise la géolocalisation du téléphone pour :

- afficher la position de l'agent ;
- centrer la carte ;
- enregistrer la trace du déplacement.

---

# 🏁 PC Papa Charlie

Le PC Papa Charlie représente :

- le point de départ ;
- le point de retour de fin de tournée.

Lorsque la mission est terminée :

```
Dernier parc

↓

Retour PC Papa Charlie
```

---

---

# 🚓 Fonctionnement terrain

## Déroulement d'une mission

Le fonctionnement normal d'une tournée est :

```
Ouverture application

        ↓

Localisation GPS agent

        ↓

Calcul de tournée

        ↓

Déplacement vers premier parc

        ↓

Fermeture du parc

        ↓

Parc suivant

        ↓

Retour PC Papa Charlie
```

---

# 🧭 Navigation

Pour chaque parc :

L'agent peut :

- consulter les informations du parc ;
- lancer la navigation ;
- visualiser son déplacement ;
- fermer le parc une fois contrôlé.

---

# 📌 Informations affichées

Chaque parc contient :

- nom du parc ;
- coordonnées GPS ;
- état actuel ;
- position sur la carte.

Exemple :

```
🌳 Parc des Arceaux

Statut :
🟢 Ouvert

Action :
[ Naviguer ]

[ Fermer le parc ]
```

---

# 📡 Suivi GPS

Pendant la tournée :

L'application conserve :

- la position actuelle ;
- le déplacement effectué ;
- la trace GPS.

Affichage :

```
Position agent

      ●

      │
      │ trace GPS
      │
      ●────●────●

Parcs visités
```

---

# 🗺️ Calcul de tournée

Version actuelle :

```
Liste des parcs

↓

Calcul initial

↓

Ordre de passage

↓

Navigation
```

---

# 🔄 Évolution prévue

La prochaine version améliorera ce fonctionnement.

Objectif V3.1 :

```
Position GPS réelle

↓

Nouveau calcul

↓

Parc le plus pertinent

↓

Nouvelle navigation
```

Le système pourra :

- recalculer après fermeture d'un parc ;
- adapter la tournée ;
- éviter les trajets inutiles.

---

# 📱 Application Progressive Web App

PATROUILLE-PARCS fonctionne comme une application mobile.

Fonctions PWA :

✅ installation smartphone  
✅ icône sur écran d'accueil  
✅ mode application plein écran  
✅ cache des ressources  
✅ fonctionnement amélioré terrain

---

# 🌐 Déploiement

L'application est disponible via GitHub Pages :

```
https://max34000.github.io/PATROUILLE-PARCS/
```

Déploiement automatique :

```
Git push

↓

GitHub Actions

↓

Build Vite

↓

Publication Pages
```

---

---

# 🏗️ Architecture du projet

PATROUILLE-PARCS est développé avec :

| Technologie    | Utilisation                  |
| -------------- | ---------------------------- |
| React          | Interface utilisateur        |
| TypeScript     | Typage et sécurité du code   |
| Vite           | Compilation et développement |
| Tailwind CSS   | Interface graphique          |
| Leaflet        | Cartographie                 |
| React-Leaflet  | Intégration React            |
| PWA Plugin     | Installation mobile          |
| GitHub Actions | Déploiement automatique      |

---

# 📁 Structure du projet

```text
PATROUILLE-PARCS/

│
├── src/
│
│   ├── components/
│   │
│   │   ├── Map/
│   │   │   ├── MapView.tsx
│   │   │   ├── PositionMarker.tsx
│   │   │   ├── MapCenter.tsx
│   │   │   ├── RouteLine.tsx
│   │   │   └── GPSTrace.tsx
│   │   │
│   │   ├── Patrol/
│   │   │   ├── PatrolMode.tsx
│   │   │   └── AgentMode.tsx
│   │   │
│   │   ├── Route/
│   │   │   ├── NextStop.tsx
│   │   │   └── Tournee.tsx
│   │   │
│   │   └── Progression.tsx
│   │
│   ├── data/
│   │   ├── parcs.ts
│   │   └── pc.ts
│   │
│   ├── services/
│   │   └── routing.ts
│   │
│   ├── utils/
│   │   ├── distance.ts
│   │   └── historique.ts
│   │
│   ├── types/
│   │   └── Parc.ts
│   │
│   └── App.tsx
│
├── public/
│
│   ├── leaflet/
│   │   ├── marker-icon.png
│   │   ├── marker-icon-2x.png
│   │   └── marker-shadow.png
│   │
│   ├── pwa-192x192.png
│   └── pwa-512x512.png
│
├── .github/
│   └── workflows/
│       └── deploy.yml
│
├── vite.config.ts
├── package.json
│
├── README.md
├── README_CHATGPT.md
├── CHANGELOG.md
├── ROADMAP.md
└── ARCHITECTURE.md
```

---

# 🧩 Organisation des composants

## MapView

Composant principal de cartographie.

Responsabilités :

- afficher la carte ;
- afficher les marqueurs ;
- afficher les routes ;
- afficher la trace GPS.

---

## PositionMarker

Affiche :

- position actuelle de l'agent ;
- déplacement GPS.

---

## RouteLine

Affiche :

- trajet vers un parc ;
- retour PC Papa Charlie.

---

## GPSTrace

Affiche :

- historique du déplacement ;
- chemin réellement parcouru.

---

## MapCenter

Permet :

- recentrage automatique ;
- suivi de l'agent.

---

# 📦 Gestion des données

## Parcs

Les parcs sont représentés par le type :

```typescript
Parc;
```

Chaque élément contient :

```typescript
{
  (id, nom, latitude, longitude, ferme);
}
```

---

## PC Papa Charlie

Le point de référence est stocké dans :

```
src/data/pc.ts
```

Contient :

- nom ;
- adresse ;
- coordonnées GPS.

---

# 🔐 Séparation des responsabilités

Le projet respecte la séparation :

```
Interface

↓

Composants React

↓

Services métier

↓

Données

```

Objectif :

- faciliter la maintenance ;
- éviter les fichiers trop complexes ;
- permettre les évolutions futures.

---

---

# ⚙️ Installation et développement

## Pré-requis

Avant de commencer, installer :

- Node.js ;
- npm ;
- Git.

Vérification :

```bash
node -v

npm -v

git --version
```

---

# 📥 Installation du projet

Cloner le dépôt :

```bash
git clone https://github.com/max34000/PATROUILLE-PARCS.git
```

Entrer dans le dossier :

```bash
cd PATROUILLE-PARCS
```

Installer les dépendances :

```bash
npm install
```

---

# ▶️ Lancement en développement

Démarrer le serveur local :

```bash
npm run dev
```

L'application sera disponible :

```
http://localhost:5173/
```

---

# 🏗️ Compilation production

Créer une version production :

```bash
npm run build
```

Résultat :

```
dist/
```

Le dossier contient :

- fichiers optimisés ;
- application compilée ;
- service worker PWA ;
- manifest.

---

# 👀 Prévisualisation production

Tester la version compilée :

```bash
npm run preview
```

---

# 🚀 Déploiement GitHub Pages

Le déploiement est automatisé avec GitHub Actions.

Workflow :

```
Modification locale

        ↓

git add

        ↓

git commit

        ↓

git push

        ↓

GitHub Actions

        ↓

npm install

        ↓

npm run build

        ↓

Publication GitHub Pages
```

---

# 🔧 Configuration Vite

Le projet utilise :

```
vite.config.ts
```

Configuration importante :

```typescript
base: "/PATROUILLE-PARCS/";
```

Cette valeur est nécessaire pour GitHub Pages.

---

# 📦 Build PWA

La génération produit :

```
dist/

├── index.html

├── manifest.webmanifest

├── sw.js

├── assets/

└── icônes PWA
```

---

# 🧪 Vérifications avant publication

Avant chaque mise en ligne :

## 1. Vérifier Git

```bash
git status
```

Résultat attendu :

```
working tree clean
```

---

## 2. Tester la compilation

```bash
npm run build
```

Résultat attendu :

```
✓ built successfully
```

---

## 3. Envoyer sur GitHub

```bash
git push origin v3.0-final
```

---

# 🌍 URL de production

Application disponible :

```
https://max34000.github.io/PATROUILLE-PARCS/
```

---

---

# 📜 Versions et historique

## Version actuelle

# V3.0.1

Statut :

🟢 Version stable en production

---

# ✅ Fonctionnalités disponibles

## Carte

- carte OpenStreetMap ;
- affichage des parcs ;
- affichage PC Papa Charlie ;
- marqueurs Leaflet corrigés ;
- position GPS agent.

---

## Tournée

- calcul initial ;
- ordre de passage ;
- affichage itinéraire ;
- retour PC.

---

## Gestion terrain

- mode terrain ;
- navigation ;
- fermeture des parcs ;
- suivi progression.

---

## Application mobile

- installation PWA ;
- icône smartphone ;
- cache applicatif ;
- fonctionnement mobile.

---

# 📝 Historique

## V3.0.0

Première version stable de la nouvelle architecture.

Ajouts :

- refonte React/TypeScript ;
- séparation des composants ;
- carte interactive ;
- gestion GPS ;
- gestion des parcs ;
- calcul tournée.

---

## V2.x

Version fonctionnelle intermédiaire.

Objectifs :

- valider le concept ;
- tester l'utilisation terrain ;
- préparer la version finale.

---

## V1.x

Prototype initial.

Fonctions :

- affichage carte ;
- premiers essais GPS ;
- validation du projet.

---

# 📚 Documentation du projet

Plusieurs documents accompagnent le développement.

---

## README.md

Ce document.

Contient :

- présentation ;
- installation ;
- utilisation ;
- architecture générale.

---

## README_CHATGPT.md

Documentation destinée à la reprise du développement.

Contient :

- contexte complet ;
- choix techniques ;
- historique des décisions ;
- points importants pour les futures évolutions.

---

## ARCHITECTURE.md

Documentation technique.

Contient :

- organisation du code ;
- rôle des composants ;
- fonctionnement interne.

---

## CHANGELOG.md

Historique détaillé des modifications.

Contient :

- corrections ;
- nouvelles fonctionnalités ;
- changements par version.

---

## ROADMAP.md

Vision future du projet.

Contient :

- évolutions prévues ;
- nouvelles fonctionnalités ;
- objectifs futurs.

---

# 🔮 Prochaines évolutions

## V3.1

Objectif principal :

## Recalcul dynamique de tournée

Améliorations prévues :

- nouveau calcul après fermeture d'un parc ;
- adaptation selon position GPS ;
- optimisation des déplacements.

---

## V3.2

Prévisions :

- historique des tournées ;
- statistiques ;
- rapports.

---

## V4

Vision long terme :

- multi-agents ;
- synchronisation serveur ;
- comptes utilisateurs ;
- tableau de bord.

---

# 🛠️ Règles de maintenance

Avant toute modification importante :

1. créer une sauvegarde Git ;
2. tester localement ;
3. lancer :

```bash
npm run build
```

4. vérifier la production ;
5. mettre à jour la documentation.

---

# 👨‍💻 Développeur

Projet :

```
PATROUILLE-PARCS
```

Développement :

```
max34000
```

Plateforme :

```
React + TypeScript + PWA
```

---

# 🌳 Objectif final

Créer un outil professionnel de gestion des tournées de surveillance des parcs :

- simple pour l'agent ;
- fiable sur le terrain ;
- évolutif dans le temps.

---

# Fin du README

Version :

```
PATROUILLE-PARCS V3.0.1
```
