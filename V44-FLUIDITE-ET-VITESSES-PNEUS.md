# V44 — Virages plus fluides et usure atténuée

Les passages les plus lents du profil sec sont relevés à 82 km/h avant effets des gommes, de l’adhérence et de la météo. Le profil est recalibré sur chaque circuit pour conserver son objectif de temps de référence. À Monaco, le minimum du profil était environ 54 km/h ; il est désormais 82. À Montréal : environ 66 devient 82. Cela ne constitue pas une vitesse minimale imposée à la voiture : le frein et le lever de pied peuvent toujours faire ralentir ou arrêter.

La réduction automatique liée au potentiel en courbe est limitée à 32 m/s² au lieu de 52 ; sa montée est plus douce. La poussée du moteur diminue progressivement près de la limite, au lieu de basculer entre coupée et autorisée. Les adversaires suivent le profil recalibré avec la même réduction maximale. Le frein manuel conserve sa puissance.

## Usure

Vie restante : 100–70 % → potentiel de vitesse 100 % ; 50 % → 94 % ; 25 % → 85 % ; 0 % → 75 %. Interpolation continue et adoucie. Les gommes s’usent toujours selon leur type, la température et les conditions. La baisse d’adhérence et de traction liée à l’usure est également atténuée par cette courbe.

## Plafonds actuels de vitesse du jeu

Pneus neufs, hors boost ; valeurs arrondies, en km/h. Le pourcentage indique l’humidité simulée de la piste, distincte du risque de pluie.

| Gomme | Sec 0 % | Humide 35 % | Mouillé 65 % | Détrempé 100 % |
| --- | --- | --- | --- | --- |
| Tendres | 350 | 297 | 260 | 220 |
| Médiums | 343 | 291 | 255 | 215 |
| Durs | 334 | 283 | 248 | 210 |
| Intermédiaires | 298 | 333 | 315 | 256 |
| Pluie | 245 | 283 | 315 | 315 |

Ce sont des plafonds de jeu en ligne droite, pas des mesures réelles ni des vitesses à atteindre dans chaque virage. Le boost multiplie ces plafonds par 380/350, soit environ +8,6 %, sous réserve de charge. L’usure multiplie ensuite ce résultat. La température agit sur l’adhérence et la vitesse d’usure ; elle n’abaisse pas directement le plafond d’un pneu neuf. Le grip décide aussi de la vitesse exploitable en courbe : des plafonds proches ne signifient pas une efficacité identique.

Calcul : 350 km/h × coefficient gomme/état de piste × coefficient de vie restante ; sous boost, 380 remplace 350. Les mêmes fonctions sont utilisées pour toutes les F1.

## Vérifications

23 circuits : largeur et séparation conservées, profils recalibrés, arrivées des adversaires. 46 comparaisons de rythme en Club et Sport : le joueur de référence et les meilleurs adversaires restent proches. 46 parcours à commandes numériques : limites, marche arrière et stratégie pluie. Tests des plafonds pluie/sec et durs/détrempé, usure monotone et continue. Navigateur mobile/ordinateur, choix des pneus avant GP, conservation de la grille et sauvegarde du championnat.

Publication : GitHub Desktop, Commit puis Push origin.
