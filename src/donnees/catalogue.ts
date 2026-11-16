export interface Cafe {
  id: string;
  nom: string;
  origine: string;
  prixCentimes: number;
  image: string;
}

export const catalogue: Cafe[] = [
  { id: "ethiopie", nom: "Yirgacheffe", origine: "Éthiopie", prixCentimes: 1290, image: "/cafe-ethiopie.svg" },
  { id: "colombie", nom: "Huila", origine: "Colombie", prixCentimes: 1150, image: "/cafe-colombie.svg" },
  { id: "bresil", nom: "Cerrado", origine: "Brésil", prixCentimes: 990, image: "/cafe-bresil.svg" },
];
