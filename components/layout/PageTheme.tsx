"use client";

/* Aplica el atributo data-theme al <body> mientras la pagina esta
   montada, replicando <body data-theme="sport|diet"> del sitio legado
   (ver app/globals.css: body[data-theme="sport"]/[data-theme="diet"]). */

import { useEffect } from "react";

export default function PageTheme({ theme }: { theme: "sport" | "diet" }) {
  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
    return () => {
      document.body.removeAttribute("data-theme");
    };
  }, [theme]);

  return null;
}
