"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  type ReactNode,
} from "react";
import { translations, type Locale, type Translations } from "./translations";

const STORAGE_KEY = "elfennir-lang";

interface LanguageContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

/** Map browser language codes to supported locales */
function detectLocale(): Locale {
  if (typeof navigator === "undefined") return "en";

  const lang = navigator.language.split("-")[0].toLowerCase();

  const localeMap: Record<string, Locale> = {
    fi: "fi",
    en: "en",
    sv: "fi",
    et: "fi",
    no: "fi",
    ru: "fi",
  };

  return localeMap[lang] ?? "en";
}

function getInitialLocale(): Locale {
  if (typeof window === "undefined") return "en";

  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored === "fi" || stored === "en") return stored;

  return detectLocale();
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");
  const [mounted, setMounted] = useState(false);

  // Hydration-safe: read localStorage only after mount
  useEffect(() => {
    setLocaleState(getInitialLocale());
    setMounted(true);
  }, []);

  // Sync lang attribute and localStorage whenever locale changes
  useEffect(() => {
    if (!mounted) return;
    document.documentElement.lang = locale;
    localStorage.setItem(STORAGE_KEY, locale);
  }, [locale, mounted]);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
  }, []);

  const t = translations[locale];

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within a <LanguageProvider>");
  }
  return ctx;
}
