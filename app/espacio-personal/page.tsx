"use client";

/* Nuevo hub (no existia en el sitio legado, donde Journal/Progression
   estaban sueltos en el menu principal): agrupa todo el seguimiento
   personal (Journal, Progression, Planificador) bajo un solo pilar,
   igual que Diete y Sport - menos ruido en el menu, misma logica que
   /sport como hub. */

import Link from "next/link";
import { useI18n } from "@/lib/i18n/context";
import { Icon } from "@/lib/icons";
import { heroPhotoStyle } from "@/lib/heroStyle";
import { EXERCISES } from "@/content";
import Tilt3D from "@/components/motion/Tilt3D";

const photos = EXERCISES.filter((e) => e.photo).map((e) => e.photo);
const HERO_PHOTO = photos[6];
const JOURNAL_PHOTO = HERO_PHOTO;
// Nota: evitamos images/body/back.jpg aqui (foto de stock generica, no
// tuya) — el recorte automatico de una tarjeta chica cae mal sobre una
// foto de cuerpo entero. Se usa solo en la carte musculaire.
const PROGRESSION_PHOTO = photos[11] ?? photos[2];
const PLANNER_PHOTO = photos[9];

export default function EspacioPersonalPage() {
  const { t } = useI18n();

  return (
    <>
      <section className="hero hero-compact" style={heroPhotoStyle(HERO_PHOTO)}>
        <span className="kicker">{t("personal.kicker")}</span>
        <h1>{t("personal.title")}</h1>
        <p>{t("personal.subtitle")}</p>
      </section>

      <div className="hub-grid">
        <Tilt3D>
          <Link className="hub-card" href="/journal">
            <div className="hub-card-photo" style={{ backgroundImage: `url(${JOURNAL_PHOTO})` }} />
            <div className="hub-card-body">
              <div className="icon-badge">
                <Icon name="chart" />
              </div>
              <h2>{t("hub.journal.title")}</h2>
              <p>{t("hub.journal.desc")}</p>
            </div>
          </Link>
        </Tilt3D>
        <Tilt3D>
          <Link className="hub-card" href="/progression">
            <div className="hub-card-photo" style={{ backgroundImage: `url(${PROGRESSION_PHOTO})` }} />
            <div className="hub-card-body">
              <div className="icon-badge">
                <Icon name="camera" />
              </div>
              <h2>{t("hub.progression.title")}</h2>
              <p>{t("hub.progression.desc")}</p>
            </div>
          </Link>
        </Tilt3D>
        <Tilt3D>
          <Link className="hub-card" href="/planificateur">
            <div className="hub-card-photo" style={{ backgroundImage: `url(${PLANNER_PHOTO})` }} />
            <div className="hub-card-body">
              <div className="icon-badge">
                <Icon name="clipboard" />
              </div>
              <h2>{t("hub.planificateur.title")}</h2>
              <p>{t("hub.planificateur.desc")}</p>
            </div>
          </Link>
        </Tilt3D>
      </div>
    </>
  );
}
