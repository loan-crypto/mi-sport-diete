/* Formulas simples de referencia (no medicas) para traducir objetivo +
   peso corporal en un objetivo diario de calorias/proteina, usadas por
   el contador de calorias del Journal. Coherentes con los rangos de
   texto que ya muestra el generador de programa (programme.diet.*). */

import type { Goal } from "@/lib/programme";

export interface CalorieTarget {
  kcal: number;
  protein: number;
}

const FACTORS: Record<Goal, { kcalPerKg: number; proteinPerKg: number }> = {
  volume: { kcalPerKg: 35, proteinPerKg: 2 },
  secher: { kcalPerKg: 25, proteinPerKg: 2.2 },
  maintien: { kcalPerKg: 30, proteinPerKg: 1.8 },
};

export function computeCalorieTarget(goal: Goal, weightKg: number): CalorieTarget {
  const f = FACTORS[goal];
  return {
    kcal: Math.round(weightKg * f.kcalPerKg),
    protein: Math.round(weightKg * f.proteinPerKg),
  };
}
