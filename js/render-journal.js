(function () {
  const content = document.getElementById("journal-content");
  const tabExo = document.getElementById("tab-exo");
  const tabMeal = document.getElementById("tab-meal");

  function renderExoTab() {
    tabExo.classList.add("active");
    tabMeal.classList.remove("active");
    const logs = getAllExerciseLogs();
    if (logs.length === 0) {
      content.innerHTML = `<p class="empty-state">${t("empty.noTrainings")}</p>`;
      return;
    }
    content.innerHTML = `
      <div class="table-scroll">
        <table class="log-table">
          <thead><tr><th>${t("th.date")}</th><th>${t("th.exercise")}</th><th>${t("th.weight")}</th><th>${t("th.sets")}</th><th>${t("th.reps")}</th><th>${t("th.note")}</th></tr></thead>
          <tbody>
            ${logs.map(l => `
              <tr>
                <td>${l.date}</td>
                <td><a href="exercice.html?id=${l.exerciseId}">${escapeHtml(l.exerciseName)}</a></td>
                <td>${l.weight ? l.weight + " kg" : t("label.bodyweight")}</td>
                <td>${l.sets || "—"}</td>
                <td>${escapeHtml(l.reps || "—")}</td>
                <td>${escapeHtml(l.note || "—")}</td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </div>
    `;
  }

  function renderMealTab() {
    tabMeal.classList.add("active");
    tabExo.classList.remove("active");
    const logs = getAllMealLogs();
    if (logs.length === 0) {
      content.innerHTML = `<p class="empty-state">${t("empty.noMeals")}</p>`;
      return;
    }
    content.innerHTML = `
      <div class="table-scroll">
        <table class="log-table">
          <thead><tr><th>${t("th.date")}</th><th>${t("th.recipe")}</th><th>${t("th.note")}</th></tr></thead>
          <tbody>
            ${logs.map(l => `
              <tr>
                <td>${l.date}</td>
                <td><a href="recette.html?id=${l.recipeId}">${escapeHtml(l.recipeName)}</a></td>
                <td>${escapeHtml(l.note || "—")}</td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </div>
    `;
  }

  tabExo.addEventListener("click", renderExoTab);
  tabMeal.addEventListener("click", renderMealTab);
  renderExoTab();

  document.getElementById("export-btn").addEventListener("click", () => {
    const dump = exportAllLogs();
    const blob = new Blob([JSON.stringify(dump, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "mon-suivi-" + todayISO() + ".json";
    a.click();
    URL.revokeObjectURL(url);
  });

  document.getElementById("import-input").addEventListener("change", e => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      try {
        const dump = JSON.parse(reader.result);
        importAllLogs(dump);
        alert(t("alert.importSuccess"));
        renderExoTab();
      } catch (err) {
        alert(t("alert.importError"));
      }
    };
    reader.readAsText(file);
  });
})();
