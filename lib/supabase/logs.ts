/* CRUD del seguimiento (Journal) contra Supabase. Reemplaza
   getAllExerciseLogs/getAllMealLogs/addExerciseLog/... de
   legacy-static-site/js/storage.js — misma forma de datos, ahora en
   Postgres con RLS por user_id en vez de localStorage por navegador. */

import { supabase } from "./client";
import { EXERCISES, RECIPES } from "@/content";
import { findById } from "@/lib/format";

export interface ExerciseLog {
  id: string;
  exerciseId: string;
  exerciseName: string;
  date: string;
  weight: number | null;
  sets: number | null;
  reps: string | null;
  note: string | null;
}

export interface MealLog {
  id: string;
  recipeId: string;
  recipeName: string;
  date: string;
  note: string | null;
}

export async function getAllExerciseLogs(userId: string): Promise<ExerciseLog[]> {
  const { data, error } = await supabase
    .from("exercise_logs")
    .select("id, exercise_id, date, weight, sets, reps, note")
    .eq("user_id", userId)
    .order("date", { ascending: false });
  if (error || !data) return [];
  return data.map((row) => {
    const ex = findById(EXERCISES, row.exercise_id);
    return {
      id: row.id,
      exerciseId: row.exercise_id,
      exerciseName: ex?.name ?? row.exercise_id,
      date: row.date,
      weight: row.weight,
      sets: row.sets,
      reps: row.reps,
      note: row.note,
    };
  });
}

export async function getAllMealLogs(userId: string): Promise<MealLog[]> {
  const { data, error } = await supabase
    .from("meal_logs")
    .select("id, recipe_id, date, note")
    .eq("user_id", userId)
    .order("date", { ascending: false });
  if (error || !data) return [];
  return data.map((row) => {
    const r = findById(RECIPES, row.recipe_id);
    return {
      id: row.id,
      recipeId: row.recipe_id,
      recipeName: r?.name ?? row.recipe_id,
      date: row.date,
      note: row.note,
    };
  });
}

export async function getExerciseLogs(userId: string, exerciseId: string) {
  const { data } = await supabase
    .from("exercise_logs")
    .select("id, date, weight, sets, reps, note")
    .eq("user_id", userId)
    .eq("exercise_id", exerciseId)
    .order("date", { ascending: false });
  return data ?? [];
}

export async function addExerciseLog(
  userId: string,
  exerciseId: string,
  entry: { date: string; weight: number | null; sets: number | null; reps: string; note: string }
) {
  return supabase.from("exercise_logs").insert({ user_id: userId, exercise_id: exerciseId, ...entry });
}

export async function deleteExerciseLog(id: string) {
  return supabase.from("exercise_logs").delete().eq("id", id);
}

export async function getMealLogs(userId: string, recipeId: string) {
  const { data } = await supabase
    .from("meal_logs")
    .select("id, date, note")
    .eq("user_id", userId)
    .eq("recipe_id", recipeId)
    .order("date", { ascending: false });
  return data ?? [];
}

export async function addMealLog(userId: string, recipeId: string, entry: { date: string; note: string }) {
  return supabase.from("meal_logs").insert({ user_id: userId, recipe_id: recipeId, ...entry });
}

export async function deleteMealLog(id: string) {
  return supabase.from("meal_logs").delete().eq("id", id);
}

export function todayISO(): string {
  return new Date().toISOString().slice(0, 10);
}
