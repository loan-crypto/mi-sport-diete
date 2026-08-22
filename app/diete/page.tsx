"use client";

import Link from "next/link";
import { RECIPES, INGREDIENTS } from "@/content";
import { useI18n, useEnumLabels } from "@/lib/i18n/context";
import { computeRecipeTotals } from "@/lib/format";
import PhotoOrPlaceholder from "@/components/media/PhotoOrPlaceholder";
import PageTheme from "@/components/layout/PageTheme";
import { heroPhotoStyle } from "@/lib/heroStyle";
import DietPlanGenerator from "@/components/diete/DietPlanGenerator";
import AnimatedNumber from "@/components/motion/AnimatedNumber";
import Tilt3D from "@/components/motion/Tilt3D";

const HERO_PHOTO = RECIPES.find((r) => r.photo)?.photo;
const bonCount = INGREDIENTS.filter((i) => i.quality === "bon").length;

export default function DietePage() {
  const { t, tData } = useI18n();
  const { qualityLabel } = useEnumLabels();

  return (
    <>
      <PageTheme theme="diet" />
      <section className="hero hero-compact" style={heroPhotoStyle(HERO_PHOTO)}>
        <span className="kicker">{t("diete.kicker")}</span>
        <h1>{t("diete.title")}</h1>
        <p>{t("diete.subtitle")}</p>
      </section>

      <div className="stats-row">
        <div className="stat">
          <div className="value">
            <AnimatedNumber value={RECIPES.length} />
          </div>
          <div className="label">{t("nav.diete")}</div>
        </div>
        <div className="stat">
          <div className="value">
            <AnimatedNumber value={INGREDIENTS.length} />
          </div>
          <div className="label">{t("th.ingredient")}</div>
        </div>
        <div className="stat">
          <div className="value">
            <AnimatedNumber value={bonCount} />
          </div>
          <div className="label">{t("quality.good")}</div>
        </div>
      </div>

      <DietPlanGenerator />

      <div className="section-title">{t("diete.title")}</div>
      <div className="card-grid">
        {RECIPES.map((recipe) => {
          const totals = computeRecipeTotals(recipe);
          const name = tData(recipe, "name") as string;
          return (
            <Tilt3D key={recipe.id} max={6}>
              <Link className="card" href={`/diete/recettes/${recipe.id}`}>
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
            </Tilt3D>
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
