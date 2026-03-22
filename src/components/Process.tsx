"use client";
import { motion } from "framer-motion";
import {
  MessageSquare,
  FileSearch,
  Paintbrush,
  RefreshCw,
  Rocket,
  HeadphonesIcon,
} from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { ScrollReveal3D, StaggerContainer, staggerItem } from "@/components/ScrollReveal3D";
import { Card3D } from "@/components/Card3D";

const solanaColors = ["#ff6b00", "#00d1ff", "#14f195", "#f971ff"];

export function Process() {
  const { t } = useLanguage();

  const steps = [
    { icon: MessageSquare, num: "01", title: t.process.step1Title, desc: t.process.step1Desc, color: solanaColors[0] },
    { icon: FileSearch, num: "02", title: t.process.step2Title, desc: t.process.step2Desc, color: solanaColors[1] },
    { icon: Paintbrush, num: "03", title: t.process.step3Title, desc: t.process.step3Desc, color: solanaColors[2] },
    { icon: RefreshCw, num: "04", title: t.process.step4Title, desc: t.process.step4Desc, color: solanaColors[3] },
    { icon: Rocket, num: "05", title: t.process.step5Title, desc: t.process.step5Desc, color: solanaColors[0] },
    { icon: HeadphonesIcon, num: "06", title: t.process.step6Title, desc: t.process.step6Desc, color: solanaColors[1] },
  ];

  return (
    <section id="process" className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#ff6b00]/[0.015] to-transparent" />
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-2 text-sm text-[#00d1ff] mb-4"
          >
            <span className="w-10 h-px bg-gradient-to-r from-transparent to-[#00d1ff]/60" />
            {t.process.badge}
            <span className="w-10 h-px bg-gradient-to-l from-transparent to-[#00d1ff]/60" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="font-[var(--font-heading)] text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-white mb-5"
          >
            {t.process.title1}{" "}
            <span className="gradient-text">{t.process.titleHighlight}</span> {t.process.title2}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-slate-400 max-w-xl mx-auto text-lg"
          >
            {t.process.subtitle}
          </motion.p>
        </div>

        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step) => (
            <motion.div key={step.num} variants={staggerItem} style={{ transformPerspective: 800 }}>
              <Card3D className="h-full">
                <div className="sol-card relative p-6 rounded-3xl bg-white/[0.02] border border-white/[0.06] transition-all duration-500 group overflow-hidden h-full">
                  <div className="relative">
                    <div className="flex items-center gap-4 mb-4">
                      <div
                        className="sol-icon w-11 h-11 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform duration-300"
                        style={{ color: step.color }}
                      >
                        <step.icon size={18} />
                      </div>
                      <span className="font-[var(--font-heading)] text-xs font-bold text-slate-600 tracking-wider">
                        {t.process.step} {step.num}
                      </span>
                    </div>
                    <h3 className="font-[var(--font-heading)] text-white font-semibold mb-2">
                      {step.title}
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </Card3D>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
