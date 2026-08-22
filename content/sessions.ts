/* ---------------- SÉANCES ---------------- */
/*
  exercises: liste de { exerciseId, sets, reps, rest } -> reps peut être un texte ("8-10", "AMRAP", "30s")

  Porté depuis legacy-static-site/js/data.js
*/
import type { Session } from "./types";

export const SESSIONS: Session[] = [
  {
    id: "seance-push",
    name: "Séance Push (haut du corps)",
    day: "Lundi",
    exercises: [
      { exerciseId: "pompes", sets: 4, reps: "12-15", rest: "90s" },
      { exerciseId: "dips", sets: 4, reps: "8-10", rest: "120s" }
    ],
    notes: "Focus poussée : pectoraux, triceps, épaules.",
    es: {
      name: "Sesión Push (tren superior)",
      day: "Lunes",
      notes: "Enfoque empuje: pectorales, tríceps, hombros."
    }
  },
  {
    id: "seance-pull",
    name: "Séance Pull (dos, bras)",
    day: "Mercredi",
    exercises: [
      { exerciseId: "tractions-pronation", sets: 5, reps: "6-10", rest: "120s" },
      { exerciseId: "front-lever", sets: 4, reps: "10-20s", rest: "90s" }
    ],
    notes: "Focus tirage : dos, biceps, gainage.",
    es: {
      name: "Sesión Pull (espalda, brazos)",
      day: "Miércoles",
      notes: "Enfoque tirón: espalda, bíceps, core."
    }
  }
];
