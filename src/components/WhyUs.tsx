"use client";
import { motion } from "framer-motion";
import {
  Zap,
  Shield,
  TrendingUp,
  Smartphone,
  Bot,
  Users,
  ArrowRight,
} from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const solanaColors = ["#9945ff", "#00d1ff", "#14f195", "#f971ff"];

export function WhyUs() {
  const { t } = useLanguage();

  const points = [
    { icon: Zap, title: t.whyUs.point1Title, desc: t.whyUs.point1Desc, color: solanaColors[3] },
    { icon: Shield, title: t.whyUs.point2Title, desc: t.whyUs.point2Desc, color: solanaColors[0] },
    { icon: TrendingUp, title: t.whyUs.point3Title, desc: t.whyUs.point3Desc, color: solanaColors[2] },
    { icon: Smartphone, title: t.whyUs.point4Title, desc: t.whyUs.point4Desc, color: solanaColors[1] },
    { icon: Bot, title: t.whyUs.point5Title, desc: t.whyUs.point5Desc, color: solanaColors[3] },
    { icon: Users, title: t.whyUs.point6Title, desc: t.whyUs.point6Desc, color: solanaColors[0] },
  ];

  return (
    <section className="relative py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="inline-flex items-center gap-2 text-sm text-[#00d1ff] mb-4"
            >
              <span className="w-10 h-px bg-gradient-to-r from-transparent to-[#00d1ff]/60" />
              {t.whyUs.badge}
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="font-[var(--font-heading)] text-3xl sm:text-4xl font-bold text-white mb-6"
            >
              {t.whyUs.title1}{" "}
              <span className="gradient-text">{t.whyUs.titleHighlight}</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="text-slate-400 leading-relaxed mb-8 text-lg"
            >
              {t.whyUs.subtitle}
            </motion.p>
            <motion.a
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              href="#contact"
              className="sol-btn group inline-flex items-center gap-2.5 px-7 py-3.5 text-white font-semibold text-[15px] transition-all duration-300"
            >
              <span className="relative z-[2]">{t.whyUs.cta}</span>
              <ArrowRight size={15} className="relative z-[2] group-hover:translate-x-0.5 transition-transform" />
            </motion.a>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {points.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: 0.06 * i, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="sol-card group relative p-5 rounded-3xl bg-white/[0.02] border border-white/[0.06] transition-all duration-500 overflow-hidden"
              >
                <div className="relative">
                  <div
                    className="sol-icon w-10 h-10 rounded-xl flex items-center justify-center mb-3 transition-all duration-300"
                    style={{ color: p.color }}
                  >
                    <p.icon size={18} />
                  </div>
                  <h3 className="text-white font-medium text-sm mb-1">{p.title}</h3>
                  <p className="text-slate-500 text-xs leading-relaxed">{p.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
