import type { Cafe } from "./catalogue";

export interface Ligne {
  cafe: Cafe;
  quantite: number;
}

export function ajouter(lignes: Ligne[], cafe: Cafe): Ligne[] {
  const existante = lignes.find((ligne) => ligne.cafe.id === cafe.id);
  if (existante) {
    return lignes.map((ligne) => (ligne === existante ? { ...ligne, quantite: ligne.quantite + 1 } : ligne));
  }
  return [...lignes, { cafe, quantite: 1 }];
}

export function totalCentimes(lignes: Ligne[]): number {
  return lignes.reduce((somme, ligne) => somme + ligne.cafe.prixCentimes * ligne.quantite, 0);
}

export function formaterPrix(centimes: number): string {
  return new Intl.NumberFormat("fr-FR", { style: "currency", currency: "EUR" }).format(centimes / 100);
}
