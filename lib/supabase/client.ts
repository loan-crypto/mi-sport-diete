"use client";

/* Cliente Supabase para el navegador. Las dos variables son PUBLICAS
   (pensadas para ir en el bundle del cliente: la seguridad real vive en
   las politicas RLS de cada tabla, no en ocultar esta clave). Se
   inyectan en build time via .env.local (ver .env.example) — con
   `output: "export"` quedan quemadas en el HTML/JS estatico, igual que
   hoy la clave de Anthropic vive en el navegador del usuario. */

import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  // No lanzamos en build time (paginas estaticas sin Supabase deben
  // poder compilar), pero avisamos claramente en consola del navegador.
  if (typeof window !== "undefined") {
    console.warn(
      "Supabase no esta configurado: falta NEXT_PUBLIC_SUPABASE_URL o NEXT_PUBLIC_SUPABASE_ANON_KEY en .env.local"
    );
  }
}

// URL/clave "placeholder" validas sintacticamente para que el build no
// reviente antes de configurar .env.local — en tiempo de ejecucion sin
// las variables reales, las llamadas a Supabase simplemente fallaran.
// URL/clave "placeholder" validas sintacticamente para que el build no
// reviente antes de configurar .env.local — en tiempo de ejecucion sin
// las variables reales, las llamadas a Supabase simplemente fallaran.
export const supabase = createClient(
  supabaseUrl || "https://placeholder.supabase.co",
  supabaseAnonKey || "placeholder-anon-key"
);
