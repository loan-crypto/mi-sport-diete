import { INGREDIENTS } from "@/content";
import type { Recipe } from "@/content/types";

/* findById generico, portado de legacy-static-site/js/helpers.js */
export function findById<T extends { id: string }>(
  list: readonly T[],
  id: string
): T | undefined {
  return list.find((item) => item.id === id);
}

export function round1(n: number): number {
  return Math.round(n * 10) / 10;
}

export interface RecipeTotals {
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
}

/* Calcule les macros totales d'une recette a partir de ses ingredients +
   grammages. Portado tal cual de computeRecipeTotals() — les macros ne
   sont jamais stockees sur la recette, toujours derivees a la volee. */
export function computeRecipeTotals(recipe: Recipe): RecipeTotals {
  let calories = 0;
  let protein = 0;
  let carbs = 0;
  let fat = 0;

  for (const line of recipe.ingredients) {
    const ing = findById(INGREDIENTS, line.ingredientId);
    if (!ing) continue;
    const factor = line.grams / 100;
    calories += ing.calories100 * factor;
    protein += ing.protein100 * factor;
    carbs += ing.carbs100 * factor;
    fat += ing.fat100 * factor;
  }

  return {
    calories: Math.round(calories),
    protein: round1(protein),
    carbs: round1(carbs),
    fat: round1(fat),
  };
}
