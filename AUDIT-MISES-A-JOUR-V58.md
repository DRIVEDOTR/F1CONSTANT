# Audit des mises à jour — F1-CONSTANT V58

Audit du 5 novembre 2026. Le site utilisait déjà des classements, un calendrier et des qualifications actualisés en ligne, ainsi qu’une collecte d’actualités. En revanche, les fiches, leurs historiques et les archives conservaient essentiellement la copie du 6 septembre 2026. Cela permettait d’afficher des chiffres différents selon la rubrique.

## Ce qui est maintenant actualisé ensemble

| Rubrique | Mise à jour |
|---|---|
| Pilotes | Victoires GP, poles officielles, podiums, départs, points de carrière, titres et années des titres ; listes détaillées de victoires, poles et podiums. |
| Écuries | Victoires, poles, titres et années des titres sous l’identité du constructeur ; position et points de saison. Les résultats de Sauber ne sont pas transférés à Audi, ni ceux de Renault à Alpine. |
| Résultats dans les fiches | Nouveau tableau par Grand Prix pour chaque pilote et chaque écurie ; les sprints ont des lignes et des dates distinctes. Les deux pilotes d’une écurie et les remplaçants sont pris en compte dans ses résultats. |
| Circuits | Record en course sur la version exacte du tracé dessiné ; longueur, nombre de tours prévu et distance prévue, lorsque la source identifie ce même tracé. Un changement important de longueur ou de tracé nécessite un contrôle. |
| Archives 1950–2026 | Classements, résultats et podiums à partir de la même publication ; les corrections historiques de la source sont ainsi répercutées. |
| Légendes et écuries historiques | Correction des totaux et des historiques issus de la source, sans réécriture automatique de leur biographie ni modification des photos. |
| Quiz | Les questions fondées sur les fiches et les circuits utilisent les chiffres actualisés. Le tableau des champions des saisons modernes est régénéré pour les saisons terminées uniquement : les points d’un champion déjà sacré avant la fin de saison peuvent encore évoluer. |
| Classements d’accueil | Actualisation Jolpica conservée, avec une copie hors ligne fraîche. Une ancienne copie en mémoire ne doit pas remplacer une publication corrigée plus récente. |
| Qualifications et calendrier | Actualisation en ligne conservée ; calendrier et dernière qualification disponibles hors ligne renouvelés. Les événements sont associés par circuit, et non simplement par numéro de manche. |
| Actualités | Collecte existante conservée. Son exécution et sa publication automatiques ont été constatées sur GitHub le 5 novembre. Les collectes de statistiques et d’actualités partagent une réservation de travail pour éviter les conflits de fichiers. |

## Fonctionnement

Une vérification GitHub est prévue toutes les six heures, même si le Mac et l’iPhone sont éteints. Elle attend les publications stables de F1DB, disponibles après les épreuves et leurs corrections ; ce n’est pas un service de chronométrage en direct. GitHub peut retarder une exécution planifiée.

La source est téléchargée, son empreinte est vérifiée lorsqu’elle est fournie, puis les données sont contrôlées avant écriture. Les totaux doivent correspondre aux historiques. Les résultats futurs, incomplets, incohérents ou plus anciens que la copie conservée sont refusés. Si la source est indisponible, la dernière copie valide reste publiée. Une exécution sans changement ne crée pas de commit inutile.

La date affichée est celle du dernier Grand Prix intégré, distincte de la date de publication de la base. Les noms, images et textes éditoriaux restent ceux du site. Les remplacements ou changements de tracé détectés sont signalés dans le compte rendu de la collecte.

La version du site reste volontairement celle de 2026 : une publication de données pour 2027 ne remplace pas silencieusement les photos, les voitures et les pages 2026.

## Corrections relevées pendant cet audit

Copie intégrée : résultats au **1 novembre 2026, après la manche 19**, publication F1DB **v2026.19.0 du 2 novembre**.

- Spielberg : correction du record en course, **1:05.619 — Carlos Sainz, 2020**, à la place de 1:07.924 attribué à Oscar Piastri.
- Madrid : ajout du record jusque-là absent, **1:35.587 — George Russell, 2026**.
- Spa : harmonisation de l’orthographe du détenteur ; le chrono n’a pas changé.
- Corrections de distances prévues pour Spielberg, Spa, Zandvoort, Madrid, Sepang, Austin et Yas Marina. Madrid passe de 5,414 à 5,416 km selon la source.
- Montréal conserve bien ses **70 tours prévus**, malgré les 68 tours réellement parcourus dans les résultats de l’épreuve 2026. Même distinction à Sepang : 56 tours prévus et 55 réellement parcourus.
- Un remplaçant figure dans les résultats du dernier GP : Ryo Hirakawa chez Haas. Son résultat est intégré aux résultats de Haas et aux archives. Une alerte demande de vérifier l’ajout éventuel d’une fiche dédiée ; la sélection des 22 pilotes du jeu n’est pas modifiée automatiquement.

## Ce qui doit rester vérifié sur annonce officielle

| Catégorie | Pourquoi |
|---|---|
| Titulaires, remplaçants, transferts et numéros | Les résultats d’un GP ne suffisent pas à confirmer un contrat de titulaire, et un remplacement ponctuel ne doit pas réorganiser automatiquement le jeu. |
| Managers, responsables techniques, motoristes, châssis | Les changements doivent être confirmés auprès des écuries ou de Formula 1. |
| Dessins des circuits, stands et zones Overtake | Un chrono ou une longueur ne permettent pas de reconstruire un plan. Vérifier les documents FIA avant de modifier les dessins. |
| Photos, livrées et biographies | Vérifier l’identité, l’année, les faits et les conditions d’utilisation. Seul le paragraphe chiffré des biographies de pilotes est régénéré. |
| F1 à la loupe, règles et explications techniques | Les changements de règlement nécessitent une vérification pédagogique et visuelle. |

Les records personnels, sauvegardes, championnats et paramètres du jeu restent indépendants des résultats des vrais Grands Prix. Les records réels des circuits servent toujours de référence au lancement d’une nouvelle course.

## Activation

Les fichiers sont préparés dans le dépôt local. Faire **Commit**, puis **Push origin** dans GitHub Desktop. Le premier envoi déclenche la collecte ; les suivantes seront planifiées automatiquement. Aucun nouveau service ni clé secrète n’est nécessaire.

Le suivi est disponible dans GitHub → Actions → **Statistiques F1**. Le bouton **Run workflow** permet une vérification manuelle. Une erreur doit être examinée dans ce suivi ; elle ne supprime pas la dernière copie valide.

## Sources et vérifications

- F1DB : https://github.com/f1db/f1db ; publication intégrée : https://github.com/f1db/f1db/releases/tag/v2026.19.0
- Documentation Jolpica : https://api.jolpi.ca/docs/
- Automatisations du site : https://github.com/DRIVEDOTR/F1CONSTANT/actions

La collecte complète a été exécutée depuis Internet. Contrôles : cohérence des historiques et totaux, douze tests automatiques, sources incomplètes/futures/corrompues refusées, exécution sans changement, 22 fiches pilotes, 11 fiches écuries, 23 records, classement et qualifications hors ligne, archives, formats ordinateur/téléphone et reprise/export/import des sauvegardes du jeu. Le contrôle téléphone est une émulation dans le navigateur, pas un essai sur un iPhone réel.
