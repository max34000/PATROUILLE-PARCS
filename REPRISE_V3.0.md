# PATROUILLE-PARCS V3.0 - Reprise

Date : 20/07/2026

## Etat actuel

Build OK :

npm run build

Vite production OK.
PWA générée.

## Fonctionnalités validées

- Carte Leaflet OK
- GPS avec useGPS.ts OK
- Position agent affichée
- Centrage GPS premier fix uniquement
- Parcs chargés depuis src/data/parcs.ts
- PC Papa Charlie intégré
- Itinéraire OpenRouteService
- Fermeture des parcs
- Historique
- Mode patrouille
- Mode terrain
- PWA générée

## Dernière modification

MapCenter.tsx modifié :
- premier centrage GPS uniquement
- plus de recentrage permanent

## Problème restant

Icône PWA absente lors de l'installation.

Cause trouvée :
manifest.webmanifest demande :

/pwa-192x192.png
/pwa-512x512.png

mais ces fichiers n'existent pas.

Solution prévue :

Créer :

public/pwa-192x192.png
public/pwa-512x512.png

à partir de :

public/favicon.svg

avec ImageMagick.

Commandes :

sudo apt install imagemagick

convert public/favicon.svg -resize 192x192 public/pwa-192x192.png

convert public/favicon.svg -resize 512x512 public/pwa-512x512.png


## Prochaine étape

1. Créer les icônes PWA
2. npm run build
3. Tester installation téléphone
4. Validation production V3.0
