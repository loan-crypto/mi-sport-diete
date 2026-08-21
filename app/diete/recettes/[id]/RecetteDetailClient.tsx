"use client";

import Link from "next/link";
import { RECIPES, INGREDIENTS } from "@/content";
import { useI18n, useEnumLabels } from "@/lib/i18n/context";
import { computeRecipeTotals, findById } from "@/lib/format";
import PhotoOrPlaceholder from "@/components/media/PhotoOrPlaceholder";
import PageTheme from "@/components/layout/PageTheme";
import MealLogWidget from "@/components/tracking/MealLogWidget";

export default function RecetteDetailClient({ id }: { id: string }) {
  const { t, tData } = useI18n();
  const { qualityLabel } = useEnumLabels();
  const recipe = findById(RECIPES, id);

  if (!recipe) {
    return (
      <>
        <PageTheme theme="diet" />
        <p className="empty-state">
          {t("recipe.notFound")} <Link href="/diete">{t("action.backToDiet")}</Link>.
        </p>
      </>
    );
  }

  const totals = computeRecipeTotals(recipe);
  const name = tData(recipe, "name") as string;
  const category = tData(recipe, "category") as string;
  const steps = tData(recipe, "steps") as string[];
  const notes = tData(recipe, "notes") as string;
  const ingredientsTitle = t(
    recipe.servings > 1 ? "section.ingredientsForPlural" : "section.ingredientsFor",
    { n: recipe.servings }
  );

  return (
    <>
      <PageTheme theme="diet" />
      <div className="breadcrumb">
        <Link href="/diete">{t("nav.diete")}</Link> / {name}
      </div>
      <div className="page-header">
        <span className="tag">{category}</span>
        <h1>{name}</h1>
      </div>

      <div className="detail-photo">
        <PhotoOrPlaceholder photoPath={recipe.photo} iconKey="fork" altText={name} />
      </div>

      <div className="macro-row">
        <div className="macro-pill kcal">
          <div className="value">{totals.calories}</div>
          <div className="label">{t("macro.kcal")}</div>
        </div>
        <div className="macro-pill protein">
          <div className="value">{totals.protein}g</div>
          <div className="label">{t("macro.protein")}</div>
        </div>
        <div className="macro-pill carbs">
          <div className="value">{totals.carbs}g</div>
          <div className="label">{t("macro.carbs")}</div>
        </div>
        <div className="macro-pill fat">
          <div className="value">{totals.fat}g</div>
          <div className="label">{t("macro.fat")}</div>
        </div>
      </div>

      <div className="section-title">{ingredientsTitle}</div>
      <div className="table-scroll">
        <table className="ingredient-table">
          <thead>
            <tr>
              <th>{t("th.ingredient")}</th>
              <th>{t("th.quantity")}</th>
              <th>{t("th.quality")}</th>
            </tr>
          </thead>
          <tbody>
            {recipe.ingredients.map((line) => {
              const ing = findById(INGREDIENTS, line.ingredientId);
              if (!ing) return null;
              const qualityClass =
                ing.quality === "bon" ? "good" : ing.quality === "mauvais" ? "bad" : "neutral";
              return (
                <tr key={line.ingredientId}>
                  <td>
                    <Link href={`/diete/ingredients/${ing.id}`}>{tData(ing, "name") as string}</Link>
                  </td>
                  <td>{line.grams} g</td>
                  <td>
                    <span className={`tag ${qualityClass}`}>{qualityLabel(ing.quality)}</span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="section-title">{t("section.preparation")}</div>
      <ol className="steps-list">
        {steps.map((step, i) => (
          <li key={i}>{step}</li>
        ))}
      </ol>

      {notes ? <div className="card-box">{notes}</div> : null}

      <MealLogWidget recipeId={recipe.id} />
    </>
  );
}
