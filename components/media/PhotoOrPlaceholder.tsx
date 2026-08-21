"use client";

/* Portado de photoOrPlaceholder() en legacy-static-site/js/helpers.js.
   El placeholder siempre esta en el DOM (position:absolute, ver
   .photo-placeholder en globals.css) y la <img> se dibuja por encima;
   si la foto no carga, se oculta con onError y el placeholder queda
   visible debajo — el contenedor padre debe tener position:relative
   (ya lo tienen .thumb / .detail-photo). */

import { Icon, type IconKey } from "@/lib/icons";
import { useI18n } from "@/lib/i18n/context";

export default function PhotoOrPlaceholder({
  photoPath,
  iconKey = "camera",
  altText = "",
}: {
  photoPath?: string;
  iconKey?: IconKey;
  altText?: string;
}) {
  const { t } = useI18n();

  return (
    <>
      <div className="photo-placeholder">
        <Icon name={iconKey} />
        <span>{t("placeholder.addPhoto")}</span>
      </div>
      {photoPath ? (
        // eslint-disable-next-line @next/next/no-img-element -- fotos remotas (Pexels) + export estatico, next/image no aporta aqui
        <img
          src={photoPath}
          alt={altText}
          onError={(e) => {
            e.currentTarget.style.display = "none";
          }}
        />
      ) : null}
    </>
  );
}
