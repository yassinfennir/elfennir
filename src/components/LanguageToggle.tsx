"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";
import { localeNames, localeFlags, type Locale } from "@/i18n/translations";

const allLocales: Locale[] = ["fi", "en", "sv", "es", "de", "fr", "it", "pt"];

export default function LanguageToggle() {
  const { locale, setLocale } = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div ref={ref} className="relative z-50">
      {/* Current language button */}
      <button
        onClick={() => setOpen(!open)}
        aria-label="Change language"
        className="flex h-[34px] items-center gap-1.5 rounded-full
                   border border-white/[0.1] bg-white/[0.05] px-3
                   backdrop-blur-sm transition-colors hover:bg-white/[0.1]
                   focus-visible:outline-none focus-visible:ring-2
                   focus-visible:ring-white/30"
      >
        <span className="text-[14px]">{localeFlags[locale]}</span>
        <span className="text-[11px] font-semibold tracking-wide text-white">
          {locale.toUpperCase()}
        </span>
        <svg
          className={`h-3 w-3 text-white/60 transition-transform ${open ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2.5}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Dropdown */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className="absolute right-0 top-[calc(100%+6px)] min-w-[160px] overflow-hidden
                       rounded-xl border border-white/[0.1] bg-[#0a0a0a]/95
                       p-1 shadow-2xl backdrop-blur-xl"
          >
            {allLocales.map((loc) => (
              <button
                key={loc}
                onClick={() => {
                  setLocale(loc);
                  setOpen(false);
                }}
                className={`flex w-full items-center gap-2.5 rounded-lg px-3 py-2
                           text-left transition-colors hover:bg-white/[0.08]
                           ${locale === loc ? "bg-white/[0.06]" : ""}`}
              >
                <span className="text-[15px]">{localeFlags[loc]}</span>
                <span
                  className={`text-[13px] font-medium ${
                    locale === loc ? "text-white" : "text-white/70"
                  }`}
                >
                  {localeNames[loc]}
                </span>
                {locale === loc && (
                  <svg
                    className="ml-auto h-3.5 w-3.5 text-green-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
