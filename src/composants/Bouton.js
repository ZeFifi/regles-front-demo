/**
 * Bouton d'action.
 * @param {string} libelle
 * @param {() => void} onClick
 * @returns {HTMLButtonElement}
 */
export function Bouton(libelle, onClick) {
  const bouton = document.createElement("button");
  bouton.type = "button";
  bouton.className = "bouton";
  bouton.textContent = libelle;
  bouton.addEventListener("click", () => {
    onClick();
  });
  return bouton;
}
