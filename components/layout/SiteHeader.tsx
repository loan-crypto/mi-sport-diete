"use client";

/* Portado de legacy-static-site/js/layout.js — antes inyectaba HTML a
   mano en #site-header, ahora es un componente React normal. El enlace
   activo se calcula desde el pathname en vez de un atributo data-nav. */

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useI18n } from "@/lib/i18n/context";
import { useAuth } from "@/lib/auth/context";
import type { UIStringKey } from "@/lib/i18n/dictionary";

const NAV_LINKS: { href: string; labelKey: UIStringKey }[] = [
  { href: "/", labelKey: "nav.accueil" },
  { href: "/diete", labelKey: "nav.diete" },
  { href: "/sport", labelKey: "nav.sport" },
  { href: "/programme", labelKey: "nav.programme" },
  { href: "/espacio-personal", labelKey: "nav.espacePersonnel" },
];

// Journal/Progression/Planificateur viven bajo /espacio-personal en el
// menu aunque su URL no este anidada (para no romper enlaces existentes).
const PERSONAL_PATHS = ["/espacio-personal", "/journal", "/progression", "/planificateur"];

function isActive(pathname: string, href: string) {
  if (href === "/espacio-personal") {
    return PERSONAL_PATHS.some((p) => pathname === p || pathname.startsWith(`${p}/`));
  }
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function SiteHeader() {
  const pathname = usePathname();
  const router = useRouter();
  const { t, lang, setLang } = useI18n();
  const { user, signOut } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);

  // Ferme le menu mobile a chaque changement de page (sinon il reste
  // ouvert par-dessus la nouvelle page apres un clic sur un lien).
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const authControl = user ? (
    <button
      type="button"
      className="secondary"
      onClick={async () => {
        await signOut();
        router.push("/");
      }}
    >
      {t("auth.logout")}
    </button>
  ) : (
    <Link className="btn secondary" href="/login">
      {t("auth.login.submit")}
    </Link>
  );

  const langControl = (
    <div className="lang-toggle" role="group" aria-label="Langue / Idioma">
      <button type="button" className={lang === "fr" ? "active" : ""} onClick={() => setLang("fr")}>
        FR
      </button>
      <button type="button" className={lang === "es" ? "active" : ""} onClick={() => setLang("es")}>
        ES
      </button>
    </div>
  );

  return (
    <header id="site-header">
      <div className="container nav">
        <Link className="brand" href="/">
          Mon<span>Sport</span>&amp;Diète
        </Link>
        <nav className="nav-links">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={isActive(pathname, link.href) ? "active" : ""}
            >
              {t(link.labelKey)}
            </Link>
          ))}
        </nav>
        {langControl}
        {authControl}
        <button
          type="button"
          className="nav-toggle"
          aria-label={t("nav.toggleMenu")}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
      {menuOpen ? (
        <div className="nav-mobile-panel">
          <div className="container">
            <nav className="nav-mobile-links">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={isActive(pathname, link.href) ? "active" : ""}
                >
                  {t(link.labelKey)}
                </Link>
              ))}
            </nav>
            <div className="nav-mobile-actions">
              {langControl}
              {authControl}
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
