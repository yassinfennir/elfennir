"use client";
import { motion } from "framer-motion";
import { AlertTriangle, TrendingDown, Clock, EyeOff, ArrowRight, CheckCircle2, Zap, Shield, Sparkles, Bot, Coffee } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { ScrollReveal3D } from "@/components/ScrollReveal3D";
import { Card3D } from "@/components/Card3D";

export function Problem() {
  const { t } = useLanguage();

  const problems = [
    {
      icon: AlertTriangle,
      title: t.problem.problem1Title,
      desc: t.problem.problem1Desc,
      color: "text-red-400/80",
      bg: "bg-red-500/10 border-red-500/15",
    },
    {
      icon: TrendingDown,
      title: t.problem.problem2Title,
      desc: t.problem.problem2Desc,
      color: "text-orange-400/80",
      bg: "bg-orange-500/10 border-orange-500/15",
    },
    {
      icon: Clock,
      title: t.problem.problem3Title,
      desc: t.problem.problem3Desc,
      color: "text-amber-400/80",
      bg: "bg-amber-500/10 border-amber-500/15",
    },
    {
      icon: EyeOff,
      title: t.problem.problem4Title,
      desc: t.problem.problem4Desc,
      color: "text-rose-400/80",
      bg: "bg-rose-500/10 border-rose-500/15",
    },
  ];

  const solutions = [
    { icon: Sparkles, text: t.problem.solution1 },
    { icon: Zap, text: t.problem.solution2 },
    { icon: Shield, text: t.problem.solution3 },
    { icon: Bot, text: t.problem.solution4 },
    { icon: Coffee, text: t.problem.solution5 },
    { icon: CheckCircle2, text: t.problem.solution6 },
  ];

  return (
    <section className="relative py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Problem */}
          <ScrollReveal3D direction="left" rotateY={8} rotateX={5}>
            <div className="inline-flex items-center gap-2 text-sm text-[#f971ff] mb-4">
              <span className="w-10 h-px bg-gradient-to-r from-transparent to-[#f971ff]/60" />
              {t.problem.badge}
            </div>
            <h2 className="font-[var(--font-heading)] text-3xl sm:text-4xl font-bold text-white mb-6">
              {t.problem.title1}{" "}
              <span className="text-[#f971ff]">{t.problem.titleHighlight}</span>{" "}
              {t.problem.title2}
            </h2>
            <p className="text-slate-400 leading-relaxed mb-8 text-lg">
              {t.problem.description}
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {problems.map((p) => (
                <Card3D key={p.title} glowColor="249,113,255">
                  <div className="sol-card group p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] transition-all duration-300">
                    <div className={`w-9 h-9 rounded-lg ${p.bg} border flex items-center justify-center mb-3`}>
                      <p.icon size={16} className={p.color} />
                    </div>
                    <h3 className="text-white font-medium text-sm mb-1">{p.title}</h3>
                    <p className="text-slate-500 text-xs leading-relaxed">{p.desc}</p>
                  </div>
                </Card3D>
              ))}
            </div>
          </ScrollReveal3D>

          {/* Right - Solution */}
          <ScrollReveal3D direction="right" rotateY={-8} rotateX={5} className="relative">
            {/* Glow behind card */}
            <div className="absolute -inset-4 bg-[#ff6b00]/[0.05] rounded-3xl blur-2xl" />

            <div className="relative p-8 sm:p-10 rounded-2xl bg-gradient-to-br from-[#ff6b00]/[0.06] via-[#00d1ff]/[0.03] to-[#14f195]/[0.06] border border-[#ff6b00]/[0.12] backdrop-blur-sm">
              <div className="inline-flex items-center gap-2 text-sm text-[#14f195] mb-4">
                <span className="w-10 h-px bg-gradient-to-r from-transparent to-[#14f195]/60" />
                {t.problem.solutionBadge}
              </div>
              <h3 className="font-[var(--font-heading)] text-2xl sm:text-3xl font-bold text-white mb-4">
                {t.problem.solutionTitle}
              </h3>
              <p className="text-slate-400 leading-relaxed mb-8">
                {t.problem.solutionDesc}
              </p>
              <ul className="space-y-4 mb-8">
                {solutions.map((item, i) => (
                  <motion.li
                    key={item.text}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ delay: 0.4 + 0.08 * i, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    className="flex items-start gap-3 text-sm"
                  >
                    <div className="w-5 h-5 rounded-full bg-[#14f195]/10 border border-[#14f195]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <item.icon size={10} className="text-[#14f195]" />
                    </div>
                    <span className="text-slate-300">{item.text}</span>
                  </motion.li>
                ))}
              </ul>
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 text-[#14f195] hover:text-[#00d1ff] text-sm font-medium transition-colors"
              >
                {t.problem.solutionCta}
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </ScrollReveal3D>
        </div>
      </div>
    </section>
  );
}
