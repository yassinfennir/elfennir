"use client";
import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { ArrowRight, Phone } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import LanguageToggle from "@/components/LanguageToggle";

const smoothEase = [0.22, 1, 0.36, 1] as const;

export function Navbar() {
  const { t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const navLinks = [
    { label: t.nav.services, href: "#services" },
    { label: t.nav.pricing, href: "#pricing" },
    { label: t.nav.process, href: "#process" },
    { label: t.nav.portfolio, href: "#portfolio" },
    { label: t.nav.about, href: "#about" },
    { label: t.nav.certificates, href: "/certificates" },
    { label: t.nav.contact, href: "#contact" },
  ];

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const closeMenu = useCallback(() => setOpen(false), []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          scrolled
            ? "bg-[#08080f]/80 backdrop-blur-2xl border-b border-white/[0.06] shadow-[0_1px_40px_rgba(0,0,0,0.3)]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-[72px] flex items-center justify-between">
          {/* Logo — Orange Y logo + text */}
          <a href="/" className="flex items-center gap-2.5 group relative z-[60]">
            <img src="/images/logo.png" alt="El Fennir" width={36} height={36} className="flex-shrink-0 rounded-lg" />
            <span className="font-[var(--font-heading)] font-extrabold text-[1.3rem] tracking-tight leading-tight text-white">
              EL FENNIR
            </span>
            <span className="hidden sm:inline-block text-[10px] font-mono text-[#ff6b00] bg-[#ff6b00]/10 border border-[#ff6b00]/20 px-2 py-0.5 rounded-full tracking-wider font-bold">
              AGENCY
            </span>
          </a>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-7">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-[13px] text-slate-400 hover:text-white transition-colors duration-300 animated-underline"
              >
                {l.label}
              </a>
            ))}
            <LanguageToggle />
            <a
              href="#contact"
              className="group sol-btn inline-flex items-center gap-2 px-5 py-2.5 text-white text-sm font-medium transition-all duration-300"
            >
              <span className="relative z-[2]">{t.nav.bookCall}</span>
              <ArrowRight size={14} className="relative z-[2]" />
            </a>
          </div>

          {/* Mobile Toggle — Apple-style animated hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden relative z-[60] w-10 h-10 flex items-center justify-center rounded-full transition-colors duration-300"
            aria-label="Menu"
          >
            <div className="w-[18px] h-[14px] relative flex flex-col justify-between">
              <motion.span
                animate={open ? { rotate: 45, y: 6, width: 18 } : { rotate: 0, y: 0, width: 18 }}
                transition={{ duration: 0.4, ease: smoothEase }}
                className="block h-[1.5px] bg-white rounded-full origin-center"
              />
              <motion.span
                animate={open ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
                transition={{ duration: 0.25 }}
                className="block h-[1.5px] bg-white rounded-full"
              />
              <motion.span
                animate={open ? { rotate: -45, y: -6, width: 18 } : { rotate: 0, y: 0, width: 14 }}
                transition={{ duration: 0.4, ease: smoothEase }}
                className="block h-[1.5px] bg-white rounded-full origin-center ml-auto"
              />
            </div>
          </button>
        </div>
      </nav>

      {/* ─── Apple-Style Full Screen Mobile Menu ─── */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: smoothEase }}
            className="fixed inset-0 z-[55] lg:hidden"
          >
            {/* Backdrop blur overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 bg-[#08080f]/95 backdrop-blur-3xl"
            />

            {/* Menu content */}
            <div className="relative h-full flex flex-col justify-center px-8 pb-24 pt-24">
              {/* Navigation links — staggered Apple animation */}
              <nav className="flex flex-col gap-1">
                {navLinks.map((l, i) => (
                  <motion.a
                    key={l.href}
                    href={l.href}
                    onClick={closeMenu}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{
                      duration: 0.5,
                      delay: 0.05 + i * 0.05,
                      ease: smoothEase,
                    }}
                    className="group flex items-center justify-between py-[14px] border-b border-white/[0.04] transition-colors duration-300"
                  >
                    <span className="text-[1.6rem] font-[var(--font-heading)] font-semibold text-white/90 group-hover:text-white group-active:text-[#9945ff] transition-colors duration-300">
                      {l.label}
                    </span>
                    <ArrowRight
                      size={16}
                      className="text-white/20 group-hover:text-white/60 group-hover:translate-x-1 transition-all duration-300"
                    />
                  </motion.a>
                ))}
              </nav>

              {/* CTA — Single clean button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.5, delay: 0.4, ease: smoothEase }}
                className="mt-10 flex flex-col gap-3"
              >
                <a
                  href="https://wa.me/358466109064"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMenu}
                  className="sol-btn inline-flex items-center justify-center gap-2.5 px-6 py-4 text-white text-[15px] font-semibold rounded-2xl"
                >
                  <Phone size={16} />
                  <span>{t.nav.whatsappMessage}</span>
                </a>
              </motion.div>

              {/* Bottom info */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="absolute bottom-8 left-8 right-8"
              >
                <div className="flex items-center justify-between text-[11px] text-white/20">
                  <span>elfennir.com</span>
                  <span>{t.nav.location}</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
