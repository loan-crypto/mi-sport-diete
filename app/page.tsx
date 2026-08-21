"use client";

import Link from "next/link";
import { useI18n } from "@/lib/i18n/context";
import ScrollReveal from "@/components/motion/ScrollReveal";
import StripeDivider from "@/components/layout/StripeDivider";

export default function HomePage() {
  const { t } = useI18n();

  return (
    <>
      <section className="hero">
        <svg
          className="hero-art"
          viewBox="0 0 800 300"
          preserveAspectRatio="none"
          aria-hidden="true"
          focusable="false"
        >
          <path
            d="M-50 260 C 120 180, 260 320, 420 220 S 700 60, 850 90"
            stroke="currentColor"
            strokeWidth="1.4"
            fill="none"
            opacity="0.28"
          />
          <path
            d="M-50 200 C 140 260, 300 120, 460 200 S 720 280, 850 200"
            stroke="currentColor"
            strokeWidth="1"
            fill="none"
            opacity="0.18"
          />
          <path
            d="M-50 90 C 160 40, 280 140, 440 70 S 680 -10, 850 40"
            stroke="currentColor"
            strokeWidth="1"
            fill="none"
            opacity="0.14"
          />
        </svg>
        <span className="kicker">{t("home.kicker")}</span>
        <h1>{t("home.title")}</h1>
        <p>{t("home.subtitle")}</p>
      </section>

      <StripeDivider />

      <div className="hub-grid">
        <ScrollReveal delay={0}>
          <Link className="hub-card" href="/diete">
            <div className="icon-badge">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M6 2a1 1 0 0 1 1 1v6.17a2 2 0 0 0 1 1.73V22a1 1 0 1 1-2 0v-11.1a2 2 0 0 0 1-1.73V3a1 1 0 0 1 1-1zM4 2a1 1 0 0 1 1 1v5a1 1 0 1 1-2 0V3a1 1 0 0 1 1-1zm4 0a1 1 0 0 1 1 1v5a1 1 0 1 1-2 0V3a1 1 0 0 1 1-1zM19 2c-2.2 0-4 2.24-4 5 0 2.05 1 3.81 2.5 4.58V22a1 1 0 1 0 2 0V11.58C20.99 10.81 22 9.05 22 7c0-2.76-1.8-5-3-5z" />
              </svg>
            </div>
            <h2>{t("home.diete.title")}</h2>
            <p>{t("home.diete.desc")}</p>
          </Link>
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <Link className="hub-card" href="/sport">
            <div className="icon-badge">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M20 9h-2V7a1 1 0 0 0-1-1h-1a1 1 0 0 0-1 1v2H9V7a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v2H4a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h2v2a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-2h6v2a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-2h2a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1z" />
              </svg>
            </div>
            <h2>{t("home.sport.title")}</h2>
            <p>{t("home.sport.desc")}</p>
          </Link>
        </ScrollReveal>
        <ScrollReveal delay={200}>
          <Link className="hub-card" href="/journal">
            <div className="icon-badge">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M4 20a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4zm7 0a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v15a1 1 0 0 1-1 1h-2zm7 0a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1h-2z" />
              </svg>
            </div>
            <h2>{t("home.journal.title")}</h2>
            <p>{t("home.journal.desc")}</p>
          </Link>
        </ScrollReveal>
      </div>
    </>
  );
}
