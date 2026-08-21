"use client";

/* Formulario de seguimiento peso/series/reps en la ficha de ejercicio.
   Portado del patron de legacy-static-site (log-form + log-table),
   contra Supabase (exercise_logs). Incluye el grafico de progreso
   (nueva funcionalidad) cuando hay al menos 2 puntos con peso. */

import { useEffect, useState, type FormEvent } from "react";
import Link from "next/link";
import { useAuth } from "@/lib/auth/context";
import { useI18n } from "@/lib/i18n/context";
import { addExerciseLog, deleteExerciseLog, getExerciseLogs, todayISO } from "@/lib/supabase/logs";
import WeightProgressChart from "./WeightProgressChart";

interface ExerciseLogRow {
  id: string;
  date: string;
  weight: number | null;
  sets: number | null;
  reps: string | null;
  note: string | null;
}

export default function ExerciseLogWidget({ exerciseId }: { exerciseId: string }) {
  const { user } = useAuth();
  const { t } = useI18n();
  const [logs, setLogs] = useState<ExerciseLogRow[]>([]);
  const [date, setDate] = useState(todayISO());
  const [weight, setWeight] = useState("");
  const [sets, setSets] = useState("");
  const [reps, setReps] = useState("");
  const [note, setNote] = useState("");
  const [loading, setLoading] = useState(true);

  async function reload() {
    if (!user) return;
    setLoading(true);
    setLogs(await getExerciseLogs(user.id, exerciseId));
    setLoading(false);
  }

  useEffect(() => {
    reload();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user, exerciseId]);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!user) return;
    await addExerciseLog(user.id, exerciseId, {
      date: date || todayISO(),
      weight: Number(weight) || null,
      sets: Number(sets) || null,
      reps,
      note,
    });
    setWeight("");
    setSets("");
    setReps("");
    setNote("");
    setDate(todayISO());
    reload();
  }

  async function handleDelete(id: string) {
    await deleteExerciseLog(id);
    reload();
  }

  return (
    <>
      <div className="section-title">{t("section.trackingWeightReps")}</div>
      <div className="card-box">
        {!user ? (
          <p className="empty-state">
            {t("auth.login.title")} — <Link href="/login">{t("auth.login.submit")}</Link>
          </p>
        ) : (
          <>
            <form className="log-form" onSubmit={handleSubmit}>
              <div className="field">
                <label htmlFor="exo-date">{t("field.date")}</label>
                <input id="exo-date" type="date" required value={date} onChange={(e) => setDate(e.target.value)} />
              </div>
              <div className="field">
                <label htmlFor="exo-weight">{t("field.weight")}</label>
                <input
                  id="exo-weight"
                  type="number"
                  step="0.5"
                  min="0"
                  placeholder={t("placeholder.weightBodyweight")}
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                />
              </div>
              <div className="field">
                <label htmlFor="exo-sets">{t("field.sets")}</label>
                <input
                  id="exo-sets"
                  type="number"
                  min="0"
                  placeholder={t("placeholder.sets")}
                  value={sets}
                  onChange={(e) => setSets(e.target.value)}
                />
              </div>
              <div className="field grow">
                <label htmlFor="exo-reps">{t("field.reps")}</label>
                <input
                  id="exo-reps"
                  type="text"
                  placeholder={t("placeholder.reps")}
                  value={reps}
                  onChange={(e) => setReps(e.target.value)}
                />
              </div>
              <div className="field grow">
                <label htmlFor="exo-note">{t("field.noteOptional")}</label>
                <input
                  id="exo-note"
                  type="text"
                  placeholder={t("placeholder.exoNote")}
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                />
              </div>
              <button type="submit">{t("btn.add")}</button>
            </form>

            {!loading && <WeightProgressChart logs={logs} />}

            {!loading && (
              logs.length === 0 ? (
                <p className="empty-state">{t("empty.sessionsForExercise")}</p>
              ) : (
                <div className="table-scroll">
                  <table className="log-table">
                    <thead>
                      <tr>
                        <th>{t("th.date")}</th>
                        <th>{t("th.weight")}</th>
                        <th>{t("th.sets")}</th>
                        <th>{t("th.reps")}</th>
                        <th>{t("th.note")}</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      {logs.map((l) => (
                        <tr key={l.id}>
                          <td>{l.date}</td>
                          <td>{l.weight ? `${l.weight} kg` : t("label.bodyweight")}</td>
                          <td>{l.sets || "—"}</td>
                          <td>{l.reps || "—"}</td>
                          <td>{l.note || "—"}</td>
                          <td>
                            <button className="danger-link" onClick={() => handleDelete(l.id)}>
                              {t("btn.delete")}
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )
            )}
          </>
        )}
      </div>
    </>
  );
}
