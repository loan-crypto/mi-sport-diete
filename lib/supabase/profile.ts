import { supabase } from "./client";
import type { Goal } from "@/lib/programme";

export interface Profile {
  goal: Goal | null;
  currentWeight: number | null;
}

export async function getProfile(userId: string): Promise<Profile> {
  const { data } = await supabase
    .from("profiles")
    .select("goal, current_weight")
    .eq("user_id", userId)
    .maybeSingle();
  return { goal: (data?.goal as Goal) ?? null, currentWeight: data?.current_weight ?? null };
}

export async function upsertProfile(userId: string, profile: Profile) {
  return supabase.from("profiles").upsert({
    user_id: userId,
    goal: profile.goal,
    current_weight: profile.currentWeight,
  });
}
