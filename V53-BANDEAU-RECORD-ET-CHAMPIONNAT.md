# V53 — Record dans le bandeau et bulle Championnat · classement

Le bandeau supérieur du jeu affiche désormais « record: » suivi du meilleur tour enregistré pour le circuit et le niveau choisis. Le chrono reste affiché pendant la course. Lorsqu’un nouveau record personnel est établi, le libellé devient « RECORD DU TOUR ! » et le temps clignote pendant six secondes. Ensuite, le clignotement cesse, le libellé revient à « record: » et le nouveau temps reste fixe. Un rechargement ou l’affichage d’un ancien record ne déclenche pas de fausse célébration. Le réglage de réduction des animations du système est respecté.

La nouvelle bulle « Championnat · classement » se trouve à côté de Pause, Agrandir, Enregistrer et Garage. Elle ouvre une fenêtre contenant le classement et les trois actions :

- Reprendre le championnat ;
- Enregistrer maintenant ;
- Nouveau championnat · effacer les résultats.

L’ouverture met la session en pause et conserve le championnat. Fermer la fenêtre ne relance pas la voiture à l’improviste. La touche Échap ferme la fenêtre, y compris en plein écran. La reprise retrouve le championnat sauvegardé ; créer un nouveau championnat conserve les records et revient au choix du calendrier, après confirmation si des résultats doivent être effacés.

La sauvegarde locale, l’export/import, les records existants et le format de progression de la V52 sont conservés. Les performances et la conduite ne changent pas.

## Synchronisation Mac / iPhone

La synchronisation automatique entre appareils n’est pas activée par cette livraison. Le site reste hébergé sur GitHub Pages et les sauvegardes sont toujours locales à chaque navigateur.

Pour activer une synchronisation, il faut choisir et configurer un stockage partagé avec une authentification commune aux deux appareils. Une connexion par e-mail, par exemple via Supabase, est une option adaptée. L’activation nécessite un compte de service et un projet configuré pour le site ; aucun compte ou projet de ce type n’a été fourni à cette étape. Il faudra également gérer la reprise de la version la plus récente et éviter qu’une ancienne session encore ouverte sur un autre appareil n’écrase la progression.

Références :
- GitHub Pages : https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages
- Authentification par e-mail : https://supabase.com/docs/guides/auth/auth-email-passwordless

## Vérifications

Affichage du record avant le départ, célébration puis arrêt du clignotement après six secondes même en pause, reprise et conservation du record après rechargement. Fenêtre du championnat sur mobile et ordinateur, accès aux trois actions, consultation en pause, fermeture par Échap et fonctionnement en plein écran. Création d’un nouveau championnat sans effacer les records. Reprise en cours de Grand Prix, après les qualifications et entre deux manches, conservation des points, export/import et rejet de fichiers invalides.

Publication : GitHub Desktop, Commit puis Push origin.
