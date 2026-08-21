"use client";

import Link from "next/link";
import { EXERCISES } from "@/content";
import { findById } from "@/lib/format";
import { useI18n, useEnumLabels } from "@/lib/i18n/context";
import PageTheme from "@/components/layout/PageTheme";
import PhotoOrPlaceholder from "@/components/media/PhotoOrPlaceholder";
import VideoOrPlaceholder from "@/components/media/VideoOrPlaceholder";

export default function ExerciceDetailClient({ id }: { id: string }) {
  const { t, tData } = useI18n();
  const { difficultyLabel } = useEnumLabels();

  const ex = findById(EXERCISES, id);

  if (!ex) {
    return (
      <>
        <PageTheme theme="sport" />
        <p className="empty-state">
          {t("exercice.notFound")} <Link href="/sport/exercices">{t("action.backToExercices")}</Link>.
        </p>
      </>
    );
  }

  const name = tData(ex, "name") as string;
  const description = tData(ex, "description") as string[];

  return (
    <>
      <PageTheme theme="sport" />

      <div className="breadcrumb">
        <Link href="/sport">{t("nav.sport")}</Link> /{" "}
        <Link href="/sport/exercices">{t("breadcrumb.exercices")}</Link> / {name}
      </div>
      <div className="page-header">
        <span className="badge-difficulty">{difficultyLabel(ex.difficulty)}</span>
        <h1>{name}</h1>
        <p>{tData(ex, "muscleGroup") as string}</p>
      </div>

      <div className="detail-photo">
        <PhotoOrPlaceholder photoPath={ex.photo} iconKey="dumbbell" altText={name} />
      </div>

      <div className="section-title">{t("section.video")}</div>
      <div className="detail-photo">
        <VideoOrPlaceholder videoPath={ex.video} />
      </div>

      <div className="section-title">{t("section.execution")}</div>
      <ol className="steps-list">
        {description.map((step, i) => (
          <li key={i}>{step}</li>
        ))}
      </ol>

      {ex.tips ? (
        <div className="card-box">
          <strong>{t("section.tips")}</strong> {tData(ex, "tips") as string}
        </div>
      ) : null}

      {ex.progressionPrev || ex.progressionNext ? (
        <>
          <div className="section-title">{t("section.progressions")}</div>
          <div className="macro-row">
            {ex.progressionPrev ? (
              <div className="macro-pill">
                <div className="label">{t("label.before")}</div>
                <div className="value" style={{ fontSize: "0.95rem" }}>
                  {tData(ex, "progressionPrev") as string}
                </div>
              </div>
            ) : null}
            {ex.progressionNext ? (
              <div className="macro-pill">
                <div className="label">{t("label.after")}</div>
                <div className="value" style={{ fontSize: "0.95rem" }}>
                  {tData(ex, "progressionNext") as string}
                </div>
              </div>
            ) : null}
          </div>
        </>
      ) : null}

      {/* TODO(fase-supabase): formulario de seguimiento + grafico de progreso */}
    </>
  );
}
