/* Générateur de programme.
   Construit un split d'entraînement (Full Body / Push-Pull-Legs /
   Upper-Lower) à partir du nombre de jours choisi, en piochant de vrais
   exercices dans EXERCISES selon les groupes musculaires ciblés par
   chaque jour. Ajoute aussi une orientation diète (kcal/macros) et des
   recettes de RECIPES selon l'objectif choisi.

   Rien n'est aléatoire : le choix des exercices est déterministe
   (glouton par couverture de muscles, puis tri alphabétique par id) afin
   que le même objectif + mêmes jours donnent toujours le même résultat.
   Un seul set "déjà utilisé" est partagé sur TOUT le programme généré
   (pas seulement par jour) pour éviter qu'un même exercice revienne sur
   plusieurs jours différents tant que d'autres options existent. */
(function () {
  const form = document.getElementById("programme-form");
  const daysSelect = document.getElementById("programme-days");
  const resultEl = document.getElementById("programme-result");
  if (!form) return;

  const DAY_MUSCLES = {
    push: ["pectoraux", "epaules", "triceps"],
    pull: ["dos", "biceps", "trapezes", "avant-bras"],
    legs: ["quadriceps", "ischios", "fessiers", "mollets", "adducteurs"],
    upper: ["pectoraux", "dos", "epaules", "biceps", "triceps", "trapezes", "avant-bras"],
    lower: ["quadriceps", "ischios", "fessiers", "mollets", "adducteurs"],
    fullA: ["pectoraux", "dos", "quadriceps", "epaules"],
    fullB: ["triceps", "biceps", "ischios", "fessiers", "mollets"]
  };
  const CORE_MUSCLES = ["abdominaux", "obliques", "lombaires"];

  const DAY_LABEL_KEY = {
    push: "programme.day.push",
    pull: "programme.day.pull",
    legs: "programme.day.legs",
    upper: "programme.day.upper",
    lower: "programme.day.lower",
    fullA: "programme.day.fullA",
    fullB: "programme.day.fullB"
  };

  const SPLITS = {
    2: ["fullA", "fullB"],
    3: ["push", "pull", "legs"],
    4: ["upper", "lower", "upper", "lower"],
    5: ["push", "pull", "legs", "upper", "lower"],
    6: ["push", "pull", "legs", "push", "pull", "legs"]
  };

  const GOAL_SCHEME = {
    volume: { sets: 4, reps: "8-12", rest: "90s", hold: "20-30s" },
    secher: { sets: 3, reps: "12-15", rest: "45s", hold: "20-30s" },
    maintien: { sets: 3, reps: "10-12", rest: "75s", hold: "15-25s" }
  };

  /* Exercices tenus en isométrie : on affiche une durée de maintien
     plutôt qu'un nombre de répétitions, plus honnête pour ce type de
     mouvement. */
  const HOLD_EXERCISES = new Set(["front-lever", "gainage-planche", "adducteurs-isometrique"]);

  /* Mouvements très avancés / de compétence (skill) qui, en pur score de
     couverture musculaire, gagnent presque toujours face à un exercice de
     base solide alors qu'ils ne sont pas un bon choix par défaut pour un
     programme généré automatiquement sans info sur le niveau de la
     personne (ex: front lever = tient, seul, la totalité des muscles du
     gainage → il "gagnait" systématiquement la place d'exercice abdos de
     CHAQUE jour, peu importe le split). On les garde dans la bibliothèque
     d'exercices et sur la carte musculaire (toujours cliquables/trouvables
     à la main), mais on les exclut du vivier du générateur automatique
     pour qu'il propose plutôt des mouvements de base (développé, squat,
     rowing, soulevé de terre...). */
  const AUTO_PICK_EXCLUDE = new Set(["front-lever", "squat-pistol", "leg-curl-nordique", "adducteurs-isometrique"]);

  /* Recettes groupées par type de repas (utilisé à la fois pour l'affichage
     des recettes suggérées et pour le générateur de liste de courses).
     Groupement basé sur le champ "category" français (stable), pas sur sa
     traduction affichée. */
  const BREAKFAST_RECIPES = RECIPES.filter(r => r.category === "Petit-déjeuner");
  const MEAL_RECIPES = RECIPES.filter(r => r.category === "Déjeuner / Dîner");
  const SNACK_RECIPES = RECIPES.filter(r => r.category.startsWith("Collation"));

  /* Sélection gloutonne : à chaque étape, choisit l'exercice qui couvre
     le plus de muscles cibles pas encore couverts (puis départage par id
     pour rester déterministe). Si le vivier non-utilisé s'épuise avant
     d'atteindre "count" (petits groupes musculaires sur un programme
     chargé), complète en réutilisant les meilleurs choix déjà pris
     ailleurs plutôt que de laisser le jour incomplet. */
  function pickExercises(targetMuscles, count, usedGlobal) {
    function scoredPool(respectUsed, allowAdvanced) {
      return EXERCISES.filter(
        e =>
          (allowAdvanced || !AUTO_PICK_EXCLUDE.has(e.id)) &&
          e.muscles.some(m => targetMuscles.includes(m)) &&
          (!respectUsed || !usedGlobal.has(e.id))
      );
    }

    const chosen = [];
    const chosenIds = new Set();
    const covered = new Set();

    function drawFrom(pool) {
      pool = pool.filter(e => !chosenIds.has(e.id));
      while (chosen.length < count && pool.length) {
        pool.sort((a, b) => {
          const scoreA = a.muscles.filter(m => targetMuscles.includes(m) && !covered.has(m)).length;
          const scoreB = b.muscles.filter(m => targetMuscles.includes(m) && !covered.has(m)).length;
          if (scoreB !== scoreA) return scoreB - scoreA;
          return a.id.localeCompare(b.id);
        });
        const pick = pool.shift();
        chosen.push(pick);
        chosenIds.add(pick.id);
        pick.muscles.forEach(m => covered.add(m));
      }
    }

    /* On privilégie toujours les exercices de base : d'abord sans les
       exclus et sans réutilisation, puis sans les exclus en autorisant la
       réutilisation, et seulement en dernier recours (vivier vraiment trop
       petit) on autorise les mouvements avancés — jamais avant. */
    drawFrom(scoredPool(true, false));
    if (chosen.length < count) drawFrom(scoredPool(false, false));
    if (chosen.length < count) drawFrom(scoredPool(true, true));
    if (chosen.length < count) drawFrom(scoredPool(false, true));

    chosen.forEach(e => usedGlobal.add(e.id));
    return chosen;
  }

  function buildDay(dayKey, usedGlobal, goal) {
    const targetMuscles = DAY_MUSCLES[dayKey];
    const mainExos = pickExercises(targetMuscles, 4, usedGlobal);
    const coreExos = pickExercises(CORE_MUSCLES, 1, usedGlobal);
    let allExos = mainExos.concat(coreExos);

    if (goal === "secher" && !allExos.some(e => e.id === "corde-a-sauter")) {
      const cardio = EXERCISES.find(e => e.id === "corde-a-sauter");
      if (cardio) allExos = allExos.concat(cardio);
    }

    return { dayKey, exos: allExos };
  }

  function schemeText(ex, scheme) {
    if (HOLD_EXERCISES.has(ex.id)) {
      return `${scheme.sets} × ${scheme.hold} — ${t("label.rest")} ${scheme.rest}`;
    }
    return `${scheme.sets} × ${scheme.reps} — ${t("label.rest")} ${scheme.rest}`;
  }

  function goalDietText(goal) {
    if (goal === "volume") return t("programme.diet.volume");
    if (goal === "secher") return t("programme.diet.secher");
    return t("programme.diet.maintien");
  }

  /* Petite vignette photo/icône par exercice, pour repérer le mouvement
     d'un coup d'œil dans la liste du jour sans avoir à cliquer dessus. */
  function exoThumb(ex) {
    const img = ex.photo
      ? `<img src="${ex.photo}" alt="${escapeHtml(tData(ex, "name"))}" onerror="this.remove()">`
      : "";
    return `<div class="exo-thumb">${ICONS.dumbbell}${img}</div>`;
  }

  /* Petits badges rappelant les groupes musculaires ciblés par le jour,
     pour comprendre le programme sans avoir à lire chaque exercice. */
  function muscleChips(muscleKeys) {
    return muscleKeys
      .map(key => {
        const info = MUSCLE_INFO[key];
        const label = info ? tData(info, "name") : key;
        return `<span class="tag">${escapeHtml(label)}</span>`;
      })
      .join("");
  }

  function render(goal, days) {
    const split = SPLITS[days];
    const usedGlobal = new Set();
    const scheme = GOAL_SCHEME[goal];

    const daysMarkup = split
      .map((dayKey, i) => {
        const { exos } = buildDay(dayKey, usedGlobal, goal);
        return `
          <div class="card-box programme-day">
            <div class="programme-day-head">
              <div class="programme-day-badge">${i + 1}</div>
              <div>
                <div class="programme-day-title">${t(DAY_LABEL_KEY[dayKey])}</div>
                <div class="programme-day-muscles">${muscleChips(DAY_MUSCLES[dayKey])}</div>
              </div>
            </div>
            ${exos
              .map(ex => `
                <div class="exo-row">
                  ${exoThumb(ex)}
                  <div class="exo-row-info">
                    <div class="name"><a href="exercice.html?id=${ex.id}">${escapeHtml(tData(ex, "name"))}</a></div>
                    <div class="scheme">${escapeHtml(tData(ex, "muscleGroup"))}</div>
                  </div>
                  <div class="scheme">${schemeText(ex, scheme)}</div>
                </div>
              `)
              .join("")}
          </div>
        `;
      })
      .join("");

    function recipeCard(r) {
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
    }

    /* Regroupées par type de repas (petit-déj / déjeuner-dîner / collation)
       plutôt qu'en un seul gros tas, pour rester lisible même quand le
       nombre de recettes du carnet augmente. Le groupement se base sur le
       champ "category" français (stable), pas sur sa traduction affichée. */
    function recipeGroup(titleKey, recipes) {
      if (!recipes.length) return "";
      return `
        <div class="programme-recipe-group">
          <div class="section-title programme-recipe-title">${t(titleKey)}</div>
          <div class="card-grid">${recipes.map(recipeCard).join("")}</div>
        </div>
      `;
    }

    const recipesMarkup =
      recipeGroup("programme.recipes.breakfast", BREAKFAST_RECIPES) +
      recipeGroup("programme.recipes.meals", MEAL_RECIPES) +
      recipeGroup("programme.recipes.snacks", SNACK_RECIPES);

    resultEl.innerHTML = `
      <div class="section-title">${t("programme.result.splitTitle", { n: days })}</div>
      <div class="programme-days">${daysMarkup}</div>

      <div class="section-title">${t("programme.result.dietTitle")}</div>
      <div class="card-box programme-diet-note">
        <div class="programme-diet-icon">${ICONS.fork}</div>
        <div>
          <p>${goalDietText(goal)}</p>
          <p class="map-info-empty-exo">${t("programme.diet.disclaimer")}</p>
        </div>
      </div>
      ${recipesMarkup}
    `;
  }

  form.addEventListener("submit", e => {
    e.preventDefault();
    const goal = form.querySelector('input[name="goal"]:checked').value;
    const days = Number(daysSelect.value);
    render(goal, days);
    resultEl.scrollIntoView({ behavior: "smooth", block: "start" });
  });

  /* Génère un premier résultat par défaut au chargement (3 jours / volume). */
  render("volume", 3);

  /* ---------------- LISTE DE COURSES ----------------
     À partir du nombre de jours choisi, répartit une recette petit-déj +
     déjeuner + dîner + collation par jour (en tournant dans chaque vivier
     de recettes pour varier, de façon déterministe), puis additionne tous
     les ingrédients de toutes ces recettes en une seule liste groupée par
     catégorie (Protéine / Glucide / Légume / Lipide). */
  const shoppingForm = document.getElementById("shopping-form");
  const shoppingDaysSelect = document.getElementById("shopping-days");
  const shoppingResultEl = document.getElementById("shopping-result");

  function pickCycle(pool, index) {
    if (!pool.length) return null;
    return pool[index % pool.length];
  }

  function buildWeekPlan(days) {
    const plan = [];
    let mealCursor = 0;
    for (let i = 0; i < days; i++) {
      const breakfast = pickCycle(BREAKFAST_RECIPES, i);
      const lunch = pickCycle(MEAL_RECIPES, mealCursor++);
      const dinner = pickCycle(MEAL_RECIPES, mealCursor++);
      const snack = pickCycle(SNACK_RECIPES, i);
      plan.push({ day: i + 1, breakfast, lunch, dinner, snack });
    }
    return plan;
  }

  function aggregateIngredients(plan) {
    const totals = new Map();
    plan.forEach(day => {
      [day.breakfast, day.lunch, day.dinner, day.snack].forEach(recipe => {
        if (!recipe) return;
        recipe.ingredients.forEach(line => {
          totals.set(line.ingredientId, (totals.get(line.ingredientId) || 0) + line.grams);
        });
      });
    });
    return totals;
  }

  function formatQty(grams) {
    const rounded = Math.round(grams);
    if (rounded >= 1000) return (Math.round(rounded / 100) / 10) + " kg";
    return rounded + " g";
  }

  function dayPreviewRow(day) {
    const parts = [
      day.breakfast ? `${t("label.breakfast")} : ${tData(day.breakfast, "name")}` : null,
      day.lunch ? `${t("label.lunch")} : ${tData(day.lunch, "name")}` : null,
      day.dinner ? `${t("label.dinner")} : ${tData(day.dinner, "name")}` : null,
      day.snack ? `${t("label.snack")} : ${tData(day.snack, "name")}` : null
    ].filter(Boolean);
    return `
      <div class="exo-row">
        <div class="exo-row-info">
          <div class="name">${t("programme.shopping.dayN", { n: day.day })}</div>
          <div class="scheme">${escapeHtml(parts.join(" · "))}</div>
        </div>
      </div>
    `;
  }

  function shoppingListMarkup(totals) {
    const byCategory = {};
    totals.forEach((grams, id) => {
      const ing = findById(INGREDIENTS, id);
      if (!ing) return;
      if (!byCategory[ing.category]) byCategory[ing.category] = [];
      byCategory[ing.category].push({ ing, grams });
    });

    const catOrder = ["Protéine", "Glucide", "Légume", "Lipide"];
    return catOrder
      .filter(cat => byCategory[cat] && byCategory[cat].length)
      .map(cat => {
        const items = byCategory[cat].sort((a, b) => tData(a.ing, "name").localeCompare(tData(b.ing, "name")));
        return `
          <div class="programme-recipe-group">
            <div class="section-title programme-recipe-title">${escapeHtml(tData(items[0].ing, "category"))}</div>
            <div class="table-scroll">
              <table class="ingredient-table shopping-table">
                <tbody>
                  ${items
                    .map(
                      item => `
                        <tr>
                          <td><a href="ingredient.html?id=${item.ing.id}">${escapeHtml(tData(item.ing, "name"))}</a></td>
                          <td>${formatQty(item.grams)}</td>
                        </tr>
                      `
                    )
                    .join("")}
                </tbody>
              </table>
            </div>
          </div>
        `;
      })
      .join("");
  }

  function renderShopping(days) {
    if (!BREAKFAST_RECIPES.length && !MEAL_RECIPES.length && !SNACK_RECIPES.length) {
      shoppingResultEl.innerHTML = `<p class="empty-state">${t("programme.shopping.emptyRecipes")}</p>`;
      return;
    }

    const plan = buildWeekPlan(days);
    const totals = aggregateIngredients(plan);
    const listMarkup = shoppingListMarkup(totals);

    shoppingResultEl.innerHTML = `
      <div class="section-title programme-recipe-title">${t("programme.shopping.weekTitle")}</div>
      <div class="card-box">${plan.map(dayPreviewRow).join("")}</div>

      <div class="section-title programme-recipe-title">${t("programme.shopping.listTitle")}</div>
      ${listMarkup || `<p class="empty-state">${t("programme.shopping.emptyRecipes")}</p>`}
    `;
  }

  if (shoppingForm) {
    shoppingForm.addEventListener("submit", e => {
      e.preventDefault();
      renderShopping(Number(shoppingDaysSelect.value));
      shoppingResultEl.scrollIntoView({ behavior: "smooth", block: "start" });
    });

    /* Génère une première liste par défaut au chargement (7 jours). */
    renderShopping(7);
  }
})();
