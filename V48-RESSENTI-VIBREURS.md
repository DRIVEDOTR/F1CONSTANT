# V48 — Ressenti discret des vibreurs

Un grondement grave filtré et doucement pulsé accompagne le passage sur les vibreurs. Son intensité suit le contact des roues et la vitesse ; il est nul à l’arrêt et très faible à basse vitesse. L’entrée et la sortie du son sont fondues. Les stands, une session en pause, un tête-à-queue et une arrivée ne déclenchent pas cet effet. La coupure des effets moteur coupe aussi ce bruit.

La voiture vibre légèrement lors du contact : déplacement maximal de 0,65 pixel latéralement et de 0,18 pixel longitudinalement à l’écran, rotation inférieure à 0,07 degré. La caméra et la piste ne tremblent pas. La préférence système de réduction des animations est respectée.

Deux cases dans « Sons, musique et commandes » permettent de couper séparément le bruit et la vibration des vibreurs. Le moteur de conduite, les pénalités, les pneus et les stands sont conservés. Les nouvelles versions des scripts sont demandées au navigateur pour éviter de réutiliser un ancien affichage en cache.

Vérifications : intensité bornée selon roues et vitesse ; absence d’effet hors contact, dans les stands et à l’arrêt ; commandes de coupure ; respect de la réduction des animations ; absence de modification de l’état de conduite par l’effet visuel. Rendu sonore Web Audio vérifié : signal filtré présent pendant le contact puis silencieux après le fondu. Le test ne remplace pas un essai d’écoute humaine.

Navigateur : effet sonore réel du jeu activé et coupé pendant un passage sur deux roues, commandes tactiles, comparatifs des gommes, choix avant GP, grille conservée et sauvegarde du championnat. Affichage de 320 à 1440 pixels sans débordement et contrôles audio mobiles inspectés ; aucune erreur JavaScript relevée.

Publication : GitHub Desktop, Commit puis Push origin.
