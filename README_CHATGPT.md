# 🤖 README_CHATGPT.md

# PATROUILLE-PARCS

## Documentation interne de reprise du projet

> Ce document sert de mémoire technique et fonctionnelle du projet.
>
> Son objectif est de permettre une reprise rapide du développement sans perdre le contexte, les choix techniques et les décisions prises.

---

# 1. Présentation du projet

## Nom

PATROUILLE-PARCS

## Version de référence

V3.0.1

## Statut

✅ Version stable déployée en production

Adresse :

https://max34000.github.io/PATROUILLE-PARCS/

---

# 2. Objectif du projet

PATROUILLE-PARCS est une application destinée aux agents effectuant des tournées de surveillance et de fermeture des parcs municipaux.

L'application permet :

- de connaître la position GPS de l'agent ;
- d'afficher les parcs sur une carte ;
- d'organiser une tournée ;
- de guider l'agent ;
- de fermer les parcs visités ;
- de suivre l'avancement ;
- de terminer la tournée au point de retour PC Papa Charlie.

---

# 3. Contexte métier

Le fonctionnement réel est basé sur une tournée terrain.

L'agent :

1. démarre depuis PC Papa Charlie ;
2. se déplace sur le terrain ;
3. ferme les parcs dans un ordre optimisé ;
4. valide chaque fermeture ;
5. revient au PC une fois la tournée terminée.

L'application doit rester :

- simple ;
- rapide ;
- utilisable en mobilité ;
- adaptée aux conditions terrain.

---

# 4. Principe fondamental

Le point central du projet est :

> La position réelle de l'agent est la référence pour organiser la tournée.

La tournée ne doit jamais être considérée comme complètement figée.

La future évolution V3.1 améliorera ce point avec un recalcul dynamique.

---

# 5. État actuel V3.0.1

## Fonctionnalités terminées

✅ Carte OpenStreetMap

✅ Position GPS agent

✅ Affichage des parcs

✅ Marqueurs Leaflet

✅ Affichage PC Papa Charlie

✅ Calcul initial de tournée

✅ Tracé itinéraire

✅ Fermeture d'un parc

✅ Annulation fermeture

✅ Progression

✅ Retour PC

✅ Navigation

✅ PWA

✅ Déploiement GitHub Pages

---

# 6. Fonctionnement actuel

## Carte

La carte utilise :

- Leaflet
- React-Leaflet
- OpenStreetMap

Les marqueurs sont gérés localement.

Les icônes Leaflet sont stockées dans :

```
public/leaflet/
```

---

# 7. Architecture technique

## Technologies

- React
- TypeScript
- Vite
- Tailwind CSS
- Leaflet
- React-Leaflet
- Vite PWA
- GitHub Pages

---

# 8. Organisation du code

Structure principale :

```
src

├── components

│   ├── Map

│   │   ├── MapView.tsx
│   │   ├── PositionMarker.tsx
│   │   ├── RouteLine.tsx
│   │   ├── GPSTrace.tsx
│   │   └── MapCenter.tsx
│
├── data
│
├── hooks
│
├── services
│
├── types
│
└── App.tsx
```

---

# 9. MapView.tsx

Composant principal de cartographie.

Responsabilités :

- création de la carte ;
- affichage des tuiles ;
- affichage position agent ;
- affichage GPS ;
- affichage routes ;
- affichage PC ;
- affichage parcs.

---

# 10. Logique des parcs

Chaque parc possède un état :

```
Ouvert
   |
   ↓
Fermé
```

Un parc fermé :

- disparaît de la tournée active ;
- reste enregistré comme fermé ;
- ne doit pas être proposé à nouveau.

---

# 11. GPS

Le GPS sert à :

- centrer la carte ;
- afficher l'agent ;
- enregistrer une trace ;
- préparer les futurs recalculs.

---

# 12. Retour PC Papa Charlie

PC Papa Charlie est le point final obligatoire.

Quand tous les parcs sont fermés :

- le trajet retour est affiché ;
- l'agent peut naviguer vers le PC.

---

# 13. Déploiement

Le projet utilise :

- GitHub Actions
- GitHub Pages

Workflow :

```
git push

↓

GitHub Action

↓

npm install

↓

npm run build

↓

Publication dist

↓

GitHub Pages
```

---

# 14. Historique des problèmes rencontrés

## Leaflet

Problème :

Les marqueurs n'apparaissaient pas.

Cause :

Les images Leaflet n'étaient pas disponibles en production.

Solution :

Ajout :

```
public/leaflet/
```

avec :

```
marker-icon.png
marker-icon-2x.png
marker-shadow.png
```

---

## GitHub Pages

Problème :

Page blanche.

Cause :

Le chemin Vite ne correspondait pas au sous-dossier GitHub Pages.

Solution :

Dans vite.config.ts :

```
base:
"/PATROUILLE-PARCS/"
```

---

## Workflow GitHub

Problème :

Impossible de pousser un workflow.

Cause :

Token GitHub sans permission workflow.

Solution :

Passage en authentification SSH.

---

# 15. Règles importantes

Ne jamais :

- casser la logique GPS ;
- supprimer PC Papa Charlie ;
- réintroduire des parcs fermés ;
- modifier le déploiement sans tester ;
- modifier Leaflet sans tester la production.

---

# 16. Décisions importantes

## Choix PWA

Décision :

Créer une PWA plutôt qu'une application native.

Raison :

Une seule base de code pour Android et iPhone.

---

## Choix GitHub Pages

Décision :

Utiliser GitHub Pages pour le déploiement.

Raison :

- gratuit ;
- simple ;
- automatique ;
- suffisant pour l'application actuelle.

---

# 17. Prochaine évolution : V3.1

Objectif principal :

## Recalcul dynamique de tournée

Aujourd'hui :

```
Calcul initial

A → B → C → D
```

Évolution :

```
Fermeture A

↓

Nouvelle position GPS

↓

Nouveau calcul

↓

Nouvel itinéraire
```

---

# 18. Vision V4

Possibilités :

- multi-agents ;
- synchronisation ;
- comptes utilisateurs ;
- historique ;
- statistiques ;
- serveur distant.

---

# 19. Méthode de développement

Toujours :

1. stabiliser ;
2. tester ;
3. documenter ;
4. taguer la version ;
5. commencer l'évolution suivante.

---

# 20. Reprise future

Pour reprendre le projet :

1. lire README.md ;
2. lire README_CHATGPT.md ;
3. vérifier la version Git ;
4. lancer :

```
npm install
npm run dev
```

5. tester :

```
npm run build
```

Avant toute modification importante.

---

# Fin du document

PATROUILLE-PARCS V3.0.1 est considérée comme la base stable de référence.
