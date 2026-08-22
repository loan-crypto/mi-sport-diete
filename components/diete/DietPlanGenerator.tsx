"use client";

/* Generador de dieta semanal en la pagina Diete. Reusa buildWeekPlan()
   (misma rotacion deterministica que la lista de compras de Programme)
   y computeCalorieTarget() (mismas formulas que el contador de
   calorias del Journal). Cada comida se puede cambiar por otra del
   mismo tipo, igual que los ejercicios en el generador de Programa. */

import { useEffect, useState } from "react";
import Link from "next/link";
import { useI18n } from "@/lib/i18n/context";
import { computeRecipeTotals, findById } from "@/lib/format";
import ExoThumb from "@/components/programme/ExoThumb";
import {
  buildWeekPlan,
  BREAKFAST_RECIPES,
  MEAL_RECIPES,
  SNACK_RECIPES,
  type Goal,
  type WeekPlanDay,
} from "@/lib/programme";
import { computeCalorieTarget } from "@/lib/calorieTargets";
import type { UIStringKey } from "@/lib/i18n/dictionary";
import { RECIPES } from "@/content";

type Slot = "breakfast" | "lunch" | "dinner" | "snack";

const WEEKDAY_KEYS: UIStringKey[] = ["day.mon", "day.tue", "day.wed", "day.thu", "day.fri", "day.sat", "day.sun"];

const SLOTS: { slot: Slot; labelKey: UIStringKey; pool: typeof RECIPES }[] = [
  { slot: "breakfast", labelKey: "label.breakfast", pool: BREAKFAST_RECIPES },
  { slot: "lunch", labelKey: "label.lunch", pool: MEAL_RECIPES },
  { slot: "dinner", labelKey: "label.dinner", pool: MEAL_RECIPES },
  { slot: "snack", labelKey: "label.snack", pool: SNACK_RECIPES },
];

function mealTotals(recipe: WeekPlanDay["breakfast"] | null) {
  if (!recipe) return { kcal: 0, protein: 0 };
  const totals = computeRecipeTotals(recipe);
  const servings = recipe.servings || 1;
  return { kcal: totals.calories / servings, protein: totals.protein / servings };
}

function dayTotals(meals: (WeekPlanDay["breakfast"] | null)[]) {
  let kcal = 0;
  let protein = 0;
  for (const recipe of meals) {
    const m = mealTotals(recipe);
    kcal += m.kcal;
    protein += m.protein;
  }
  return { kcal, protein };
}

// Las recetas se rotan sin tener en cuenta el objetivo numerico, asi que
// el total crudo del dia puede quedar muy por debajo (o por encima) del
// objetivo (ej. volumen con un objetivo alto). En vez de inventar
// recetas nuevas, se escala la porcion de cada comida (mismo principio
// que "come 1.5 platos de esto") para acercarse al objetivo, mostrando
// el multiplicador de forma transparente en cada fila.
function computeScale(rawKcal: number, targetKcal: number | null) {
  if (!targetKcal || rawKcal <= 0) return 1;
  return Math.max(0.5, Math.min(3, targetKcal / rawKcal));
}

export default function DietPlanGenerator() {
  const { t, tData } = useI18n();
  const [weight, setWeight] = useState("");
  const [goal, setGoal] = useState<Goal>("maintien");
  const [customCalories, setCustomCalories] = useState("");
  const [days, setDays] = useState(7);
  const [plan, setPlan] = useState<WeekPlanDay[] | null>(null);
  // Cle "{jour}-{slot}" -> id de recette choisie a la main.
  const [swaps, setSwaps] = useState<Record<string, string>>({});

  useEffect(() => {
    setSwaps({});
  }, [plan]);

  const computedTarget = weight ? computeCalorieTarget(goal, Number(weight)) : null;
  const target = customCalories
    ? { kcal: Number(customCalories), protein: computedTarget?.protein ?? 0 }
    : computedTarget;

  function handleGenerate(e: React.FormEvent) {
    e.preventDefault();
    if (!weight) return;
    setPlan(buildWeekPlan(days));
  }

  return (
    <>
      <div className="section-title">{t("diete.plan.title")}</div>
      <p style={{ color: "var(--text-muted)" }}>{t("diete.plan.subtitle")}</p>

      <form className="programme-form" onSubmit={handleGenerate}>
        <div className="field">
          <label htmlFor="diet-weight">{t("diete.plan.field.weight")}</label>
          <input
            id="diet-weight"
            type="number"
            min="0"
            step="0.5"
            placeholder="ex: 75"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            required
          />
        </div>

        <div className="field">
          <label htmlFor="diet-custom-kcal">{t("diete.plan.customCalories")}</label>
          <input
            id="diet-custom-kcal"
            type="number"
            min="0"
            step="50"
            placeholder={computedTarget ? String(computedTarget.kcal) : "ex: 2000"}
            value={customCalories}
            onChange={(e) => setCustomCalories(e.target.value)}
          />
        </div>

        <div className="field grow">
          <label>{t("programme.field.goal")}</label>
          <div className="goal-options">
            {(["volume", "secher", "maintien"] as Goal[]).map((g) => (
              <label className="goal-option" key={g}>
                <input type="radio" name="diet-goal" checked={goal === g} onChange={() => setGoal(g)} />
                <span>{t(`programme.goal.${g}` as UIStringKey)}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="field">
          <label htmlFor="diet-days">{t("diete.plan.field.days")}</label>
          <select id="diet-days" value={days} onChange={(e) => setDays(Number(e.target.value))}>
            {[3, 5, 7, 10, 14].map((d) => (
              <option key={d} value={d}>
                {d}
              </option>
            ))}
          </select>
        </div>

        <button type="submit">{t("diete.plan.generate")}</button>
      </form>

      {!weight ? null : target ? (
        <div className="stats-row">
          <div className="stat">
            <div className="value">{target.kcal}</div>
            <div className="label">{t("diete.plan.target")} · Kcal</div>
          </div>
          <div className="stat">
            <div className="value">{target.protein}g</div>
            <div className="label">{t("macro.protein")}</div>
          </div>
        </div>
      ) : null}

      {plan ? (
        <div className="programme-days">
          {plan.map((day, i) => {
            const weekdayLabel = t(WEEKDAY_KEYS[i % 7]);
            const resolvedMeals = SLOTS.map(({ slot, pool }) => {
              const key = `${day.day}-${slot}`;
              const swappedId = swaps[key];
              const base = day[slot];
              const recipe = swappedId ? findById(RECIPES, swappedId) ?? base : base;
              return { slot, key, recipe, pool };
            });
            const rawTotals = dayTotals(resolvedMeals.map((m) => m.recipe));
            const scale = computeScale(rawTotals.kcal, target?.kcal ?? null);
            const scaledTotals = { kcal: Math.round(rawTotals.kcal * scale), protein: Math.round(rawTotals.protein * scale) };
            return (
              <div className="card-box programme-day" key={day.day}>
                <div className="programme-day-head">
                  <div className="programme-day-badge">{day.day}</div>
                  <div>
                    <div className="programme-day-title">{weekdayLabel}</div>
                    <div className="programme-day-muscles">
                      <span className="tag">
                        {scaledTotals.kcal} kcal · {scaledTotals.protein} g {t("macro.protein").toLowerCase()}
                      </span>
                      {scale !== 1 ? (
                        <span className="tag" title={t("diete.plan.scaleHint")}>
                          × {scale.toFixed(1)}
                        </span>
                      ) : null}
                    </div>
                  </div>
                </div>
                {resolvedMeals.map(({ slot, key, recipe, pool }) => {
                  if (!recipe) return null;
                  const name = tData(recipe, "name") as string;
                  const slotInfo = SLOTS.find((s) => s.slot === slot)!;
                  const m = mealTotals(recipe);
                  const scaledKcal = Math.round(m.kcal * scale);
                  return (
                    <div className="exo-row" key={key}>
                      <ExoThumb photo={recipe.photo} alt={name} icon="fork" />
                      <div className="exo-row-info">
                        <div className="name">
                          <Link href={`/diete/recettes/${recipe.id}`}>{name}</Link>
                        </div>
                        <div className="scheme">
                          {t(slotInfo.labelKey)} · {scaledKcal} kcal
                          {scale !== 1 ? ` (×${scale.toFixed(1)})` : ""}
                        </div>
                      </div>
                      <select
                        className="exo-swap-select"
                        value={recipe.id}
                        aria-label={t("programme.chooseExercise")}
                        onChange={(e) => setSwaps((prev) => ({ ...prev, [key]: e.target.value }))}
                      >
                        {pool.map((r) => (
                          <option key={r.id} value={r.id}>
                            {tData(r, "name") as string}
                          </option>
                        ))}
                      </select>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      ) : null}
    </>
  );
}
