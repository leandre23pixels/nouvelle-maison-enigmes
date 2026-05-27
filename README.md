# La Nouvelle Maison

Petit jeu d'enigmes maison pour Papi et Mamie.

## Lancer le jeu

Ouvre `index.html` dans un navigateur pour tester en local.

Quand `sync-config.js` contient l'URL Supabase, les joueurs et l'admin restent synchronises entre plusieurs appareils.

## Compte admin

Depuis l'accueil, clique sur `Preparation`.

Code admin par defaut :

```text
LSO2012
```

Dans l'admin tu peux :

- choisir le systeme actif de 1 a 10 ;
- voir les 300 enigmes disponibles ;
- modifier le nom du systeme ;
- modifier les pieces ;
- modifier les enigmes ;
- modifier les indices ;
- modifier les mots secrets ;
- modifier les cachettes ;
- decocher les enigmes en trop pour reduire le parcours ;
- activer le mode `Langage inconnu` sur une enigme ;
- choisir une heure d'ouverture et une heure de fermeture ;
- bloquer le jeu avec le message "Pas de missions pour l'instant." ;
- regenerer les textes d'un systeme sans ressortir les memes variantes ;
- imprimer seulement les indices coches.

## Cote joueurs

Le bouton `Passer` a ete retire. Les joueurs peuvent tourner la roue une fois par enigme. S'ils gagnent un joker, ils peuvent l'utiliser pour passer une enigme.

## Personnaliser

Les enigmes par defaut sont generees dans `script.js` avec `DEFAULT_PLACES` et `SYSTEM_THEMES`.
Dans l'app, les modifications faites dans l'admin sont sauvegardees dans le navigateur et envoyees au serveur si la synchro est active.

Tu peux changer :

- `place` : le lieu de la maison ;
- `riddle` : l'enigme affichee ;
- `hint` : l'indice ;
- `secret` : le mot qu'ils doivent taper ;
- `prep` : ta note de preparation.

Les fiches imprimees sont compactes pour economiser les feuilles: elles affichent BRAVO, le code et le lieu simple.

En mode `Langage inconnu`, le titre, l'enigme et l'indice sont transformes en syllabes codees. Le jeu et la fiche imprimee affichent aussi l'alphabet de decryptage.

Le texte de fin est dans `finalText`.

## Synchro Supabase

Le serveur utilise une Edge Function Supabase `nouvelle-maison-sync` et la table `nouvelle_maison_sync`.

Apres deploiement, renseigne `sync-config.js` :

```js
window.NOUVELLE_MAISON_SYNC = {
  endpoint: "https://TON-PROJET.supabase.co/functions/v1/nouvelle-maison-sync",
  roomId: "nouvelle-maison",
  token: "LSO2012",
};
```
