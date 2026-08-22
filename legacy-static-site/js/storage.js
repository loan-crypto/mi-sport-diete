/* ============================================================
   SUIVI / TRACKING (localStorage)
   ------------------------------------------------------------
   Toutes les entrées de suivi (poids/reps utilisés sur un exo,
   repas mangés) sont sauvegardées dans le localStorage de TON
   navigateur. C'est propre à cet ordinateur/navigateur : si tu
   changes d'appareil ou de navigateur, l'historique ne suit pas
   automatiquement (voir README pour exporter/importer).
   ============================================================ */

const STORAGE_PREFIX = "mysportsite_";

function _readLog(key) {
  try {
    const raw = localStorage.getItem(STORAGE_PREFIX + key);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    console.error("Erreur de lecture du suivi :", e);
    return [];
  }
}

function _writeLog(key, entries) {
  localStorage.setItem(STORAGE_PREFIX + key, JSON.stringify(entries));
}

/* ---- Suivi des exercices (poids / reps utilisés) ---- */
function getExerciseLogs(exerciseId) {
  return _readLog("exo_" + exerciseId).sort((a, b) => b.date.localeCompare(a.date));
}

function addExerciseLog(exerciseId, entry) {
  const logs = _readLog("exo_" + exerciseId);
  logs.push(entry);
  _writeLog("exo_" + exerciseId, logs);
}

function deleteExerciseLog(exerciseId, index) {
  const logs = getExerciseLogs(exerciseId);
  logs.splice(index, 1);
  _writeLog("exo_" + exerciseId, logs);
}

/* ---- Suivi des repas mangés ---- */
function getMealLogs(recipeId) {
  return _readLog("recette_" + recipeId).sort((a, b) => b.date.localeCompare(a.date));
}

function addMealLog(recipeId, entry) {
  const logs = _readLog("recette_" + recipeId);
  logs.push(entry);
  _writeLog("recette_" + recipeId, logs);
}

function deleteMealLog(recipeId, index) {
  const logs = getMealLogs(recipeId);
  logs.splice(index, 1);
  _writeLog("recette_" + recipeId, logs);
}

/* ---- Agrégation pour la page Journal ---- */
function getAllExerciseLogs() {
  const all = [];
  EXERCISES.forEach(ex => {
    getExerciseLogs(ex.id).forEach(entry => {
      all.push({ ...entry, exerciseId: ex.id, exerciseName: ex.name, type: "exercice" });
    });
  });
  return all.sort((a, b) => b.date.localeCompare(a.date));
}

function getAllMealLogs() {
  const all = [];
  RECIPES.forEach(r => {
    getMealLogs(r.id).forEach(entry => {
      all.push({ ...entry, recipeId: r.id, recipeName: r.name, type: "recette" });
    });
  });
  return all.sort((a, b) => b.date.localeCompare(a.date));
}

/* ---- Export / Import complet (sauvegarde de secours) ---- */
function exportAllLogs() {
  const dump = {};
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key.startsWith(STORAGE_PREFIX)) {
      dump[key] = JSON.parse(localStorage.getItem(key));
    }
  }
  return dump;
}

function importAllLogs(dump) {
  Object.keys(dump).forEach(key => {
    if (key.startsWith(STORAGE_PREFIX)) {
      localStorage.setItem(key, JSON.stringify(dump[key]));
    }
  });
}

/* ---- Photos de progression physique (stockées en base64 dans localStorage) ---- */
function getProgressPhotos() {
  return _readLog("progress_photos").sort((a, b) => b.date.localeCompare(a.date));
}

function addProgressPhoto(entry) {
  const logs = _readLog("progress_photos");
  logs.push(entry);
  _writeLog("progress_photos", logs);
}

function deleteProgressPhoto(index) {
  const logs = getProgressPhotos();
  logs.splice(index, 1);
  _writeLog("progress_photos", logs);
}

function todayISO() {
  const d = new Date();
  const pad = n => String(n).padStart(2, "0");
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
}
