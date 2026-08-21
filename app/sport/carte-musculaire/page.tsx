"use client";

/* Portado de legacy-static-site/carte-musculaire.html +
   js/render-carte-musculaire.js. Mismos DOTS/MUSCLE_INFO, mismo
   mecanismo de "group" para las cabezas de musculo (cuadriceps,
   isquios), pero como estado React (activeView/activeMuscle) en vez de
   manipulacion directa del DOM. */

import { useState } from "react";
import Link from "next/link";
import { EXERCISES, MUSCLE_DOTS, MUSCLE_INFO } from "@/content";
import { useI18n, useEnumLabels } from "@/lib/i18n/context";
import PageTheme from "@/components/layout/PageTheme";
import { heroPhotoStyle } from "@/lib/heroStyle";

const HERO_PHOTO = `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/images/body/front.jpg`;

type View = "front" | "back";

function exercisesForMuscle(key: string) {
  const info = MUSCLE_INFO[key];
  const groupKey = info?.group ?? key;
  return EXERCISES.filter(
    (ex) => ex.muscles.includes(key) || ex.muscles.includes(groupKey)
  );
}

export default function CarteMusculairePage() {
  const { t, tData } = useI18n();
  const { difficultyLabel } = useEnumLabels();
  const [view, setView] = useState<View>("front");
  const [activeMuscle, setActiveMuscle] = useState<string | null>(null);

  const info = activeMuscle ? MUSCLE_INFO[activeMuscle] : null;
  const groupKey = info?.group ?? null;
  const groupInfo = groupKey ? MUSCLE_INFO[groupKey] : null;
  const exos = activeMuscle ? exercisesForMuscle(activeMuscle) : [];
  const filterMuscle = groupKey ?? activeMuscle;

  return (
    <>
      <PageTheme theme="sport" />
      <div className="breadcrumb">
        <Link href="/sport">{t("nav.sport")}</Link> / <span>{t("breadcrumb.musclemap")}</span>
      </div>
      <section className="hero hero-compact" style={heroPhotoStyle(HERO_PHOTO)}>
        <span className="kicker">{t("sport.kicker")}</span>
        <h1>{t("map.title")}</h1>
        <p>{t("map.subtitle")}</p>
      </section>

      <div className="map-note" dangerouslySetInnerHTML={{ __html: t("map.note") }} />

      <div className="map-layout">
        <div className="map-panel">
          <div className="map-tabs">
            <button
              type="button"
              className={`map-tab ${view === "front" ? "active" : ""}`}
              onClick={() => setView("front")}
            >
              {t("label.face")}
            </button>
            <button
              type="button"
              className={`map-tab ${view === "back" ? "active" : ""}`}
              onClick={() => setView("back")}
            >
              {t("label.back")}
            </button>
          </div>
          <div className="body-map-wrap">
            <div className="body-photo-wrap" style={{ display: view === "front" ? undefined : "none" }}>
              <img
                className="body-photo"
                src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/images/body/front.jpg`}
                alt="Photo de face avec points musculaires cliquables"
              />
              <div className="muscle-dots-layer">
                {MUSCLE_DOTS.front.map((dot, i) => (
                  <button
                    key={i}
                    type="button"
                    className={`muscle-dot ${activeMuscle === dot.muscle && view === "front" ? "active" : ""}`}
                    style={{ left: `${dot.x}%`, top: `${dot.y}%` }}
                    aria-label={MUSCLE_INFO[dot.muscle] ? tData(MUSCLE_INFO[dot.muscle], "name") : dot.muscle}
                    onClick={() => {
                      setView("front");
                      setActiveMuscle(dot.muscle);
                    }}
                  >
                    <span className="muscle-dot-ring" />
                    <span className="muscle-dot-core" />
                  </button>
                ))}
              </div>
            </div>
            <div className="body-photo-wrap" style={{ display: view === "back" ? undefined : "none" }}>
              <img
                className="body-photo"
                src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/images/body/back.jpg`}
                alt="Photo de dos avec points musculaires cliquables"
              />
              <div className="muscle-dots-layer">
                {MUSCLE_DOTS.back.map((dot, i) => (
                  <button
                    key={i}
                    type="button"
                    className={`muscle-dot ${activeMuscle === dot.muscle && view === "back" ? "active" : ""}`}
                    style={{ left: `${dot.x}%`, top: `${dot.y}%` }}
                    aria-label={MUSCLE_INFO[dot.muscle] ? tData(MUSCLE_INFO[dot.muscle], "name") : dot.muscle}
                    onClick={() => {
                      setView("back");
                      setActiveMuscle(dot.muscle);
                    }}
                  >
                    <span className="muscle-dot-ring" />
                    <span className="muscle-dot-core" />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <aside className="map-info">
          {!info ? (
            <div className="map-info-empty">
              <div className="icon-badge">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="9" />
                  <path d="M12 8v4M12 16h.01" />
                </svg>
              </div>
              <p>{t("map.emptyPrompt")}</p>
            </div>
          ) : (
            <>
              <span className="tag">{view === "front" ? t("label.face") : t("label.back")}</span>
              <h2>{tData(info, "name")}</h2>
              {groupInfo ? (
                <p className="map-info-group">{t("map.partOf", { group: String(tData(groupInfo, "name")) })}</p>
              ) : null}
              <p>{tData(info, "desc")}</p>
              {filterMuscle ? (
                <Link className="btn" href={`/sport/exercices?muscle=${filterMuscle}`}>
                  {t("map.viewAllForMuscle")}
                </Link>
              ) : null}
              <div className="map-exo-block">
                <h3>{t("map.exercisesInNotebook")}</h3>
                {exos.length === 0 ? (
                  <p className="map-info-empty-exo">{t("empty.noExerciseForMuscle")}</p>
                ) : (
                  <ul className="map-exo-list">
                    {exos.map((ex) => (
                      <li key={ex.id}>
                        <Link href={`/sport/exercices/${ex.id}`}>{tData(ex, "name")}</Link>
                        <span className="meta">{difficultyLabel(ex.difficulty)}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </>
          )}
        </aside>
      </div>
    </>
  );
}
