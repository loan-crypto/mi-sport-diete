/* Importa el .json exportado por el sitio anterior (boton "Exporter mes
   donnees" de legacy-static-site) hacia Supabase, para no perder el
   historial acumulado al migrar. Formato de entrada: el volcado de
   exportAllLogs() en legacy-static-site/js/storage.js — un objeto con
   TODAS las claves localStorage que empiezan por "mysportsite_". */

import { supabase } from "./client";

interface LegacyExerciseEntry {
  date: string;
  weight: number;
  sets: number;
  reps: string;
  note: string;
}

interface LegacyMealEntry {
  date: string;
  note: string;
}

interface LegacyProgressPhoto {
  date: string;
  weight: number;
  note: string;
  photo: string; // data: URL base64
}

export interface ImportResult {
  exerciseLogs: number;
  mealLogs: number;
  progressPhotos: number;
  errors: string[];
}

function dataUrlToBlob(dataUrl: string): Blob | null {
  const match = dataUrl.match(/^data:(.+?);base64,(.+)$/);
  if (!match) return null;
  const [, mime, base64] = match;
  const binary = atob(base64);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
  return new Blob([bytes], { type: mime });
}

export async function importLegacyDump(userId: string, dump: Record<string, unknown>): Promise<ImportResult> {
  const result: ImportResult = { exerciseLogs: 0, mealLogs: 0, progressPhotos: 0, errors: [] };

  for (const [key, value] of Object.entries(dump)) {
    if (key.startsWith("mysportsite_exo_") && Array.isArray(value)) {
      const exerciseId = key.slice("mysportsite_exo_".length);
      const entries = value as LegacyExerciseEntry[];
      const rows = entries.map((e) => ({
        user_id: userId,
        exercise_id: exerciseId,
        date: e.date,
        weight: e.weight || null,
        sets: e.sets || null,
        reps: e.reps || null,
        note: e.note || null,
      }));
      if (rows.length) {
        const { error } = await supabase.from("exercise_logs").insert(rows);
        if (error) result.errors.push(`${exerciseId}: ${error.message}`);
        else result.exerciseLogs += rows.length;
      }
    }

    if (key.startsWith("mysportsite_recette_") && Array.isArray(value)) {
      const recipeId = key.slice("mysportsite_recette_".length);
      const entries = value as LegacyMealEntry[];
      const rows = entries.map((e) => ({
        user_id: userId,
        recipe_id: recipeId,
        date: e.date,
        note: e.note || null,
      }));
      if (rows.length) {
        const { error } = await supabase.from("meal_logs").insert(rows);
        if (error) result.errors.push(`${recipeId}: ${error.message}`);
        else result.mealLogs += rows.length;
      }
    }

    if (key === "mysportsite_progress_photos" && Array.isArray(value)) {
      const photos = value as LegacyProgressPhoto[];
      for (const [i, p] of photos.entries()) {
        const blob = dataUrlToBlob(p.photo);
        if (!blob) continue;
        const path = `${userId}/${p.date}-${i}.jpg`;
        const { error: uploadError } = await supabase.storage
          .from("progress-photos")
          .upload(path, blob, { contentType: blob.type, upsert: true });
        if (uploadError) {
          result.errors.push(`foto ${p.date}: ${uploadError.message}`);
          continue;
        }
        const { error } = await supabase.from("progression_photos").insert({
          user_id: userId,
          date: p.date,
          weight: p.weight || null,
          note: p.note || null,
          photo_path: path,
        });
        if (error) result.errors.push(`foto ${p.date}: ${error.message}`);
        else result.progressPhotos += 1;
      }
    }

    if (key === "mysportsite_claude_api_key" && typeof value === "string" && value) {
      await supabase.from("chat_settings").upsert({ user_id: userId, api_key: value });
    }
  }

  return result;
}
