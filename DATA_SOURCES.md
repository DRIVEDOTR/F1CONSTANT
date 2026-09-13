# Sources — F1 CONSTANT V16

Préparation : 12 septembre 2026. Résultats sportifs : **jusqu’au 6 septembre 2026 inclus**.

## Palmarès : F1DB

[Publication v2026.13.0](https://github.com/f1db/f1db/releases/tag/v2026.13.0), JSON séparés. [Projet et licence CC BY 4.0](https://github.com/f1db/f1db), Marcel Overdijk et contributeurs. Données transformées en listes locales et libellés français.

Les résultats de course déterminent les victoires et podiums ; le champ `polePosition` détermine les poles officiellement créditées, non une simple première case de grille. Les classements annuels déterminent les années des titres. Les résumés sont recalculés depuis ces listes et comparés aux totaux de la publication. Aucun titre 2026 n’est attribué par anticipation.

L’ancienne interrogation Jolpica/Ergast n’est plus utilisée à l’ouverture : elle pouvait produire des listes incomplètes. Tous les événements nécessaires sont inclus dans `js/history.js`.

### Distinctions importantes

- Alpine est comptée depuis 2021 sous son propre nom, sans les résultats Renault. Le périmètre des onze écuries est affiché dans chaque fiche.
- Russell : 11 poles créditées au 6 septembre 2026. Sa première place sur la grille au Brésil 2022 après le sprint n’ajoute pas de pole : celle-ci est créditée à Kevin Magnussen. [Compte rendu officiel de la pole de Magnussen](https://www.formula1.com/en/latest/article/magnussen-masters-timing-at-interlagos-to-claim-sensational-maiden-pole.5Ll7fEBykiPZyl7O3sTlT1).

## Circuits

- Tracés : Jules Roy, [f1-circuits-svg](https://github.com/julesr0y/f1-circuits-svg), CC BY 4.0. Adaptations : centrage, annotation, couleurs, damier et calques.
- Virages, départ et voie des stands : télémétrie FastF1 diffusée par [TracingInsights 2026](https://github.com/TracingInsights/2026) et [archives 2025](https://github.com/TracingInsights-Archive/2025). Le millésime est indiqué sur les fiches. Les points sont projetés sur le tracé vectoriel ; les largeurs et petits écarts restent schématiques. Les doublons sur des coudes non numérotés sont supprimés.
- Bakou : l’ordre et les coordonnées des 20 virages viennent des données 2025 de TracingInsights/FastF1. En V16, T6 et T7 sont projetés selon leur distance dans le tour, entre T5 et T8, afin d’éviter l’erreur de branche provoquée par la proximité géométrique de la longue ligne droite du retour.
- Madrid : [FIA, plan du circuit et des stands, 10 septembre 2026](https://www.fia.com/system/files/decision-document/2026_spanish_grand_prix_-_competition_notes_-_circuit_map_pit_lane_drawing_and_emergency_exits_map.pdf). Les 22 virages, le départ et les stands sont reportés sur le tracé. Longueur 5,414 km ; limites de secteurs à 1 839 et 3 888 m. Détection Overtake à l’entrée de T22 ; activation 20 m après T22.
- Sepang : [plan de Will Pittenger](https://commons.wikimedia.org/wiki/File:Sepang.svg), CC BY-SA 3.0, référence pour les 15 virages, le départ et les stands. Les repères sportifs 2026 non renseignés ne sont pas ajoutés.
- [Fiche officielle du GP de Bahreïn en Malaisie 2026](https://www.formula1.com/en/racing/2026/bahrain) : confirme Sepang et ses statistiques. Le segment « bahrain » de l’adresse est conservé ; le pays affiché est bien la Malaisie.

Les positions Overtake et Speed Trap reprises de l’édition précédente ne constituent pas toutes une nouvelle validation des notes FIA 2026. Les repères Overtake concernés sont marqués comme indicatifs. Ces cartes ne sont pas des documents sportifs officiels.

## Pilotes et mensurations

[Pilotes Formula1.com](https://www.formula1.com/en/drivers) et [écuries Formula1.com](https://www.formula1.com/en/teams) pour l’effectif, les tenues officielles et le contexte des fiches. Naissances, débuts, écuries de carrière et palmarès sont recoupés avec F1DB. Les managers restent ceux de la version remise par l’utilisateur ; seuls les drapeaux et les liens internes vers les écuries sont ajoutés.

Philippe Streiff : statistiques et écuries issues de F1DB v2026.13.0 ; podium au Grand Prix d’Australie 1985 et décès recoupés avec l’article Formula1.com « F1 podium finisher Philippe Streiff dies aged 67 » du 24 décembre 2022 et sa [fiche biographique](https://en.wikipedia.org/wiki/Philippe_Streiff). Sa photographie de 2014 est créditée individuellement dans `PHOTO_CREDITS.md`.

Taille et poids : [RacingNews365, tableau 2026](https://racingnews365.com/height-weight-f1-drivers), consulté le 12 septembre 2026. Le poids est affiché avec ≈ et n’est pas présenté comme une mesure officielle du jour.

## Photographies

Les 22 portraits principaux des pilotes 2026 proviennent des profils officiels Formula1.com et sont chargés depuis `media.formula1.com` ; ils ne sont pas redistribués dans l’archive. Les photographies documentaires de Wikimedia Commons restent incluses localement comme images de secours. Les 61 photographies de légendes restent locales ; les 60 images déjà présentes ne sont pas modifiées et une image libre est ajoutée pour Philippe Streiff. Crédits individuels et pages de licence : `PHOTO_CREDITS.md` et liens sur chaque fiche. Aucune photographie de pilote n’est générée artificiellement.

Les images distantes des voitures et des managers sont conservées de la V10. Elles restent soumises aux droits de leurs auteurs et à la disponibilité de leur hébergeur.

## Écuries de légende

Les 176 identités historiques proviennent des tables `constructors` et `seasons-constructors` de [F1DB v2026.13.0](https://github.com/f1db/f1db/releases/tag/v2026.13.0), Marcel Overdijk et contributeurs, licence CC BY 4.0. Les onze identités engagées en 2026 sont exclues de cette rubrique puisqu’elles figurent déjà dans « Écuries ».

Les dates affichées sont les premières et dernières saisons de championnat dans lesquelles l’identité apparaît ; la liste complète des saisons est conservée dans chaque fiche. Les statistiques restent attachées à l’identifiant du constructeur dans F1DB et ne sont pas fusionnées entre identités successives. F1DB ne fournit pas de logos officiels réutilisables pour l’ensemble de ce catalogue : les monogrammes visibles sont des emblèmes typographiques éditoriaux et sont signalés comme tels.

## Challenge

Questions et corrections produites depuis les données structurées de la même édition. La date de référence est annoncée une fois dans le jeu, sans ajouter « dans la base V10 de Constant » aux questions. Les niveaux distinguent connaissances générales, palmarès et détails historiques.
