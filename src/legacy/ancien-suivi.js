// Ancien script de suivi, conservé tel quel. Il a le droit d'utiliser console.log :
// l'exception est déclarée dans eslint.config.js (bloc "src/legacy/**"), pas dans le code.

/** @param {string} evenement */
export function suivre(evenement) {
  console.log("[suivi]", evenement);
}
