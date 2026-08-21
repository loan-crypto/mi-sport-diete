"use client";

/* Portado de legacy-static-site/programme.html + js/render-programme.js.
   La logica pura vive en lib/programme.ts (ya verificada 1:1 contra el
   original); aqui solo se traduce/renderiza. */

import { useState } from "react";
import Link from "next/link";
import { MUSCLE_INFO } from "@/content";
import { useI18n } from "@/lib/i18n/context";
import { computeRecipeTotals, findById } from "@/lib/format";
import { INGREDIENTS } from "@/content";
import PhotoOrPlaceholder from "@/components/media/PhotoOrPlaceholder";
import ExoThumb from "@/components/programme/ExoThumb";
import PageTheme from "@/components/layout/PageTheme";
import { heroPhotoStyle } from "@/lib/heroStyle";
import { EXERCISES } from "@/content";
import {
  type Goal,
  DAY_MUSCLES,
  DAY_LABEL_KEY,
  GOAL_SCHEME,
  buildProgramme,
  schemeParts,
  BREAKFAST_RECIPES,
  MEAL_RECIPES,
  SNACK_RECIPES,
  buildWeekPlan,
  aggregateIngredients,
  groupShoppingByCategory,
  formatQty,
} from "@/lib/programme";
import type { UIStringKey } from "@/lib/i18n/dictionary";

const HERO_PHOTO = EXERCISES.filter((e) => e.photo).map((e) => e.photo)[3];

export default function ProgrammePage() {
  const { t, tData } = useI18n();
  const [goal, setGoal] = useState<Goal>("volume");
  const [days, setDays] = useState(3);
  const [shoppingDays, setShoppingDays] = useState(7);

  const scheme = GOAL_SCHEME[goal];
  const programme = buildProgramme(goal, days);
  const weekPlan = buildWeekPlan(shoppingDays);
  const totals = aggregateIngredients(weekPlan);
  const shoppingGroups = groupShoppingByCategory(totals);
  const hasAnyRecipes = BREAKFAST_RECIPES.length || MEAL_RECIPES.length || SNACK_RECIPES.length;

  function recipeCard(r: (typeof BREAKFAST_RECIPES)[number]) {
    const rTotals = computeRecipeTotals(r);
    const name = tData(r, "name") as string;
    return (
      <Link key={r.id} className="card" href={`/diete/recettes/${r.id}`}>
        <div className="thumb">
          <PhotoOrPlaceholder photoPath={r.photo} iconKey="fork" altText={name} />
        </div>
        <div className="body">
          <span className="tag">{tData(r, "category") as string}</span>
          <h3>{name}</h3>
          <div className="meta">
            {rTotals.calories} kcal · {rTotals.protein} g prot.
          </div>
        </div>
      </Link>
    );
  }

  function recipeGroup(titleKey: UIStringKey, recipes: typeof BREAKFAST_RECIPES) {
    if (!recipes.length) return null;
    return (
      <div className="programme-recipe-group" key={titleKey}>
        <div className="section-title programme-recipe-title">{t(titleKey)}</div>
        <div className="card-grid">{recipes.map(recipeCard)}</div>
      </div>
    );
  }

  return (
    <>
      <PageTheme theme="sport" />
      <div className="breadcrumb">
        <Link href="/sport">{t("nav.sport")}</Link> / <span>{t("breadcrumb.programme")}</span>
      </div>
      <section className="hero hero-compact" style={heroPhotoStyle(HERO_PHOTO)}>
        <span className="kicker">{t("sport.kicker")}</span>
        <h1>{t("programme.title")}</h1>
        <p>{t("programme.subtitle")}</p>
      </section>

      <form
        className="programme-form"
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="field grow">
          <label>{t("programme.field.goal")}</label>
          <div className="goal-options">
            {(["volume", "secher", "maintien"] as Goal[]).map((g) => (
              <label className="goal-option" key={g}>
                <input
                  type="radio"
                  name="goal"
                  value={g}
                  checked={goal === g}
                  onChange={() => setGoal(g)}
                />
                <span>{t(`programme.goal.${g}` as UIStringKey)}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="field">
          <label htmlFor="programme-days">{t("programme.field.days")}</label>
          <select
            id="programme-days"
            value={days}
            onChange={(e) => setDays(Number(e.target.value))}
          >
            {[2, 3, 4, 5, 6].map((d) => (
              <option key={d} value={d}>
                {d}
              </option>
            ))}
          </select>
        </div>

        <button type="submit">{t("programme.generate")}</button>
      </form>

      <div id="programme-result">
        <div className="section-title">{t("programme.result.splitTitle", { n: days })}</div>
        <div className="programme-days">
          {programme.map((day) => (
            <div className="card-box programme-day" key={day.index}>
              <div className="programme-day-head">
                <div className="programme-day-badge">{day.index}</div>
                <div>
                  <div className="programme-day-title">{t(DAY_LABEL_KEY[day.dayKey])}</div>
                  <div className="programme-day-muscles">
                    {DAY_MUSCLES[day.dayKey].map((key) => {
                      const info = MUSCLE_INFO[key];
                      const label = info ? (tData(info, "name") as string) : key;
                      return (
                        <span className="tag" key={key}>
                          {label}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </div>
              {day.exos.map((ex) => {
                const parts = schemeParts(ex, scheme);
                const name = tData(ex, "name") as string;
                return (
                  <div className="exo-row" key={ex.id}>
                    <ExoThumb photo={ex.photo} alt={name} />
                    <div className="exo-row-info">
                      <div className="name">
                        <Link href={`/sport/exercices/${ex.id}`}>{name}</Link>
                      </div>
                      <div className="scheme">{tData(ex, "muscleGroup") as string}</div>
                    </div>
                    <div className="scheme">
                      {parts.sets} × {parts.reps} — {t("label.rest")} {scheme.rest}
                    </div>
                  </div>
                );
              })}
            </div>
          ))}
        </div>

        <div className="section-title">{t("programme.result.dietTitle")}</div>
        <div className="card-box programme-diet-note">
          <div className="programme-diet-icon">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M6 2a1 1 0 0 1 1 1v6.17a2 2 0 0 0 1 1.73V22a1 1 0 1 1-2 0v-11.1a2 2 0 0 0 1-1.73V3a1 1 0 0 1 1-1zM4 2a1 1 0 0 1 1 1v5a1 1 0 1 1-2 0V3a1 1 0 0 1 1-1zm4 0a1 1 0 0 1 1 1v5a1 1 0 1 1-2 0V3a1 1 0 0 1 1-1zM19 2c-2.2 0-4 2.24-4 5 0 2.05 1 3.81 2.5 4.58V22a1 1 0 1 0 2 0V11.58C20.99 10.81 22 9.05 22 7c0-2.76-1.8-5-3-5z" />
            </svg>
          </div>
          <div>
            <p>{t(`programme.diet.${goal}` as UIStringKey)}</p>
            <p className="map-info-empty-exo">{t("programme.diet.disclaimer")}</p>
          </div>
        </div>

        {recipeGroup("programme.recipes.breakfast", BREAKFAST_RECIPES)}
        {recipeGroup("programme.recipes.meals", MEAL_RECIPES)}
        {recipeGroup("programme.recipes.snacks", SNACK_RECIPES)}
      </div>

      <div className="section-title">{t("programme.shopping.title")}</div>
      <p style={{ color: "var(--text-muted)" }}>{t("programme.shopping.subtitle")}</p>

      <form className="programme-form" onSubmit={(e) => e.preventDefault()}>
        <div className="field">
          <label htmlFor="shopping-days">{t("programme.shopping.field.days")}</label>
          <select
            id="shopping-days"
            value={shoppingDays}
            onChange={(e) => setShoppingDays(Number(e.target.value))}
          >
            {[1, 2, 3, 4, 5, 6, 7, 10, 14].map((d) => (
              <option key={d} value={d}>
                {d}
              </option>
            ))}
          </select>
        </div>
        <button type="submit">{t("programme.shopping.generate")}</button>
      </form>

      <div id="shopping-result">
        {!hasAnyRecipes ? (
          <p className="empty-state">{t("programme.shopping.emptyRecipes")}</p>
        ) : (
          <>
            <div className="section-title programme-recipe-title">{t("programme.shopping.weekTitle")}</div>
            <div className="card-box">
              {weekPlan.map((day) => {
                const parts = [
                  day.breakfast ? `${t("label.breakfast")} : ${tData(day.breakfast, "name")}` : null,
                  day.lunch ? `${t("label.lunch")} : ${tData(day.lunch, "name")}` : null,
                  day.dinner ? `${t("label.dinner")} : ${tData(day.dinner, "name")}` : null,
                  day.snack ? `${t("label.snack")} : ${tData(day.snack, "name")}` : null,
                ].filter(Boolean);
                return (
                  <div className="exo-row" key={day.day}>
                    <div className="exo-row-info">
                      <div className="name">{t("programme.shopping.dayN", { n: day.day })}</div>
                      <div className="scheme">{parts.join(" · ")}</div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="section-title programme-recipe-title">{t("programme.shopping.listTitle")}</div>
            {shoppingGroups.length === 0 ? (
              <p className="empty-state">{t("programme.shopping.emptyRecipes")}</p>
            ) : (
              shoppingGroups.map((group) => {
                const sortedItems = [...group.items].sort((a, b) => {
                  const ingA = findById(INGREDIENTS, a.ingredientId);
                  const ingB = findById(INGREDIENTS, b.ingredientId);
                  const nameA = ingA ? (tData(ingA, "name") as string) : "";
                  const nameB = ingB ? (tData(ingB, "name") as string) : "";
                  return nameA.localeCompare(nameB);
                });
                const firstIng = findById(INGREDIENTS, sortedItems[0]?.ingredientId ?? "");
                return (
                  <div className="programme-recipe-group" key={group.category}>
                    <div className="section-title programme-recipe-title">
                      {firstIng ? (tData(firstIng, "category") as string) : group.category}
                    </div>
                    <div className="table-scroll">
                      <table className="ingredient-table shopping-table">
                        <tbody>
                          {sortedItems.map((item) => {
                            const ing = findById(INGREDIENTS, item.ingredientId);
                            if (!ing) return null;
                            return (
                              <tr key={item.ingredientId}>
                                <td>
                                  <Link href={`/diete/ingredients/${ing.id}`}>{tData(ing, "name") as string}</Link>
                                </td>
                                <td>{formatQty(item.grams)}</td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                  </div>
                );
              })
            )}
          </>
        )}
      </div>
    </>
  );
}
