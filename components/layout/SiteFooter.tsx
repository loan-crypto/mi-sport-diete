"use client";

/* L'ancien SITE_VERSION ("v1 (Next.js) — date") etait affiche a tous les
   visiteurs — pratique en dev pour verifier qu'un deploiement a pris,
   mais ca donne un air de chantier a une page publique. Retire du rendu :
   un `git log` ou l'onglet Actions du repo donne la meme info en prive. */

import { useI18n } from "@/lib/i18n/context";

export default function SiteFooter() {
  const { t } = useI18n();
  return (
    <footer id="site-footer">
      <div className="container">{t("footer.tagline")}</div>
    </footer>
  );
}
