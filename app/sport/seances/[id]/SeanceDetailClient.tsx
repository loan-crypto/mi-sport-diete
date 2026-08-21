"use client";

import Link from "next/link";
import { EXERCISES, SESSIONS } from "@/content";
import { findById } from "@/lib/format";
import { useI18n } from "@/lib/i18n/context";
import PageTheme from "@/components/layout/PageTheme";
import { Icon } from "@/lib/icons";

export default function SeanceDetailClient({ id }: { id: string }) {
  const { t, tData } = useI18n();

  const session = findById(SESSIONS, id);

  if (!session) {
    return (
      <>
        <PageTheme theme="sport" />
        <p className="empty-state">
          {t("seance.notFound")} <Link href="/sport/seances">{t("action.backToSeances")}</Link>.
        </p>
      </>
    );
  }

  const name = tData(session, "name") as string;

  return (
    <>
      <PageTheme theme="sport" />

      <div className="breadcrumb">
        <Link href="/sport">{t("nav.sport")}</Link> /{" "}
        <Link href="/sport/seances">{t("breadcrumb.seances")}</Link> / {name}
      </div>
      <div className="page-header">
        <span className="tag">{tData(session, "day") as string}</span>
        <h1>{name}</h1>
      </div>

      {session.notes ? <div className="card-box">{tData(session, "notes") as string}</div> : null}

      <div className="section-title">{t("section.exercises")}</div>
      <div className="card-box">
        {session.exercises.map((line, i) => {
          const ex = findById(EXERCISES, line.exerciseId);
          if (!ex) return null;
          return (
            <div className="exo-row" key={`${line.exerciseId}-${i}`}>
              <div className="exo-thumb">
                <Icon name="dumbbell" />
                {ex.photo ? (
                  // eslint-disable-next-line @next/next/no-img-element -- fotos remotas (Pexels) + export estatico
                  <img
                    src={ex.photo}
                    alt={tData(ex, "name") as string}
                    onError={(e) => {
                      e.currentTarget.remove();
                    }}
                  />
                ) : null}
              </div>
              <div className="exo-row-info">
                <div className="name">
                  <Link href={`/sport/exercices/${ex.id}`}>{tData(ex, "name") as string}</Link>
                </div>
                <div className="scheme">{tData(ex, "muscleGroup") as string}</div>
              </div>
              <div className="scheme">
                {line.sets} × {String(line.reps)} — {t("label.rest")} {line.rest}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
