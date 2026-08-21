const ICONS = {
  camera: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M4 8h3l1.5-2h7L17 8h3a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z"/><circle cx="12" cy="13" r="3.5"/></svg>`,
  dumbbell: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20 9h-2V7a1 1 0 0 0-1-1h-1a1 1 0 0 0-1 1v2H9V7a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v2H4a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h2v2a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-2h6v2a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-2h2a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1z"/></svg>`,
  fork: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M6 2a1 1 0 0 1 1 1v6.17a2 2 0 0 0 1 1.73V22a1 1 0 1 1-2 0v-11.1a2 2 0 0 0 1-1.73V3a1 1 0 0 1 1-1zM4 2a1 1 0 0 1 1 1v5a1 1 0 1 1-2 0V3a1 1 0 0 1 1-1zm4 0a1 1 0 0 1 1 1v5a1 1 0 1 1-2 0V3a1 1 0 0 1 1-1zM19 2c-2.2 0-4 2.24-4 5 0 2.05 1 3.81 2.5 4.58V22a1 1 0 1 0 2 0V11.58C20.99 10.81 22 9.05 22 7c0-2.76-1.8-5-3-5z"/></svg>`,
  chart: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M4 20a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4zm7 0a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v15a1 1 0 0 1-1 1h-2zm7 0a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1h-2z"/></svg>`,
  clipboard: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="4" width="14" height="17" rx="2"/><path d="M9 4V3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1"/><path d="M8 11h8M8 15h8M8 19h5"/></svg>`,
  play: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>`
};

function qs(name) {
  return new URLSearchParams(window.location.search).get(name);
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function findById(list, id) {
  return list.find(item => item.id === id);
}

/* Affiche la photo si le chemin existe (couche du dessus), avec en dessous
   un cadre "ajoute une photo" stylé qui réapparaît si l'image est manquante
   ou introuvable (onerror retire l'<img>). iconKey référence ICONS. */
function photoOrPlaceholder(photoPath, iconKey, altText) {
  const icon = ICONS[iconKey] || ICONS.camera;
  const placeholder = `
    <div class="photo-placeholder">
      ${icon}
      <span>${t("placeholder.addPhoto")}</span>
    </div>
  `;
  const img = photoPath
    ? `<img src="${photoPath}" alt="${escapeHtml(altText || "")}" onerror="this.remove()">`
    : "";
  return placeholder + img;
}

/* Même logique que photoOrPlaceholder, pour une vidéo de démonstration
   (fichier local dans videos/, ou lien direct vers un .mp4). */
function videoOrPlaceholder(videoPath) {
  const placeholder = `
    <div class="photo-placeholder">
      ${ICONS.play}
      <span>${t("placeholder.addVideo")}</span>
    </div>
  `;
  const video = videoPath
    ? `<video src="${videoPath}" controls preload="metadata" onerror="this.remove()"></video>`
    : "";
  return placeholder + video;
}

function round1(n) {
  return Math.round(n * 10) / 10;
}

/* Calcule les macros totales d'une recette à partir de ses ingrédients + grammages */
function computeRecipeTotals(recipe) {
  let calories = 0, protein = 0, carbs = 0, fat = 0;
  recipe.ingredients.forEach(line => {
    const ing = findById(INGREDIENTS, line.ingredientId);
    if (!ing) return;
    const factor = line.grams / 100;
    calories += ing.calories100 * factor;
    protein += ing.protein100 * factor;
    carbs += ing.carbs100 * factor;
    fat += ing.fat100 * factor;
  });
  return {
    calories: Math.round(calories),
    protein: round1(protein),
    carbs: round1(carbs),
    fat: round1(fat)
  };
}
