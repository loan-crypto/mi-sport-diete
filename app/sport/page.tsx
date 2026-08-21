"use client";

import Link from "next/link";
import { useI18n } from "@/lib/i18n/context";
import { Icon } from "@/lib/icons";
import PageTheme from "@/components/layout/PageTheme";

export default function SportPage() {
  const { t } = useI18n();

  return (
    <>
      <PageTheme theme="sport" />

      <div className="page-header">
        <span className="kicker">{t("sport.kicker")}</span>
        <h1>{t("sport.title")}</h1>
        <p>{t("sport.subtitle")}</p>
      </div>

      <div className="hub-grid">
        <Link className="hub-card" href="/sport/exercices">
          <div className="icon-badge">
            <Icon name="dumbbell" />
          </div>
          <h2>{t("hub.exercices.title")}</h2>
          <p>{t("hub.exercices.desc")}</p>
        </Link>
        <Link className="hub-card" href="/sport/seances">
          <div className="icon-badge">
            <Icon name="clipboard" />
          </div>
          <h2>{t("hub.seances.title")}</h2>
          <p>{t("hub.seances.desc")}</p>
        </Link>
        <Link className="hub-card" href="/sport/carte-musculaire">
          <div className="icon-badge">
            <Icon name="chart" />
          </div>
          <h2>{t("hub.musclemap.title")}</h2>
          <p>{t("hub.musclemap.desc")}</p>
        </Link>
      </div>
    </>
  );
}
