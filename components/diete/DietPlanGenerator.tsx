"use client";

/* Nueva funcionalidad (pedida por el usuario): generador de dieta
   semanal en la pagina Diete, hermano del generador de Programa mas
   orientado a "que como cada dia" con calorias totales por jornada.
   Reusa buildWeekPlan() (misma rotacion deterministica que la lista de
   compras de Programme) y computeCalorieTarget() (mismas formulas que
   el contador de calorias del Journal). */

import { useState } from "react";
import Link from "next/link";
import { useI18n } from "@/lib/i18n/context";
import { computeRecipeTotals } from "@/lib/format";
import ExoThumb from "@/components/programme/ExoThumb";
import { buildWeekPlan, type Goal, type WeekPlanDay } from "@/lib/programme";
import { computeCalorieTarget } from "@/lib/calorieTargets";
import type { UIStringKey } from "@/lib/i18n/dictionary";

const WEEKDAY_KEYS: UIStringKey[] = ["day.mon", "day.tue", "day.wed", "day.thu", "day.fri", "day.sat", "day.sun"];

function dayTotals(day: WeekPlanDay) {
  let kcal = 0;
  let protein = 0;
  for (const recipe of [day.breakfast, day.lunch, day.dinner, day.snack]) {
    if (!recipe) continue;
    const totals = computeRecipeTotals(recipe);
    const servings = recipe.servings || 1;
    kcal += totals.calories / servings;
    protein += totals.protein / servings;
  }
  return { kcal: Math.round(kcal), protein: Math.round(protein) };
}

export default function DietPlanGenerator() {
  const { t, tData } = useI18n();
  const [weight, setWeight] = useState("");
  const [goal, setGoal] = useState<Goal>("maintien");
  const [days, setDays] = useState(7);
  const [plan, setPlan] = useState<WeekPlanDay[] | null>(null);

  const target = weight ? computeCalorieTarget(goal, Number(weight)) : null;

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
            <div className="label">
              {t("diete.plan.target")} · Kcal
            </div>
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
            const totals = dayTotals(day);
            const weekdayLabel = t(WEEKDAY_KEYS[i % 7]);
            const meals: { labelKey: UIStringKey; recipe: WeekPlanDay["breakfast"] }[] = [
              { labelKey: "label.breakfast", recipe: day.breakfast },
              { labelKey: "label.lunch", recipe: day.lunch },
              { labelKey: "label.dinner", recipe: day.dinner },
              { labelKey: "label.snack", recipe: day.snack },
            ];
            return (
              <div className="card-box programme-day" key={day.day}>
                <div className="programme-day-head">
                  <div className="programme-day-badge">{day.day}</div>
                  <div>
                    <div className="programme-day-title">{weekdayLabel}</div>
                    <div className="programme-day-muscles">
                      <span className="tag">
                        {totals.kcal} kcal · {totals.protein} g {t("macro.protein").toLowerCase()}
                      </span>
                    </div>
                  </div>
                </div>
                {meals.map(({ labelKey, recipe }) =>
                  recipe ? (
                    <div className="exo-row" key={labelKey}>
                      <ExoThumb photo={recipe.photo} alt={tData(recipe, "name") as string} icon="fork" />
                      <div className="exo-row-info">
                        <div className="name">
                          <Link href={`/diete/recettes/${recipe.id}`}>{tData(recipe, "name") as string}</Link>
                        </div>
                        <div className="scheme">{t(labelKey)}</div>
                      </div>
                    </div>
                  ) : null
                )}
              </div>
            );
          })}
        </div>
      ) : null}
    </>
  );
}
