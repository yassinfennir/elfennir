"use client";

import { useState, useCallback, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* ─── Types ─── */
type LangCode = "en" | "fi" | "sv" | "es" | "de" | "fr";

interface Translation {
  message: string;
  whatsapp: string;
  email: string;
  powered: string;
}

/* ─── Constants ─── */
const WHATSAPP_URL = "https://wa.me/358466109064";
const EMAIL_URL = "mailto:yassin@elfennir.com";
const BRAND_URL = "https://elfennir.com";

const BRAND_COLORS = {
  primary: "#ff6b00",
  secondary: "#ff8c00",
  dark: "#1a1a2e",
  darkAlt: "#16213e",
} as const;

const FLAGS: Record<LangCode, string> = {
  en: "🇬🇧",
  fi: "🇫🇮",
  sv: "🇸🇪",
  es: "🇪🇸",
  de: "🇩🇪",
  fr: "🇫🇷",
};

const TRANSLATIONS: Record<LangCode, Translation> = {
  en: {
    message:
      "👋 This is a preview! Like what you see? Say YES and I'll build your complete website with all your business details. I work with you until you're 100% satisfied!",
    whatsapp: "WhatsApp",
    email: "Email",
    powered: "Powered by El Fennir AI Agency",
  },
  fi: {
    message:
      "👋 Tämä on esikatselu! Pidätkö näkemästäsi? Sano KYLLÄ ja rakennan sinulle täydellisen verkkosivuston kaikilla yrityksesi tiedoilla. Teen töitä kunnes olet 100% tyytyväinen!",
    whatsapp: "WhatsApp",
    email: "Sähköposti",
    powered: "Powered by El Fennir AI Agency",
  },
  sv: {
    message:
      "👋 Detta är en förhandsvisning! Gillar du vad du ser? Säg JA och jag bygger din kompletta webbplats med alla dina företagsdetaljer. Jag arbetar tills du är 100% nöjd!",
    whatsapp: "WhatsApp",
    email: "E-post",
    powered: "Powered by El Fennir AI Agency",
  },
  es: {
    message:
      "👋 ¡Esta es una vista previa! ¿Te gusta lo que ves? Di SÍ y construiré tu sitio web completo con todos los detalles de tu empresa. ¡Trabajo contigo hasta que estés 100% satisfecho!",
    whatsapp: "WhatsApp",
    email: "Correo",
    powered: "Powered by El Fennir AI Agency",
  },
  de: {
    message:
      "👋 Dies ist eine Vorschau! Gefällt dir was du siehst? Sag JA und ich erstelle deine komplette Website mit allen Geschäftsdetails. Ich arbeite bis du 100% zufrieden bist!",
    whatsapp: "WhatsApp",
    email: "E-Mail",
    powered: "Powered by El Fennir AI Agency",
  },
  fr: {
    message:
      "👋 Ceci est un aperçu ! Vous aimez ce que vous voyez ? Dites OUI et je construirai votre site web complet avec tous les détails de votre entreprise. Je travaille jusqu'à ce que vous soyez 100% satisfait !",
    whatsapp: "WhatsApp",
    email: "E-mail",
    powered: "Powered by El Fennir AI Agency",
  },
};

const LANG_OPTIONS = Object.keys(TRANSLATIONS) as LangCode[];

/* ─── Sub-components ─── */
function LanguageSelector({
  current,
  onSelect,
}: {
  current: LangCode;
  onSelect: (lang: LangCode) => void;
}) {
  return (
    <div className="flex items-center gap-1">
      {LANG_OPTIONS.map((lang) => (
        <button
          key={lang}
          onClick={() => onSelect(lang)}
          className="px-1.5 py-0.5 rounded text-xs transition-all duration-200"
          style={{
            background: current === lang ? BRAND_COLORS.primary : "rgba(255,255,255,0.08)",
            color: current === lang ? "#fff" : "rgba(255,255,255,0.6)",
            fontWeight: current === lang ? 600 : 400,
          }}
          aria-label={`Switch to ${lang.toUpperCase()}`}
        >
          {FLAGS[lang]} {lang.toUpperCase()}
        </button>
      ))}
    </div>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="M22 7l-10 6L2 7" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

function ChatIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z" />
    </svg>
  );
}

/* ─── Main Component ─── */
export function PreviewBubble() {
  const [isExpanded, setIsExpanded] = useState(true);
  const [lang, setLang] = useState<LangCode>("en");

  const t = useMemo(() => TRANSLATIONS[lang], [lang]);

  const handleClose = useCallback(() => setIsExpanded(false), []);
  const handleOpen = useCallback(() => setIsExpanded(true), []);
  const handleLangChange = useCallback((newLang: LangCode) => setLang(newLang), []);

  return (
    <div
      className="fixed z-[9999]"
      style={{ bottom: "24px", right: "24px" }}
    >
      <AnimatePresence mode="wait">
        {isExpanded ? (
          <motion.div
            key="expanded"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="w-[360px] max-w-[calc(100vw-48px)] rounded-2xl overflow-hidden shadow-2xl"
            style={{
              background: `linear-gradient(135deg, ${BRAND_COLORS.dark}ee, ${BRAND_COLORS.darkAlt}ee)`,
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              border: `1px solid ${BRAND_COLORS.primary}40`,
              boxShadow: `0 20px 60px rgba(0,0,0,0.5), 0 0 40px ${BRAND_COLORS.primary}15`,
            }}
          >
            {/* Header */}
            <div
              className="flex items-center justify-between px-4 py-3"
              style={{
                background: `linear-gradient(90deg, ${BRAND_COLORS.primary}, ${BRAND_COLORS.secondary})`,
              }}
            >
              <div className="flex items-center gap-2">
                <motion.div
                  className="w-2.5 h-2.5 rounded-full bg-green-400"
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                />
                <span className="text-white font-semibold text-sm tracking-wide">
                  El Fennir
                </span>
              </div>
              <button
                onClick={handleClose}
                className="text-white/80 hover:text-white transition-colors p-1 rounded-full hover:bg-white/10"
                aria-label="Close preview bubble"
              >
                <CloseIcon />
              </button>
            </div>

            {/* Language Selector */}
            <div className="px-4 pt-3 pb-1">
              <LanguageSelector current={lang} onSelect={handleLangChange} />
            </div>

            {/* Message */}
            <div className="px-4 py-3">
              <motion.p
                key={lang}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2 }}
                className="text-sm leading-relaxed"
                style={{ color: "rgba(255,255,255,0.92)" }}
              >
                {t.message}
              </motion.p>
            </div>

            {/* Action Buttons */}
            <div className="px-4 pb-3 flex gap-2">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-white text-sm font-semibold transition-all duration-200 hover:brightness-110 hover:scale-[1.02] active:scale-[0.98]"
                style={{ background: "#25D366" }}
              >
                <WhatsAppIcon />
                {t.whatsapp}
              </a>
              <a
                href={EMAIL_URL}
                className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-white text-sm font-semibold transition-all duration-200 hover:brightness-110 hover:scale-[1.02] active:scale-[0.98]"
                style={{
                  background: `linear-gradient(135deg, ${BRAND_COLORS.primary}, ${BRAND_COLORS.secondary})`,
                }}
              >
                <EmailIcon />
                {t.email}
              </a>
            </div>

            {/* Footer */}
            <div
              className="px-4 py-2 text-center"
              style={{
                borderTop: "1px solid rgba(255,255,255,0.06)",
                background: "rgba(0,0,0,0.2)",
              }}
            >
              <a
                href={BRAND_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] transition-colors duration-200"
                style={{ color: "rgba(255,255,255,0.35)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = BRAND_COLORS.primary)}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.35)")}
              >
                {t.powered} &middot; elfennir.com
              </a>
            </div>
          </motion.div>
        ) : (
          <motion.button
            key="minimized"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleOpen}
            className="relative w-14 h-14 rounded-full flex items-center justify-center text-white shadow-xl cursor-pointer"
            style={{
              background: `linear-gradient(135deg, ${BRAND_COLORS.primary}, ${BRAND_COLORS.secondary})`,
              boxShadow: `0 4px 20px ${BRAND_COLORS.primary}60`,
            }}
            aria-label="Open preview bubble"
          >
            <ChatIcon />
            {/* Pulse ring */}
            <motion.div
              className="absolute inset-0 rounded-full"
              style={{ border: `2px solid ${BRAND_COLORS.primary}` }}
              animate={{ scale: [1, 1.5], opacity: [0.6, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeOut" }}
            />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}

export default PreviewBubble;
