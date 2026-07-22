```md
# 🤖 README_CHATGPT.md

# PATROUILLE-PARCS — Contexte projet pour assistance IA

Ce document sert de mémoire technique afin de permettre une reprise rapide du projet avec ChatGPT ou un autre assistant.

Il décrit :

- l'objectif du projet ;
- l'architecture actuelle ;
- les choix techniques ;
- les fonctionnalités validées ;
- les points d'attention ;
- les évolutions prévues.

---

# 📌 Présentation du projet

Nom :
```

PATROUILLE-PARCS

```

Type :

```

Application mobile PWA de gestion de tournées terrain

```

Objectif :

Permettre à un agent de surveillance de réaliser une tournée dynamique de fermeture et contrôle de parcs.

L'application doit fonctionner principalement sur smartphone.

---

# 🟢 État actuel

Version :

```

V3.1

```

Statut :

```

Fonctionnelle

```

Dernière validation :

✅ GPS réel validé sur téléphone
✅ HTTPS validé via GitHub Pages
✅ Position agent récupérée
✅ Choix du parc le plus proche validé
✅ Recalcul après fermeture validé
✅ Application PWA fonctionnelle

---

# 🧠 Logique métier principale

La tournée fonctionne maintenant selon cette logique :

```

Position GPS actuelle agent
|
↓
Liste des parcs ouverts
|
↓
Calcul des distances
|
↓
Parc le plus proche
|
↓
Navigation
|
↓
Fermeture du parc
|
↓
Nouveau calcul

```

Important :

Le départ n'est PAS le PC.

Le départ est toujours :

```

position réelle GPS de l'agent

```

Le PC sert uniquement comme point de retour final.

---

# 🏗️ Architecture

Technologies :

```

React
TypeScript
Vite
Tailwind CSS
Leaflet
OpenStreetMap
Vite PWA
GitHub Pages

```

---

# 📂 Organisation importante

## Application principale

```

src/App.tsx

```

Responsable :

- état global ;
- modes application ;
- gestion GPS ;
- gestion parcs ;
- affichage écrans.

---

## GPS

```

src/hooks/useGPS.ts

```

Responsable :

- récupération GPS ;
- watchPosition ;
- précision ;
- erreurs.

Ne pas modifier sans raison.

---

## Carte

```

src/components/Map/

```

Contient :

- MapView
- PositionMarker
- ParkMarkers
- RouteLine
- GPSTrace

---

## Gestion tournée

```

src/utils/routeOptimizer.ts

```

Contient :

- calcul du prochain parc ;
- logique plus proche voisin.

---

## Navigation

```

src/hooks/useNavigation.ts

src/utils/navigation.ts

```

Responsable :

- distance ;
- durée ;
- ouverture navigation externe.

---

## Données

```

src/data/

```

Contient :

```

parcs.ts
pc.ts
tournee.ts

```

Les nouveaux parcs doivent être ajoutés dans :

```

src/data/parcs.ts

```

---

# 💾 Stockage

Le projet ne possède actuellement pas de serveur.

Stockage :

```

localStorage

```

Clés principales :

```

patrouille-parcs
historique

```

Attention :

Les anciennes données locales peuvent empêcher de voir les nouveaux parcs.

Pour réinitialiser :

Navigateur :

```

Effacer stockage du site

```

ou via application :

```

Nouvelle tournée

```

---

# ⚠️ Points importants pour les futures modifications

## 1 — Toujours tester après modification

Avant commit :

```

npm run build

```

Doit être :

```

built ok

```

---

## 2 — Tester en HTTPS

La géolocalisation mobile nécessite :

```

https://

```

Ne pas utiliser :

```

http://192.168.x.x

```

pour tester le GPS.

---

## 3 — Ne pas ajouter de secrets

Ne jamais envoyer dans Git :

```

.env
API keys
tokens
mots de passe

```

Le fichier :

```

.env

```

est ignoré.

---

# 🐛 Problèmes déjà rencontrés

## GPS non demandé

Cause :

Utilisation de :

```

http://IP_LOCALE:5173

```

Solution :

Utiliser :

```

https://max34000.github.io/PATROUILLE-PARCS/

```

---

## Nouveaux parcs absents

Cause :

Stockage local ancien.

Solution :

Vider :

```

localStorage

```

---

## Erreur PWA

Erreur :

```

Cannot find module virtual:pwa-register

```

Cause :

Type PWA manquant.

Solution :

Ajouter :

```

src/vite-env.d.ts

```

avec :

```

/// <reference types="vite-plugin-pwa/client" />

```

---

# 🔧 Commandes utiles

Installation :

```

npm install

```

Développement :

```

npm run dev

```

Avec réseau :

```

npm run dev -- --host

```

Build :

```

npm run build

```

Git :

```

git status

git add .

git commit -m "message"

git push origin v3.0-final

```

---

# 🚦 Règles de développement

Toujours :

- conserver le fonctionnement mobile ;
- tester GPS après modification ;
- éviter les dépendances inutiles ;
- privilégier une architecture simple ;
- conserver TypeScript strict ;
- documenter les gros changements.

---

# 🗺️ Prochaines évolutions prévues

## V3.2

Priorités :

- améliorer calcul routier ;
- afficher navigation plus précisément ;
- améliorer affichage terrain ;
- améliorer UX mobile.

---

## V4

Possibilités :

- serveur distant ;
- comptes agents ;
- synchronisation ;
- statistiques ;
- gestion multi-agents.

---

# 📝 Notes de reprise

Si une nouvelle session commence, commencer par vérifier :

1. Version Git :

```

git status

```

2. Compilation :

```

npm run build

```

3. Branche :

```

v3.0-final

```

4. Fonctionnement :

- GPS
- carte
- tournée
- fermeture parc

---

# Fin du contexte projet

PATROUILLE-PARCS est actuellement une application terrain fonctionnelle V3.1.

La priorité est de conserver une base stable avant d'ajouter de nouvelles fonctionnalités.
```
