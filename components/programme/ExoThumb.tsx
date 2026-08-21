"use client";

import { Icon } from "@/lib/icons";

/* Portado de exoThumb() en render-programme.js: icono de mancuerna
   siempre presente + foto por encima si existe (se oculta sola si falla). */
export default function ExoThumb({ photo, alt }: { photo?: string; alt: string }) {
  return (
    <div className="exo-thumb">
      <Icon name="dumbbell" />
      {photo ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={photo}
          alt={alt}
          onError={(e) => {
            e.currentTarget.style.display = "none";
          }}
        />
      ) : null}
    </div>
  );
}
