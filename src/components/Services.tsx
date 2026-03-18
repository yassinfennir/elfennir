"use client";
import { motion } from "framer-motion";
import {
  Globe,
  RefreshCw,
  Bot,
  Target,
  CalendarCheck,
  Search,
  Smartphone,
  Headphones,
} from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const solanaColors = ["#9945ff", "#00d1ff", "#14f195", "#f971ff"];

export function Services() {
  const { t } = useLanguage();

  const services = [
    { icon: Globe, title: t.services.service1Title, desc: t.services.service1Desc, color: solanaColors[0] },
    { icon: RefreshCw, title: t.services.service2Title, desc: t.services.service2Desc, color: solanaColors[1] },
    { icon: Bot, title: t.services.service3Title, desc: t.services.service3Desc, color: solanaColors[2] },
    { icon: Target, title: t.services.service4Title, desc: t.services.service4Desc, color: solanaColors[3] },
    { icon: CalendarCheck, title: t.services.service5Title, desc: t.services.service5Desc, color: solanaColors[0] },
    { icon: Search, title: t.services.service6Title, desc: t.services.service6Desc, color: solanaColors[1] },
    { icon: Smartphone, title: t.services.service7Title, desc: t.services.service7Desc, color: solanaColors[2] },
    { icon: Headphones, title: t.services.service8Title, desc: t.services.service8Desc, color: solanaColors[3] },
  ];

  return (
    <section id="services" className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#9945ff]/[0.015] to-transparent" />
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
            {t.services.badge}
            <span className="w-10 h-px bg-gradient-to-l from-transparent to-[#00d1ff]/60" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="font-[var(--font-heading)] text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-white mb-5"
          >
            {t.services.title1}{" "}
            <span className="gradient-text">{t.services.titleHighlight}</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-slate-400 max-w-2xl mx-auto text-lg"
          >
            {t.services.subtitle}
          </motion.p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: 0.06 * i, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="sol-card group relative p-6 rounded-3xl bg-white/[0.02] border border-white/[0.06] transition-all duration-500 hover:bg-white/[0.04] overflow-hidden"
            >
              <div className="relative">
                <div
                  className="sol-icon w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-all duration-300"
                  style={{ color: s.color }}
                >
                  <s.icon size={20} className="group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="font-[var(--font-heading)] text-white font-semibold mb-2 text-[15px]">
                  {s.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
