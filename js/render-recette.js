(function () {
  const id = qs("id");
  const recipe = findById(RECIPES, id);
  const root = document.getElementById("recipe-content");

  if (!recipe) {
    root.innerHTML = `<p class="empty-state">${t("recipe.notFound")} <a href="diete.html">${t("action.backToDiet")}</a>.</p>`;
    return;
  }

  const totals = computeRecipeTotals(recipe);
  const ingredientsTitle = t(recipe.servings > 1 ? "section.ingredientsForPlural" : "section.ingredientsFor", { n: recipe.servings });

  root.innerHTML = `
    <div class="breadcrumb"><a href="diete.html">${t("nav.diete")}</a> / ${escapeHtml(tData(recipe, "name"))}</div>
    <div class="page-header">
      <span class="tag">${escapeHtml(tData(recipe, "category"))}</span>
      <h1>${escapeHtml(tData(recipe, "name"))}</h1>
    </div>

    <div class="detail-photo">${photoOrPlaceholder(recipe.photo, "fork", tData(recipe, "name"))}</div>

    <div class="macro-row">
      <div class="macro-pill kcal"><div class="value">${totals.calories}</div><div class="label">${t("macro.kcal")}</div></div>
      <div class="macro-pill protein"><div class="value">${totals.protein}g</div><div class="label">${t("macro.protein")}</div></div>
      <div class="macro-pill carbs"><div class="value">${totals.carbs}g</div><div class="label">${t("macro.carbs")}</div></div>
      <div class="macro-pill fat"><div class="value">${totals.fat}g</div><div class="label">${t("macro.fat")}</div></div>
    </div>

    <div class="section-title">${ingredientsTitle}</div>
    <div class="table-scroll">
      <table class="ingredient-table">
        <thead><tr><th>${t("th.ingredient")}</th><th>${t("th.quantity")}</th><th>${t("th.quality")}</th></tr></thead>
        <tbody>
          ${recipe.ingredients.map(line => {
            const ing = findById(INGREDIENTS, line.ingredientId);
            if (!ing) return "";
            return `
              <tr>
                <td><a href="ingredient.html?id=${ing.id}">${escapeHtml(tData(ing, "name"))}</a></td>
                <td>${line.grams} g</td>
                <td><span class="tag ${ing.quality === 'bon' ? 'good' : ing.quality === 'mauvais' ? 'bad' : 'neutral'}">${qualityLabel(ing.quality)}</span></td>
              </tr>
            `;
          }).join("")}
        </tbody>
      </table>
    </div>

    <div class="section-title">${t("section.preparation")}</div>
    <ol class="steps-list">
      ${tData(recipe, "steps").map(s => `<li>${escapeHtml(s)}</li>`).join("")}
    </ol>

    ${recipe.notes ? `<div class="card-box">${escapeHtml(tData(recipe, "notes"))}</div>` : ""}

    <div class="section-title">${t("section.mealLog")}</div>
    <form class="log-form" id="meal-log-form">
      <div class="field">
        <label for="meal-date">${t("field.date")}</label>
        <input type="date" id="meal-date" required>
      </div>
      <div class="field grow">
        <label for="meal-note">${t("field.noteOptional")}</label>
        <input type="text" id="meal-note" placeholder="${t("placeholder.mealNote")}">
      </div>
      <button type="submit">${t("btn.add")}</button>
    </form>
    <div id="meal-log-list"></div>
  `;

  document.getElementById("meal-date").value = todayISO();

  function renderLogs() {
    const logs = getMealLogs(recipe.id);
    const listEl = document.getElementById("meal-log-list");
    if (logs.length === 0) {
      listEl.innerHTML = `<p class="empty-state">${t("empty.mealLogsForRecipe")}</p>`;
      return;
    }
    listEl.innerHTML = `
      <div class="table-scroll">
        <table class="log-table">
          <thead><tr><th>${t("th.date")}</th><th>${t("th.note")}</th><th></th></tr></thead>
          <tbody>
            ${logs.map((l, i) => `
              <tr>
                <td>${l.date}</td>
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
        deleteMealLog(recipe.id, Number(btn.dataset.index));
        renderLogs();
      });
    });
  }

  document.getElementById("meal-log-form").addEventListener("submit", e => {
    e.preventDefault();
    addMealLog(recipe.id, {
      date: document.getElementById("meal-date").value || todayISO(),
      note: document.getElementById("meal-note").value.trim()
    });
    document.getElementById("meal-note").value = "";
    renderLogs();
  });

  renderLogs();
})();
