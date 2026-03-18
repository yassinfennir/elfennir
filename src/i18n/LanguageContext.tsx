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

const ALL_LOCALES: Locale[] = ["fi", "en", "sv", "es", "de", "fr", "it", "pt"];

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
    sv: "sv",
    es: "es",
    de: "de",
    fr: "fr",
    it: "it",
    pt: "pt",
    // Close matches
    nb: "sv", // Norwegian → Swedish (closest Nordic)
    nn: "sv",
    no: "sv",
    da: "sv", // Danish → Swedish
    et: "fi", // Estonian → Finnish (closest)
    ru: "en", // Russian → English
    pl: "de", // Polish → German (closest major)
    nl: "de", // Dutch → German
    ca: "es", // Catalan → Spanish
    gl: "pt", // Galician → Portuguese
  };

  return localeMap[lang] ?? "en";
}

function isValidLocale(val: string): val is Locale {
  return ALL_LOCALES.includes(val as Locale);
}

function getInitialLocale(): Locale {
  if (typeof window === "undefined") return "en";

  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored && isValidLocale(stored)) return stored;

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
