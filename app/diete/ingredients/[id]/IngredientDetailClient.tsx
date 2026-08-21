"use client";

import Link from "next/link";
import { RECIPES, INGREDIENTS } from "@/content";
import { useI18n, useEnumLabels } from "@/lib/i18n/context";
import { findById } from "@/lib/format";
import PhotoOrPlaceholder from "@/components/media/PhotoOrPlaceholder";
import PageTheme from "@/components/layout/PageTheme";

export default function IngredientDetailClient({ id }: { id: string }) {
  const { t, tData } = useI18n();
  const { qualityLabel } = useEnumLabels();
  const ingredient = findById(INGREDIENTS, id);

  if (!ingredient) {
    return (
      <>
        <PageTheme theme="diet" />
        <p className="empty-state">
          {t("ingredient.notFound")} <Link href="/diete">{t("action.backToDiet")}</Link>.
        </p>
      </>
    );
  }

  const name = tData(ingredient, "name") as string;
  const category = tData(ingredient, "category") as string;
  const notes = tData(ingredient, "notes") as string;
  const qualityClass =
    ingredient.quality === "bon" ? "good" : ingredient.quality === "mauvais" ? "bad" : "neutral";

  const usedIn = RECIPES.filter((r) =>
    r.ingredients.some((line) => line.ingredientId === ingredient.id)
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
        <p>
          <span className={`tag ${qualityClass}`}>{qualityLabel(ingredient.quality)}</span>
        </p>
      </div>

      <div className="macro-row">
        <div className="macro-pill kcal">
          <div className="value">{ingredient.calories100}</div>
          <div className="label">{t("macro.kcalPer100")}</div>
        </div>
        <div className="macro-pill protein">
          <div className="value">{ingredient.protein100}g</div>
          <div className="label">{t("macro.proteinPer100")}</div>
        </div>
        <div className="macro-pill carbs">
          <div className="value">{ingredient.carbs100}g</div>
          <div className="label">{t("macro.carbsPer100")}</div>
        </div>
        <div className="macro-pill fat">
          <div className="value">{ingredient.fat100}g</div>
          <div className="label">{t("macro.fatPer100")}</div>
        </div>
      </div>

      <div className="section-title">{t("section.goodBad")}</div>
      <div className="card-box">{notes}</div>

      {usedIn.length > 0 ? (
        <>
          <div className="section-title">{t("section.usedIn")}</div>
          <div className="card-grid">
            {usedIn.map((r) => {
              const recipeName = tData(r, "name") as string;
              return (
                <Link key={r.id} className="card" href={`/diete/recettes/${r.id}`}>
                  <div className="thumb">
                    <PhotoOrPlaceholder photoPath={r.photo} iconKey="fork" altText={recipeName} />
                  </div>
                  <div className="body">
                    <h3>{recipeName}</h3>
                  </div>
                </Link>
              );
            })}
          </div>
        </>
      ) : null}
    </>
  );
}
