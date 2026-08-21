/* Galeria de progresion fisica contra Supabase (tabla progression_photos
   + bucket de Storage "progress-photos"). Portado de
   legacy-static-site/js/render-progression.js + storage.js — mismo
   redimensionado client-side a JPEG q=0.82 max 1280px, pero la foto ya
   no va en localStorage: se sube al bucket y solo se guarda la ruta. */

import { supabase } from "./client";

const BUCKET = "progress-photos";
const SIGNED_URL_TTL_SECONDS = 60 * 60; // 1h, de sobra para ver la galeria

export interface ProgressPhoto {
  id: string;
  date: string;
  weight: number | null;
  note: string | null;
  photoPath: string;
  url: string | null;
}

export function resizeImageToBlob(file: File, maxDim: number): Promise<Blob> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    const reader = new FileReader();
    reader.onload = () => {
      img.src = reader.result as string;
    };
    reader.onerror = reject;
    img.onload = () => {
      let { width, height } = img;
      if (width > height && width > maxDim) {
        height = Math.round(height * (maxDim / width));
        width = maxDim;
      } else if (height > maxDim) {
        width = Math.round(width * (maxDim / height));
        height = maxDim;
      }
      const canvas = document.createElement("canvas");
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext("2d");
      if (!ctx) return reject(new Error("canvas 2d context indisponible"));
      ctx.drawImage(img, 0, 0, width, height);
      canvas.toBlob(
        (blob) => (blob ? resolve(blob) : reject(new Error("toBlob a échoué"))),
        "image/jpeg",
        0.82
      );
    };
    img.onerror = reject;
    reader.readAsDataURL(file);
  });
}

export async function addProgressPhoto(
  userId: string,
  entry: { date: string; weight: number | null; note: string },
  blob: Blob
) {
  const path = `${userId}/${Date.now()}.jpg`;
  const { error: uploadError } = await supabase.storage.from(BUCKET).upload(path, blob, {
    contentType: "image/jpeg",
  });
  if (uploadError) throw uploadError;

  const { error } = await supabase.from("progression_photos").insert({
    user_id: userId,
    date: entry.date,
    weight: entry.weight,
    note: entry.note || null,
    photo_path: path,
  });
  if (error) throw error;
}

export async function getProgressPhotos(userId: string): Promise<ProgressPhoto[]> {
  const { data, error } = await supabase
    .from("progression_photos")
    .select("id, date, weight, note, photo_path")
    .eq("user_id", userId)
    .order("date", { ascending: false });
  if (error || !data) return [];

  const withUrls = await Promise.all(
    data.map(async (row) => {
      const { data: signed } = await supabase.storage
        .from(BUCKET)
        .createSignedUrl(row.photo_path, SIGNED_URL_TTL_SECONDS);
      return {
        id: row.id,
        date: row.date,
        weight: row.weight,
        note: row.note,
        photoPath: row.photo_path,
        url: signed?.signedUrl ?? null,
      };
    })
  );
  return withUrls;
}

export async function deleteProgressPhoto(id: string, photoPath: string) {
  await supabase.storage.from(BUCKET).remove([photoPath]);
  return supabase.from("progression_photos").delete().eq("id", id);
}
