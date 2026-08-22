/* Carte musculaire interactive.
   Affiche tes propres photos (face / dos) avec des points cliquables
   ("flèches") positionnés en pourcentage sur chaque groupe musculaire.
   Cliquer un point affiche le nom + le rôle du muscle, et propose les
   exercices qui le travaillent (via le champ "muscles" de chaque exercice
   dans data.js).

   Les positions des points sont exprimées en % (left/top) par rapport à
   la photo, pour rester bien alignées quelle que soit la taille d'écran.
   Si tu changes les photos dans images/body/, il suffira d'ajuster ces
   pourcentages pour recaler les points sur la nouvelle image. */
(function () {
  const DOTS = {
    front: [
      { muscle: "epaules", x: 20.9, y: 19.5 },
      { muscle: "epaules", x: 77.2, y: 19.5 },
      { muscle: "pectoraux", x: 49.7, y: 23.5 },
      { muscle: "abdominaux", x: 49.7, y: 32.0 },
      { muscle: "obliques", x: 30.8, y: 33.0 },
      { muscle: "obliques", x: 68.5, y: 33.0 },
      { muscle: "biceps", x: 15.2, y: 25.8 },
      { muscle: "biceps", x: 84.1, y: 25.8 },
      { muscle: "avant-bras", x: 10.6, y: 40.0 },
      { muscle: "avant-bras", x: 88.7, y: 40.0 },
      { muscle: "adducteurs", x: 49.7, y: 53.5 },
      { muscle: "vasto-lateral", x: 26.0, y: 56.0 },
      { muscle: "vasto-lateral", x: 74.0, y: 56.0 },
      { muscle: "recto-femoral", x: 35.8, y: 58.0 },
      { muscle: "recto-femoral", x: 64.2, y: 58.0 },
      { muscle: "vasto-medial", x: 42.0, y: 64.0 },
      { muscle: "vasto-medial", x: 58.0, y: 64.0 }
    ],
    back: [
      { muscle: "trapezes", x: 49.7, y: 15.5 },
      { muscle: "epaules", x: 20.9, y: 18.0 },
      { muscle: "epaules", x: 77.2, y: 18.0 },
      { muscle: "dos", x: 31.5, y: 26.5 },
      { muscle: "dos", x: 67.9, y: 26.5 },
      { muscle: "lombaires", x: 49.7, y: 39.0 },
      { muscle: "triceps", x: 15.2, y: 25.5 },
      { muscle: "triceps", x: 84.1, y: 25.5 },
      { muscle: "avant-bras", x: 10.6, y: 41.0 },
      { muscle: "avant-bras", x: 88.7, y: 41.0 },
      { muscle: "fessiers", x: 49.7, y: 46.5 },
      { muscle: "biceps-femoral", x: 26.0, y: 56.0 },
      { muscle: "biceps-femoral", x: 74.0, y: 56.0 },
      { muscle: "semitendinoso", x: 40.0, y: 60.0 },
      { muscle: "semitendinoso", x: 60.0, y: 60.0 },
      { muscle: "semimembranoso", x: 44.0, y: 66.0 },
      { muscle: "semimembranoso", x: 56.0, y: 66.0 },
      { muscle: "mollets", x: 35.8, y: 71.5 },
      { muscle: "mollets", x: 64.2, y: 71.5 }
    ]
  };

  function buildDots(layerEl, view) {
    layerEl.innerHTML = DOTS[view]
      .map(
        d => `
        <button type="button" class="muscle-dot" data-muscle="${d.muscle}"
           style="left:${d.x}%;top:${d.y}%"
           aria-label="${escapeHtml(MUSCLE_INFO[d.muscle] ? tData(MUSCLE_INFO[d.muscle], "name") : d.muscle)}">
          <span class="muscle-dot-ring"></span>
          <span class="muscle-dot-core"></span>
        </button>`
      )
      .join("");
  }

  /* Le champ "group" (voir data.js) permet à une tête musculaire précise
     (ex: "vasto-lateral") de retomber sur les exercices tagués avec le
     groupe global (ex: "quadriceps"), sans avoir à retaguer tous les
     exercices existants. */
  function exercisesForMuscle(key) {
    const info = MUSCLE_INFO[key];
    const groupKey = info && info.group ? info.group : key;
    return EXERCISES.filter(
      ex => Array.isArray(ex.muscles) && (ex.muscles.includes(key) || ex.muscles.includes(groupKey))
    );
  }

  function showMuscle(key, view) {
    const info = MUSCLE_INFO[key];
    const panel = document.getElementById("map-info");
    if (!info || !panel) return;

    const groupKey = info.group || null;
    const exos = exercisesForMuscle(key);
    const exosMarkup = exos.length
      ? `<ul class="map-exo-list">
          ${exos
            .map(
              ex => `<li><a href="exercice.html?id=${ex.id}">${escapeHtml(tData(ex, "name"))}</a> <span class="meta">${escapeHtml(difficultyLabel(ex.difficulty))}</span></li>`
            )
            .join("")}
        </ul>`
      : `<p class="map-info-empty-exo">${t("empty.noExerciseForMuscle")}</p>`;

    const groupNote = groupKey && MUSCLE_INFO[groupKey]
      ? `<p class="map-info-group">${t("map.partOf", { group: escapeHtml(tData(MUSCLE_INFO[groupKey], "name")) })}</p>`
      : "";

    panel.innerHTML = `
      <span class="tag">${view === "front" ? t("label.face") : t("label.back")}</span>
      <h2>${escapeHtml(tData(info, "name"))}</h2>
      ${groupNote}
      <p>${escapeHtml(tData(info, "desc"))}</p>
      <a class="btn" href="exercices.html?muscle=${encodeURIComponent(groupKey || key)}">${t("map.viewAllForMuscle")}</a>
      <div class="map-exo-block">
        <h3>${t("map.exercisesInNotebook")}</h3>
        ${exosMarkup}
      </div>
    `;
  }

  function setActiveDot(container, target) {
    container.querySelectorAll(".muscle-dot.active").forEach(el => el.classList.remove("active"));
    if (target) target.classList.add("active");
  }

  function wireLayer(layerEl, view) {
    layerEl.addEventListener("click", e => {
      const dot = e.target.closest(".muscle-dot");
      if (!dot) return;
      setActiveDot(layerEl, dot);
      showMuscle(dot.getAttribute("data-muscle"), view);
    });
  }

  const frontLayer = document.getElementById("dots-front");
  const backLayer = document.getElementById("dots-back");
  const frontWrap = document.getElementById("body-front-wrap");
  const backWrap = document.getElementById("body-back-wrap");
  if (!frontLayer || !backLayer) return;

  buildDots(frontLayer, "front");
  buildDots(backLayer, "back");
  wireLayer(frontLayer, "front");
  wireLayer(backLayer, "back");

  document.querySelectorAll(".map-tab").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".map-tab").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const view = btn.getAttribute("data-view");
      frontWrap.style.display = view === "front" ? "" : "none";
      backWrap.style.display = view === "back" ? "" : "none";
    });
  });
})();
