# V40 — championnat, 22 F1 et stands en perspective

## En course

- 22 pilotes et 11 écuries de la saison 2026, Cadillac comprise, avec les couleurs et casques du site. Le pilote choisi remplace sa propre place dans le plateau : aucun doublon.
- Grille en quinconce : une demi-longueur de voiture entre deux places successives. Chaque colonne garde une longueur entière d’écart. Voitures réduites de 10 % par rapport à la largeur de piste.
- Freinage de proximité modéré pour les voitures très proches devant ou sur le côté. Ce dispositif ne remplace pas le freinage du pilote et n’empêche pas tous les contacts.
- Braquage supplémentaire dans les épingles à vitesse modérée, uniquement sur commande du pilote. Retour au neutre, débordements tolérants et marche arrière conservés.
- Rivaux plus compétitifs, avec un rythme distinct en Club et Sport.
- Décors enrichis : glissières avec montants, panneaux de bord de piste ; milieux, ports, forêt, bâtiments et tribunes existants conservés. Le décor reste une interprétation, pas une cartographie exacte.

## Commandes et instruments

Ordinateur : ← → pour diriger, ↑ pour accélérer, ↓ pour freiner puis reculer. Espace ou P pour « Box Box ! ». B active/désactive le boost ; Maj reste disponible pour le maintenir momentanément.

Téléphone : direction d’un pouce, GAZ/FREIN de l’autre. Bouton « Box Box ! » dans le coin inférieur gauche de la piste ; BOOST dans le coin inférieur droit. Le boost s’active d’un toucher et se désactive d’un autre. Il ne consomme que pendant l’accélération et se désactive lorsque la réserve est vide.

Position, tours, pneus et boost à gauche dans la piste ; chrono, vitesse et rapport également dans l’écran. Aucune « grille estimée » pendant les qualifications. Qualifications toujours en solo.

## Stands en 3D

Nouvelle scène légère avec volumes projetés en perspective, caméra à 30° de hauteur et à 30° depuis l’avant droit. Coque, ailerons, suspension, halo, pneus avec flancs et jantes, mécaniciens articulés, vérins et pistolets. Les roues anciennes et neuves suivent des chemins distincts. Les gestes suivent les phases réelles de la simulation : desserrage, retrait, montage, serrage et contrôle. Un écrou difficile retarde effectivement la roue concernée ; le chrono reste exact entre immobilisation et départ, avec durées aléatoires de 1,9 à 10 secondes.

Le rendu est une 3D stylisée, pas une reproduction photoréaliste d’une monoplace constructeur. Sans dépendance externe ni téléchargement pour cette scène.

## Championnat

Choisir « Championnat du monde » dans Format. Tous les 23 circuits actuellement disponibles sur le site, ou une sélection cochée. Ordre du calendrier du site. Qualifications en solo optionnelles avant chaque manche. Le pilote, le plateau et les réglages sont conservés pendant le championnat.

La simulation continue après l’arrivée du joueur et suit les concurrents restants. Le classement final et les points ne sont calculés qu’après l’arrivée des 22 F1. Points de Grand Prix : 25, 18, 15, 12, 10, 8, 6, 4, 2, 1 ; aucun point au-delà de la dixième place. Départage par nombre de premières places, puis deuxièmes, etc. Une égalité parfaite reste signalée.

Points cumulés consultables après la manche et dans « Championnat · classement et sauvegarde ». Bouton pour passer à la manche suivante. Sauvegarde dans le navigateur après chaque manche ; « Reprendre le championnat » retrouve la prochaine manche. Une course interrompue recommence au début de la manche. Les sauvegardes ne passent pas d’un appareil à l’autre.

Sources : [plateau 2026 et 22 numéros](https://www.formula1.com/en/latest/article/all-the-2026-f1-driver-numbers-confirmed-in-full.5rh7o9mPntG7NerzVk9onc), [barème du championnat pilotes](https://www.formula1.com/en/latest/article/the-beginners-guide-to-the-f1-drivers-championship.53MjXJzTDxQnfxfoCLnxNZ).

## Vérifications

- Les 22 pilotes sont distincts ; deux pilotes par écurie.
- Grille, réduction d’échelle et arrivée effective des 22 voitures sur les 23 circuits.
- 46 parcours de conduite simulés avec commandes binaires, recul et reprise ; 2 000 arrêts avec durées dans les limites.
- Six courses simulées à 22 F1, sur Monza, Monaco et Suzuka dans les deux modes, avec arrêt aux stands et arrivée de tous.
- Barème, rejet d’une course incomplète, sauvegarde, reprise, ordre des manches et départage contrôlés.
- Chrome : championnat à deux manches, attente de la dernière voiture sans points prématurés, résultats des 22 pilotes, manche suivante, rechargement, qualification solo puis GP à 22.
- Commandes clavier et tactiles, boost à bascule et deux pouces simultanés ; largeurs 320, 390, 768 et 1 440 px, captures des stands sur ordinateur et mobile. Aucune erreur JavaScript pendant ces contrôles.

Les essais simulés ne garantissent pas le ressenti humain du pilotage. Pas de test effectué sur iPhone/iPad physique.

## Livraison

Cinq fichiers remplacés : index.html, assets/game.css, assets/game.js, assets/arcade-core.js, assets/arcade-render.js. Deux fichiers ajoutés : assets/pit-3d.js et cette note. Sauvegarde des fichiers précédents. Aucun commit ni push réalisé automatiquement ; les actualités et la rubrique F1 à la loupe restent intactes.
