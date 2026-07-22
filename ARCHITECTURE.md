# 🏗️ ARCHITECTURE.md

# PATROUILLE-PARCS

Documentation de l'architecture technique du projet.

Version de référence :

```
V3.0.1
```

---

# 1. Vue générale

PATROUILLE-PARCS est une application web progressive (PWA) développée avec React et TypeScript.

L'application est organisée autour de plusieurs blocs :

```
                    PATROUILLE-PARCS

                           │

                         App.tsx

                           │

        ┌──────────────────┼──────────────────┐

        │                  │                  │

     Interface          Carte              Logique

        │                  │                  │

   Components        React-Leaflet        Hooks

        │                  │                  │

   Affichage          GPS / Routes       Calculs

```

---

# 2. Architecture générale

```
src/

├── components/

│
├── data/

│
├── hooks/

│
├── services/

│
├── types/

│
├── utils/

│
└── App.tsx

```

---

# 3. App.tsx

## Rôle

Composant principal de l'application.

Il coordonne :

- l'état général ;
- les données des parcs ;
- la position GPS ;
- la tournée ;
- la progression.

---

## Responsabilités

App.tsx gère :

- l'affichage global ;
- la communication entre composants ;
- les états principaux.

Il ne doit pas contenir :

- de logique cartographique complexe ;
- de calculs métier lourds.

---

# 4. Composants principaux

---

# MapView

Emplacement :

```
src/components/Map/MapView.tsx
```

## Rôle

Composant central de la carte.

Il affiche :

- OpenStreetMap ;
- position agent ;
- parcs ;
- PC Papa Charlie ;
- itinéraire ;
- trace GPS.

---

## Sous-composants

```
Map/

├── MapView.tsx

├── PositionMarker.tsx

├── MapCenter.tsx

├── RouteLine.tsx

└── GPSTrace.tsx
```

---

# PositionMarker

## Rôle

Affiche la position actuelle de l'agent.

Entrée :

```typescript
positionAgent;
```

Fonction :

- créer le marqueur GPS ;
- mettre à jour sa position.

---

# MapCenter

## Rôle

Recentre la carte sur l'agent.

Utilisé lors :

- déplacement GPS ;
- changement de position.

---

# RouteLine

## Rôle

Affiche une ligne entre plusieurs coordonnées.

Utilisé pour :

- tournée ;
- retour PC.

---

# GPSTrace

## Rôle

Affiche la trace réalisée par l'agent.

Objectif :

visualiser le déplacement réel.

---

# 5. Données

Dossier :

```
src/data/
```

Contient les données fixes.

Exemple :

```
pc.ts
```

Contient :

- PC Papa Charlie ;
- coordonnées ;
- informations associées.

---

# 6. Types TypeScript

Dossier :

```
src/types/
```

Contient les modèles utilisés par l'application.

Exemple :

```
Parc.ts
```

Définit la structure d'un parc.

Exemple logique :

```typescript
{
  (id, nom, latitude, longitude, ferme);
}
```

---

# 7. Gestion des états

Les états principaux sont :

## Parcs

Contient :

- liste des parcs ;
- état ouvert/fermé.

---

## Position agent

Contient :

- latitude ;
- longitude.

Format :

```typescript
[number, number];
```

---

## Trace GPS

Tableau de positions :

```typescript
[
  [lat, lng],
  [lat, lng],
];
```

---

## Route

Liste des points de passage.

---

# 8. Architecture GPS

Fonctionnement :

```
Navigateur

↓

API Geolocation

↓

Position GPS

↓

Etat React

↓

Carte

↓

Marqueur agent

```

---

# 9. Architecture cartographique

Technologies :

- Leaflet ;
- React-Leaflet ;
- OpenStreetMap.

Flux :

```
OpenStreetMap

↓

TileLayer

↓

MapContainer

↓

Markers

↓

Routes

```

---

# 10. Gestion des icônes Leaflet

Les icônes ne sont pas chargées depuis Internet.

Elles sont stockées :

```
public/leaflet/
```

Contenu :

```
marker-icon.png

marker-icon-2x.png

marker-shadow.png
```

Cela garantit :

- fonctionnement production ;
- compatibilité GitHub Pages ;
- absence de dépendance externe.

---

# 11. PWA

Configuration :

```
vite.config.ts
```

Utilise :

```
vite-plugin-pwa
```

Fonctions :

- manifest ;
- service worker ;
- cache ;
- installation mobile.

---

# 12. Déploiement

Chaîne complète :

```
Modification code

↓

git commit

↓

git push

↓

GitHub Actions

↓

npm build

↓

dist/

↓

GitHub Pages

```

---

# 13. Git

Organisation recommandée :

```
main

↓

versions stables

```

Exemple :

```
v3.0.0

v3.0.1

v3.1.0

```

---

# 14. Règles d'architecture

## Toujours

- garder les composants spécialisés ;
- éviter les fichiers géants ;
- documenter les changements ;
- tester le build.

---

## Éviter

- mélanger métier et affichage ;
- mettre toute la logique dans App.tsx ;
- dépendre d'un service externe non contrôlé.

---

# 15. Évolution prévue

## V3.1

Modification principale :

Ajouter un moteur de recalcul dynamique.

Architecture prévue :

```
GPS

↓

Position actuelle

↓

Calculateur tournée

↓

Nouvelle route

↓

Navigation

```

---

# 16. Objectif final

PATROUILLE-PARCS doit rester :

- simple ;
- rapide ;
- fiable ;
- maintenable ;
- adapté au terrain.

---

# Fin du document

Architecture officielle :

PATROUILLE-PARCS V3.0.1
