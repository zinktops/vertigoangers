# zinktops.github.io

## Matomo

Le suivi des pages et des liens sortants est intégré aux deux pages du site et configuré pour l'instance Matomo Cloud `githubzinktops.matomo.cloud` (site `1`). Pour changer d'instance, mettez à jour `MATOMO_URL` (URL HTTPS de base, sans `matomo.php`) et `MATOMO_SITE_ID` (identifiant numérique) en haut de `matomo.js`. Le script charge le fichier Matomo Cloud depuis son CDN lorsque l'hôte se termine par `.matomo.cloud`.

Le script désactive les cookies Matomo et respecte le signal « Do Not Track » du navigateur. Vérifiez également les réglages de confidentialité de votre instance et les obligations applicables au site avant la mise en production.