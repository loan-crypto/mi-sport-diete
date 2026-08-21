/* ---------------- POINTS DE LA CARTE MUSCULAIRE ---------------- */
/*
  Positions des points cliquables ("flèches") sur les silhouettes
  face/dos, exprimées en % (left/top) par rapport à la photo.

  Porté depuis legacy-static-site/js/render-carte-musculaire.js
  (constante DOTS).
*/

export interface MuscleDot {
  muscle: string;
  x: number;
  y: number;
}

export const MUSCLE_DOTS: { front: MuscleDot[]; back: MuscleDot[] } = {
  front: [
    { muscle: "epaules", x: 20.9, y: 19.5 },
    { muscle: "epaules", x: 77.2, y: 19.5 },
    { muscle: "pectoraux", x: 49.7, y: 23.5 },
    { muscle: "abdominaux", x: 49.7, y: 32.0 },
    { muscle: "obliques", x: 30.8, y: 33.0 },
    { muscle: "obliques", x: 68.5, y: 33.0 },
    { muscle: "biceps", x: 15.2, y: 25.8 },
    { muscle: "biceps", x: 84.1, y: 25.8 },
    { muscle: "avant-bras", x: 10.6, y: 40.0 },
    { muscle: "avant-bras", x: 88.7, y: 40.0 },
    { muscle: "adducteurs", x: 49.7, y: 53.5 },
    { muscle: "vasto-lateral", x: 26.0, y: 56.0 },
    { muscle: "vasto-lateral", x: 74.0, y: 56.0 },
    { muscle: "recto-femoral", x: 35.8, y: 58.0 },
    { muscle: "recto-femoral", x: 64.2, y: 58.0 },
    { muscle: "vasto-medial", x: 42.0, y: 64.0 },
    { muscle: "vasto-medial", x: 58.0, y: 64.0 }
  ],
  back: [
    { muscle: "trapezes", x: 49.7, y: 15.5 },
    { muscle: "epaules", x: 20.9, y: 18.0 },
    { muscle: "epaules", x: 77.2, y: 18.0 },
    { muscle: "dos", x: 31.5, y: 26.5 },
    { muscle: "dos", x: 67.9, y: 26.5 },
    { muscle: "lombaires", x: 49.7, y: 39.0 },
    { muscle: "triceps", x: 15.2, y: 25.5 },
    { muscle: "triceps", x: 84.1, y: 25.5 },
    { muscle: "avant-bras", x: 10.6, y: 41.0 },
    { muscle: "avant-bras", x: 88.7, y: 41.0 },
    { muscle: "fessiers", x: 49.7, y: 46.5 },
    { muscle: "biceps-femoral", x: 26.0, y: 56.0 },
    { muscle: "biceps-femoral", x: 74.0, y: 56.0 },
    { muscle: "semitendinoso", x: 40.0, y: 60.0 },
    { muscle: "semitendinoso", x: 60.0, y: 60.0 },
    { muscle: "semimembranoso", x: 44.0, y: 66.0 },
    { muscle: "semimembranoso", x: 56.0, y: 66.0 },
    { muscle: "mollets", x: 35.8, y: 71.5 },
    { muscle: "mollets", x: 64.2, y: 71.5 }
  ]
};
