"use client";

/* ============================================================
   Contexto React de traduccion FR/ES.
   Portado de legacy-static-site/js/i18n.js: mismo diccionario
   (UI_STRINGS), misma idea de tData() para el contenido con
   sub-objeto `es` opcional, pero como contexto React en vez de
   funciones globales + reload de pagina.
   ============================================================ */

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { UI_STRINGS, type Lang, type UIStringKey } from "./dictionary";

const LANG_STORAGE_KEY = "mysportsite_lang";

type TranslatableItem = { es?: Record<string, unknown> } | null | undefined;

interface I18nContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (key: UIStringKey, vars?: Record<string, string | number>) => string;
  tData: <T extends TranslatableItem, K extends string>(
    item: T,
    field: K
  ) => T extends null | undefined ? string : unknown;
}

const I18nContext = createContext<I18nContextValue | null>(null);

function readStoredLang(): Lang {
  if (typeof window === "undefined") return "fr";
  return window.localStorage.getItem(LANG_STORAGE_KEY) === "es" ? "es" : "fr";
}

export function I18nProvider({ children }: { children: ReactNode }) {
  // "fr" por defecto en el server (export estatico) y hasta que se lea
  // localStorage en el cliente, para evitar mismatches de hidratacion.
  const [lang, setLangState] = useState<Lang>("fr");

  useEffect(() => {
    setLangState(readStoredLang());
  }, []);

  const setLang = (next: Lang) => {
    window.localStorage.setItem(LANG_STORAGE_KEY, next);
    setLangState(next);
  };

  const value = useMemo<I18nContextValue>(() => {
    function t(key: UIStringKey, vars?: Record<string, string | number>) {
      let str: string = UI_STRINGS[lang][key] ?? UI_STRINGS.fr[key] ?? key;
      if (vars) {
        for (const k of Object.keys(vars)) {
          str = str.replace(`{${k}}`, String(vars[k]));
        }
      }
      return str;
    }

    function tData<T extends TranslatableItem, K extends string>(item: T, field: K) {
      if (!item) return "" as never;
      const es = (item as { es?: Record<string, unknown> }).es;
      if (lang === "es" && es && es[field] !== undefined) {
        return es[field] as never;
      }
      return (item as Record<string, unknown>)[field] as never;
    }

    return { lang, setLang, t, tData };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lang]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n() debe usarse dentro de <I18nProvider>");
  return ctx;
}

/* Traduce los valores "enum" fijos de content/*.ts (dificultad, calidad),
   igual que difficultyLabel()/qualityLabel() en el sitio legado. */
export function useEnumLabels() {
  const { t } = useI18n();

  function difficultyLabel(d: string) {
    const map: Record<string, UIStringKey> = {
      Débutant: "difficulty.beginner",
      Intermédiaire: "difficulty.intermediate",
      Avancé: "difficulty.advanced",
    };
    return map[d] ? t(map[d]) : d;
  }

  function qualityLabel(q: string) {
    if (q === "bon") return t("quality.good");
    if (q === "mauvais") return t("quality.bad");
    return t("quality.neutral");
  }

  return { difficultyLabel, qualityLabel };
}
