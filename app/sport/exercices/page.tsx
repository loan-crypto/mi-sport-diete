"use client";

import { Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { EXERCISES, MUSCLE_INFO } from "@/content";
import { useI18n, useEnumLabels } from "@/lib/i18n/context";
import PageTheme from "@/components/layout/PageTheme";
import PhotoOrPlaceholder from "@/components/media/PhotoOrPlaceholder";
import { heroPhotoStyle } from "@/lib/heroStyle";
import Tilt3D from "@/components/motion/Tilt3D";

const HERO_PHOTO = EXERCISES.filter((e) => e.photo).map((e) => e.photo)[1];

function ExercicesList() {
  const { t, tData } = useI18n();
  const { difficultyLabel } = useEnumLabels();
  const searchParams = useSearchParams();
  const muscleKey = searchParams.get("muscle");

  const list = muscleKey
    ? EXERCISES.filter((ex) => ex.muscles.includes(muscleKey))
    : EXERCISES;

  const muscleInfo = muscleKey ? MUSCLE_INFO[muscleKey] : undefined;
  const muscleLabel = muscleInfo ? (tData(muscleInfo, "name") as string) : muscleKey;

  return (
    <>
      {muscleKey ? (
        <span className="filter-chip">
          {t("filter.byMuscle")} <strong>{muscleLabel}</strong>
          <Link href="/sport/exercices" aria-label="✕">
            ✕
          </Link>
        </span>
      ) : null}

      {list.length === 0 ? (
        <p className="map-info-empty-exo">{t("empty.noExerciseForMuscle")}</p>
      ) : (
        <div className="card-grid">
          {list.map((ex) => (
            <Tilt3D key={ex.id} max={6}>
              <Link className="card" href={`/sport/exercices/${ex.id}`}>
                <div className="thumb">
                  <PhotoOrPlaceholder
                    photoPath={ex.photo}
                    iconKey="dumbbell"
                    altText={tData(ex, "name") as string}
                  />
                </div>
                <div className="body">
                  <span className="tag">{tData(ex, "muscleGroup") as string}</span>
                  <h3>{tData(ex, "name") as string}</h3>
                  <div className="meta">{difficultyLabel(ex.difficulty)}</div>
                </div>
              </Link>
            </Tilt3D>
          ))}
        </div>
      )}
    </>
  );
}

export default function ExercicesPage() {
  const { t } = useI18n();

  return (
    <>
      <PageTheme theme="sport" />

      <div className="breadcrumb">
        <Link href="/sport">{t("nav.sport")}</Link> / <span>{t("breadcrumb.exercices")}</span>
      </div>
      <section className="hero hero-compact" style={heroPhotoStyle(HERO_PHOTO)}>
        <h1>{t("exercices.title")}</h1>
        <p>{t("exercices.subtitle")}</p>
      </section>

      <Suspense fallback={null}>
        <ExercicesList />
      </Suspense>
    </>
  );
}
