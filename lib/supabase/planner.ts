import { supabase } from "./client";

export type Slot = "breakfast" | "lunch" | "dinner" | "snack" | "session";
export type RefType = "recipe" | "session";

export interface PlannerEntry {
  id: string;
  date: string;
  slot: Slot;
  refType: RefType;
  refId: string;
}

export async function getPlannerEntries(userId: string, startDate: string, endDate: string): Promise<PlannerEntry[]> {
  const { data, error } = await supabase
    .from("planner_entries")
    .select("id, date, slot, ref_type, ref_id")
    .eq("user_id", userId)
    .gte("date", startDate)
    .lte("date", endDate)
    .order("date", { ascending: true });
  if (error || !data) return [];
  return data.map((row) => ({ id: row.id, date: row.date, slot: row.slot, refType: row.ref_type, refId: row.ref_id }));
}

export async function addPlannerEntry(userId: string, entry: { date: string; slot: Slot; refType: RefType; refId: string }) {
  return supabase.from("planner_entries").insert({
    user_id: userId,
    date: entry.date,
    slot: entry.slot,
    ref_type: entry.refType,
    ref_id: entry.refId,
  });
}

export async function deletePlannerEntry(id: string) {
  return supabase.from("planner_entries").delete().eq("id", id);
}

export async function replacePlannerEntry(
  userId: string,
  entry: { date: string; slot: Slot; refType: RefType; refId: string },
  existingId?: string
) {
  if (existingId) await deletePlannerEntry(existingId);
  return addPlannerEntry(userId, entry);
}
