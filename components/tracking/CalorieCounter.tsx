"use client";

/* Nueva funcionalidad: contador de calorias del dia. Suma los meal_logs
   de hoy (macros por porcion, via computeRecipeTotals / servings) y los
   compara contra un objetivo derivado de profiles.goal + current_weight. */

import { useEffect, useState, type FormEvent } from "react";
import { useAuth } from "@/lib/auth/context";
import { useI18n } from "@/lib/i18n/context";
import { getAllMealLogs, todayISO } from "@/lib/supabase/logs";
import { getProfile, upsertProfile } from "@/lib/supabase/profile";
import { computeCalorieTarget } from "@/lib/calorieTargets";
import { computeRecipeTotals, findById } from "@/lib/format";
import { RECIPES } from "@/content";
import type { Goal } from "@/lib/programme";
import type { UIStringKey } from "@/lib/i18n/dictionary";

export default function CalorieCounter() {
  const { user } = useAuth();
  const { t } = useI18n();
  const [loading, setLoading] = useState(true);
  const [consumed, setConsumed] = useState({ kcal: 0, protein: 0 });
  const [goal, setGoal] = useState<Goal | null>(null);
  const [weight, setWeight] = useState("");

  useEffect(() => {
    if (!user) return;
    (async () => {
      setLoading(true);
      const [profile, mealLogs] = await Promise.all([getProfile(user.id), getAllMealLogs(user.id)]);
      setGoal(profile.goal);
      setWeight(profile.currentWeight ? String(profile.currentWeight) : "");

      const today = todayISO();
      let kcal = 0;
      let protein = 0;
      for (const log of mealLogs) {
        if (log.date !== today) continue;
        const recipe = findById(RECIPES, log.recipeId);
        if (!recipe) continue;
        const totals = computeRecipeTotals(recipe);
        const servings = recipe.servings || 1;
        kcal += totals.calories / servings;
        protein += totals.protein / servings;
      }
      setConsumed({ kcal: Math.round(kcal), protein: Math.round(protein) });
      setLoading(false);
    })();
  }, [user]);

  async function handleSaveProfile(e: FormEvent) {
    e.preventDefault();
    if (!user || !goal) return;
    await upsertProfile(user.id, { goal, currentWeight: Number(weight) || null });
  }

  if (!user || loading) return null;

  if (!goal || !weight) {
    return (
      <div className="card-box">
        <p style={{ marginTop: 0 }}>{t("calories.setup")}</p>
        <form className="log-form" onSubmit={handleSaveProfile}>
          <div className="field">
            <label>{t("programme.field.goal")}</label>
            <select value={goal ?? ""} onChange={(e) => setGoal(e.target.value as Goal)}>
              <option value="" disabled>
                —
              </option>
              {(["volume", "secher", "maintien"] as Goal[]).map((g) => (
                <option key={g} value={g}>
                  {t(`programme.goal.${g}` as UIStringKey)}
                </option>
              ))}
            </select>
          </div>
          <div className="field">
            <label>{t("field.weight")}</label>
            <input
              type="number"
              step="0.1"
              min="0"
              placeholder="ex: 75"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>
          <button type="submit">{t("btn.add")}</button>
        </form>
      </div>
    );
  }

  const target = computeCalorieTarget(goal, Number(weight));
  const pct = Math.min(100, Math.round((consumed.kcal / target.kcal) * 100));

  return (
    <div className="card-box">
      <div className="section-title" style={{ marginTop: 0 }}>
        {t("calories.title")}
      </div>
      <div className="macro-row">
        <div className="macro-pill kcal">
          <div className="value">
            {consumed.kcal} / {target.kcal}
          </div>
          <div className="label">{t("calories.consumed")} · Kcal</div>
        </div>
        <div className="macro-pill protein">
          <div className="value">
            {consumed.protein} / {target.protein}g
          </div>
          <div className="label">{t("macro.protein")}</div>
        </div>
      </div>
      <div
        style={{
          height: 8,
          borderRadius: 999,
          background: "var(--bg-elevated)",
          overflow: "hidden",
          marginTop: 12,
        }}
      >
        <div
          style={{
            height: "100%",
            width: `${pct}%`,
            background: "linear-gradient(90deg, var(--accent), var(--accent-2))",
            transition: "width 0.4s ease",
          }}
        />
      </div>
    </div>
  );
}
