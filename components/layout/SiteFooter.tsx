"use client";

import { useI18n } from "@/lib/i18n/context";

// Repere de version, comme SITE_VERSION dans l'ancien layout.js — utile
// pour verifier en un coup d'oeil que le deploiement a bien pris.
const SITE_VERSION = "v1 (Next.js) — 21/08/2026";

export default function SiteFooter() {
  const { t } = useI18n();
  return (
    <footer id="site-footer">
      <div className="container">
        {t("footer.tagline")} · <span style={{ opacity: 0.6 }}>{SITE_VERSION}</span>
      </div>
    </footer>
  );
}
