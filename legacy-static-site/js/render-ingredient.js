(function () {
  const id = qs("id");
  const ing = findById(INGREDIENTS, id);
  const root = document.getElementById("ingredient-content");

  if (!ing) {
    root.innerHTML = `<p class="empty-state">${t("ingredient.notFound")} <a href="diete.html">${t("action.backToDiet")}</a>.</p>`;
    return;
  }

  const qualityClass = ing.quality === "bon" ? "good" : ing.quality === "mauvais" ? "bad" : "neutral";

  const usedIn = RECIPES.filter(r => r.ingredients.some(l => l.ingredientId === ing.id));

  root.innerHTML = `
    <div class="breadcrumb"><a href="diete.html">${t("nav.diete")}</a> / ${escapeHtml(tData(ing, "name"))}</div>
    <div class="page-header">
      <span class="tag">${escapeHtml(tData(ing, "category"))}</span>
      <h1>${escapeHtml(tData(ing, "name"))}</h1>
      <p><span class="tag ${qualityClass}" style="margin-top:6px">${qualityLabel(ing.quality)}</span></p>
    </div>

    <div class="macro-row">
      <div class="macro-pill kcal"><div class="value">${ing.calories100}</div><div class="label">${t("macro.kcalPer100")}</div></div>
      <div class="macro-pill protein"><div class="value">${ing.protein100}g</div><div class="label">${t("macro.proteinPer100")}</div></div>
      <div class="macro-pill carbs"><div class="value">${ing.carbs100}g</div><div class="label">${t("macro.carbsPer100")}</div></div>
      <div class="macro-pill fat"><div class="value">${ing.fat100}g</div><div class="label">${t("macro.fatPer100")}</div></div>
    </div>

    <div class="section-title">${t("section.goodBad")}</div>
    <div class="card-box">${escapeHtml(tData(ing, "notes"))}</div>

    ${usedIn.length > 0 ? `
      <div class="section-title">${t("section.usedIn")}</div>
      <div class="card-grid">
        ${usedIn.map(r => `
          <a class="card" href="recette.html?id=${r.id}">
            <div class="thumb">${photoOrPlaceholder(r.photo, "fork", tData(r, "name"))}</div>
            <div class="body"><h3>${escapeHtml(tData(r, "name"))}</h3></div>
          </a>
        `).join("")}
      </div>
    ` : ""}
  `;
})();
