# 🚓 PATROUILLE-PARCS

![PATROUILLE-PARCS](src/assets/hero.png)

## 🌳 Application mobile de gestion des tournées de surveillance des parcs

PATROUILLE-PARCS est une application **PWA mobile** destinée aux agents de terrain chargés de la surveillance des parcs.

Elle permet de réaliser une tournée dynamique basée sur la position GPS réelle de l'agent.

---

# 🚀 Version actuelle

## V3.1 — Tournée dynamique GPS

La tournée n'est plus basée sur un ordre fixe.

L'application adapte automatiquement le parcours selon la position réelle de l'agent.

Fonctionnement :

📍 Position GPS agent  
⬇️  
🌳 Recherche des parcs ouverts  
⬇️  
📏 Calcul des distances  
⬇️  
🚓 Proposition du parc le plus proche  
⬇️  
✅ Fermeture du parc  
⬇️  
🔄 Nouveau calcul automatique

---

# ✨ Fonctionnalités

## 🗺️ Carte interactive

- Affichage des parcs.
- Position GPS de l'agent.
- Suivi du déplacement.
- Tracé GPS.
- Affichage des itinéraires.

---

## 📍 GPS temps réel

L'application utilise le GPS du smartphone pour :

- connaître la position de l'agent ;
- calculer les distances ;
- optimiser la tournée ;
- suivre le déplacement terrain.

---

## 🚓 Mode patrouille

L'agent peut :

- voir le prochain parc ;
- consulter l'adresse ;
- lancer la navigation ;
- fermer le parc contrôlé ;
- continuer automatiquement la tournée.

---

## 🌳 Gestion des parcs

Chaque parc possède :

- un nom ;
- une adresse ;
- une position GPS ;
- un état ouvert ou fermé ;
- une heure de fermeture.

Lorsqu'un parc est fermé :

- il est enregistré dans l'historique ;
- il est retiré de la tournée ;
- le prochain parc est recalculé.

---

# 🧭 Optimisation de tournée

L'application utilise actuellement un algorithme de proximité :

**Plus proche voisin**

Le départ se fait depuis :

```
la position GPS réelle de l'agent
```

Le poste de contrôle n'est pas imposé comme départ.

Le PC devient uniquement un point de retour final.

---

# 📱 Application PWA

PATROUILLE-PARCS peut être installée comme une application mobile.

Fonctionnalités :

- installation sur écran d'accueil ;
- affichage plein écran ;
- fonctionnement mobile ;
- mise à jour automatique.

Application :

https://max34000.github.io/PATROUILLE-PARCS/

---

# 🛠️ Technologies

- React
- TypeScript
- Vite
- Tailwind CSS
- Leaflet
- OpenStreetMap
- Vite PWA
- GitHub Pages

---

# 📂 Organisation du projet

Le projet est organisé autour de plusieurs modules :

## Interface

```
src/components
src/screens
```

Gestion des écrans et composants.

---

## GPS et navigation

```
src/hooks
src/services
```

Gestion :

- GPS temps réel ;
- navigation ;
- calculs associés.

---

## Données

```
src/data
```

Contient :

- les parcs ;
- le poste de contrôle ;
- les données de tournée.

---

## Fonctions techniques

```
src/utils
```

Contient :

- distances ;
- optimisation de parcours ;
- historique ;
- navigation.

---

# 💾 Données locales

L'application fonctionne sans serveur.

Les informations sont stockées localement dans le navigateur :

```
localStorage
```

Données sauvegardées :

- état des parcs ;
- progression ;
- historique.

---

# 💻 Installation développeur

Pré-requis :

- Node.js
- npm
- Git

Cloner :

```bash
git clone https://github.com/max34000/PATROUILLE-PARCS.git
```

Installer :

```bash
npm install
```

---

# ▶️ Commandes

Développement :

```bash
npm run dev
```

Avec accès réseau :

```bash
npm run dev -- --host
```

Compilation :

```bash
npm run build
```

---

# 🚀 Déploiement

Le projet est déployé automatiquement via GitHub Actions.

Branche principale actuelle :

```
v3.0-final
```

---

# 🔐 Sécurité

Les éléments sensibles restent hors dépôt :

- clés API ;
- tokens ;
- fichiers `.env`.

Le fichier `.env` est ignoré par Git.

---

# 🧪 Tests terrain

Avant chaque version :

## GPS

- autorisation localisation ;
- position correcte ;
- suivi déplacement.

## Tournée

- premier parc correct ;
- fermeture ;
- recalcul automatique.

## Mobile

- installation PWA ;
- affichage smartphone ;
- mise à jour.

---

# 🗺️ Roadmap

## V3.2

Prévisions :

- amélioration navigation ;
- optimisation routière ;
- amélioration interface terrain.

---

## V4

Évolutions possibles :

- synchronisation serveur ;
- gestion multi-agents ;
- statistiques ;
- comptes utilisateurs.

---

# 👨‍💻 Auteur

Projet développé par :

**max34000**

Application terrain de gestion des tournées de surveillance des parcs.
