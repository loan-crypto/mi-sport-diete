"use client";

/* Formulario "j'ai mangé ce plat" en la ficha de receta. Portado del
   patron de legacy-static-site (log-form + log-table por item), ahora
   contra Supabase (meal_logs) en vez de localStorage. Requiere sesion —
   si no hay usuario, invita a iniciar sesion en vez de mostrar el form. */

import { useEffect, useState, type FormEvent } from "react";
import Link from "next/link";
import { useAuth } from "@/lib/auth/context";
import { useI18n } from "@/lib/i18n/context";
import { addMealLog, deleteMealLog, getMealLogs, todayISO } from "@/lib/supabase/logs";

interface MealLogRow {
  id: string;
  date: string;
  note: string | null;
}

export default function MealLogWidget({ recipeId }: { recipeId: string }) {
  const { user } = useAuth();
  const { t } = useI18n();
  const [logs, setLogs] = useState<MealLogRow[]>([]);
  const [date, setDate] = useState(todayISO());
  const [note, setNote] = useState("");
  const [loading, setLoading] = useState(true);

  async function reload() {
    if (!user) return;
    setLoading(true);
    setLogs(await getMealLogs(user.id, recipeId));
    setLoading(false);
  }

  useEffect(() => {
    reload();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user, recipeId]);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!user) return;
    await addMealLog(user.id, recipeId, { date: date || todayISO(), note });
    setNote("");
    setDate(todayISO());
    reload();
  }

  async function handleDelete(id: string) {
    await deleteMealLog(id);
    reload();
  }

  return (
    <>
      <div className="section-title">{t("section.mealLog")}</div>
      <div className="card-box">
        {!user ? (
          <p className="empty-state">
            {t("auth.login.title")} — <Link href="/login">{t("auth.login.submit")}</Link>
          </p>
        ) : (
          <>
            <form className="log-form" onSubmit={handleSubmit}>
              <div className="field">
                <label htmlFor="meal-date">{t("field.date")}</label>
                <input id="meal-date" type="date" required value={date} onChange={(e) => setDate(e.target.value)} />
              </div>
              <div className="field grow">
                <label htmlFor="meal-note">{t("field.noteOptional")}</label>
                <input
                  id="meal-note"
                  type="text"
                  placeholder={t("placeholder.mealNote")}
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                />
              </div>
              <button type="submit">{t("btn.add")}</button>
            </form>

            {!loading && (
              logs.length === 0 ? (
                <p className="empty-state">{t("empty.mealLogsForRecipe")}</p>
              ) : (
                <div className="table-scroll">
                  <table className="log-table">
                    <thead>
                      <tr>
                        <th>{t("th.date")}</th>
                        <th>{t("th.note")}</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      {logs.map((l) => (
                        <tr key={l.id}>
                          <td>{l.date}</td>
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
