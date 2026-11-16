# Torréfaction Demo

Petite vitrine de cafés en JavaScript et TypeScript, servie par Vite.

## Règles du projet

- Les composants d'interface sont dans `src/composants/`, en JavaScript annoté (JSDoc) et vérifié par TypeScript.
- La logique (catalogue, panier) est dans `src/donnees/`, en TypeScript.
- IMPORTANT : pas de `console.log` dans le code livré.
- Pas de couleur en dur dans le CSS : utilise les variables de `src/styles/tokens.css`.
- Un composant ne dépasse pas 200 lignes.
- Chaque image a un texte alternatif.
- N'utilise jamais `@ts-ignore` ni `eslint-disable`.
- Ne modifie jamais `eslint.config.js`, `tsconfig.json` ni les fichiers de `.github/`.
- Lance `npm run lint`, `npm run lint:css`, `npm run typecheck` et `npm test` avant de dire que c'est terminé.
- Nomme les fonctions et les variables en français, comme le reste du code.
- Garde les composants simples : une fonction qui renvoie un élément du DOM, sans framework.
- Les messages de commit sont en français, à l'impératif (« Ajoute le filtre par origine »).
