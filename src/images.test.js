import { describe, expect, it } from "vitest";
import { catalogue } from "./donnees/catalogue";
import { CarteCafe } from "./composants/CarteCafe.js";
import { Bouton } from "./composants/Bouton.js";

/** @type {Array<[string, () => HTMLElement]>} */
const rendus = [
  ...catalogue.map((cafe) => /** @type {[string, () => HTMLElement]} */ ([`CarteCafe ${cafe.id}`, () => CarteCafe(cafe, () => {})])),
  ["Bouton", () => Bouton("Libellé", () => {})],
];

describe("texte alternatif des images", () => {
  it.each(rendus)("%s : chaque image a un alt non vide", (_nom, rendre) => {
    const element = rendre();
    const images = [...(element.matches("img") ? [element] : []), ...element.querySelectorAll("img")];
    for (const image of images) {
      expect(image.getAttribute("alt")?.trim(), image.outerHTML).toBeTruthy();
    }
  });
});
