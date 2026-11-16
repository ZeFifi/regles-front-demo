#!/usr/bin/env sh
# controls.sh : les contrôles du projet, lancés par la CI sur chaque pull request.
# Usage : sh scripts/controls.sh [branche de référence, main par défaut]
# Les configurations ESLint et TypeScript sont lues sur la branche de référence :
# une pull request qui les modifie ne peut pas s'en servir pour passer.

ref="${1:-main}"
bin="node_modules/.bin"
echec=0

# 1. Configurations de la branche de référence, copiées à la racine
git fetch --quiet --depth=1 origin "$ref:refs/remotes/origin/$ref" || exit 1
git show "origin/$ref:eslint.config.js" > eslint.config.ref.js || exit 1
git show "origin/$ref:tsconfig.json" > tsconfig.ref.json || exit 1

# 2. Commentaires de contournement, interdits dans le code
if git grep -nE '(eslint|stylelint)-disable|@ts-(ignore|nocheck|expect-error)' -- src; then
  echo "Commentaire de contournement trouvé ci-dessus : corrigez le code au lieu de faire taire le contrôle."
  echec=1
fi

# 3. ESLint avec la configuration de référence
"$bin/eslint" --config eslint.config.ref.js --max-warnings 0 . || echec=1

# 4. TypeScript avec la configuration de référence
"$bin/tsc" --noEmit -p tsconfig.ref.json || echec=1

rm -f eslint.config.ref.js tsconfig.ref.json
exit "$echec"
