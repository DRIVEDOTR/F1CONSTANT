# Drapeaux — rendu V18

Les motifs nationaux proviennent des fichiers SVG flag-icons déjà présents dans la V17. Leur licence MIT est conservée dans `images/flags/LICENSE.txt` et `tools/flag-source/LICENSE.txt`.

La V18 applique au dessin entier un déplacement sinusoïdal continu : les bandes, croix, étoiles et armoiries suivent la même ondulation que le contour. Deux dégradés ajoutent les ombres des plis et une lumière sur les bords. Aucun motif n’est remplacé par une illustration approximative.

Les fichiers sources non déformés restent dans `tools/flag-source`. Pour reconstruire les 42 drapeaux et leur copie autonome destinée au JPEG :

```sh
node tools/build-waving-flags.cjs
node tools/render-waving-flags.cjs
```

La seconde commande nécessite Playwright, Sharp et Chromium (le chemin peut être précisé par `F1_CHROMIUM_PATH`). Elle compile chaque dessin vectoriel en PNG transparent de 426 × 336 pixels : cela lisse les petits drapeaux et évite les différences de filtres SVG entre navigateurs. Une palette optimisée limite le poids des fichiers. Les SVG restent également fournis. Aucun de ces outils n’est nécessaire pour consulter le site.

Le composant `waveFlag` utilise ces mêmes PNG pour les circuits, pilotes, écuries, managers, légendes et archives. Le rendu CSS V18 n’ajoute plus de découpe polygonale ni de transformation par-dessus l’image. Le JPEG embarque le même drapeau, sans téléchargement supplémentaire.

La présentation reprend l’esprit des exemples V10, mais les images sont locales afin d’éviter les variations de style des emojis entre Mac, Windows, iPad et autres systèmes.
