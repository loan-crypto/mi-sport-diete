(function () {
  const grid = document.getElementById("recipe-grid");

  grid.innerHTML = RECIPES.map(r => {
    const totals = computeRecipeTotals(r);
    return `
      <a class="card" href="recette.html?id=${r.id}">
        <div class="thumb">${photoOrPlaceholder(r.photo, "fork", tData(r, "name"))}</div>
        <div class="body">
          <span class="tag">${escapeHtml(tData(r, "category"))}</span>
          <h3>${escapeHtml(tData(r, "name"))}</h3>
          <div class="meta">${totals.calories} kcal · ${totals.protein} g prot.</div>
        </div>
      </a>
    `;
  }).join("");

  const list = document.getElementById("ingredient-list");
  list.innerHTML = `
    <div class="table-scroll">
      <table class="ingredient-table">
        <thead>
          <tr><th>${t("th.ingredient")}</th><th>${t("th.category")}</th><th>${t("th.kcalPer100")}</th><th>${t("th.proteinPer100")}</th><th>${t("th.quality")}</th></tr>
        </thead>
        <tbody>
          ${INGREDIENTS.map(i => `
            <tr>
              <td><a href="ingredient.html?id=${i.id}">${escapeHtml(tData(i, "name"))}</a></td>
              <td>${escapeHtml(tData(i, "category"))}</td>
              <td>${i.calories100}</td>
              <td>${i.protein100} g</td>
              <td><span class="tag ${i.quality === 'bon' ? 'good' : i.quality === 'mauvais' ? 'bad' : 'neutral'}">${qualityLabel(i.quality)}</span></td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>
  `;
})();
