# V41 — largeur constante, vitesses, pneus et météo

## Pistes

Une largeur de 24 unités de jeu est utilisée sur toute la longueur des 23 circuits, sans modulation locale. Les portions trop proches sont écartées et les courbes très serrées sont ouvertes en déplaçant la ligne centrale. Le croisement à deux niveaux de Suzuka reste distinct. Les silhouettes des circuits sont conservées, avec des adaptations géométriques pour la conduite.

Les raccords des stands sont réévalués avec les nouveaux tracés. Un raccord situé dans une épingle trop serrée est déplacé vers une portion plus droite pour ne pas couper l’îlot ni élargir artificiellement le virage. Le choix du côté limite les chevauchements. Les routes principales et les stands gardent une bande terrestre de protection dans les décors comprenant de l’eau.

Les limites de déplacement sont rapprochées de la piste : centre de la voiture contenu à la demi-largeur plus 1,2 unité. Le débordement ralentit ; la marche arrière reste disponible. Les collisions et dérapages suivent la même limite.

## Vitesses et chronos

La conversion en km/h utilise maintenant la distance réelle de la fiche du circuit : chaque unité de déplacement représente une fraction de cette longueur. Le chrono compte les secondes réelles de simulation. L’ancien multiplicateur fixe de vitesse est supprimé.

Les profils de vitesse sont calculés avec les virages, les distances d’accélération et de freinage. Leur objectif sur piste sèche avec pneus frais correspond au record de la fiche majoré de 7 % : c’est une référence de rythme de jeu, pas un temps moyen officiel. La vitesse du joueur dépend de son pilotage ; elle n’est pas ajustée pour imposer un chrono.

Exemple Monza : record de la fiche 1:20.901 ; objectif sec environ 1:26.564. Les références et le meilleur tour du joueur sont affichés sous la piste. Madrid ne dispose pas d’un record dans le site : son objectif est explicitement estimé à partir de sa longueur et d’une moyenne de jeu de 210 km/h.

Plafonds du modèle : environ 350 km/h sans overtake, 380 km/h avec overtake sur une ligne droite assez longue, avec des pneus et conditions appropriés. Ces vitesses ne sont pas garanties sur tous les circuits. L’overtake apporte aussi davantage d’accélération ; il consomme toujours sa réserve.

Essai comparatif : depuis 300 km/h, quatre secondes d’accélération donnent environ 350 km/h sans overtake et 380 km/h avec une réserve initiale de 100 %, pour environ 29 mètres de progression supplémentaire dans ce test isolé.

## Pneus

Les cinq gommes sont disponibles au garage et pour les arrêts : tendres, médiums, durs, intermédiaires et pluie. Le choix des prochains pneus est aussi accessible dans la piste, à côté de Box Box !, y compris en vue agrandie.

Sur le sec, les tendres ont davantage d’adhérence et de performance, mais s’usent plus vite. Les durs durent davantage, avec moins de performance initiale ; les médiums sont intermédiaires. L’usure réduit progressivement la traction, la vitesse maximale et l’adhérence, avec une dégradation plus marquée en fin de vie. L’overtake augmente légèrement l’usure.

Sur piste humide, les intermédiaires deviennent plus efficaces que les slicks ; sur piste très mouillée, les pneus pluie prennent l’avantage. Les pneus de pluie et intermédiaires s’usent nettement plus sur le sec et y perdent en performance. Les adversaires subissent ces effets et adaptent leur stratégie d’arrêt aux conditions.

Principes documentaires : [Pirelli — passage des slicks aux pneus de pluie](https://www.pirelli.com/global/en-ww/race/racingspot/formula-1/when-it-s-time-to-change-from-slick-to-wet-tyres-in-formula-1-52943/), [Pirelli — rôle des différents pneus](https://www.pirelli.com/global/en-ww/race/racingspot/formula-1/the-importance-of-tyres-in-formula-1-53772/). Les coefficients numériques sont ceux d’un modèle de jeu ; ils ne sont pas des données constructeur.

## Météo

Trois choix au garage : variable (sec le plus souvent), sec stable pour l’entraînement, pluie pour le défi humide. La météo variable est aléatoire à chaque course et peut évoluer pendant un même Grand Prix : sec, bruine, pluie, éclaircie. Dans l’échantillon de contrôle de 500 graines, 121 comportaient un épisode de précipitations et 379 restaient secs.

Le risque de pluie et l’état météo s’affichent à gauche. Le risque monte avant les épisodes prévus par la simulation et passe à 100 % quand des précipitations ont commencé. L’humidité de la piste augmente et diminue progressivement ; elle ne disparaît pas dès que la pluie cesse. L’asphalte et la pluie sont aussi représentés visuellement.

C’est une météo simulée, pas une prévision météorologique réelle. Les réglages sont conservés pendant le championnat.

## Pilotage

Le Club reprend le principe de direction du Sport avec un filtrage un peu plus doux. Les deux modes utilisent les mêmes lois de braquage : angle possible beaucoup plus grand à faible vitesse, progressivement réduit à haute vitesse. Le freinage et l’accélération restent manuels, avec freinage de proximité et ralentissement sur les bords conservés.

Les commandes ne changent pas : flèches sur ordinateur, B pour le boost, Espace ou P pour les stands ; GAZ/FREIN et maintien de BOOST sur téléphone. Relâcher BOOST coupe les gaz et le boost ; une nouvelle pression sur GAZ reprend l’accélération.

## Vérifications

- Largeur identique sur les 23 tracés ; audit des espacements et vues rapprochées de leurs virages les plus serrés, examinées en galerie. Ajustement supplémentaire des raccords des stands à Las Vegas.
- Profils chronométriques ajustés aux 22 records présents, objectif estimé signalé pour Madrid ; contrôle du rythme des adversaires et de l’arrivée des 22 voitures sur chaque circuit.
- Vitesse maximale contrôlée en ligne droite ; comparaison d’overtake sur quatre secondes avec une réserve normale.
- 46 parcours simulés avec commandes binaires dans les deux modes ; limites de déplacement et marche arrière vérifiées.
- Effets de l’usure, hiérarchie des pneus sur sec/humide/détrempé et surusure des gommes de pluie sur le sec vérifiés.
- Échantillon de 500 météos variables ; course sous pluie à 22, avec changements de gommes des adversaires et arrivée de tous. Arrêts toujours dans la plage de 1,9 à 10 secondes.
- Chrome : cinq gommes accessibles depuis la piste, boost tactile, météo et pluie visibles, largeurs 320, 390, 768, 844 et 1 440 px ; championnat à deux manches, points, manche suivante et reprise après rechargement. Aucune erreur JavaScript sur les vérifications finales.

Ces contrôles ne garantissent pas le ressenti humain du pilotage. Aucun essai effectué sur iPhone ou iPad physique. La géométrie, l’échelle des voitures et les performances restent adaptées à un jeu pédagogique ; les tracés ne sont pas des relevés topographiques et le modèle ne remplace pas une simulation automobile professionnelle.

## Livraison

Cinq fichiers remplacés : index.html, assets/game.css, assets/game.js, assets/arcade-core.js et assets/arcade-render.js. Cette note est ajoutée. Sauvegarde des versions précédentes avant remplacement. Actualités, workflow, podiums, scène de stands 3D et rubrique F1 à la loupe préservés. Aucun commit ni push automatique.
