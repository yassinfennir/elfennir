"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Award, Globe2, Lightbulb, ArrowRight, GraduationCap, ShieldCheck, BadgeCheck, Code2, Server, Cpu, Database, Braces, Terminal } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const solanaColors = ["#9945ff", "#00d1ff", "#14f195", "#f971ff"];

export function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#9945ff]/[0.015] to-transparent" />
      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 text-sm text-[#00d1ff] mb-4">
            <span className="w-10 h-px bg-gradient-to-r from-transparent to-[#00d1ff]/60" />
            {t.about.badge}
            <span className="w-10 h-px bg-gradient-to-l from-transparent to-[#00d1ff]/60" />
          </div>
          <h2 className="font-[var(--font-heading)] text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-white mb-5">
            {t.about.title1}{" "}
            <span className="gradient-text">{t.about.titleHighlight}</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Full Photo */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-[#9945ff]/[0.08] rounded-3xl blur-3xl" />
            <div className="relative overflow-hidden rounded-3xl border border-white/[0.08]">
              <Image
                src="/images/yassin-v2.png"
                alt="Yassin El Fennir"
                width={600}
                height={750}
                className="w-full h-auto object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
              <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#08080f] to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-white font-bold text-2xl font-[var(--font-heading)]">Yassin El Fennir</h3>
                <p className="text-[#9945ff] text-sm font-medium">{t.about.role}</p>
                <p className="text-slate-400 text-xs mt-1">{t.about.locationLabel}</p>
              </div>
            </div>
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

            {/* Technical Skills */}
            <div className="mb-6">
              <h4 className="text-white text-sm font-semibold mb-3 flex items-center gap-2">
                <Terminal size={14} className="text-[#9945ff]" />
                {t.about.skillsTitle}
              </h4>
              <div className="flex flex-wrap gap-2">
                {[
                  "React", "Next.js", "TypeScript", "JavaScript", "Node.js",
                  "Python", "HTML5", "CSS3", "Tailwind CSS", "PostgreSQL",
                  "MongoDB", "REST APIs", "AI/ML", "SEO", "Git",
                  "Linux", "Docker", "Cloud Hosting",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-[11px] font-medium text-slate-300 bg-white/[0.04] border border-white/[0.08] rounded-full hover:border-[#9945ff]/30 hover:text-white transition-all duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Credentials */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              {[
                { icon: Code2, label: t.about.cred1Label, sub: t.about.cred1Sub, color: solanaColors[0] },
                { icon: Cpu, label: t.about.cred2Label, sub: t.about.cred2Sub, color: solanaColors[1] },
                { icon: ShieldCheck, label: t.about.cred3Label, sub: t.about.cred3Sub, color: solanaColors[2] },
                { icon: Award, label: t.about.cred4Label, sub: t.about.cred4Sub, color: solanaColors[3] },
                { icon: Server, label: t.about.cred5Label, sub: t.about.cred5Sub, color: solanaColors[1] },
                { icon: Database, label: t.about.cred6Label, sub: t.about.cred6Sub, color: solanaColors[0] },
              ].map((item) => (
                <div
                  key={item.label}
                  className="sol-card group relative flex items-center gap-3 p-3 rounded-2xl bg-white/[0.02] border border-white/[0.06] transition-all duration-500 overflow-hidden"
                >
                  <div className="relative">
                    <div
                      className="sol-icon w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ color: item.color }}
                    >
                      <item.icon size={14} />
                    </div>
                  </div>
                  <div className="relative">
                    <span className="text-xs text-white font-medium block leading-tight">{item.label}</span>
                    <span className="text-[10px] text-slate-500">{item.sub}</span>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="sol-btn group inline-flex items-center gap-2.5 px-7 py-3.5 text-white font-semibold text-[15px] transition-all duration-300"
            >
              <span className="relative z-[2]">{t.about.cta}</span>
              <ArrowRight size={14} className="relative z-[2] group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>

        {/* Values Section */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-16">
          {[
            { num: "01", title: t.about.value1Title, desc: t.about.value1Desc, gradient: "from-[#9945ff]/15 to-[#00d1ff]/15" },
            { num: "02", title: t.about.value2Title, desc: t.about.value2Desc, gradient: "from-[#14f195]/15 to-[#00d1ff]/15" },
            { num: "03", title: t.about.value3Title, desc: t.about.value3Desc, gradient: "from-[#9945ff]/15 to-[#f971ff]/15" },
            { num: "04", title: t.about.value4Title, desc: t.about.value4Desc, gradient: "from-[#f971ff]/15 to-[#00d1ff]/15" },
          ].map((v, i) => (
            <motion.div
              key={v.num}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: 0.1 * i, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="sol-card group relative p-6 rounded-3xl bg-white/[0.02] border border-white/[0.06] transition-all duration-500 overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${v.gradient} opacity-0 group-hover:opacity-25 transition-opacity duration-500`} />
              <div className="relative">
                <div className="flex items-center gap-4 mb-2">
                  <span className="text-xs font-bold text-slate-600 font-[var(--font-heading)] tracking-wider">{v.num}</span>
                  <h3 className="text-white font-semibold">{v.title}</h3>
                </div>
                <p className="text-slate-500 text-sm leading-relaxed pl-10">{v.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
