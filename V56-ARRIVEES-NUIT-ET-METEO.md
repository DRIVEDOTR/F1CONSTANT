# V56 — Arrivées, éclairage nocturne et météo

## Fin de course

Après l’arrivée du joueur, la caméra suit les trois F1 les mieux placées qui doivent encore terminer derrière lui, dans l’ordre de leur progression. Le bouton « Classement et podium » permet de passer au résultat à tout moment. À l’arrivée des trois voitures suivies, ce passage est automatique.

Les temps des voitures restantes sont calculés avec le même moteur de course, la météo, les pneus, les arrêts et les contacts ; ils ne sont pas inventés à partir de leur position. Cette simulation se déroule par petites tranches de travail dans l’interface, avec une image stable et un compteur d’arrivées. Elle conserve le temps déjà réalisé par le joueur et les voitures arrivées. Le podium et les points du championnat ne sont affichés qu’une fois les 22 résultats obtenus. Les points ne sont attribués qu’une fois.

La liste des trois voitures suivies est incluse dans les sauvegardes ; une reprise pendant cette phase reste possible.

## Nuit

Sur les circuits disponibles : Singapour, Las Vegas et Lusail/Qatar bénéficient d’une ambiance nocturne. Yas Marina/Abu Dhabi passe progressivement du crépuscule à la nuit pendant le Grand Prix ; ses qualifications utilisent directement la nuit. Les autres circuits du jeu restent de jour, notamment Sepang.

La palette du décor est plus sombre, tandis que la piste est éclairée par des projecteurs fixes. Les zones éclairées, les ombres des voitures et les reflets de carrosserie varient avec leur position. Les projecteurs de la voie des stands sont également représentés. La transition à Abu Dhabi suit la progression de la course.

Sources de repérage :
- Horaires locaux officiels F1 : Singapour 20 h, Las Vegas 20 h, Qatar 19 h et Abu Dhabi 17 h : https://www.formula1.com/en/latest/article/official-grand-prix-start-times-for-2026-f1-season-confirmed.2UgPfArqH76tzlOYh21jSG.2UgPfArqH76tzlOYh21jSG
- Première course de nuit à Singapour : https://www.formula1.com/en/racing/2026/singapore
- Départ au coucher du soleil à Abu Dhabi : https://ticketing.formula1.com/tickets/en/abu-dhabi/general-admission-f1-yas-marina-waitlist

## Bruine, pluie et déluge

La météo variable reste majoritairement sèche. Lorsqu’un front est tiré au sort, les intensités évoluent entre bruine, pluie, déluge et accalmie. Le mode Pluie varie lui aussi pendant le Grand Prix. L’eau sur la piste s’accumule puis sèche progressivement ; les pneus intermédiaires ou pluie restent utiles après la fin des précipitations.

Le nombre, la longueur et la vitesse des gouttes, l’atmosphère humide et les projections derrière les voitures augmentent avec l’intensité de la pluie. L’option de réduction des animations diminue la densité et la vitesse visuelle des gouttes.

Dans un déluge maximal sur piste détrempée, le réglage de jeu ajoute progressivement jusqu’à 22 % de réduction de vitesse maximale et 14 % de réduction d’adhérence, en complément des caractéristiques de gomme, de température et d’usure déjà appliquées. Les mêmes règles valent pour les 22 voitures. Le comparateur de pneus et les conseils des stands utilisent ces valeurs ; une entrée Déluge a été ajoutée au tableau des caractéristiques.

La température évolue lentement : refroidissement plafonné à 0,10 °C par seconde de course, réchauffement à 0,07 °C, et baisse totale limitée par rapport aux conditions thermiques de départ. Une piste initialement à 54 °C ne descend ainsi pas brutalement à 20 °C. Ce sont des choix de jouabilité cohérents, pas une simulation météorologique scientifique.

## Vérifications

Contrôles conservés dans verification-v56 du dossier de travail : 200 scénarios de météo aléatoire ; trois niveaux de pluie et quatre circuits nocturnes vérifiés dans le navigateur ; fin de course manuelle et automatique avec 22 chronos et points de championnat ; reprise pendant le suivi des trois F1 ; 16 Grands Prix complets en Club/Sport et sec/pluie ; deux courses complètes en déluge ; circulation des 22 F1 aux stands sur les 23 circuits ; sauvegarde, export/import et records.

Le contrôle mobile utilise une taille de téléphone dans le navigateur, et ne remplace pas un essai sur un véritable iPhone.
