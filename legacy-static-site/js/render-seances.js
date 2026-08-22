(function () {
  const grid = document.getElementById("session-grid");
  grid.innerHTML = SESSIONS.map(s => `
    <a class="card" href="seance.html?id=${s.id}">
      <div class="icon-only-thumb">${ICONS.clipboard}</div>
      <div class="body">
        <span class="tag">${escapeHtml(tData(s, "day"))}</span>
        <h3>${escapeHtml(tData(s, "name"))}</h3>
        <div class="meta">${s.exercises.length} ${t(s.exercises.length > 1 ? "label.exercises" : "label.exercise")}</div>
      </div>
    </a>
  `).join("");
})();
