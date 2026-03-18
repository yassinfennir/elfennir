"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";

export default function LanguageToggle() {
  const { locale, setLocale } = useLanguage();

  const isEnglish = locale === "en";

  const toggle = () => {
    setLocale(isEnglish ? "fi" : "en");
  };

  return (
    <button
      onClick={toggle}
      aria-label={`Switch language to ${isEnglish ? "Finnish" : "English"}`}
      className="relative flex h-[30px] w-[64px] items-center rounded-full
                 border border-white/[0.1] bg-white/[0.05] px-[3px]
                 backdrop-blur-sm transition-colors hover:bg-white/[0.08]
                 focus-visible:outline-none focus-visible:ring-2
                 focus-visible:ring-white/30"
    >
      {/* Sliding highlight pill */}
      <motion.div
        layout
        transition={{ type: "spring", stiffness: 500, damping: 35 }}
        className="absolute top-[3px] h-[24px] w-[28px] rounded-full bg-white/[0.15]"
        style={{ left: isEnglish ? 3 : 33 }}
      />

      {/* EN label */}
      <span
        className={`relative z-10 flex-1 text-center text-[11px] font-semibold tracking-wide transition-colors duration-200 ${
          isEnglish ? "text-white" : "text-white/40"
        }`}
      >
        EN
      </span>

      {/* FI label */}
      <span
        className={`relative z-10 flex-1 text-center text-[11px] font-semibold tracking-wide transition-colors duration-200 ${
          !isEnglish ? "text-white" : "text-white/40"
        }`}
      >
        FI
      </span>
    </button>
  );
}
