"use client";

/* Portado de legacy-static-site/journal.html + js/render-journal.js.
   Lee/escribe en Supabase (lib/supabase/logs.ts) en vez de localStorage —
   mismo formato de tabla, ahora sincronizado entre dispositivos. */

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useI18n } from "@/lib/i18n/context";
import { useAuth } from "@/lib/auth/context";
import RequireAuth from "@/components/auth/RequireAuth";
import { getAllExerciseLogs, getAllMealLogs, todayISO, type ExerciseLog, type MealLog } from "@/lib/supabase/logs";
import { importLegacyDump } from "@/lib/supabase/importLegacyDump";
import CalorieCounter from "@/components/tracking/CalorieCounter";
import { heroPhotoStyle } from "@/lib/heroStyle";
import { EXERCISES } from "@/content";

const HERO_PHOTO = EXERCISES.filter((e) => e.photo).map((e) => e.photo)[7];

type Tab = "exo" | "meal";

function JournalContent() {
  const { t } = useI18n();
  const { user } = useAuth();
  const [tab, setTab] = useState<Tab>("exo");
  const [exerciseLogs, setExerciseLogs] = useState<ExerciseLog[]>([]);
  const [mealLogs, setMealLogs] = useState<MealLog[]>([]);
  const [loading, setLoading] = useState(true);
  const [importMsg, setImportMsg] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  async function reload() {
    if (!user) return;
    setLoading(true);
    const [exo, meal] = await Promise.all([getAllExerciseLogs(user.id), getAllMealLogs(user.id)]);
    setExerciseLogs(exo);
    setMealLogs(meal);
    setLoading(false);
  }

  useEffect(() => {
    reload();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  function handleExport() {
    const dump = { exerciseLogs, mealLogs };
    const blob = new Blob([JSON.stringify(dump, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `mon-suivi-${todayISO()}.json`;
    a.click();
    URL.revokeObjectURL(url);
  }

  function handleImportFile(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file || !user) return;
    const reader = new FileReader();
    reader.onload = async () => {
      try {
        const dump = JSON.parse(reader.result as string);
        setImportMsg("Importando…");
        const result = await importLegacyDump(user.id, dump);
        setImportMsg(
          `${t("alert.importSuccess")} (${result.exerciseLogs} entrenos, ${result.mealLogs} comidas, ${result.progressPhotos} fotos)` +
            (result.errors.length ? ` — ${result.errors.length} error(es)` : "")
        );
        reload();
      } catch {
        setImportMsg(t("alert.importError"));
      }
    };
    reader.readAsText(file);
  }

  return (
    <>
      <section className="hero hero-compact" style={heroPhotoStyle(HERO_PHOTO)}>
        <h1>{t("journal.title")}</h1>
        <p>{t("journal.subtitle")}</p>
      </section>

      <CalorieCounter />

      <div className="journal-tabs">
        <button className={tab === "exo" ? "active" : ""} onClick={() => setTab("exo")}>
          {t("tab.trainings")}
        </button>
        <button className={tab === "meal" ? "active" : ""} onClick={() => setTab("meal")}>
          {t("tab.meals")}
        </button>
      </div>

      <div id="journal-content">
        {loading ? null : tab === "exo" ? (
          exerciseLogs.length === 0 ? (
            <p className="empty-state">{t("empty.noTrainings")}</p>
          ) : (
            <div className="table-scroll">
              <table className="log-table">
                <thead>
                  <tr>
                    <th>{t("th.date")}</th>
                    <th>{t("th.exercise")}</th>
                    <th>{t("th.weight")}</th>
                    <th>{t("th.sets")}</th>
                    <th>{t("th.reps")}</th>
                    <th>{t("th.note")}</th>
                  </tr>
                </thead>
                <tbody>
                  {exerciseLogs.map((l) => (
                    <tr key={l.id}>
                      <td>{l.date}</td>
                      <td>
                        <Link href={`/sport/exercices/${l.exerciseId}`}>{l.exerciseName}</Link>
                      </td>
                      <td>{l.weight ? `${l.weight} kg` : t("label.bodyweight")}</td>
                      <td>{l.sets || "—"}</td>
                      <td>{l.reps || "—"}</td>
                      <td>{l.note || "—"}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )
        ) : mealLogs.length === 0 ? (
          <p className="empty-state">{t("empty.noMeals")}</p>
        ) : (
          <div className="table-scroll">
            <table className="log-table">
              <thead>
                <tr>
                  <th>{t("th.date")}</th>
                  <th>{t("th.recipe")}</th>
                  <th>{t("th.note")}</th>
                </tr>
              </thead>
              <tbody>
                {mealLogs.map((l) => (
                  <tr key={l.id}>
                    <td>{l.date}</td>
                    <td>
                      <Link href={`/diete/recettes/${l.recipeId}`}>{l.recipeName}</Link>
                    </td>
                    <td>{l.note || "—"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      <div className="section-title">{t("section.backup")}</div>
      <div className="card-box">
        <p style={{ marginTop: 0, color: "var(--text-muted)" }}>{t("backup.desc")}</p>
        <button className="secondary" onClick={handleExport}>
          {t("btn.export")}
        </button>
        <label className="btn secondary" style={{ display: "inline-block", marginLeft: 8, cursor: "pointer" }}>
          {t("btn.import")}
          <input
            ref={fileInputRef}
            type="file"
            accept="application/json"
            style={{ display: "none" }}
            onChange={handleImportFile}
          />
        </label>
        {importMsg ? <p style={{ marginTop: 10 }}>{importMsg}</p> : null}
      </div>
    </>
  );
}

export default function JournalPage() {
  return (
    <RequireAuth>
      <JournalContent />
    </RequireAuth>
  );
}
