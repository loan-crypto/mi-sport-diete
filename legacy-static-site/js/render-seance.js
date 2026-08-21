(function () {
  const id = qs("id");
  const session = findById(SESSIONS, id);
  const root = document.getElementById("session-content");

  if (!session) {
    root.innerHTML = `<p class="empty-state">${t("seance.notFound")} <a href="seances.html">${t("action.backToSeances")}</a>.</p>`;
    return;
  }

  root.innerHTML = `
    <div class="breadcrumb"><a href="sport.html">${t("nav.sport")}</a> / <a href="seances.html">${t("breadcrumb.seances")}</a> / ${escapeHtml(tData(session, "name"))}</div>
    <div class="page-header">
      <span class="tag">${escapeHtml(tData(session, "day"))}</span>
      <h1>${escapeHtml(tData(session, "name"))}</h1>
    </div>

    ${session.notes ? `<div class="card-box">${escapeHtml(tData(session, "notes"))}</div>` : ""}

    <div class="section-title">${t("section.exercises")}</div>
    <div class="card-box">
      ${session.exercises.map(line => {
        const ex = findById(EXERCISES, line.exerciseId);
        if (!ex) return "";
        const img = ex.photo
          ? `<img src="${ex.photo}" alt="${escapeHtml(tData(ex, "name"))}" onerror="this.remove()">`
          : "";
        return `
          <div class="exo-row">
            <div class="exo-thumb">${ICONS.dumbbell}${img}</div>
            <div class="exo-row-info">
              <div class="name"><a href="exercice.html?id=${ex.id}">${escapeHtml(tData(ex, "name"))}</a></div>
              <div class="scheme">${escapeHtml(tData(ex, "muscleGroup"))}</div>
            </div>
            <div class="scheme">${line.sets} × ${escapeHtml(String(line.reps))} — ${t("label.rest")} ${escapeHtml(line.rest)}</div>
          </div>
        `;
      }).join("")}
    </div>
  `;
})();
