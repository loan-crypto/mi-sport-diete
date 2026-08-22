"use client";

import Link from "next/link";
import { useI18n } from "@/lib/i18n/context";
import { Icon } from "@/lib/icons";
import PageTheme from "@/components/layout/PageTheme";
import { heroPhotoStyle } from "@/lib/heroStyle";
import { EXERCISES, SESSIONS } from "@/content";

const exercisePhotos = EXERCISES.filter((e) => e.photo).map((e) => e.photo);
const EXERCICES_PHOTO = exercisePhotos[0];
const SEANCES_PHOTO = exercisePhotos[5] ?? exercisePhotos[0];
const MUSCLEMAP_PHOTO = `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/images/body/front.jpg`;

export default function SportPage() {
  const { t } = useI18n();

  return (
    <>
      <PageTheme theme="sport" />

      <section className="hero hero-compact" style={heroPhotoStyle(EXERCICES_PHOTO)}>
        <span className="kicker">{t("sport.kicker")}</span>
        <h1>{t("sport.title")}</h1>
        <p>{t("sport.subtitle")}</p>
      </section>

      <div className="stats-row">
        <div className="stat">
          <div className="value">{EXERCISES.length}</div>
          <div className="label">{t("hub.exercices.title")}</div>
        </div>
        <div className="stat">
          <div className="value">{SESSIONS.length}</div>
          <div className="label">{t("hub.seances.title")}</div>
        </div>
        <div className="stat">
          <div className="value">21</div>
          <div className="label">{t("hub.musclemap.title")}</div>
        </div>
      </div>

      <div className="hub-grid">
        <Link className="hub-card" href="/sport/exercices">
          <div className="hub-card-photo" style={{ backgroundImage: `url(${EXERCICES_PHOTO})` }} />
          <div className="hub-card-body">
            <div className="icon-badge">
              <Icon name="dumbbell" />
            </div>
            <h2>{t("hub.exercices.title")}</h2>
            <p>{t("hub.exercices.desc")}</p>
          </div>
        </Link>
        <Link className="hub-card" href="/sport/seances">
          <div className="hub-card-photo" style={{ backgroundImage: `url(${SEANCES_PHOTO})` }} />
          <div className="hub-card-body">
            <div className="icon-badge">
              <Icon name="clipboard" />
            </div>
            <h2>{t("hub.seances.title")}</h2>
            <p>{t("hub.seances.desc")}</p>
          </div>
        </Link>
        <Link className="hub-card" href="/sport/carte-musculaire">
          <div className="hub-card-photo" style={{ backgroundImage: `url(${MUSCLEMAP_PHOTO})` }} />
          <div className="hub-card-body">
            <div className="icon-badge">
              <Icon name="chart" />
            </div>
            <h2>{t("hub.musclemap.title")}</h2>
            <p>{t("hub.musclemap.desc")}</p>
          </div>
        </Link>
      </div>
    </>
  );
}
