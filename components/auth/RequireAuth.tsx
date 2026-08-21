"use client";

/* Envuelve una pagina que necesita sesion (Journal, Progression,
   Planificador). Como el sitio es export estatico (sin middleware de
   servidor), la proteccion es del lado del cliente: mientras se resuelve
   la sesion se muestra un estado de carga, y si no hay sesion se invita
   a iniciar sesion en vez de renderizar el contenido. */

import type { ReactNode } from "react";
import Link from "next/link";
import { useAuth } from "@/lib/auth/context";
import { useI18n } from "@/lib/i18n/context";

export default function RequireAuth({ children }: { children: ReactNode }) {
  const { user, loading } = useAuth();
  const { t } = useI18n();

  if (loading) return null;

  if (!user) {
    return (
      <div className="card-box">
        <p>{t("auth.login.title")}</p>
        <Link className="btn" href="/login">
          {t("auth.login.submit")}
        </Link>
      </div>
    );
  }

  return <>{children}</>;
}
