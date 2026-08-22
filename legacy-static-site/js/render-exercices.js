(function () {
  const grid = document.getElementById("exercise-grid");
  const filterBar = document.getElementById("exercise-filter");
  const muscleKey = qs("muscle");

  let list = EXERCISES;
  if (muscleKey) {
    list = EXERCISES.filter(ex => Array.isArray(ex.muscles) && ex.muscles.includes(muscleKey));
    const info = MUSCLE_INFO[muscleKey];
    const label = info ? tData(info, "name") : muscleKey;
    if (filterBar) {
      filterBar.innerHTML = `
        <span class="filter-chip">
          ${t("filter.byMuscle")} <strong>${escapeHtml(label)}</strong>
          <a href="exercices.html" aria-label="✕">✕</a>
        </span>
      `;
    }
  }

  if (!list.length) {
    grid.innerHTML = `<p class="map-info-empty-exo">${t("empty.noExerciseForMuscle")}</p>`;
    return;
  }

  grid.innerHTML = list.map(ex => `
    <a class="card" href="exercice.html?id=${ex.id}">
      <div class="thumb">${photoOrPlaceholder(ex.photo, "dumbbell", tData(ex, "name"))}</div>
      <div class="body">
        <span class="tag">${escapeHtml(tData(ex, "muscleGroup"))}</span>
        <h3>${escapeHtml(tData(ex, "name"))}</h3>
        <div class="meta">${escapeHtml(difficultyLabel(ex.difficulty))}</div>
      </div>
    </a>
  `).join("");
})();
