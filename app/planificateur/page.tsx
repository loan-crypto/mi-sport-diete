"use client";

/* Nueva funcionalidad (no existia en el sitio legado): calendario
   semanal para planificar comidas y sesiones, respaldado por
   planner_entries en Supabase. */

import { useEffect, useState } from "react";
import Link from "next/link";
import { useAuth } from "@/lib/auth/context";
import { useI18n } from "@/lib/i18n/context";
import RequireAuth from "@/components/auth/RequireAuth";
import PageTheme from "@/components/layout/PageTheme";
import { RECIPES, SESSIONS } from "@/content";
import { findById } from "@/lib/format";
import { getWeekStart, addDays, toISODate, formatDayLabel } from "@/lib/dateUtils";
import {
  getPlannerEntries,
  addPlannerEntry,
  deletePlannerEntry,
  type PlannerEntry,
  type Slot,
} from "@/lib/supabase/planner";
import { BREAKFAST_RECIPES, MEAL_RECIPES, SNACK_RECIPES, buildWeekPlan } from "@/lib/programme";
import type { UIStringKey } from "@/lib/i18n/dictionary";

const SLOTS: { key: Slot; labelKey: UIStringKey; pool: "breakfast" | "meal" | "snack" | "session" }[] = [
  { key: "breakfast", labelKey: "label.breakfast", pool: "breakfast" },
  { key: "lunch", labelKey: "label.lunch", pool: "meal" },
  { key: "dinner", labelKey: "label.dinner", pool: "meal" },
  { key: "snack", labelKey: "label.snack", pool: "snack" },
  { key: "session", labelKey: "planner.slot.session", pool: "session" },
];

function poolFor(pool: string) {
  if (pool === "breakfast") return BREAKFAST_RECIPES;
  if (pool === "meal") return MEAL_RECIPES;
  if (pool === "snack") return SNACK_RECIPES;
  return SESSIONS;
}

function PlanificateurContent() {
  const { user } = useAuth();
  const { t, tData, lang } = useI18n();
  const [weekStart, setWeekStart] = useState(() => getWeekStart(new Date()));
  const [entries, setEntries] = useState<PlannerEntry[]>([]);
  const [loading, setLoading] = useState(true);

  const days = Array.from({ length: 7 }, (_, i) => toISODate(addDays(weekStart, i)));

  async function reload() {
    if (!user) return;
    setLoading(true);
    setEntries(await getPlannerEntries(user.id, days[0], days[6]));
    setLoading(false);
  }

  useEffect(() => {
    reload();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user, weekStart]);

  async function handlePick(date: string, slot: Slot, refId: string) {
    if (!user || !refId) return;
    await addPlannerEntry(user.id, { date, slot, refType: slot === "session" ? "session" : "recipe", refId });
    reload();
  }

  async function handleRemove(id: string) {
    await deletePlannerEntry(id);
    reload();
  }

  async function handleAddGeneratedWeek() {
    if (!user) return;
    const plan = buildWeekPlan(7);
    for (let i = 0; i < 7; i++) {
      const date = days[i];
      const day = plan[i];
      const meals: [Slot, string | undefined][] = [
        ["breakfast", day.breakfast?.id],
        ["lunch", day.lunch?.id],
        ["dinner", day.dinner?.id],
        ["snack", day.snack?.id],
      ];
      for (const [slot, refId] of meals) {
        if (refId) await addPlannerEntry(user.id, { date, slot, refType: "recipe", refId });
      }
    }
    reload();
  }

  function labelFor(entry: PlannerEntry) {
    if (entry.refType === "session") {
      const s = findById(SESSIONS, entry.refId);
      return s ? (tData(s, "name") as string) : entry.refId;
    }
    const r = findById(RECIPES, entry.refId);
    return r ? (tData(r, "name") as string) : entry.refId;
  }

  return (
    <>
      <PageTheme theme="sport" />
      <div className="page-header">
        <h1>{t("planner.title")}</h1>
        <p>{t("planner.subtitle")}</p>
      </div>

      <div className="programme-form" style={{ alignItems: "center" }}>
        <button className="secondary" onClick={() => setWeekStart(addDays(weekStart, -7))}>
          {t("planner.prevWeek")}
        </button>
        <span style={{ fontWeight: 700 }}>
          {formatDayLabel(days[0], lang)} – {formatDayLabel(days[6], lang)}
        </span>
        <button className="secondary" onClick={() => setWeekStart(addDays(weekStart, 7))}>
          {t("planner.nextWeek")}
        </button>
        <button onClick={handleAddGeneratedWeek}>{t("planner.addToCalendar")}</button>
      </div>

      {loading ? null : (
        <div className="programme-days">
          {days.map((date) => (
            <div className="card-box programme-day" key={date}>
              <div className="programme-day-title" style={{ marginBottom: 10 }}>
                {formatDayLabel(date, lang)}
              </div>
              {SLOTS.map(({ key, labelKey, pool }) => {
                const entry = entries.find((e) => e.date === date && e.slot === key);
                const pickLabelKey: UIStringKey = pool === "session" ? "planner.pickSession" : "planner.pickRecipe";
                return (
                  <div key={key} className="exo-row" style={{ padding: "8px 0" }}>
                    <div className="exo-row-info">
                      <div className="scheme">{t(labelKey)}</div>
                      {entry ? (
                        <div className="name">
                          {pool === "session" ? (
                            <Link href={`/sport/seances/${entry.refId}`}>{labelFor(entry)}</Link>
                          ) : (
                            <Link href={`/diete/recettes/${entry.refId}`}>{labelFor(entry)}</Link>
                          )}
                        </div>
                      ) : (
                        <select value="" onChange={(e) => handlePick(date, key, e.target.value)}>
                          <option value="">{t(pickLabelKey)}</option>
                          {poolFor(pool).map((item) => (
                            <option key={item.id} value={item.id}>
                              {tData(item, "name") as string}
                            </option>
                          ))}
                        </select>
                      )}
                    </div>
                    {entry ? (
                      <button className="danger-link" onClick={() => handleRemove(entry.id)}>
                        {t("planner.remove")}
                      </button>
                    ) : null}
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default function PlanificateurPage() {
  return (
    <RequireAuth>
      <PlanificateurContent />
    </RequireAuth>
  );
}
