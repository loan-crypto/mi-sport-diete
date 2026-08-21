"use client";

import Link from "next/link";
import { RECIPES, INGREDIENTS } from "@/content";
import { useI18n, useEnumLabels } from "@/lib/i18n/context";
import { computeRecipeTotals } from "@/lib/format";
import PhotoOrPlaceholder from "@/components/media/PhotoOrPlaceholder";
import PageTheme from "@/components/layout/PageTheme";

export default function DietePage() {
  const { t, tData } = useI18n();
  const { qualityLabel } = useEnumLabels();

  return (
    <>
      <PageTheme theme="diet" />
      <div className="page-header">
        <span className="kicker">{t("diete.kicker")}</span>
        <h1>{t("diete.title")}</h1>
        <p>{t("diete.subtitle")}</p>
      </div>

      <div className="card-grid">
        {RECIPES.map((recipe) => {
          const totals = computeRecipeTotals(recipe);
          const name = tData(recipe, "name") as string;
          return (
            <Link key={recipe.id} className="card" href={`/diete/recettes/${recipe.id}`}>
              <div className="thumb">
                <PhotoOrPlaceholder photoPath={recipe.photo} iconKey="fork" altText={name} />
              </div>
              <div className="body">
                <span className="tag">{tData(recipe, "category") as string}</span>
                <h3>{name}</h3>
                <div className="meta">
                  {totals.calories} {t("macro.kcal").toLowerCase()} · {totals.protein} g{" "}
                  {t("macro.protein").toLowerCase()}
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      <div className="section-title">{t("diete.ingredientsTitle")}</div>
      <p>{t("diete.ingredientsSubtitle")}</p>

      <div className="table-scroll">
        <table className="ingredient-table">
          <thead>
            <tr>
              <th>{t("th.ingredient")}</th>
              <th>{t("th.category")}</th>
              <th>{t("th.kcalPer100")}</th>
              <th>{t("th.proteinPer100")}</th>
              <th>{t("th.quality")}</th>
            </tr>
          </thead>
          <tbody>
            {INGREDIENTS.map((ing) => {
              const qualityClass =
                ing.quality === "bon" ? "good" : ing.quality === "mauvais" ? "bad" : "neutral";
              return (
                <tr key={ing.id}>
                  <td>
                    <Link href={`/diete/ingredients/${ing.id}`}>{tData(ing, "name") as string}</Link>
                  </td>
                  <td>{tData(ing, "category") as string}</td>
                  <td>{ing.calories100}</td>
                  <td>{ing.protein100} g</td>
                  <td>
                    <span className={`tag ${qualityClass}`}>{qualityLabel(ing.quality)}</span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
