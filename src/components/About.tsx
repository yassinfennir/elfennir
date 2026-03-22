"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Award, ArrowRight, Code2, Server, Cpu, Database, ShieldCheck, Terminal } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const solanaColors = ["#ff6b00", "#ff8c00", "#ffaa00", "#ff4500"];

export function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#ff6b00]/[0.015] to-transparent" />

      {/* Floating emojis */}
      <motion.div
        animate={{ y: [0, -15, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute top-20 right-[15%] text-3xl pointer-events-none opacity-40"
      >🧑‍💻</motion.div>
      <motion.div
        animate={{ y: [0, -10, 0], rotate: [0, -8, 0] }}
        transition={{ duration: 6, repeat: Infinity, delay: 1 }}
        className="absolute bottom-32 left-[10%] text-2xl pointer-events-none opacity-30"
      >🇫🇮</motion.div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 text-sm text-[#ff8c00] mb-4">
            <span className="w-10 h-px bg-gradient-to-r from-transparent to-[#ff8c00]/60" />
            {t.about.badge}
            <span className="w-10 h-px bg-gradient-to-l from-transparent to-[#ff8c00]/60" />
          </div>
          <h2 className="font-[var(--font-heading)] text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold text-white mb-5">
            {t.about.title1}{" "}
            <span className="gradient-text">{t.about.titleHighlight}</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - BIG Photo with cartoon frame */}
          <motion.div
            initial={{ opacity: 0, x: -30, rotate: -2 }}
            whileInView={{ opacity: 1, x: 0, rotate: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
            className="relative"
          >
            {/* Glow blob */}
            <div className="absolute -inset-8 bg-gradient-to-br from-[#ff6b00]/15 via-[#ff8c00]/10 to-[#ffaa00]/15 rounded-[48px] blur-[50px]" />

            {/* Cartoon thick gradient border */}
            <div className="relative rounded-[36px] p-[4px] bg-gradient-to-br from-[#ff6b00] via-[#ff8c00] to-[#ffaa00]">
              <div className="rounded-[33px] overflow-hidden bg-[#0a0a15]">
                <Image
                  src="/images/yassin.jpg"
                  alt="Yassin El Fennir"
                  width={600}
                  height={750}
                  className="w-full h-auto object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
                <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#0a0a15] to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-white font-extrabold text-2xl font-[var(--font-heading)]">Yassin El Fennir</h3>
                  <p className="text-[#ff6b00] text-sm font-bold">{t.about.role}</p>
                  <p className="text-slate-400 text-xs mt-1 flex items-center gap-1.5">
                    📍 {t.about.locationLabel}
                  </p>
                </div>
              </div>
            </div>

            {/* Decorative sparkles */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              className="absolute -top-3 -right-3 text-2xl"
            >✨</motion.div>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2.5, repeat: Infinity }}
              className="absolute -bottom-2 -left-3 text-xl"
            >💫</motion.div>
          </motion.div>

          {/* Right - Bio + Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-slate-400 leading-relaxed mb-4 text-[15px]">
              {t.about.bio1}
            </p>
            <p className="text-slate-400 leading-relaxed mb-4 text-[15px]">
              {t.about.bio2}
            </p>
            <p className="text-slate-400 leading-relaxed mb-8 text-[15px]">
              {t.about.bio3}
            </p>

            {/* Technical Skills — Cartoon pill badges */}
            <div className="mb-6">
              <h4 className="text-white text-sm font-bold mb-3 flex items-center gap-2">
                <Terminal size={14} className="text-[#ff6b00]" />
                {t.about.skillsTitle}
              </h4>
              <div className="flex flex-wrap gap-2">
                {[
                  "React", "Next.js", "TypeScript", "JavaScript", "Node.js",
                  "Python", "HTML5", "CSS3", "Tailwind CSS", "PostgreSQL",
                  "MongoDB", "REST APIs", "AI/ML", "SEO", "Git",
                  "Linux", "Docker", "Cloud Hosting",
                ].map((skill) => (
                  <motion.span
                    key={skill}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="px-3 py-1.5 text-[11px] font-bold text-slate-300 bg-white/[0.04] border-2 border-white/[0.08] rounded-xl hover:border-[#ff6b00]/30 hover:text-white hover:bg-[#ff6b00]/10 transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Credentials — Cartoon cards */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              {[
                { icon: Code2, label: t.about.cred1Label, sub: t.about.cred1Sub, color: solanaColors[0] },
                { icon: Cpu, label: t.about.cred2Label, sub: t.about.cred2Sub, color: solanaColors[1] },
                { icon: ShieldCheck, label: t.about.cred3Label, sub: t.about.cred3Sub, color: solanaColors[2] },
                { icon: Award, label: t.about.cred4Label, sub: t.about.cred4Sub, color: solanaColors[3] },
                { icon: Server, label: t.about.cred5Label, sub: t.about.cred5Sub, color: solanaColors[1] },
                { icon: Database, label: t.about.cred6Label, sub: t.about.cred6Sub, color: solanaColors[0] },
              ].map((item) => (
                <motion.div
                  key={item.label}
                  whileHover={{ scale: 1.04, y: -3 }}
                  className="group relative flex items-center gap-3 p-3 rounded-2xl bg-white/[0.03] border-2 border-white/[0.06] hover:border-white/[0.12] transition-all duration-300 cartoon-shadow"
                >
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ color: item.color, background: `${item.color}15` }}
                  >
                    <item.icon size={14} />
                  </div>
                  <div>
                    <span className="text-xs text-white font-bold block leading-tight">{item.label}</span>
                    <span className="text-[10px] text-slate-500">{item.sub}</span>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.97 }}
              className="sol-btn group inline-flex items-center gap-2.5 px-7 py-3.5 text-white font-bold text-[15px] rounded-2xl shadow-[0_6px_30px_rgba(255,107,0,0.3)]"
            >
              <span className="relative z-[2]">{t.about.cta}</span>
              <ArrowRight size={14} className="relative z-[2] group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </motion.div>
        </div>

        {/* Values Section — Cartoon cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-16">
          {[
            { num: "01", title: t.about.value1Title, desc: t.about.value1Desc, emoji: "🚀", gradient: "from-[#ff6b00]/15 to-[#ff8c00]/15" },
            { num: "02", title: t.about.value2Title, desc: t.about.value2Desc, emoji: "⚡", gradient: "from-[#ffaa00]/15 to-[#ff8c00]/15" },
            { num: "03", title: t.about.value3Title, desc: t.about.value3Desc, emoji: "🎯", gradient: "from-[#ff6b00]/15 to-[#ff4500]/15" },
            { num: "04", title: t.about.value4Title, desc: t.about.value4Desc, emoji: "🤝", gradient: "from-[#ff4500]/15 to-[#ff8c00]/15" },
          ].map((v, i) => (
            <motion.div
              key={v.num}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: 0.1 * i, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ scale: 1.04, y: -5 }}
              className="group relative p-6 rounded-3xl bg-white/[0.02] border-2 border-white/[0.06] hover:border-white/[0.12] transition-all duration-500 overflow-hidden cartoon-shadow"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${v.gradient} opacity-0 group-hover:opacity-30 transition-opacity duration-500`} />
              <div className="relative">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">{v.emoji}</span>
                  <h3 className="text-white font-bold">{v.title}</h3>
                </div>
                <p className="text-slate-500 text-sm leading-relaxed">{v.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
