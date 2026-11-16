import { Bouton } from "./Bouton.js";
import { formaterPrix } from "../donnees/panier";

/**
 * Carte d'un café du catalogue.
 * @param {import("../donnees/catalogue").Cafe} cafe
 * @param {(cafe: import("../donnees/catalogue").Cafe) => void} onAjout
 * @returns {HTMLElement}
 */
export function CarteCafe(cafe, onAjout) {
  const carte = document.createElement("article");
  carte.className = "carte";

  const image = document.createElement("img");
  image.src = cafe.image;
  image.alt = `Sachet de café ${cafe.nom}, ${cafe.origine}`;
  image.className = "carte-image";

  const titre = document.createElement("h2");
  titre.className = "carte-titre";
  titre.textContent = `${cafe.nom} · ${cafe.origine}`;

  const prix = document.createElement("p");
  prix.className = "carte-prix";
  prix.textContent = formaterPrix(cafe.prixCentimes);

  carte.append(image, titre, prix, Bouton("Ajouter au panier", () => onAjout(cafe)));
  return carte;
}
