"use client";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Award,
  Lock,
  Cpu,
  Globe2,
  BadgeCheck,
} from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const solanaColors = ["#ff6b00", "#ff8c00", "#ffaa00", "#ff4500"];

/* ─── Professional Badge SVG Icons ─── */
const PlatinumBadgeSvg = () => (
  <svg viewBox="0 0 40 40" className="w-9 h-9" fill="none">
    <circle cx="20" cy="20" r="18" stroke="#FFD700" strokeWidth="2" fill="#FFD700" fillOpacity="0.1" />
    <circle cx="20" cy="20" r="14" stroke="#FFD700" strokeWidth="1" fill="none" />
    <path d="M20 8l3.09 6.26L30 15.27l-5 4.87L26.18 27 20 23.77 13.82 27 15 20.14l-5-4.87 6.91-1.01L20 8z" fill="#FFD700" />
    <text x="20" y="35" textAnchor="middle" fill="#FFD700" fontSize="5" fontWeight="bold" fontFamily="system-ui">AAA</text>
  </svg>
);

const ISOBadgeSvg = () => (
  <svg viewBox="0 0 40 40" className="w-9 h-9" fill="none">
    <rect x="3" y="3" width="34" height="34" rx="6" stroke="#00D1FF" strokeWidth="2" fill="#00D1FF" fillOpacity="0.08" />
    <path d="M12 14h16M12 20h16M12 26h10" stroke="#00D1FF" strokeWidth="1.5" strokeLinecap="round" />
    <circle cx="30" cy="26" r="4" fill="#00D1FF" fillOpacity="0.3" stroke="#00D1FF" strokeWidth="1.5" />
    <path d="M28.5 26l1 1 2-2" stroke="#00D1FF" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    <text x="20" y="11" textAnchor="middle" fill="#00D1FF" fontSize="5" fontWeight="bold" fontFamily="system-ui">ISO</text>
  </svg>
);

const GDPRBadgeSvg = () => (
  <svg viewBox="0 0 40 40" className="w-9 h-9" fill="none">
    <path d="M20 4l14 6v10c0 8-6 14-14 16C12 34 6 28 6 20V10l14-6z" stroke="#14F195" strokeWidth="2" fill="#14F195" fillOpacity="0.08" />
    <path d="M16 20l3 3 6-6" stroke="#14F195" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const SSLBadgeSvg = () => (
  <svg viewBox="0 0 40 40" className="w-9 h-9" fill="none">
    <rect x="10" y="16" width="20" height="16" rx="3" stroke="#ff8c00" strokeWidth="2" fill="#ff8c00" fillOpacity="0.08" />
    <path d="M14 16v-4a6 6 0 0112 0v4" stroke="#ff8c00" strokeWidth="2" strokeLinecap="round" />
    <circle cx="20" cy="25" r="2.5" fill="#ff8c00" />
    <path d="M20 27.5v3" stroke="#ff8c00" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const PerformanceBadgeSvg = () => (
  <svg viewBox="0 0 40 40" className="w-9 h-9" fill="none">
    <circle cx="20" cy="22" r="14" stroke="#9945FF" strokeWidth="2" fill="#9945FF" fillOpacity="0.08" />
    <path d="M13 22a7 7 0 0114 0" stroke="#9945FF" strokeWidth="2" strokeLinecap="round" />
    <path d="M20 22l4-6" stroke="#9945FF" strokeWidth="2.5" strokeLinecap="round" />
    <circle cx="20" cy="22" r="2" fill="#9945FF" />
    <text x="20" y="32" textAnchor="middle" fill="#9945FF" fontSize="4.5" fontWeight="bold" fontFamily="system-ui">100/100</text>
  </svg>
);

const SatisfactionBadgeSvg = () => (
  <svg viewBox="0 0 40 40" className="w-9 h-9" fill="none">
    <circle cx="20" cy="20" r="16" stroke="#ff4500" strokeWidth="2" fill="#ff4500" fillOpacity="0.08" />
    <path d="M14 16l2 2 4-4" stroke="#ff4500" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M14 24l2 2 4-4" stroke="#ff4500" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M26 16h4M26 20h4M26 24h4" stroke="#ff4500" strokeWidth="1.5" strokeLinecap="round" />
    <text x="20" y="36" textAnchor="middle" fill="#ff4500" fontSize="4" fontWeight="bold" fontFamily="system-ui">5★</text>
  </svg>
);

/* ─── SVG Logo Icons for the marquee ─── */
const techLogosWithSvg = [
  {
    name: "React",
    svg: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
        <circle cx="12" cy="12" r="2" fill="#61DAFB" />
        <ellipse cx="12" cy="12" rx="9" ry="3.5" stroke="#61DAFB" strokeWidth="0.8" />
        <ellipse cx="12" cy="12" rx="9" ry="3.5" stroke="#61DAFB" strokeWidth="0.8" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="9" ry="3.5" stroke="#61DAFB" strokeWidth="0.8" transform="rotate(120 12 12)" />
      </svg>
    ),
    color: "#61DAFB",
  },
  {
    name: "Next.js",
    svg: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="white">
        <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm-1.5 14.5v-9l7.5 9h-2.25l-5.25-6.3v6.3H9.5z" />
      </svg>
    ),
    color: "#ffffff",
  },
  {
    name: "TypeScript",
    svg: (
      <svg viewBox="0 0 24 24" className="w-5 h-5">
        <rect width="24" height="24" rx="3" fill="#3178C6" />
        <text x="12" y="16" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold" fontFamily="system-ui">TS</text>
      </svg>
    ),
    color: "#3178C6",
  },
  {
    name: "n8n",
    svg: (
      <svg viewBox="0 0 24 24" className="w-5 h-5">
        <rect width="24" height="24" rx="5" fill="#EA4B71" />
        <text x="12" y="16" textAnchor="middle" fill="white" fontSize="9" fontWeight="bold" fontFamily="system-ui">n8n</text>
      </svg>
    ),
    color: "#EA4B71",
  },
  {
    name: "Tailwind CSS",
    svg: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="#06B6D4">
        <path d="M12 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.3.74 1.9 1.35.98 1 2.12 2.15 4.6 2.15 2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.9-1.35C15.62 7.15 14.48 6 12 6zM7 12c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.3.74 1.9 1.35C8.38 16.85 9.52 18 12 18c2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.9-1.35C10.62 13.15 9.48 12 7 12z" />
      </svg>
    ),
    color: "#06B6D4",
  },
  {
    name: "Node.js",
    svg: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="#339933">
        <path d="M12 2L3 7v10l9 5 9-5V7l-9-5zm0 2.18L18.36 7.5 12 10.82 5.64 7.5 12 4.18zM5 9.08l6 3.33v6.67L5 15.75V9.08zm8 10v-6.67l6-3.33v6.67l-6 3.33z" />
      </svg>
    ),
    color: "#339933",
  },
  {
    name: "Python",
    svg: (
      <svg viewBox="0 0 24 24" className="w-5 h-5">
        <path d="M9.5 2C6.46 2 6 3.33 6 3.33L6.01 6H9.5v.5H4S2 6.07 2 9.5s1.74 3.32 1.74 3.32H5v-1.6s-.06-1.74 1.72-1.74h3.06s1.64.03 1.64-1.58V4.6S11.6 2 9.5 2z" fill="#3776AB" />
        <path d="M14.5 22c3.04 0 3.5-1.33 3.5-1.33L17.99 18H14.5v-.5H20s2 .43 2-3s-1.74-3.32-1.74-3.32H19v1.6s.06 1.74-1.72 1.74h-3.06s-1.64-.03-1.64 1.58v3.3S12.4 22 14.5 22z" fill="#FFD43B" />
      </svg>
    ),
    color: "#FFD43B",
  },
  {
    name: "OpenAI",
    svg: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="white">
        <path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073z" />
      </svg>
    ),
    color: "#ffffff",
  },
  {
    name: "Netlify",
    svg: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="#00C7B7">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="#00C7B7" strokeWidth="1.5" fill="none" />
      </svg>
    ),
    color: "#00C7B7",
  },
  {
    name: "Stripe",
    svg: (
      <svg viewBox="0 0 24 24" className="w-5 h-5">
        <rect width="24" height="24" rx="4" fill="#635BFF" />
        <text x="12" y="16" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold" fontFamily="system-ui">S</text>
      </svg>
    ),
    color: "#635BFF",
  },
  {
    name: "Docker",
    svg: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="#2496ED">
        <path d="M13 3h-2v2h2V3zm-4 0H7v2h2V3zM5 3H3v2h2V3zm8 4h-2v2h2V7zm-4 0H7v2h2V7zM5 7H3v2h2V7zm12 0h-2v2h2V7zm-4 4H9v2h4v-2zm-8 0H3v2h2v-2zm4 0H7v2h2v-2z" />
      </svg>
    ),
    color: "#2496ED",
  },
  {
    name: "Vercel",
    svg: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="white">
        <path d="M12 2L22 20H2L12 2z" />
      </svg>
    ),
    color: "#ffffff",
  },
  {
    name: "PostgreSQL",
    svg: (
      <svg viewBox="0 0 24 24" className="w-5 h-5">
        <rect width="24" height="24" rx="4" fill="#4169E1" />
        <text x="12" y="16" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold" fontFamily="system-ui">PG</text>
      </svg>
    ),
    color: "#4169E1",
  },
  {
    name: "Supabase",
    svg: (
      <svg viewBox="0 0 24 24" className="w-5 h-5">
        <path d="M13.7 21.2c-.4.5-1.3.2-1.3-.5V13h8.6c.8 0 1.3.9.8 1.5L13.7 21.2z" fill="#3ECF8E" />
        <path d="M10.3 2.8c.4-.5 1.3-.2 1.3.5V11H3c-.8 0-1.3-.9-.8-1.5L10.3 2.8z" fill="#3ECF8E" />
      </svg>
    ),
    color: "#3ECF8E",
  },
  {
    name: "Framer Motion",
    svg: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="white">
        <path d="M4 0h16v8h-8zM4 8h8l8 8H4zM4 16h8v8z" />
      </svg>
    ),
    color: "#ffffff",
  },
  {
    name: "Google Cloud",
    svg: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="#4285F4">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
      </svg>
    ),
    color: "#4285F4",
  },
];

export function TrustBadges() {
  const { t } = useLanguage();

  const badges = [
    {
      svgIcon: <PlatinumBadgeSvg />,
      title: "Platinum AAA Certified",
      desc: t.trustBadges.badge1Desc,
      color: "#FFD700",
      borderColor: "border-yellow-500/20",
      bgGlow: "bg-yellow-500/5",
    },
    {
      svgIcon: <ISOBadgeSvg />,
      title: "ISO 9001 Quality",
      desc: t.trustBadges.badge2Desc,
      color: "#00D1FF",
      borderColor: "border-cyan-500/20",
      bgGlow: "bg-cyan-500/5",
    },
    {
      svgIcon: <GDPRBadgeSvg />,
      title: "GDPR & Data Protection",
      desc: t.trustBadges.badge3Desc,
      color: "#14F195",
      borderColor: "border-green-500/20",
      bgGlow: "bg-green-500/5",
    },
    {
      svgIcon: <SSLBadgeSvg />,
      title: "SSL & Secure Development",
      desc: t.trustBadges.badge4Desc,
      color: "#ff8c00",
      borderColor: "border-orange-500/20",
      bgGlow: "bg-orange-500/5",
    },
    {
      svgIcon: <PerformanceBadgeSvg />,
      title: "100/100 Performance",
      desc: t.trustBadges.badge5Desc,
      color: "#9945FF",
      borderColor: "border-purple-500/20",
      bgGlow: "bg-purple-500/5",
    },
    {
      svgIcon: <SatisfactionBadgeSvg />,
      title: "5-Star Satisfaction",
      desc: t.trustBadges.badge6Desc,
      color: "#ff4500",
      borderColor: "border-red-500/20",
      bgGlow: "bg-red-500/5",
    },
  ];

  return (
    <section className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#ff6b00]/[0.02] to-transparent" />
      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-2 text-sm text-[#ff8c00] mb-4"
          >
            <span className="w-10 h-px bg-gradient-to-r from-transparent to-[#ff8c00]/60" />
            {t.trustBadges.badge}
            <span className="w-10 h-px bg-gradient-to-l from-transparent to-[#ff8c00]/60" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="font-[var(--font-heading)] text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-white mb-5"
          >
            {t.trustBadges.title1}{" "}
            <span className="gradient-text">{t.trustBadges.titleHighlight}</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-slate-400 max-w-2xl mx-auto text-lg"
          >
            {t.trustBadges.subtitle}
          </motion.p>
        </div>

        {/* Certificate Badges */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {badges.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: 0.06 * i, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className={`sol-card group relative p-6 rounded-2xl bg-white/[0.02] border ${b.borderColor} hover:${b.bgGlow} transition-all duration-500 overflow-hidden`}
            >
              <div className="relative flex flex-col items-center text-center gap-3">
                <div className="flex-shrink-0 group-hover:scale-110 transition-all duration-300">
                  {b.svgIcon}
                </div>
                <div>
                  <h3 className="text-white font-bold text-sm mb-1.5" style={{ color: b.color }}>
                    {b.title}
                  </h3>
                  <p className="text-slate-500 text-xs leading-relaxed">
                    {b.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Technology Stack — Marquee with SVG Logos */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center"
        >
          <p className="text-xs uppercase tracking-[3px] text-slate-600 mb-6 font-medium">
            {t.trustBadges.techLabel}
          </p>
          <div className="relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#08080f] to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#08080f] to-transparent z-10" />
            <div className="flex animate-marquee whitespace-nowrap">
              {[...techLogosWithSvg, ...techLogosWithSvg].map((tech, i) => (
                <span
                  key={`${tech.name}-${i}`}
                  className="mx-2 px-4 py-2.5 text-xs text-slate-400 bg-white/[0.03] border border-white/[0.06] rounded-full hover:border-white/[0.15] hover:text-white transition-all duration-200 inline-flex items-center gap-2 group cursor-default"
                >
                  <span className="flex-shrink-0 opacity-70 group-hover:opacity-100 transition-opacity">
                    {tech.svg}
                  </span>
                  {tech.name}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
