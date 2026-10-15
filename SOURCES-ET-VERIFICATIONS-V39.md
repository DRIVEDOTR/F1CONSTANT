# Sources et vérifications · V39

## Références techniques consultées le 15 octobre 2026

- [Mercedes — The suspension of a Formula One car](https://www.mercedesamgf1.com/news/the-suspension-of-a-formula-one-car) : éléments intérieurs et extérieurs, basculeurs, ressorts et amortisseurs. L’article décrit un exemple antérieur ; les principes servent à la reconstruction générique.
- [FIA — How to make an F1 halo](https://www.fia.com/news/how-make-f1-halo) : structure en titane, arche, montant et trois ancrages.
- [Mercedes — W17 technical specifications](https://www.mercedesamgf1.com/f1-w17-2026-technical-specifications) : V6 turbo à injection directe, direction à crémaillère, embrayage et huit rapports.
- [Brembo — Formula 1](https://www.brembo.com/en/motorsport/formula1) : disques, étriers, plaquettes et freinage. Le modèle ne prétend pas reproduire un étrier 2026 spécifique.
- [F1 — Anatomy of a pit stop](https://www.formula1.com/en/latest/article/anatomy-of-a-pit-stop-how-do-f1-teams-service-their-cars-in-less-than-two.5p9LNdd8XJdvP4mRsXoGsB) : travail simultané aux quatre roues, pistolets, retrait, remontage et validation.

## Références pour les environnements

Les choix de décors sont des évocations déduites de ces descriptions, pas des relevés topographiques.

- [F1 — Monaco, noms et positions des virages](https://www.formula1.com/en/latest/article/explained-how-every-monaco-corner-got-its-name.5ClYqWmfpeUpsRJA6mDNaX) : Casino, tunnel, Tabac, Piscine, Rascasse et port.
- [F1 — Montréal](https://www.formula1.com/en/racing/2026/canada) et [plan du Parc Jean-Drapeau](https://www.parcjeandrapeau.com/files/publications/carte_plan_ile_sainte_helene_ile_notre_dame_installations_espaces_parc_jean_drapeau_montreal_2025_02_1.pdf) : île Notre-Dame, parc, fleuve et bassins.
- [Autodrome de Monza — parc et arbres](https://www.monzanet.it/en/i-light-up-less-3000-new-trees-for-the-monza-park/) et [Spa-Francorchamps — forêt](https://www.spa-francorchamps.be/en/our-sightseeing-tours).
- [F1 — Miami](https://www.formula1.com/en/latest/article/what-makes-the-miami-grand-prix-special-and-why-you-should-see-it.3AmQakDbq8k5qfPPlZlQkx) : site du stade, à distinguer d’un circuit au bord de l’océan.
- [F1 — Singapour](https://www.formula1.com/en/latest/article/circuit-guide-everything-you-need-to-know-about-the-marina-bay-street-circuit.3d9yfiqIKoQhcMnRLESWbz), [Yas Marina](https://www.formula1.com/en/information/abu-dhabi-yas-marina-circuit-yas-island.4YtOtpaWvaxWvDBTItP7s6), [Zandvoort](https://www.formula1.com/en/information/netherlands-zandvoort-circuit-zandvoort.6XdtPTIMZzx5wLKP9mm7Ev).
- [Madring — description du circuit](https://www.madring.com/en/circuit), [Sepang — architecture](https://www.sepangcircuit.com/architecture), [Circuit de Catalunya — zones végétales](https://www.circuitcat.com/en/news/circuit/the-circuit-plants-200-trees-to-reduce-the-heat-island-effect-and-promote-biodiversity/).

Les identités de pilotes/équipes et les images du garage restent celles du site existant. Aucune statistique de carrière ni liste de pilotes n’a été réactualisée dans cette livraison.

## Contrôles réalisés

- Comparaison préalable : les six fichiers du ZIP jeu V38 étaient identiques à ceux du dépôt ; seules les actualités avaient évolué depuis l’installation du 2 octobre.
- Syntaxe JavaScript des fichiers modifiés vérifiée avec Node.
- **46 courses simulées**, 23 circuits × 2 niveaux, trois tours avec pilote de test programmé. Toutes terminées, huit voitures par session et au moins un arrêt du joueur. **368 arrêts** enregistrés dans ces simulations, tous dans l’intervalle demandé.
- **1 000 arrêts générés** : quatre échéances indépendantes et attente de la plus lente ; temps observés de 2,196 à 6,000 s. Les délais restent bornés entre 1,9 et 6 s ; aucune promesse de distribution uniforme.
- Qualifications simulées : deux tours chronométrés, meilleur tour des huit pilotes, tri et reprise de la grille pour le Grand Prix.
- Sans pédale : voiture immobile. Accélération au clavier testée dans Chrome ; caméra suivie, pause et commandes tactiles vérifiées.
- Rendu des **23 circuits** chargé dans Chrome. Pas de débordement horizontal du jeu ni de la loupe aux formats 320×740, 390×844, 768×1024, 844×390 et 1440×1000.
- Inspection visuelle de la suspension, du halo, de la direction, du cylindre, de la boîte, du frein et de la démonstration de changement de roues. Celle-ci se termine à 4,80 s.
- Ressorts : cinématique examinée sur 101 positions de débattement, compression continue à l’avant et à l’arrière.

Les contrôles sur formats mobiles sont des émulations Chrome sur Mac. Aucun essai matériel sur iPhone/iPad n’est revendiqué. Les simulations ne prouvent pas à elles seules l’agrément de conduite : le ressenti, la difficulté et la lisibilité des animations restent à juger en jouant. Aucun test du site public ni de la publication GitHub Pages après cette livraison n’est revendiqué.
