"use client";
import { motion } from "framer-motion";
import { ExternalLink, ArrowRight, Sparkles, Globe, Eye } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const solanaColors = ["#ff6b00", "#ff8c00", "#ffaa00", "#ff4500"];

export function Portfolio() {
  const { t } = useLanguage();

  const projects = [
    {
      title: t.portfolio.project1Title,
      category: "Auto Repair",
      desc: t.portfolio.project1Desc,
      gradient: "from-[#ff4500]/30 to-[#ff6b00]/20",
      accent: "text-[#ff4500]",
      accentBg: "bg-[#ff4500]/10 border-[#ff4500]/20",
      tags: ["SEO", "Schema.org", "Google Maps", "10+ Services"],
      liveUrl: "/preview-carmaster.html",
      isLive: true,
    },
    {
      title: t.portfolio.project2Title,
      category: "Auto Repair",
      desc: t.portfolio.project2Desc,
      gradient: "from-[#ff6b00]/30 to-[#ff8c00]/20",
      accent: "text-[#ff6b00]",
      accentBg: "bg-[#ff6b00]/10 border-[#ff6b00]/20",
      tags: ["Reviews", "Animations", "Mobile-First"],
      liveUrl: "/preview-ihelp.html",
      isLive: true,
    },
    {
      title: t.portfolio.project3Title,
      category: "Gym & Fitness",
      desc: t.portfolio.project3Desc,
      gradient: "from-[#ffaa00]/30 to-[#ff8c00]/20",
      accent: "text-[#ffaa00]",
      accentBg: "bg-[#ffaa00]/10 border-[#ffaa00]/20",
      tags: ["Memberships", "Schedule", "Lead Gen"],
      liveUrl: "/preview-gymholvi.html",
      isLive: true,
    },
    {
      title: t.portfolio.project4Title,
      category: "Caf\u00e9 & Restaurant",
      desc: t.portfolio.project4Desc,
      gradient: "from-[#ff8c00]/30 to-[#ff6b00]/20",
      accent: "text-[#ff8c00]",
      accentBg: "bg-[#ff8c00]/10 border-[#ff8c00]/20",
      tags: ["Gallery", "Menu", "Mobile-First"],
      liveUrl: null,
      isLive: false,
    },
    {
      title: t.portfolio.project5Title,
      category: "Moroccan Fusion Cuisine",
      desc: t.portfolio.project5Desc,
      gradient: "from-[#ff4500]/30 to-[#ffaa00]/20",
      accent: "text-[#ff4500]",
      accentBg: "bg-[#ff4500]/10 border-[#ff4500]/20",
      tags: ["Branding", "Multi-Location", "Responsive"],
      liveUrl: null,
      isLive: false,
    },
    {
      title: t.portfolio.project6Title,
      category: "Japanese Restaurant",
      desc: t.portfolio.project6Desc,
      gradient: "from-[#ff6b00]/30 to-[#ff4500]/20",
      accent: "text-[#ff6b00]",
      accentBg: "bg-[#ff6b00]/10 border-[#ff6b00]/20",
      tags: ["Restaurant", "Menu", "Reservations"],
      liveUrl: null,
      isLive: false,
    },
    {
      title: t.portfolio.project7Title,
      category: "Beauty & Wellness",
      desc: t.portfolio.project7Desc,
      gradient: "from-[#ffaa00]/30 to-[#ff4500]/20",
      accent: "text-[#ffaa00]",
      accentBg: "bg-[#ffaa00]/10 border-[#ffaa00]/20",
      tags: ["Multilingual", "Booking", "Beauty"],
      liveUrl: null,
      isLive: false,
    },
    {
      title: t.portfolio.project8Title,
      category: "E-Commerce",
      desc: t.portfolio.project8Desc,
      gradient: "from-[#ff8c00]/30 to-[#ffaa00]/20",
      accent: "text-[#ff8c00]",
      accentBg: "bg-[#ff8c00]/10 border-[#ff8c00]/20",
      tags: ["E-Commerce", "Products", "Fast"],
      liveUrl: null,
      isLive: false,
    },
  ];

  return (
    <section id="portfolio" className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#ff6b00]/[0.015] to-transparent" />
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-2 text-sm text-[#ff8c00] mb-4"
          >
            <span className="w-10 h-px bg-gradient-to-r from-transparent to-[#ff8c00]/60" />
            {t.portfolio.badge}
            <span className="w-10 h-px bg-gradient-to-l from-transparent to-[#ff8c00]/60" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="font-[var(--font-heading)] text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-white mb-5"
          >
            {t.portfolio.title1} <span className="gradient-text">{t.portfolio.titleHighlight}</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-slate-400 max-w-2xl mx-auto text-lg"
          >
            {t.portfolio.subtitle}
          </motion.p>

          {/* Stats bar */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-wrap items-center justify-center gap-6 mt-8"
          >
            {[
              { num: "50+", label: t.portfolio.statProjects },
              { num: "100%", label: t.portfolio.statSatisfaction },
              { num: "5+", label: t.portfolio.statIndustries },
            ].map((s) => (
              <div key={s.label} className="flex items-center gap-2 px-4 py-2 bg-white/[0.03] border border-white/[0.06] rounded-full">
                <span className="text-sm font-bold gradient-text">{s.num}</span>
                <span className="text-xs text-slate-500">{s.label}</span>
              </div>
            ))}
          </motion.div>

          {/* Country flags */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: 0.4, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center justify-center gap-3 mt-4"
          >
            <span className="text-xs text-slate-500 font-mono">{t.portfolio.statCountries}</span>
            <div className="flex items-center gap-1.5 text-base">
              <span>&#127467;&#127470;</span>
              <span>&#127464;&#127469;</span>
              <span>&#127466;&#127480;</span>
              <span>&#127462;&#127466;</span>
            </div>
          </motion.div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: 0.06 * i, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="sol-card group relative rounded-3xl overflow-hidden"
            >
              <div className="h-full cursor-default">
                <ProjectCard project={p} t={t} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ delay: 0.5, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mt-14"
        >
          <a
            href="#contact"
            className="sol-btn group inline-flex items-center gap-2.5 px-8 py-3.5 text-white font-semibold text-[15px] transition-all duration-300"
          >
            <span className="relative z-[2]">{t.portfolio.cta}</span>
            <ArrowRight size={14} className="relative z-[2] group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

type ProjectType = {
  title: string;
  category: string;
  desc: string;
  gradient: string;
  accent: string;
  accentBg: string;
  tags: string[];
  liveUrl: string | null;
  isLive: boolean;
};

function ProjectCard({ project: p, t }: { project: ProjectType; t: ReturnType<typeof useLanguage>["t"] }) {
  return (
    <>
      {/* Gradient Background */}
      <div className={`absolute inset-0 bg-gradient-to-br ${p.gradient} opacity-30 group-hover:opacity-50 transition-opacity duration-500`} />
      <div className="absolute inset-0 bg-[#08080f]/60 group-hover:bg-[#08080f]/40 transition-colors duration-500" />

      {/* Content */}
      <div className="relative p-7 h-full flex flex-col min-h-[260px]">
        <div className="flex items-center justify-between mb-5">
          <span className={`inline-flex items-center gap-1.5 text-[11px] font-semibold ${p.accent} uppercase tracking-wider px-3 py-1 ${p.accentBg} border rounded-full`}>
            <Sparkles size={10} />
            {p.category}
          </span>
          <div className="flex items-center gap-2">
            {p.isLive && (
              <span className="inline-flex items-center gap-1 text-[10px] text-[#ffaa00] font-semibold px-2 py-0.5 bg-[#ffaa00]/10 border border-[#ffaa00]/20 rounded-full">
                <Globe size={8} />
                LIVE
              </span>
            )}
            {p.isLive && (
              <div className="w-8 h-8 rounded-full bg-white/[0.04] border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300">
                <ExternalLink size={12} className="text-white" />
              </div>
            )}
          </div>
        </div>

        <h3 className="font-[var(--font-heading)] text-lg font-bold text-white mb-2 group-hover:text-[#ff8c00]/90 transition-colors">
          {p.title}
        </h3>
        <p className="text-slate-400 text-sm leading-relaxed mb-5 flex-grow">
          {p.desc}
        </p>

        <div className="flex flex-wrap gap-2">
          {p.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-0.5 text-[10px] font-semibold text-slate-400 bg-white/[0.04] border border-white/[0.08] rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        {p.isLive && p.liveUrl && (
          <a
            href={p.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#ff8c00] to-[#ff6b00] text-white text-sm font-semibold rounded-xl hover:scale-[1.03] hover:shadow-[0_0_20px_rgba(255,140,0,0.3)] active:scale-[0.98] transition-all duration-300"
          >
            <Eye size={14} />
            View Preview
          </a>
        )}
      </div>

      {/* Border */}
      <div className="absolute inset-0 rounded-3xl border border-white/[0.06] group-hover:border-white/[0.12] transition-colors duration-500 pointer-events-none" />
    </>
  );
}
