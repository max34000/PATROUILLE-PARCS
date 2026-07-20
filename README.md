# 🌳 PATROUILLE-PARCS

Application web de gestion de tournée de surveillance des parcs.

Projet développé pour un usage terrain avec :
- affichage cartographique
- localisation GPS de l'agent
- calcul d'itinéraire
- suivi de tournée
- fermeture des parcs visités
- historique des interventions
- mode smartphone agent


---

# 🚓 Version actuelle

## V2 - Application terrain opérationnelle

Fonctionnalités disponibles :

✅ Carte interactive Leaflet  
✅ Position GPS de l'agent  
✅ Affichage des parcs  
✅ Détection du parc le plus proche  
✅ Calcul de distance et durée  
✅ Tracé d'itinéraire routier  
✅ Mode Patrouille  
✅ Mode Terrain smartphone  
✅ Fermeture des parcs visités  
✅ Sauvegarde locale des données  
✅ Historique des passages  
✅ Retour automatique au PC après tournée terminée  


---

# 🖥️ Technologies utilisées

## Frontend

- React
- TypeScript
- Vite
- Tailwind CSS


## Cartographie

- Leaflet
- React Leaflet
- OpenStreetMap


## Routage

- OpenRouteService API


## Stockage

- LocalStorage navigateur


---

# 📂 Structure du projet
src
│
├── components
│ │
│ ├── Map
│ │ ├── MapView.tsx
│ │ ├── PositionMarker.tsx
│ │ ├── RouteLine.tsx
│ │ └── MapCenter.tsx
│ │
│ ├── Patrol
│ │ ├── PatrolMode.tsx
│ │ ├── AgentMode.tsx
│ │ ├── Progression.tsx
│ │ ├── Historique.tsx
│ │ └── RetourPC.tsx
│ │
│ └── Route
│ ├── NextStop.tsx
│ └── Tournee.tsx
│
├── data
│ ├── parcs.ts
│ └── pc.ts
│
├── services
│ └── routing.ts
│
├── utils
│ ├── nextPark.ts
│ ├── routeOptimizer.ts
│ ├── distance.ts
│ └── historique.ts
│
├── types
│ └── Parc.ts
│
└── App.tsx


---

# ⚙️ Installation

Cloner le projet :

```bash
git clone <adresse-du-projet>

Entrer dans le dossier :

cd PATROUILLE-PARCS

Installer les dépendances :

npm install
🔑 Configuration API

Créer un fichier :

.env

Ajouter :

VITE_ORS_API_KEY=Votre_cle_OpenRouteService

Cette clé est utilisée pour calculer les itinéraires routiers.

▶️ Lancement développement
npm run dev

L'application sera disponible :

http://localhost:5173
🏗️ Compilation production

Tester le build :

npm run build

Prévisualisation :

npm run preview
📱 Utilisation terrain
Mode Carte 🗺️

Permet :

visualisation des parcs
position GPS agent
affichage des routes
Mode Patrouille 🚓

Permet :

suivi de tournée
prochain parc à contrôler
fermeture des parcs
Mode Terrain 📱

Interface simplifiée pour smartphone :

prochain parc affiché en grand
distance
durée estimée
action rapide terrain
🧭 Fonctionnement GPS

L'application utilise la géolocalisation du navigateur.

Données utilisées :

latitude
longitude

La position agent est utilisée pour :

trouver le parc le plus proche
calculer l'itinéraire
afficher la position sur la carte
🏁 Fin de tournée

Lorsque tous les parcs sont fermés :

Tous les parcs contrôlés
        ↓
Retour automatique PC

L'application calcule alors l'itinéraire vers :

PC Papa Charlie
Rue des Églantiers
34170 Castelnau-le-Lez
🚀 Roadmap
V2.1 Navigation réelle

Prévu :

bouton navigation smartphone
ouverture Google Maps / Apple Plans
guidage vers le parc sélectionné
V2.2 GPS temps réel

Prévu :

suivi GPS continu
déplacement automatique du marqueur
mise à jour distance restante
V2.3 Optimisation tournée

Prévu :

calcul ordre optimal des parcs
réduction des déplacements
tournée intelligente
V2.4 Intervention terrain

Prévu :

ajout photo
commentaire agent
signalement anomalie
rapport intervention
📝 Historique versions
V2
Ajout mode Terrain smartphone
Ajout interface agent
Ajout gestion tournée
Ajout retour PC automatique
V1.5
Carte améliorée
Routes affichées
Historique
Progression tournée
V1
Carte des parcs
GPS agent
Fermeture des parcs
👨‍💻 Auteur

Projet PATROUILLE-PARCS

Application dédiée à la gestion terrain des tournées de surveillance des espaces verts.
