# F1 Constant · V39 · 15 octobre 2026

Cette version retravaille les mécanismes de « F1 à la loupe » et remplace la caméra fixe du jeu. Elle conserve les autres rubriques et les données existantes.

## Explorer la voiture

- Amortisseurs et basculeurs logés sous les capots ; triangles, biellettes et poussoirs reliés à leurs articulations. Les quatre débattements restent manipulables séparément.
- Halo continu autour du casque, avec un montant avant et deux ancrages arrière.
- Volant, colonne, pignon, crémaillère, biellettes et porte-moyeux liés visuellement.
- Carrosserie en place, transparente ou retirée. Minicaméra vers suspension avant/arrière, direction, cockpit, halo, V6, cylindre, boîte, différentiel et frein. Zoom libre en complément.
- Plaquettes animées de part et d’autre des disques. Commande pour lancer les roues, puis les freiner ; échauffement visible.
- Démonstration des quatre changements de roues sur la monoplace : pistolets, écrous centraux, retrait, nouvelle gomme et serrage. Séquence pédagogique de 4,8 s, distincte des arrêts aléatoires du jeu.
- Trajets air et carburant réunis sur la voiture, conduites vers les six cylindres et injection dans les chambres. La transmission conserve moteur, embrayage, huit rapports, différentiel et demi-arbres ; accélération, freinage et changement de rapport restent manipulables.

Il s’agit d’une maquette pédagogique construite en 3D, pas d’un modèle constructeur homologué ni d’une restitution photoréaliste. Les ressorts hélicoïdaux explicitent la fonction élastique, qui peut être assurée par des barres de torsion sur une vraie F1. Les jeux, débits et débattements sont amplifiés pour être visibles.

## Piloter

- Caméra rapprochée suivant la F1 et tournant progressivement avec elle ; le circuit défile. Zoom de 60 à 180 % et minicarte.
- Huit voitures. Choix de l’écurie et du pilote parmi ceux du site, sept adversaires choisis individuellement ou tirés au sort, sans doublons.
- Les images de profil de la rubrique Écuries sont réutilisées au garage. En piste, onze livrées et motifs sont adaptés à une représentation aérienne Canvas ; les photos de profil ne sont pas transformées artificiellement en vues du dessus.
- Accélération, freinage et direction manuels dans les deux niveaux. Club stabilise davantage la direction ; Sport donne des réactions plus vives et des rivaux plus rapides. Les rapports passent automatiquement dans le jeu.
- Qualifications à huit : deux tours chronométrés, meilleur tour pour chaque pilote, puis lancement du Grand Prix sur la grille obtenue. Possibilité de course directe.
- Stands guidés après une demande volontaire. Quatre équipes de roue travaillent en parallèle. Chacune peut rencontrer un écrou résistant ; le départ attend la dernière validation. Temps total entre 1,9 et 6 s, mesuré de l’immobilisation au redémarrage. Cet intervalle est un réglage du jeu, pas une limite des arrêts réels.
- Vue agrandie de l’arrêt, écrous/pistolets animés, anciennes roues et nouveaux pneus. Historique des chronos du joueur et des sept adversaires.
- Paysages différenciés : port, yachts, ville et tunnel à Monaco ; parc boisé à Monza et Spa ; île/fleuve à Montréal ; ville nocturne et baie à Singapour ; stade et marina artificielle à Miami ; environnements adaptés aux autres circuits.

Les tracés proviennent des cartes du site. Les décors évoquent des lieux documentés, mais ne sont pas géoréférencés ; la largeur, les stands, l’échelle des véhicules, les performances et les temps au tour restent adaptés à l’arcade. La compétition simulée n’est pas une reproduction du règlement sportif complet.

### Commandes

Ordinateur : ↑ ou Z/W pour accélérer ; ↓, S ou Espace pour freiner ; ←/→ ou Q/A et D pour tourner ; Maj pour le boost en accélérant ; P pour demander les stands ; Échap pour la pause. Relâcher les gaz fait rouler sur l’élan.

Téléphone et iPad : un doigt pour la direction, l’autre pour les gaz ou le frein. Le boost peut être tenu avec les gaz. « Agrandir » utilise l’espace disponible ; le zoom de caméra demeure réglable.

## Installation et publication avec GitHub Desktop

Sept fichiers d’exécution changent : `index.html`, `assets/loupe.js`, `assets/loupe.css`, `assets/arcade-core.js`, `assets/arcade-render.js`, `assets/game.js`, `assets/game.css`. Les numéros de cache correspondants passent à 39.

Trois documents accompagnent cette livraison : ce guide, `NOTES-LOUPE-V39.md` et `SOURCES-ET-VERIFICATIONS-V39.md`.

Le petit ZIP contient uniquement ces fichiers. Le ZIP complet est une sauvegarde de la copie examinée ; pour une installation ultérieure, préférer la mise à jour ciblée afin de conserver les actualités plus récentes.

Après application au dossier `Bureau/GitHub/F1-CONSTANT`, ouvrir GitHub Desktop et vérifier les changements. Résumé suggéré : « V39 — mécanique intégrée, caméra suivie et qualifications ». Cliquer sur « Commit to main », puis « Push origin ». GitHub Pages publiera ensuite selon la configuration existante. Aucun commit ni envoi vers GitHub n’a été effectué par cette livraison.

## Idées pour la suite

1. **Apprentissage du pilotage** : une école de freinage par virage, une trajectoire indicative activable et le fantôme de son meilleur tour. Garder les pédales manuelles.
2. **Week-end complet** : essais libres, choix de stratégie, qualification plus longue, puis course ; sauvegarde locale d’une saison.
3. **Conditions changeantes** : pluie progressive, adhérence de la piste, pneus intermédiaires et pluie, température et zones de piste humides.
4. **Vie de course** : drapeaux, voiture de sécurité, neutralisations, dégâts réglables et avertissements de limites de piste.
5. **Décors de référence plus précis** : repères calés sur des données cartographiques sous licence compatible, relief et bâtiments caractéristiques circuit par circuit.
6. **Images plus proches de la photo** : remplacer progressivement la géométrie pédagogique par des modèles 3D détaillés et texturés, avec des références et licences vérifiées ; préserver la fluidité sur iPad et téléphone.
7. **Arrêts plus vivants** : les trois rôles par roue, échanges radio, choix de l’emplacement de garage et tableau de comparaison des équipes.

Ces idées ne sont pas présentées comme déjà réalisées dans la V39.
