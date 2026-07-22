```md
# 🚓 PATROUILLE-PARCS

![PATROUILLE-PARCS](src/assets/hero.png)

## 🌳 Application mobile de gestion des tournées de surveillance des parcs

PATROUILLE-PARCS est une application web progressive (**PWA**) destinée aux agents de terrain chargés de la surveillance des parcs.

Elle permet de réaliser une tournée dynamique basée sur la position GPS réelle de l'agent :

- visualisation des parcs sur carte ;
- suivi GPS temps réel ;
- optimisation automatique de tournée ;
- navigation vers les parcs ;
- fermeture des parcs contrôlés ;
- historique des interventions ;
- fonctionnement sur smartphone.

L'objectif est de fournir un outil simple, rapide et adapté aux conditions réelles du terrain.

---

# 🚀 Version actuelle

## V3.1 — Tournée dynamique GPS

La version actuelle introduit une gestion intelligente de la tournée.

Contrairement à une liste fixe, l'application adapte le parcours selon la position réelle de l'agent.

Fonctionnement :
```

Position GPS agent
↓
Recherche des parcs ouverts
↓
Calcul du parc le plus proche
↓
Navigation
↓
Fermeture du parc
↓
Nouveau calcul automatique

```

Chaque fermeture entraîne une nouvelle optimisation.

---

# ✨ Fonctionnalités

## 🗺️ Carte interactive

- Carte basée sur OpenStreetMap.
- Affichage des parcs.
- Position GPS de l'agent.
- Affichage du poste de contrôle.
- Tracé du déplacement GPS.
- Affichage des itinéraires.

---

## 📍 Géolocalisation temps réel

L'application utilise le GPS du smartphone afin de :

- suivre la position de l'agent ;
- calculer les distances ;
- proposer le prochain parc ;
- enregistrer le déplacement.

Le système contrôle également la précision GPS afin d'éviter les positions trop imprécises.

---

## 🚓 Mode Patrouille

Le mode principal permet :

- d'afficher le prochain parc ;
- voir son adresse ;
- connaître la distance ;
- connaître le temps estimé ;
- lancer la navigation ;
- fermer le parc.

---

## 🌳 Gestion des parcs

Chaque parc possède :

- un identifiant unique ;
- un nom ;
- une adresse ;
- des coordonnées GPS ;
- un état ouvert/fermé ;
- une heure de fermeture.

Lorsqu'un parc est fermé :

- il est enregistré dans l'historique ;
- il est retiré du calcul de tournée ;
- le prochain parc est recalculé.

---

## 🧭 Navigation GPS

L'application peut ouvrir la navigation du téléphone vers le parc sélectionné.

Compatible avec les applications de navigation disponibles sur l'appareil.

---

# 📱 Application PWA

PATROUILLE-PARCS est installable comme une application mobile.

Fonctionnalités :

- installation sur écran d'accueil ;
- affichage plein écran ;
- icône personnalisée ;
- cache des ressources ;
- mise à jour automatique.

Application disponible :

```

https://max34000.github.io/PATROUILLE-PARCS/

```

---

# 🏗️ Architecture technique

## Technologies

| Technologie | Utilisation |
|---|---|
| React | Interface utilisateur |
| TypeScript | Typage du projet |
| Vite | Build et développement |
| Tailwind CSS | Interface graphique |
| Leaflet | Cartographie |
| OpenStreetMap | Données cartographiques |
| Vite PWA | Application installable |
| GitHub Pages | Hébergement |

---

# 📂 Structure du projet

```

PATROUILLE-PARCS

├── public
│ ├── icônes PWA
│ ├── ressources Leaflet
│ └── manifest

├── src

│ ├── components
│ │ ├── Layout
│ │ ├── Map
│ │ ├── Patrol
│ │ └── Route

│ ├── screens
│ │ ├── MapScreen
│ │ ├── PatrolScreen
│ │ └── TerrainScreen

│ ├── hooks
│ │ ├── useGPS
│ │ ├── useNavigation
│ │ └── usePatrol

│ ├── services

│ ├── utils
│ │ ├── distance
│ │ ├── historique
│ │ ├── navigation
│ │ └── routeOptimizer

│ ├── data
│ │ ├── parcs
│ │ ├── pc
│ │ └── tournee

│ └── types

├── vite.config.ts
├── package.json
└── README.md

```

---

# 🧠 Calcul de tournée

Le moteur de tournée utilise un algorithme de proximité :

**Plus proche voisin**

Principe :

```

Agent
↓
Parcs ouverts
↓
Calcul des distances
↓
Sélection du plus proche
↓
Nouvelle position
↓
Recalcul

```

La tournée commence toujours depuis la position réelle de l'agent.

Le poste de contrôle n'est pas utilisé comme point de départ obligatoire.

---

# 💾 Sauvegarde locale

L'application fonctionne sans serveur.

Les données sont conservées dans :

```

localStorage

````

Données sauvegardées :

- état des parcs ;
- progression de tournée ;
- historique des fermetures.

---

# 💻 Installation développeur

Pré-requis :

- Node.js
- npm
- Git


Cloner :

```bash
git clone https://github.com/max34000/PATROUILLE-PARCS.git
````

Entrer dans le projet :

```bash
cd PATROUILLE-PARCS
```

Installer :

```bash
npm install
```

---

# ▶️ Commandes

## Développement

```bash
npm run dev
```

Avec accès réseau :

```bash
npm run dev -- --host
```

---

## Compilation production

```bash
npm run build
```

---

## Prévisualisation

```bash
npm run preview
```

---

# 🚀 Déploiement

Le déploiement est réalisé automatiquement via GitHub Actions.

Branche principale :

```
v3.0-final
```

Après validation :

```bash
git add .
git commit -m "message"
git push origin v3.0-final
```

---

# 🔐 Sécurité

Les éléments sensibles doivent rester hors du dépôt :

- clés API ;
- fichiers `.env` ;
- tokens ;
- configurations privées.

Le fichier :

```
.env
```

est ignoré par Git.

---

# 🧪 Tests terrain

Avant validation d'une version :

## Test GPS

- autorisation localisation ;
- position correcte ;
- suivi déplacement.

## Test tournée

- premier parc correct ;
- fermeture d'un parc ;
- recalcul du suivant.

## Test PWA

- installation mobile ;
- mise à jour ;
- stockage local.

---

# 🗺️ Roadmap

## V3.2

Prévisions :

- amélioration affichage terrain ;
- meilleure gestion des itinéraires ;
- optimisation routière ;
- amélioration UX mobile.

## V4

Évolutions possibles :

- synchronisation serveur ;
- comptes utilisateurs ;
- statistiques ;
- gestion multi-agents.

---

# 📜 Historique

## V3.1

- Optimisation dynamique GPS.
- Départ depuis position agent.
- Recalcul automatique après fermeture.

## V3.0

- Application PWA complète.
- Carte interactive.
- Gestion des parcs.
- Historique local.

---

# 👨‍💻 Auteur

Projet développé par :

**max34000**

Application dédiée à la gestion terrain des tournées de surveillance des parcs.

```

```
