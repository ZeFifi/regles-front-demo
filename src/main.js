import { catalogue } from "./donnees/catalogue";
import { ajouter, totalCentimes, formaterPrix } from "./donnees/panier";
import { CarteCafe } from "./composants/CarteCafe.js";

/** @type {import("./donnees/panier").Ligne[]} */
let lignes = [];

const conteneur = document.getElementById("catalogue");
const total = document.getElementById("total");

for (const cafe of catalogue) {
  conteneur?.append(
    CarteCafe(cafe, (choisi) => {
      lignes = ajouter(lignes, choisi);
      if (total) total.textContent = formaterPrix(totalCentimes(lignes));
    }),
  );
}
