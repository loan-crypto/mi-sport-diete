# Mon Sport & Diète

Site personnel statique (HTML / CSS / JS, sans installation ni serveur) pour :
- cataloguer tes recettes et tes ingrédients (macros, bon/mauvais),
- détailler tes exercices de callisthénie/musculation et tes séances,
- suivre au fil du temps les poids/reps utilisés et les repas mangés,
- générer un programme (split + diète) selon ton objectif et tes jours dispo,
- générer une liste de courses pour la semaine à partir de tes recettes.

## Comment l'ouvrir

Le plus simple : double-clique sur `index.html`, il s'ouvre dans ton navigateur.

Pour un fonctionnement optimal (notamment le suivi, qui utilise le stockage
du navigateur), il est recommandé de lancer un petit serveur local plutôt que
d'ouvrir le fichier directement :

```
cd mon-dossier-du-site
python3 -m http.server 8000
```

puis ouvre `http://localhost:8000` dans ton navigateur.

## Langue (Français / Español)

Un bouton **FR / ES** en haut à droite du menu bascule toute l'interface en
espagnol (menus, titres, boutons, tableaux...) ainsi que le contenu des
recettes/exercices/muscles déjà présents dans le site. Ton choix est mémorisé
(localStorage) et s'applique à toutes les pages.

Pour traduire un nouvel élément que tu ajoutes toi-même (recette, ingrédient,
exercice...), ajoute simplement un sous-objet `es` avec les champs à traduire
à côté des champs français habituels :

```js
{
  id: "mon-plat",
  name: "Mon plat",
  category: "Déjeuner",
  // ...
  es: {
    name: "Mi plato",
    category: "Almuerzo"
  }
}
```

Si tu ne mets pas de bloc `es`, ou si un champ y manque, le texte français
s'affiche automatiquement à la place — rien ne casse et rien ne disparaît.
Voir `js/i18n.js` pour la liste complète des textes fixes de l'interface
(menus, boutons...) si tu veux les ajuster.

## Ajouter une recette

Ouvre `js/data.js`, section `RECIPES`, et copie un bloc existant :

```js
{
  id: "mon-nouveau-plat",       // identifiant unique, sans espace ni accent
  name: "Mon nouveau plat",
  category: "Déjeuner / Dîner",
  photo: "images/recipes/mon-plat.jpg",  // ou "" si pas encore de photo
  servings: 1,
  ingredients: [
    { ingredientId: "poulet-blanc", grams: 150 },
    { ingredientId: "riz-complet", grams: 100 }
  ],
  steps: ["Étape 1...", "Étape 2..."],
  notes: "Ce que tu veux retenir sur ce plat."
}
```

Les `ingredientId` doivent correspondre à un `id` existant dans `INGREDIENTS`
(ou à un nouvel ingrédient que tu ajoutes toi-même, voir ci-dessous). Les
macros totales de la recette sont calculées automatiquement.

Le champ `category` doit être exactement l'une de ces 3 valeurs (utilisées
telles quelles par le regroupement de la page Programme et par la liste de
courses — `js/render-programme.js`) : `"Petit-déjeuner"`, `"Déjeuner / Dîner"`,
ou `"Collation"` (une variante commençant par "Collation", comme
`"Collation / Post-entraînement"`, fonctionne aussi). Une autre valeur de
catégorie s'affichera bien sur la page Diète mais n'apparaîtra dans aucun des
3 groupes de la page Programme.

## Ajouter un ingrédient

Toujours dans `js/data.js`, section `INGREDIENTS` :

```js
{
  id: "avocat",
  name: "Avocat",
  category: "Lipide",
  calories100: 160,   // pour 100g
  protein100: 2,
  carbs100: 9,
  fat100: 15,
  quality: "bon",     // "bon" | "neutre" | "mauvais"
  notes: "Explique ici pourquoi c'est bon ou mauvais, dans quel contexte..."
}
```

## Ajouter un exercice

Section `EXERCISES` :

```js
{
  id: "squat-bulgare",
  name: "Squat bulgare",
  muscleGroup: "Quadriceps, fessiers",
  muscles: ["quadriceps", "fessiers"],  // voir liste ci-dessous — utilisé par la Carte musculaire
  difficulty: "Intermédiaire",   // "Débutant" | "Intermédiaire" | "Avancé"
  photo: "images/exercises/squat-bulgare.jpg",
  video: "videos/squat-bulgare.mp4",  // ou "" si pas encore de vidéo
  description: ["Étape 1...", "Étape 2..."],
  tips: "Ton conseil perso.",
  progressionPrev: "Version plus facile",
  progressionNext: "Version plus dure"
}
```

Le champ `video` accepte un fichier local (dépose-le dans un dossier `videos/`
à côté de `images/`) ou un lien direct vers un fichier vidéo. Tant qu'il est
vide, un cadre "Ajoute une vidéo" s'affiche à la place.

Le champ `muscles` est un tableau de clés parmi : `pectoraux`, `epaules`,
`biceps`, `triceps`, `avant-bras`, `abdominaux`, `obliques`, `trapezes`, `dos`,
`lombaires`, `quadriceps`, `adducteurs`, `fessiers`, `ischios`, `mollets`.
Utilise bien les groupes globaux (`quadriceps`, `ischios`) même si la Carte
musculaire affiche des têtes précises (vaste latéral, biceps fémoral...) —
le champ `group` dans `MUSCLE_INFO` fait automatiquement le lien. C'est ce
qui relie un exercice à la Carte musculaire (page `carte-musculaire.html`) —
sans ce champ,
l'exercice reste visible dans la liste normale mais n'apparaît pas quand on
clique sur un muscle. `muscleGroup` reste le texte affiché sur la fiche ;
`muscles` sert uniquement au filtrage/liaison interne, les deux peuvent
coexister sans souci.

## Ajouter une séance

Section `SESSIONS`, en référençant les `id` d'exercices déjà créés :

```js
{
  id: "seance-legs",
  name: "Séance Legs",
  day: "Vendredi",
  exercises: [
    { exerciseId: "squat-bulgare", sets: 4, reps: "10-12", rest: "90s" }
  ],
  notes: "Focus jambes."
}
```

## À propos des photos/vidéos d'exemple actuelles

Les recettes et exercices d'exemple utilisent maintenant de vraies photos
libres de droits (banque d'images Pexels) qui correspondent au bon sujet —
un vrai poulet-riz-brocolis, un vrai squat, une vraie traction, etc. Sur les
32 exercices du carnet, **21 ont une vraie photo et 19 ont une vraie vidéo**
de démonstration (même banque, vérifiées une seconde fois après une revue
complète). Ce ne sont pas TES photos/vidéos, juste des exemples réalistes
pour voir le rendu final. Elles nécessitent une connexion internet pour
s'afficher (contrairement au reste du site, qui fonctionne hors-ligne) ; si
une photo/vidéo ne charge pas, le cadre "Ajoute une photo/vidéo" s'affiche
proprement à la place.

10 exercices n'ont ni photo ni vidéo d'exemple (front lever, haussements
d'épaules, face pull, curl marteau, pompes diamant, pompes déclinées,
superman, hip thrust, nordic curl, Copenhagen plank) : après trois recherches
successives (Pexels, Pixabay, et une tentative sur Mixkit/Coverr/Videvo/
Wikimedia Commons/Openverse), je n'ai trouvé aucune photo/vidéo libre de
droits montrant précisément ces mouvements — j'ai préféré ne rien mettre
plutôt qu'une image trompeuse. Le cadre "Ajoute une photo"/"Ajoute une
vidéo" s'affiche proprement à la place, comme pour tes propres exercices
sans média.

Sur les 22 recettes, **15 ont maintenant une vraie photo** (même principe :
recherche stricte, uniquement si le titre/description/tags de la photo
confirment vraiment le plat). Les 7 restantes (wrap dinde/avocat, steak
haché/patate douce/brocolis, dahl de lentilles/épinards, poulet/patate
douce/épinards, tartine pain complet/fromage blanc/dinde, pancakes avoine/
banane, bowl lentilles/avocat) n'ont trouvé aucune photo combinant tous les
ingrédients spécifiques de la recette — même limitation, même choix
d'honnêteté plutôt qu'une image approximative.

Remplace ces photos/vidéos par tes propres fichiers quand tu veux (voir
ci-dessous).

## Ajouter tes photos

1. Dépose ton fichier image dans le bon dossier :
   - `images/recipes/` pour les photos de plats
   - `images/exercises/` pour les photos d'exercices
   - `images/progress/` pour tes photos de progression physique (pas encore
     de page dédiée : tu peux les stocker ici en attendant d'en ajouter une)
2. Renseigne le chemin dans le champ `photo` de l'objet correspondant dans
   `js/data.js` (ex: `"images/recipes/poulet-riz.jpg"`).

Tant qu'un champ `photo` est vide (`""`), une icône de remplacement s'affiche
automatiquement à la place.

## Galerie de progression physique

La page **Progression** te permet d'ajouter directement une photo depuis ton
navigateur (bouton "Choisir un fichier"), avec la date, ton poids si tu veux
le noter, et une note libre. Pas besoin d'éditer de fichier ni de dossier
`images/` pour celle-ci : la photo est redimensionnée automatiquement et
stockée dans ce navigateur, comme le reste du suivi. Pense à l'exporter de
temps en temps (voir plus bas) si tu as beaucoup de photos, pour ne rien
perdre.

## Carte musculaire interactive

Page **Sport → Carte musculaire** : tes propres photos (face + dos, dans
`images/body/front.jpg` et `images/body/back.jpg`) avec un point cliquable
par muscle, positionné en % par-dessus la photo. 21 points au total :

- **Face** : épaules, pectoraux, abdominaux, obliques, biceps, avant-bras,
  adducteurs, et les 3 têtes du quadriceps (vaste latéral, droit fémoral,
  vaste médial).
- **Dos** : trapèzes, épaules (deltoïde postérieur), dos (dorsaux),
  lombaires, triceps, avant-bras, fessiers, mollets, et les 3 muscles
  ischio-jambiers (biceps fémoral, semi-tendineux, semi-membraneux).

Cliquer un point affiche le nom du muscle, son rôle en une phrase, et la
liste des exercices de ton carnet qui le travaillent (grâce au champ
`muscles`, voir plus haut) — avec un bouton pour aller voir tous les
exercices filtrés sur ce muscle. Les muscles "tête de groupe" (les 3 têtes
du quadriceps, les 3 ischio-jambiers) affichent en plus une note "Fait
partie du groupe : ..." et retombent automatiquement sur les exercices tagués
avec le groupe global (`quadriceps` / `ischios`) grâce au champ `group` dans
`MUSCLE_INFO` (`js/data.js`) — inutile de retaguer les exercices existants.

Pour ajouter/déplacer un point, modifie le tableau `DOTS` dans
`js/render-carte-musculaire.js` (coordonnées `x`/`y` en pourcentage de la
photo) et, si c'est un nouveau muscle, ajoute son entrée dans `MUSCLE_INFO`
(`js/data.js`).

Si tu changes les photos dans `images/body/`, il faudra réajuster les
pourcentages `x`/`y` de chaque point pour qu'ils retombent au bon endroit sur
la nouvelle image.

## Générateur de programme

Page **Sport → Programme** (`programme.html`) : choisis ton objectif (prendre
du muscle, sécher, ou te maintenir) et le nombre de jours où tu peux
t'entraîner par semaine (2 à 6), puis clique sur **Générer mon programme**.

Le site construit alors un split réel :
- 2 jours → Corps entier A / B
- 3 jours → Push / Pull / Legs
- 4 jours → Haut / Bas / Haut / Bas
- 5 jours → Push / Pull / Legs / Haut / Bas
- 6 jours → Push / Pull / Legs / Push / Pull / Legs

Pour chaque jour, les exercices affichés viennent directement de `EXERCISES`
(`js/data.js`) — l'algorithme choisit ceux qui couvrent le mieux les muscles
ciblés par ce type de jour (logique dans `js/render-programme.js`, fonction
`pickExercises`), en évitant de répéter le même exercice sur plusieurs jours
tant que d'autres options existent. Une liste `AUTO_PICK_EXCLUDE` empêche les
mouvements très avancés/techniques (front lever, pistol squat, nordic curl,
Copenhagen plank) de squatter automatiquement les meilleures places juste
parce qu'ils touchent beaucoup de muscles à la fois : ils restent trouvables
à la main (bibliothèque d'exercices, carte musculaire) mais le générateur
privilégie toujours des mouvements de base (développé couché, squat, rowing,
soulevé de terre...) — sauf si le vivier normal est vraiment épuisé, où ils
reviennent en tout dernier recours pour ne jamais laisser un jour incomplet.
Les séries/répétitions/repos affichés
dépendent de l'objectif choisi (plus de répétitions et moins de repos en
sèche, par exemple), et un exercice de cardio (corde à sauter) est ajouté en
sèche s'il n'est pas déjà présent dans le jour. Une orientation diète
(fourchette de calories/protéines par kg) et une sélection de recettes de
`RECIPES` complètent chaque programme généré — regroupées par type de repas
(Petit-déjeuner / Déjeuner-Dîner / Collations) pour rester lisibles même en
ajoutant beaucoup de recettes.

C'est un générateur de repères généraux, pas un coach personnalisé : adapte
les charges/répétitions à ton ressenti réel et à ton historique dans le
Journal.

Chaque jour affiche un badge numéroté, les groupes musculaires ciblés en
petits badges, et une vignette photo/icône par exercice (même logique que le
reste du site : la photo s'affiche si `EXERCISES` en a une, sinon une icône
d'haltère) pour repérer le mouvement d'un coup d'œil sans avoir à cliquer
dessus.

### Liste de courses

En bas de la page Programme, un second générateur : choisis un nombre de
jours (1 à 14), clique sur **Générer ma liste de courses**. Le site répartit
un petit-déjeuner, un déjeuner, un dîner et une collation par jour en piochant
dans `RECIPES` (rotation déterministe dans chaque catégorie, sans random),
affiche un aperçu jour par jour des repas choisis, puis additionne tous les
ingrédients de toutes ces recettes en une seule liste groupée par catégorie
(Protéine / Glucide / Légume / Lipide) avec la quantité totale à acheter pour
chaque ingrédient. Logique dans `js/render-programme.js` (fonctions
`buildWeekPlan`, `aggregateIngredients`).

## Le suivi (Journal)

Sur chaque fiche recette et chaque fiche exercice, un petit formulaire te
permet d'enregistrer :
- pour une recette : la date à laquelle tu l'as mangée, avec une note libre,
- pour un exercice : la date, le poids utilisé, le nombre de séries, les
  répétitions et une note libre.

Tout est regroupé et consultable sur la page **Journal**.

Ces données sont stockées dans le `localStorage` de ton navigateur : elles
restent sur cet ordinateur et ce navigateur précis. Si tu changes d'appareil,
utilise le bouton **Exporter mes données** sur la page Journal (ça télécharge
un fichier `.json`), puis **Importer un fichier** sur le nouvel appareil pour
récupérer ton historique. Pense à exporter régulièrement en guise de sauvegarde
de secours.

## Structure des fichiers

```
index.html          page d'accueil
diete.html           liste des recettes + index des ingrédients
recette.html         détail d'une recette (?id=...)
ingredient.html       détail d'un ingrédient (?id=...)
sport.html            hub Sport
exercices.html        liste des exercices
exercice.html         détail d'un exercice (?id=...)
seances.html          liste des séances
seance.html           détail d'une séance (?id=...)
progression.html      galerie de photos de progression (upload direct)
carte-musculaire.html  tes photos (face/dos) avec points cliquables par muscle
programme.html         générateur de programme (split + diète selon objectif)
journal.html          historique du suivi

css/style.css         tout le style visuel
fonts/                  fichiers de police auto-hébergés (Bebas Neue, Inter)
js/i18n.js              dictionnaire FR/ES + fonctions de traduction (t, tData)
js/data.js             TOUT le contenu (recettes, ingrédients, exercices, séances, infos muscles)
js/storage.js          gestion du suivi (localStorage)
js/helpers.js          fonctions utilitaires partagées
js/layout.js            injecte le menu/footer communs
js/render-*.js          logique d'affichage propre à chaque page
js/render-programme.js  logique du générateur de programme (splits, sélection d'exercices)

images/body/            tes photos face/dos pour la carte musculaire
images/recipes/        tes photos de plats
images/exercises/       tes photos d'exercices
images/progress/        tes photos de progression physique
```

## Chat Claude intégré

Une petite bulle 💬 en bas à droite de chaque page ouvre un chat avec Claude,
directement dans le site.

Pour l'activer :
1. Crée une clé API sur [console.anthropic.com](https://console.anthropic.com)
   (menu API Keys). C'est un compte séparé de ton abonnement Claude classique,
   et l'usage y est facturé à la consommation (pas d'abonnement fixe).
2. Clique sur la bulle 💬, colle ta clé dans le champ prévu, vérifie le nom du
   modèle (par défaut `claude-sonnet-4-5` — si besoin, l'ID exact des modèles
   disponibles est listé dans la doc Anthropic), puis clique sur Enregistrer.
3. Discute directement depuis le site !

**Points importants à connaître :**
- Ce chat n'est PAS la même conversation que celle où ce site a été créé :
  c'est une nouvelle instance de Claude, sans souvenir de nos échanges ici.
  L'historique de vos échanges est conservé dans ce navigateur (via le bouton
  "Effacer la conversation" tu peux repartir de zéro).
- Ta clé API est stockée uniquement dans le `localStorage` de ce navigateur,
  jamais envoyée ailleurs qu'à l'API Anthropic. **Ne mets jamais ce site en
  ligne publiquement ni ne le partage une fois ta clé enregistrée** :
  n'importe qui y ayant accès pourrait utiliser ta clé à tes frais.
- Si tu vois une erreur du type "Failed to fetch" ou un code d'erreur (401,
  429...), vérifie ta clé, ton solde de crédits sur console.anthropic.com, ou
  l'ID du modèle utilisé.

## Prochaines idées (si tu veux aller plus loin un jour)

- Un graphique d'évolution du poids utilisé sur un exercice donné.
- Héberger le site en ligne (GitHub Pages, Netlify...) pour y accéder de partout.
