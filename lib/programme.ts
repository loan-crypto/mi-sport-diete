/* Logica pura del generador de programa + lista de courses. Portado
   1:1 de legacy-static-site/js/render-programme.js (mismas constantes,
   mismo algoritmo glouton deterministe) — separado de la UI para que
   app/programme/page.tsx solo se encargue de traducir/renderizar. */

import { EXERCISES, RECIPES, INGREDIENTS } from "@/content";
import type { Exercise, Recipe } from "@/content/types";
import { findById } from "@/lib/format";
import type { UIStringKey } from "@/lib/i18n/dictionary";

export type Goal = "volume" | "secher" | "maintien";
export type DayKey = "push" | "pull" | "legs" | "upper" | "lower" | "fullA" | "fullB";
// Filtre "style d'entrainement" du generateur (demande explicite : eviter
// que le pick automatique propose des ejercices de gym a quelqu'un qui
// veut faire de la calisthenie pure, et inversement). "mix" = comportement
// d'origine, aucun filtre.
export type Style = "gym" | "calisthenics" | "mix";

function matchesStyle(ex: Exercise, style: Style): boolean {
  if (style === "mix") return true;
  return style === "gym" ? ex.equipment === "Salle de sport" : ex.equipment === "Poids du corps";
}

export const DAY_MUSCLES: Record<DayKey, string[]> = {
  push: ["pectoraux", "epaules", "triceps"],
  pull: ["dos", "biceps", "trapezes", "avant-bras"],
  legs: ["quadriceps", "ischios", "fessiers", "mollets", "adducteurs"],
  upper: ["pectoraux", "dos", "epaules", "biceps", "triceps", "trapezes", "avant-bras"],
  lower: ["quadriceps", "ischios", "fessiers", "mollets", "adducteurs"],
  fullA: ["pectoraux", "dos", "quadriceps", "epaules"],
  fullB: ["triceps", "biceps", "ischios", "fessiers", "mollets"],
};

export const CORE_MUSCLES = ["abdominaux", "obliques", "lombaires"];

export const DAY_LABEL_KEY: Record<DayKey, UIStringKey> = {
  push: "programme.day.push",
  pull: "programme.day.pull",
  legs: "programme.day.legs",
  upper: "programme.day.upper",
  lower: "programme.day.lower",
  fullA: "programme.day.fullA",
  fullB: "programme.day.fullB",
};

export const SPLITS: Record<number, DayKey[]> = {
  2: ["fullA", "fullB"],
  3: ["push", "pull", "legs"],
  4: ["upper", "lower", "upper", "lower"],
  5: ["push", "pull", "legs", "upper", "lower"],
  6: ["push", "pull", "legs", "push", "pull", "legs"],
};

export interface GoalScheme {
  sets: number;
  reps: string;
  rest: string;
  hold: string;
}

export const GOAL_SCHEME: Record<Goal, GoalScheme> = {
  volume: { sets: 4, reps: "8-12", rest: "90s", hold: "20-30s" },
  secher: { sets: 3, reps: "12-15", rest: "45s", hold: "20-30s" },
  maintien: { sets: 3, reps: "10-12", rest: "75s", hold: "15-25s" },
};

// Ejercicios en isometria: se muestra una duracion de mantenimiento en
// vez de un rango de repeticiones.
export const HOLD_EXERCISES = new Set([
  "front-lever",
  "gainage-planche",
  "adducteurs-isometrique",
  "chaise-murale",
  "l-sit",
]);

// Movimientos muy avanzados/tecnicos excluidos del generador automatico
// (siguen siendo buscables a mano en la biblioteca y la carta muscular) —
// ver comentario detallado en el legado.
export const AUTO_PICK_EXCLUDE = new Set([
  "front-lever",
  "squat-pistol",
  "leg-curl-nordique",
  "adducteurs-isometrique",
  // L-sit : skill avance (comme front-lever), pas adapte a un pick auto.
  "l-sit",
  // Movimientos "full body"/cardio: sus muchos musculos tocados los hacen
  // ganar el score de cobertura en CUALQUIER tipo de dia (push, legs...),
  // apareciendo donde no corresponde (ej. burpees en un dia de Push).
  "burpees",
  "mountain-climbers",
]);

export const BREAKFAST_RECIPES = RECIPES.filter((r) => r.category === "Petit-déjeuner");
export const MEAL_RECIPES = RECIPES.filter((r) => r.category === "Déjeuner / Dîner");
export const SNACK_RECIPES = RECIPES.filter((r) => r.category.startsWith("Collation"));

/* Seleccion gloutona: en cada paso elige el ejercicio que cubre mas
   musculos objetivo aun no cubiertos (desempate alfabetico por id, para
   ser 100% deterministico). Si el vivero sin usar se agota antes de
   llegar a `count`, completa reutilizando ejercicios ya elegidos en otro
   dia antes que dejar el dia incompleto; solo en ultimo recurso permite
   movimientos avanzados (AUTO_PICK_EXCLUDE). */
export function pickExercises(
  targetMuscles: string[],
  count: number,
  usedGlobal: Set<string>,
  style: Style = "mix"
): Exercise[] {
  function scoredPool(respectUsed: boolean, allowAdvanced: boolean) {
    return EXERCISES.filter(
      (e) =>
        (allowAdvanced || !AUTO_PICK_EXCLUDE.has(e.id)) &&
        matchesStyle(e, style) &&
        e.muscles.some((m) => targetMuscles.includes(m)) &&
        (!respectUsed || !usedGlobal.has(e.id))
    );
  }

  const chosen: Exercise[] = [];
  const chosenIds = new Set<string>();
  const covered = new Set<string>();

  function drawFrom(initialPool: Exercise[]) {
    const pool = initialPool.filter((e) => !chosenIds.has(e.id));
    while (chosen.length < count && pool.length) {
      pool.sort((a, b) => {
        const scoreA = a.muscles.filter((m) => targetMuscles.includes(m) && !covered.has(m)).length;
        const scoreB = b.muscles.filter((m) => targetMuscles.includes(m) && !covered.has(m)).length;
        if (scoreB !== scoreA) return scoreB - scoreA;
        return a.id.localeCompare(b.id);
      });
      const pick = pool.shift();
      if (!pick) break;
      chosen.push(pick);
      chosenIds.add(pick.id);
      pick.muscles.forEach((m) => covered.add(m));
    }
  }

  drawFrom(scoredPool(true, false));
  if (chosen.length < count) drawFrom(scoredPool(false, false));
  if (chosen.length < count) drawFrom(scoredPool(true, true));
  if (chosen.length < count) drawFrom(scoredPool(false, true));

  chosen.forEach((e) => usedGlobal.add(e.id));
  return chosen;
}

export function buildDay(dayKey: DayKey, usedGlobal: Set<string>, goal: Goal, style: Style = "mix") {
  const targetMuscles = DAY_MUSCLES[dayKey];
  const mainExos = pickExercises(targetMuscles, 4, usedGlobal, style);
  // Le core (abdos/obliques/lombaires) reste toujours pioche sans filtre de
  // style : tout le contenu abdos de la bibliotheque est deja au poids du
  // corps, donc filtrer sur "gym" viderait ce slot pour rien.
  const coreExos = pickExercises(CORE_MUSCLES, 1, usedGlobal);
  let allExos = mainExos.concat(coreExos);

  if (goal === "secher" && !allExos.some((e) => e.id === "corde-a-sauter")) {
    const cardio = EXERCISES.find((e) => e.id === "corde-a-sauter");
    if (cardio) allExos = allExos.concat(cardio);
  }

  return { dayKey, exos: allExos };
}

/* Devuelve las partes ya resueltas del "4 x 8-12 — Repos 90s" para que
   el componente solo tenga que traducir label.rest e interpolar. */
export function schemeParts(ex: Exercise, scheme: GoalScheme) {
  const isHold = HOLD_EXERCISES.has(ex.id);
  return {
    sets: scheme.sets,
    reps: isHold ? scheme.hold : scheme.reps,
  };
}

export function buildProgramme(goal: Goal, days: number, style: Style = "mix") {
  const split = SPLITS[days] ?? SPLITS[3];
  const usedGlobal = new Set<string>();
  return split.map((dayKey, i) => ({ index: i + 1, ...buildDay(dayKey, usedGlobal, goal, style) }));
}

/* ---------------- Liste de courses ---------------- */

export interface WeekPlanDay {
  day: number;
  breakfast: Recipe | null;
  lunch: Recipe | null;
  dinner: Recipe | null;
  snack: Recipe | null;
}

function pickCycle<T>(pool: T[], index: number): T | null {
  if (!pool.length) return null;
  return pool[index % pool.length];
}

export function buildWeekPlan(days: number): WeekPlanDay[] {
  const plan: WeekPlanDay[] = [];
  let mealCursor = 0;
  for (let i = 0; i < days; i++) {
    const breakfast = pickCycle(BREAKFAST_RECIPES, i);
    const lunch = pickCycle(MEAL_RECIPES, mealCursor++);
    const dinner = pickCycle(MEAL_RECIPES, mealCursor++);
    const snack = pickCycle(SNACK_RECIPES, i);
    plan.push({ day: i + 1, breakfast, lunch, dinner, snack });
  }
  return plan;
}

export function aggregateIngredients(plan: WeekPlanDay[]): Map<string, number> {
  const totals = new Map<string, number>();
  plan.forEach((day) => {
    [day.breakfast, day.lunch, day.dinner, day.snack].forEach((recipe) => {
      if (!recipe) return;
      recipe.ingredients.forEach((line) => {
        totals.set(line.ingredientId, (totals.get(line.ingredientId) ?? 0) + line.grams);
      });
    });
  });
  return totals;
}

export function formatQty(grams: number): string {
  const rounded = Math.round(grams);
  if (rounded >= 1000) return `${Math.round(rounded / 100) / 10} kg`;
  return `${rounded} g`;
}

export const SHOPPING_CATEGORY_ORDER = ["Protéine", "Glucide", "Légume", "Lipide"];

export interface ShoppingCategoryGroup {
  category: string;
  items: { ingredientId: string; grams: number }[];
}

export function groupShoppingByCategory(totals: Map<string, number>): ShoppingCategoryGroup[] {
  const byCategory = new Map<string, { ingredientId: string; grams: number }[]>();
  totals.forEach((grams, id) => {
    const ing = findById(INGREDIENTS, id);
    if (!ing) return;
    const list = byCategory.get(ing.category) ?? [];
    list.push({ ingredientId: id, grams });
    byCategory.set(ing.category, list);
  });

  return SHOPPING_CATEGORY_ORDER.filter((cat) => (byCategory.get(cat) ?? []).length > 0).map((cat) => ({
    category: cat,
    items: byCategory.get(cat)!,
  }));
}
