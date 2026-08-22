import type { CSSProperties } from "react";

/* Helper para setear la foto de fondo de una .hero via la variable CSS
   --hero-photo (ver app/globals.css) desde un componente. */
export function heroPhotoStyle(url?: string): CSSProperties {
  return { "--hero-photo": `url(${url})` } as CSSProperties;
}
