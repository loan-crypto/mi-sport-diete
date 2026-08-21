/* Injecte le header et le footer communs sur chaque page.
   Le lien actif est déterminé par l'attribut data-nav du <body>. */

/* Repère de version affiché dans le pied de page — utile pour vérifier
   en un coup d'œil que tu regardes bien la dernière version du site après
   avoir remplacé les fichiers (si ce numéro ne bouge pas après une mise à
   jour, c'est que ton navigateur affiche encore une ancienne copie). */
const SITE_VERSION = "v15 — 20/08/2026";

(function () {
  const active = document.body.getAttribute("data-nav") || "";

  const links = [
    { key: "accueil", href: "index.html", labelKey: "nav.accueil" },
    { key: "diete", href: "diete.html", labelKey: "nav.diete" },
    { key: "sport", href: "sport.html", labelKey: "nav.sport" },
    { key: "programme", href: "programme.html", labelKey: "nav.programme" },
    { key: "progression", href: "progression.html", labelKey: "nav.progression" },
    { key: "journal", href: "journal.html", labelKey: "nav.journal" }
  ];

  const nav = links
    .map(
      l =>
        `<a href="${l.href}" class="${l.key === active ? "active" : ""}">${t(l.labelKey)}</a>`
    )
    .join("");

  const currentLang = getLang();
  const langToggle = `
    <div class="lang-toggle" role="group" aria-label="Langue / Idioma">
      <button type="button" data-lang="fr" class="${currentLang === "fr" ? "active" : ""}">FR</button>
      <button type="button" data-lang="es" class="${currentLang === "es" ? "active" : ""}">ES</button>
    </div>
  `;

  const headerEl = document.getElementById("site-header");
  if (headerEl) {
    headerEl.innerHTML = `
      <div class="container nav">
        <a class="brand" href="index.html">Mon<span>Sport</span>&amp;Diète</a>
        <nav class="nav-links">${nav}</nav>
        ${langToggle}
      </div>
    `;
    headerEl.querySelectorAll(".lang-toggle button").forEach(btn => {
      btn.addEventListener("click", () => setLang(btn.getAttribute("data-lang")));
    });
  }

  const footerEl = document.getElementById("site-footer");
  if (footerEl) {
    footerEl.innerHTML = `
      <div class="container">${t("footer.tagline")} · <span style="opacity:0.6">${SITE_VERSION}</span></div>
    `;
  }
})();
