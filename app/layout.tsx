import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { I18nProvider } from "@/lib/i18n/context";
import { AuthProvider } from "@/lib/auth/context";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";

// Fuentes auto-hospedadas (portadas de legacy-static-site/fonts).
// next/font/local resuelve las rutas correctamente sin importar el
// basePath del export estatico (a diferencia de un @font-face a mano).
const bebasNeue = localFont({
  src: "../public/fonts/bebas-neue-latin-400-normal.woff2",
  variable: "--font-display",
  weight: "400",
  display: "swap",
});

const inter = localFont({
  src: [
    { path: "../public/fonts/inter-latin-400-normal.woff2", weight: "400" },
    { path: "../public/fonts/inter-latin-500-normal.woff2", weight: "500" },
    { path: "../public/fonts/inter-latin-600-normal.woff2", weight: "600" },
    { path: "../public/fonts/inter-latin-700-normal.woff2", weight: "700" },
    { path: "../public/fonts/inter-latin-800-normal.woff2", weight: "800" },
  ],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mon Sport & Diète",
  description:
    "Carnet perso : recettes, ingrédients, exercices, séances et suivi de progression.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${bebasNeue.variable} ${inter.variable}`}>
      <body>
        <I18nProvider>
          <AuthProvider>
            <SiteHeader />
            <main className="container">{children}</main>
            <SiteFooter />
          </AuthProvider>
        </I18nProvider>
      </body>
    </html>
  );
}
