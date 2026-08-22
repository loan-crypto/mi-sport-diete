"use client";

import { Icon, type IconKey } from "@/lib/icons";

/* Portado de exoThumb() en render-programme.js: icono siempre presente
   + foto por encima si existe (se oculta sola si falla). Reusado tambien
   por el generador de dieta (icon="fork") ademas del de programa. */
export default function ExoThumb({
  photo,
  alt,
  icon = "dumbbell",
}: {
  photo?: string;
  alt: string;
  icon?: IconKey;
}) {
  return (
    <div className="exo-thumb">
      <Icon name={icon} />
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
