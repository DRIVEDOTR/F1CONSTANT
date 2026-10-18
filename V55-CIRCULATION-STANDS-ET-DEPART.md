# V55 — Circulation dans les stands et départ/arrivée

## Comportement

Les 11 garages disposent d’une voie de travail distincte de la voie de circulation. Chaque garage comporte une place d’attente en retrait, marquée en pointillés. Si le premier pilote d’une équipe occupe son emplacement, son coéquipier se range entièrement dans cette place ; les autres équipes peuvent continuer à circuler. Les trajectoires d’entrée dans le garage et de retour dans la voie sont réservées avec des espacements et un contrôle des carrosseries dans l’espace, y compris dans les accès courbes.

Une voiture prête à repartir obtient un court créneau de réinsertion : les voitures déjà à sa hauteur passent, puis les suivantes ouvrent un espace. Elle n’attend plus que tout le convoi des stands ait défilé. Un bref cédez-le-passage reste nécessaire pour éviter de se rouler dessus.

L’entrée des stands utilise le même calcul de position pour la voiture et pour le point qui détermine son orientation. Le décalage venant de la piste disparaît progressivement. Les accès ont un rayon de courbure minimum et les voitures ne s’engagent qu’avec un espace disponible devant elles.

## Circuits et ligne de chronométrage

Les 23 positions de départ ont été comparées aux repères des cartes SVG existantes. Le tracé principal, sa largeur et ses points restent identiques à la V54, y compris à Monaco et à Monza.

L’ancienne recherche automatique d’une ligne droite pour les stands pouvait déplacer toute leur voie vers un autre secteur. Ce problème concernait Montréal, Silverstone, Spa, Singapour, Las Vegas et Abu Dhabi. Les stands restent maintenant rattachés à la zone de départ/arrivée, avec une zone de travail droite dimensionnée pour les 11 équipes. Les voies restent une adaptation schématique pour le jeu, pas un relevé géométrique certifié des véritables installations.

À Silverstone, la ligne F1 se situe sur Hamilton Straight, près des stands. Référence officielle : https://www.silverstone.co.uk/node/3220 . C’est la voie des stands du jeu qui avait été déplacée, et non le repère de la ligne dans la carte.

Le passage de la ligne en empruntant les stands est désormais calculé à sa position géométrique le long de cette voie, et non comme une simple fraction de sa longueur totale.

## Sauvegardes

Les sauvegardes V52–V54 sont reconnues. Les sessions contenant une voiture aux stands sont adaptées à la nouvelle disposition ; le temps déjà passé au changement des roues, les pneus et les résultats restent conservés. Les nouvelles sauvegardes précisent la version de leur disposition des stands. Les records locaux, l’export et le partage de fichiers restent disponibles.

## Vérifications

Les contrôles se trouvent dans verification-v55 du dossier de travail : attente du coéquipier avec passage d’une autre équipe sur les 23 circuits ; arrivées groupées des 22 voitures avec plusieurs séries aléatoires de changements de roues ; courses complètes en Club et en Sport sur le sec et sous la pluie ; absence de chevauchement des carrosseries ; reprise d’anciens arrêts et reprise exacte des nouvelles sauvegardes ; rendu des 23 plans et affichage mobile.

Les essais mobiles sont réalisés dans un navigateur émulant la taille d’un téléphone. Ils ne remplacent pas un essai sur un iPhone physique.
