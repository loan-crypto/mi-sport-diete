"use client";

import Link from "next/link";
import { useI18n } from "@/lib/i18n/context";
import { Icon } from "@/lib/icons";
import PageTheme from "@/components/layout/PageTheme";
import { heroPhotoStyle } from "@/lib/heroStyle";
import { EXERCISES, SESSIONS } from "@/content";
import Tilt3D from "@/components/motion/Tilt3D";
import AnimatedNumber from "@/components/motion/AnimatedNumber";

const exercisePhotos = EXERCISES.filter((e) => e.photo).map((e) => e.photo);
const EXERCICES_PHOTO = exercisePhotos[0];
const SEANCES_PHOTO = exercisePhotos[5] ?? exercisePhotos[0];
// Nota: evitamos tus fotos propias (images/body/*) en tarjetas chicas —
// el recorte automatico (cover, poca altura) cae mal sobre una foto de
// cuerpo entero. Se quedan reservadas para la pagina Carta muscular
// donde se muestran completas, en su formato correcto.
const MUSCLEMAP_PHOTO = exercisePhotos[8] ?? exercisePhotos[0];

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
          <div className="value">
            <AnimatedNumber value={EXERCISES.length} />
          </div>
          <div className="label">{t("hub.exercices.title")}</div>
        </div>
        <div className="stat">
          <div className="value">
            <AnimatedNumber value={SESSIONS.length} />
          </div>
          <div className="label">{t("hub.seances.title")}</div>
        </div>
        <div className="stat">
          <div className="value">
            <AnimatedNumber value={21} />
          </div>
          <div className="label">{t("hub.musclemap.title")}</div>
        </div>
      </div>

      <div className="hub-grid">
        <Tilt3D>
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
        </Tilt3D>
        <Tilt3D>
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
        </Tilt3D>
        <Tilt3D>
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
        </Tilt3D>
      </div>
    </>
  );
}
