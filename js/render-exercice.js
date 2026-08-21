(function () {
  const id = qs("id");
  const ex = findById(EXERCISES, id);
  const root = document.getElementById("exercise-content");

  if (!ex) {
    root.innerHTML = `<p class="empty-state">${t("exercice.notFound")} <a href="exercices.html">${t("action.backToExercices")}</a>.</p>`;
    return;
  }

  root.innerHTML = `
    <div class="breadcrumb"><a href="sport.html">${t("nav.sport")}</a> / <a href="exercices.html">${t("breadcrumb.exercices")}</a> / ${escapeHtml(tData(ex, "name"))}</div>
    <div class="page-header">
      <span class="badge-difficulty">${escapeHtml(difficultyLabel(ex.difficulty))}</span>
      <h1>${escapeHtml(tData(ex, "name"))}</h1>
      <p>${escapeHtml(tData(ex, "muscleGroup"))}</p>
    </div>

    <div class="detail-photo">${photoOrPlaceholder(ex.photo, "dumbbell", tData(ex, "name"))}</div>

    <div class="section-title">${t("section.video")}</div>
    <div class="detail-photo">${videoOrPlaceholder(ex.video)}</div>

    <div class="section-title">${t("section.execution")}</div>
    <ol class="steps-list">
      ${tData(ex, "description").map(s => `<li>${escapeHtml(s)}</li>`).join("")}
    </ol>

    ${ex.tips ? `<div class="card-box"><strong>${t("section.tips")}</strong> ${escapeHtml(tData(ex, "tips"))}</div>` : ""}

    ${(ex.progressionPrev || ex.progressionNext) ? `
      <div class="section-title">${t("section.progressions")}</div>
      <div class="macro-row">
        ${ex.progressionPrev ? `<div class="macro-pill"><div class="label">${t("label.before")}</div><div class="value" style="font-size:0.95rem">${escapeHtml(tData(ex, "progressionPrev"))}</div></div>` : ""}
        ${ex.progressionNext ? `<div class="macro-pill"><div class="label">${t("label.after")}</div><div class="value" style="font-size:0.95rem">${escapeHtml(tData(ex, "progressionNext"))}</div></div>` : ""}
      </div>
    ` : ""}

    <div class="section-title">${t("section.trackingWeightReps")}</div>
    <form class="log-form" id="exo-log-form">
      <div class="field">
        <label for="exo-date">${t("field.date")}</label>
        <input type="date" id="exo-date" required>
      </div>
      <div class="field">
        <label for="exo-weight">${t("field.weight")}</label>
        <input type="number" id="exo-weight" step="0.5" min="0" placeholder="${t("placeholder.weightBodyweight")}">
      </div>
      <div class="field">
        <label for="exo-sets">${t("field.sets")}</label>
        <input type="number" id="exo-sets" min="1" placeholder="${t("placeholder.sets")}">
      </div>
      <div class="field">
        <label for="exo-reps">${t("field.reps")}</label>
        <input type="text" id="exo-reps" placeholder="${t("placeholder.reps")}">
      </div>
      <div class="field grow">
        <label for="exo-note">${t("field.note")}</label>
        <input type="text" id="exo-note" placeholder="${t("placeholder.exoNote")}">
      </div>
      <button type="submit">${t("btn.add")}</button>
    </form>
    <div id="exo-log-list"></div>
  `;

  document.getElementById("exo-date").value = todayISO();

  function renderLogs() {
    const logs = getExerciseLogs(ex.id);
    const listEl = document.getElementById("exo-log-list");
    if (logs.length === 0) {
      listEl.innerHTML = `<p class="empty-state">${t("empty.sessionsForExercise")}</p>`;
      return;
    }
    listEl.innerHTML = `
      <div class="table-scroll">
        <table class="log-table">
          <thead><tr><th>${t("th.date")}</th><th>${t("th.weight")}</th><th>${t("th.sets")}</th><th>${t("th.reps")}</th><th>${t("th.note")}</th><th></th></tr></thead>
          <tbody>
            ${logs.map((l, i) => `
              <tr>
                <td>${l.date}</td>
                <td>${l.weight ? l.weight + " kg" : t("label.bodyweight")}</td>
                <td>${l.sets || "—"}</td>
                <td>${escapeHtml(l.reps || "—")}</td>
                <td>${escapeHtml(l.note || "—")}</td>
                <td><button class="danger-link" data-index="${i}">${t("btn.delete")}</button></td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </div>
    `;
    listEl.querySelectorAll("button[data-index]").forEach(btn => {
      btn.addEventListener("click", () => {
        deleteExerciseLog(ex.id, Number(btn.dataset.index));
        renderLogs();
      });
    });
  }

  document.getElementById("exo-log-form").addEventListener("submit", e => {
    e.preventDefault();
    addExerciseLog(ex.id, {
      date: document.getElementById("exo-date").value || todayISO(),
      weight: Number(document.getElementById("exo-weight").value) || 0,
      sets: Number(document.getElementById("exo-sets").value) || 0,
      reps: document.getElementById("exo-reps").value.trim(),
      note: document.getElementById("exo-note").value.trim()
    });
    ["exo-weight", "exo-sets", "exo-reps", "exo-note"].forEach(f => document.getElementById(f).value = "");
    renderLogs();
  });

  renderLogs();
})();
