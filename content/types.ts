/* ============================================================
   TYPES DU CONTENU
   ------------------------------------------------------------
   Interfaces TypeScript pour toutes les données de contenu du
   site (ingrédients, recettes, exercices, séances, muscles).
   Portées depuis legacy-static-site/js/data.js.
   ============================================================ */

/* ---------------- INGRÉDIENTS ---------------- */

export interface Ingredient {
  id: string;
  name: string;
  category: string;
  calories100: number;
  protein100: number;
  carbs100: number;
  fat100: number;
  quality: "bon" | "neutre" | "mauvais";
  notes: string;
  es?: Partial<Pick<Ingredient, "name" | "category" | "notes">>;
}

/* ---------------- RECETTES ---------------- */

export interface RecipeIngredientLine {
  ingredientId: string;
  grams: number;
}

export interface Recipe {
  id: string;
  name: string;
  category: string;
  photo: string;
  servings: number;
  ingredients: RecipeIngredientLine[];
  steps: string[];
  notes: string;
  es?: {
    name?: string;
    category?: string;
    steps?: string[];
    notes?: string;
  };
}

/* ---------------- EXERCICES ---------------- */

export interface Exercise {
  id: string;
  name: string;
  muscleGroup: string;
  muscles: string[];
  difficulty: "Débutant" | "Intermédiaire" | "Avancé";
  // Filtre "style d'entraînement" du generateur de Programme (Gimnasio /
  // Calistenia / Mezcla) : "Poids du corps" = réalisable sans matériel de
  // salle (barre de tractions, sol...), "Salle de sport" = nécessite des
  // poids libres, une machine ou un banc charge.
  equipment: "Poids du corps" | "Salle de sport";
  photo: string;
  video?: string;
  description: string[];
  tips?: string;
  progressionPrev?: string;
  progressionNext?: string;
  es?: {
    name?: string;
    muscleGroup?: string;
    description?: string[];
    tips?: string;
    progressionPrev?: string;
    progressionNext?: string;
  };
}

/* ---------------- SÉANCES ---------------- */

export interface SessionExerciseLine {
  exerciseId: string;
  sets: number;
  reps: string;
  rest: string;
}

export interface Session {
  id: string;
  name: string;
  day: string;
  exercises: SessionExerciseLine[];
  notes: string;
  es?: {
    name?: string;
    day?: string;
    notes?: string;
  };
}

/* ---------------- CARTE MUSCULAIRE ---------------- */

export interface MuscleInfo {
  name: string;
  view: "front" | "back";
  group?: string;
  desc: string;
  es?: Partial<Pick<MuscleInfo, "name" | "desc">>;
}
