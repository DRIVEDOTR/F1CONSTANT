# F1 à la loupe — travail V39

Cette version reprend le modèle 3D existant. Elle améliore les relations entre les pièces, mais reste une reconstitution pédagogique à partir de vues publiques, sans plans ni cotes d’une écurie. Elle ne constitue pas un modèle CAO constructeur ni une simulation physique multibody.

## Changements réalisés

- **Amortisseurs internes.** Les anciens basculeurs à une hauteur de 0,59 et les ancrages de ressort à 0,65 étaient plus hauts que la carrosserie du nez. Les basculeurs sont désormais placés sous les capots, avec des amortisseurs longitudinaux derrière l’essieu avant et vers l’avant du carter arrière. Les poussoirs restent à l’extérieur, les ressorts et leurs ancrages sont internes. Les points d’attache des triangles et la crémaillère ont également été replacés dans les volumes de coque.
- **Direction continue.** Volant du cockpit, colonne avec repères, paliers, pignon, crémaillère, soufflets, biellettes et porte-moyeux sont liés. La rotation de la colonne et du pignon correspond désormais à celle du volant, dans le même repère physique. Les bras et les biellettes accompagnent braquage et débattement.
- **Halo.** Arche avec section ovale, un montant avant et deux pieds arrière. Un casque générique sert de repère d’échelle sous l’arche ; le texte distingue le cœur en titane et l’habillage composite.
- **Carrosserie.** Trois états communs : en place, transparente, retirée. L’état fermé masque les organes internes pour éviter toute pièce mécanique apparaissant hors des capots. La coupe conserve les ancrages utiles. L’ancien groupe de pistons statiques, qui doublonnait avec le V6 animé, a été retiré.
- **Minicaméra.** Vues prépositionnées sur amortisseurs avant/arrière, colonne/crémaillère, halo/cockpit, admission/V6/cylindre, boîte, différentiel et frein. Le rapprochement est continu ; la caméra peut orbiter et se déplacer dans la même scène. Le gros plan de boîte conserve désormais la boîte sur la F1.
- **Freins.** Les plaquettes se rapprochent des deux faces du disque quand on freine. Le disque tourne avec la roue et l’étrier accompagne seulement le porte-moyeu. La roue peut être lancée puis freinée et un léger rougissement suit une chaleur illustrative. Le jeu est exagéré pour être observable.
- **Changement de roues dans l’atelier.** Démonstration sur les quatre moyeux : pistolet pneumatique, écrou, extraction de la roue usagée, présentation d’une roue neuve, serrage. Choix de gomme et chronomètre. Durée fixe de 4,8 secondes pour la lecture pédagogique ; les durées aléatoires et mécaniciens de course relèvent du jeu.
- **Air et carburant ensemble.** Les circuits sont reconstruits avec des branches vers les six cylindres du V6 qui se trouve dans la voiture. Le bleu suit l’admission, le doré les rampes et l’injection ; l’injection dans les chambres, la combustion et les organes moteur partagent l’animation du V6. La chaîne embrayage → boîte → différentiel → demi-arbres → roues arrière, les rapports, l’accélérateur, le frein et les vitesses de lecture existantes sont conservés.
- **Affichage responsive.** Commandes d’inspection compactes au-dessus de la scène, scène plus grande sur téléphone, ateliers freins/pneus regroupés.

## Vérification

- Vérification de syntaxe JavaScript réussie avec le runtime Node intégré.
- Vérification numérique de 101 positions de débattement par coin : solution continue du basculeur ; compression progressive d’environ 53 mm à l’avant et 57 mm à l’arrière dans cette géométrie illustrative.
- Vérification numérique du braquage et de la continuité des biellettes ; les angles sont des valeurs pédagogiques.
- Point d’inspection disponible pour la vérification navigateur : `window.F1Loupe39.state()`, `.inspect('frontSusp')`, `.inspect('rearSusp')`, `.inspect('halo')`, `.inspect('cylinder')`, `.inspect('brake')`, `.inspect('gearbox')`, `.skin('full'|'ghost'|'open')`, `.startPit()` et `.stopPit()`.
- Le parent réalise la vérification visuelle et fonctionnelle dans le navigateur.

## Limites conservées

Les formes de carrosserie et les matériaux restent ceux d’une reconstruction 3D légère, pas d’un scan photoréaliste. Les jeux, températures, courbes de couple, rapports, fluides et dimensions sont illustratifs. La suspension ne reproduit pas toutes les flexures, barres de torsion, couplages antiroulis ni géométries d’une monoplace donnée. La minicaméra est une caméra d’inspection libre avec points de départ utiles, sans calcul de collision dans chaque conduit.

Les canalisations colorées ne sont pas des mesures de débit et ne doivent pas être lues comme la plomberie précise d’une écurie. Le modèle pédagogique conserve un ressort hélicoïdal visible pour expliquer les fonctions élastiques ; de nombreuses F1 utilisent des barres de torsion. La simulation autonome historique des moteurs reste disponible dans son thème pour comparer les architectures.

## Références primaires

- Mercedes-AMG F1, suspension et implantation interne : https://www.mercedesamgf1.com/news/the-suspension-of-a-formula-one-car
- Mercedes-AMG F1, W17 2026 et principes direction/transmission : https://www.mercedesamgf1.com/f1-w17-2026-technical-specifications
- FIA, construction du halo et ses trois ancrages : https://www.fia.com/news/how-make-f1-halo
