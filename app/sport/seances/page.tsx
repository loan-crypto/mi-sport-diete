"use client";

import Link from "next/link";
import { SESSIONS } from "@/content";
import { useI18n } from "@/lib/i18n/context";
import PageTheme from "@/components/layout/PageTheme";
import { Icon } from "@/lib/icons";

export default function SeancesPage() {
  const { t, tData } = useI18n();

  return (
    <>
      <PageTheme theme="sport" />

      <div className="breadcrumb">
        <Link href="/sport">{t("nav.sport")}</Link> / <span>{t("breadcrumb.seances")}</span>
      </div>
      <div className="page-header">
        <h1>{t("seances.title")}</h1>
        <p>{t("seances.subtitle")}</p>
      </div>

      <div className="card-grid">
        {SESSIONS.map((s) => (
          <Link key={s.id} className="card" href={`/sport/seances/${s.id}`}>
            <div className="icon-only-thumb">
              <Icon name="clipboard" />
            </div>
            <div className="body">
              <span className="tag">{tData(s, "day") as string}</span>
              <h3>{tData(s, "name") as string}</h3>
              <div className="meta">
                {s.exercises.length} {t(s.exercises.length > 1 ? "label.exercises" : "label.exercise")}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
