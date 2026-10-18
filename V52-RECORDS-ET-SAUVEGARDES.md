# V52 — Records du tour et sauvegarde du championnat

## Retrouver ses meilleurs tours

La rubrique « Mes records du tour · Club et Sport » rassemble les meilleurs tours du joueur, circuit par circuit, avec un record distinct pour chaque difficulté. Le chrono est conservé dès qu’un meilleur tour est terminé : il n’est plus nécessaire d’attendre la fin de la session. La gomme et les conditions du tour sont indiquées. Le record du circuit choisi apparaît aussi dans le garage.

Les anciens records de qualification déjà présents dans ce navigateur sont récupérés. Les anciens chronos de course correspondent au temps total du Grand Prix ; ils ne sont pas convertis artificiellement en records de tour. Les nouveaux records ne dépendent plus du numéro de version du jeu.

## Enregistrer et reprendre un championnat

Le bouton « Enregistrer » est disponible pendant le championnat. Il met la session en pause et conserve la situation actuelle. Le championnat est également sauvegardé automatiquement toutes les 10 secondes de jeu, aux changements de manche, à la pause et lorsque la page passe en arrière-plan.

Pour revenir : ouvrir « Championnat · classement et sauvegarde », puis « Reprendre le championnat ». Une session interrompue revient en pause : toucher « Reprendre » pour continuer à piloter. Si le dernier Grand Prix était terminé, la manche suivante est proposée avec les points déjà acquis. Les points ne sont pas attribués une seconde fois lors de la reprise.

La sauvegarde comprend le calendrier, le classement, le pilote et son écurie, les 22 voitures et leurs positions, le chrono, les pneus et leur usure, le boost, la météo, les demandes d’arrêt et les éventuels changements de roues en cours. Une reprise après les qualifications conserve aussi la grille et le choix de pneus avant le Grand Prix. Les séquences aléatoires sont conservées pour que les événements futurs reprennent normalement.

## Garder une copie ou changer d’appareil

La mémoire locale appartient à cet appareil et à ce navigateur. Elle n’est pas synchronisée automatiquement entre un Mac et un iPhone. Utiliser « Exporter ma sauvegarde » pour obtenir un fichier JSON regroupant les records, le championnat et la session interrompue. Puis, sur l’autre appareil, ouvrir le site et utiliser « Importer une sauvegarde » avec ce fichier.

L’import remplace le championnat par celui du fichier et conserve les meilleurs records entre les données actuelles et les données importées. Un fichier invalide est refusé sans écraser les données actuelles. Si le navigateur refuse le stockage local, un message le précise ; le jeu reste utilisable et l’export d’un fichier reste possible.

Le bouton « Nouveau championnat · effacer les résultats » demande confirmation et conserve les records du tour.

## Vérifications

- Reprise déterministe du moteur : chrono, positions des 22 F1, météo, usure, boost et arrêts identiques après rechargement, y compris pendant un changement de roues et un tête-à-queue.
- Conservation des suites aléatoires sans modification des performances ou du comportement de conduite de la V51.
- Migration des anciens records de qualification ; sauvegarde d’un meilleur tour avant la fin de la session.
- Rechargement en cours de Grand Prix, après les qualifications, puis entre deux manches ; points conservés et absence de double attribution.
- Retour au pilote et à la monoplace choisis lors de la création du championnat.
- Export/import, conservation des meilleurs records, rejet de fichiers invalides et export quand le stockage local est indisponible.
- Présentation contrôlée de 320 à 1440 pixels, commandes tactiles, pneus, résultats, sons et scénarios de reprise après interruption.

Les tests de navigateur utilisent une émulation mobile dans Chrome ; ils ne remplacent pas un essai sur un iPhone physique.

Publication : GitHub Desktop, Commit puis Push origin.
