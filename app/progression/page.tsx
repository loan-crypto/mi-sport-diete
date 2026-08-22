"use client";

/* Portado de legacy-static-site/progression.html + js/render-progression.js.
   La foto ya no va en localStorage: se sube a Supabase Storage (bucket
   "progress-photos") y solo se guarda la ruta en progression_photos. */

import { useEffect, useState, type FormEvent } from "react";
import { useI18n } from "@/lib/i18n/context";
import { useAuth } from "@/lib/auth/context";
import RequireAuth from "@/components/auth/RequireAuth";
import PageTheme from "@/components/layout/PageTheme";
import { heroPhotoStyle } from "@/lib/heroStyle";
import {
  addProgressPhoto,
  deleteProgressPhoto,
  getProgressPhotos,
  resizeImageToBlob,
  type ProgressPhoto,
} from "@/lib/supabase/progress";
import { todayISO } from "@/lib/supabase/logs";
import { EXERCISES } from "@/content";

// Nota: on evite images/body/back.jpg ici (photo de stock generique, pas
// la tienne) — le bandeau recadre en "cover" sur peu de hauteur. Cette
// photo reste utilisee uniquement dans son propre format complet, sur la
// carte musculaire.
const HERO_PHOTO = EXERCISES.filter((e) => e.photo).map((e) => e.photo)[3];

function ProgressionContent() {
  const { t } = useI18n();
  const { user } = useAuth();
  const [photos, setPhotos] = useState<ProgressPhoto[]>([]);
  const [loading, setLoading] = useState(true);
  const [date, setDate] = useState(todayISO());
  const [weight, setWeight] = useState("");
  const [note, setNote] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [status, setStatus] = useState("");

  async function reload() {
    if (!user) return;
    setLoading(true);
    setPhotos(await getProgressPhotos(user.id));
    setLoading(false);
  }

  useEffect(() => {
    reload();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!file || !user) return;
    setStatus(t("status.processingPhoto"));
    try {
      const blob = await resizeImageToBlob(file, 1280);
      await addProgressPhoto(user.id, { date: date || todayISO(), weight: Number(weight) || null, note }, blob);
      setDate(todayISO());
      setWeight("");
      setNote("");
      setFile(null);
      setStatus(t("status.photoAdded"));
      reload();
    } catch (err) {
      setStatus(t("status.errorProcessing") + (err instanceof Error ? err.message : String(err)));
    }
  }

  async function handleDelete(photo: ProgressPhoto) {
    if (!confirm(t("confirm.deletePhoto"))) return;
    await deleteProgressPhoto(photo.id, photo.photoPath);
    reload();
  }

  return (
    <>
      <PageTheme theme="sport" />
      <section className="hero hero-compact" style={heroPhotoStyle(HERO_PHOTO)}>
        <span className="kicker">{t("progression.kicker")}</span>
        <h1>{t("progression.title")}</h1>
        <p>{t("progression.subtitle")}</p>
      </section>

      <div className="card-box">
        <form onSubmit={handleSubmit}>
          <div className="log-form" style={{ marginBottom: 0 }}>
            <div className="field">
              <label htmlFor="progress-date">{t("field.date")}</label>
              <input
                id="progress-date"
                type="date"
                required
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
            <div className="field">
              <label htmlFor="progress-weight">{t("field.weightOptional")}</label>
              <input
                id="progress-weight"
                type="number"
                step="0.1"
                min="0"
                placeholder={t("placeholder.progressWeight")}
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
              />
            </div>
            <div className="field grow">
              <label htmlFor="progress-note">{t("field.noteOptional")}</label>
              <input
                id="progress-note"
                type="text"
                placeholder={t("placeholder.progressNote")}
                value={note}
                onChange={(e) => setNote(e.target.value)}
              />
            </div>
          </div>
          <div className="field" style={{ marginTop: 12 }}>
            <label htmlFor="progress-photo">{t("field.photo")}</label>
            <input
              id="progress-photo"
              type="file"
              accept="image/*"
              required
              onChange={(e) => setFile(e.target.files?.[0] ?? null)}
            />
          </div>
          <button type="submit" style={{ marginTop: 14 }}>
            {t("btn.addToProgress")}
          </button>
          <p style={{ color: "var(--text-muted)", fontSize: "0.82rem", marginTop: 8 }}>{status}</p>
        </form>
      </div>

      <div className="card-grid">
        {loading ? null : photos.length === 0 ? (
          <p className="empty-state">{t("empty.noProgressPhotos")}</p>
        ) : (
          photos.map((p) => (
            <div className="card" key={p.id}>
              <div className="thumb">
                {p.url ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={p.url} alt={t("label.progressAlt", { date: p.date })} />
                ) : null}
              </div>
              <div className="body">
                <span className="meta">
                  {p.date}
                  {p.weight ? ` · ${p.weight} kg` : ""}
                </span>
                {p.note ? <span className="meta">{p.note}</span> : null}
                <button
                  className="danger-link"
                  style={{ alignSelf: "flex-start", marginTop: 4 }}
                  onClick={() => handleDelete(p)}
                >
                  {t("btn.delete")}
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
}

export default function ProgressionPage() {
  return (
    <RequireAuth>
      <ProgressionContent />
    </RequireAuth>
  );
}
