"use client";

import Link from "next/link";
import { SESSIONS, EXERCISES } from "@/content";
import { useI18n } from "@/lib/i18n/context";
import PageTheme from "@/components/layout/PageTheme";
import PhotoOrPlaceholder from "@/components/media/PhotoOrPlaceholder";
import { findById } from "@/lib/format";
import { heroPhotoStyle } from "@/lib/heroStyle";

const HERO_PHOTO = EXERCISES.filter((e) => e.photo).map((e) => e.photo)[4];

export default function SeancesPage() {
  const { t, tData } = useI18n();

  return (
    <>
      <PageTheme theme="sport" />

      <div className="breadcrumb">
        <Link href="/sport">{t("nav.sport")}</Link> / <span>{t("breadcrumb.seances")}</span>
      </div>
      <section className="hero hero-compact" style={heroPhotoStyle(HERO_PHOTO)}>
        <h1>{t("seances.title")}</h1>
        <p>{t("seances.subtitle")}</p>
      </section>

      <div className="card-grid">
        {SESSIONS.map((s) => {
          const firstExercise = findById(EXERCISES, s.exercises[0]?.exerciseId ?? "");
          const name = tData(s, "name") as string;
          return (
            <Link key={s.id} className="card" href={`/sport/seances/${s.id}`}>
              <div className="thumb">
                <PhotoOrPlaceholder photoPath={firstExercise?.photo} iconKey="clipboard" altText={name} />
              </div>
              <div className="body">
                <span className="tag">{tData(s, "day") as string}</span>
                <h3>{name}</h3>
                <div className="meta">
                  {s.exercises.length} {t(s.exercises.length > 1 ? "label.exercises" : "label.exercise")}
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
}
