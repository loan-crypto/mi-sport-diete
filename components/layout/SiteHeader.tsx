"use client";

/* Portado de legacy-static-site/js/layout.js — antes inyectaba HTML a
   mano en #site-header, ahora es un componente React normal. El enlace
   activo se calcula desde el pathname en vez de un atributo data-nav. */

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
  { href: "/planificateur", labelKey: "nav.planificateur" },
  { href: "/progression", labelKey: "nav.progression" },
  { href: "/journal", labelKey: "nav.journal" },
];

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function SiteHeader() {
  const pathname = usePathname();
  const router = useRouter();
  const { t, lang, setLang } = useI18n();
  const { user, signOut } = useAuth();

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
        <div className="lang-toggle" role="group" aria-label="Langue / Idioma">
          <button
            type="button"
            className={lang === "fr" ? "active" : ""}
            onClick={() => setLang("fr")}
          >
            FR
          </button>
          <button
            type="button"
            className={lang === "es" ? "active" : ""}
            onClick={() => setLang("es")}
          >
            ES
          </button>
        </div>
        {user ? (
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
        )}
      </div>
    </header>
  );
}
