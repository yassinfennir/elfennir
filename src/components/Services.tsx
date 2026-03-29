"use client";
import { motion } from "framer-motion";
import {
  Globe,
  RefreshCw,
  Bot,
  Target,
  CalendarCheck,
  Search,
  AppWindow,
  Headphones,
} from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { Card3D } from "@/components/Card3D";
import { ScrollReveal3D, StaggerContainer, staggerItem } from "@/components/ScrollReveal3D";

const solanaColors = ["#ff6b00", "#ff8c00", "#ffaa00", "#ff4500"];

export function Services() {
  const { t } = useLanguage();

  const services = [
    { icon: Globe, title: t.services.service1Title, desc: t.services.service1Desc, color: solanaColors[0] },
    { icon: RefreshCw, title: t.services.service2Title, desc: t.services.service2Desc, color: solanaColors[1] },
    { icon: Bot, title: t.services.service3Title, desc: t.services.service3Desc, color: solanaColors[2] },
    { icon: Target, title: t.services.service4Title, desc: t.services.service4Desc, color: solanaColors[3] },
    { icon: CalendarCheck, title: t.services.service5Title, desc: t.services.service5Desc, color: solanaColors[0] },
    { icon: Search, title: t.services.service6Title, desc: t.services.service6Desc, color: solanaColors[1] },
    { icon: AppWindow, title: t.services.service7Title, desc: t.services.service7Desc, color: solanaColors[2] },
    { icon: Headphones, title: t.services.service8Title, desc: t.services.service8Desc, color: solanaColors[3] },
  ];

  return (
    <section id="services" className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#ff6b00]/[0.015] to-transparent" />
      <div className="relative max-w-7xl mx-auto px-6">
        <ScrollReveal3D className="text-center mb-16" rotateX={12}>
          <div className="inline-flex items-center gap-2 text-sm text-[#ff8c00] mb-4">
            <span className="w-10 h-px bg-gradient-to-r from-transparent to-[#ff8c00]/60" />
            {t.services.badge}
            <span className="w-10 h-px bg-gradient-to-l from-transparent to-[#ff8c00]/60" />
          </div>
          <h2 className="font-[var(--font-heading)] text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-white mb-5">
            {t.services.title1}{" "}
            <span className="gradient-text">{t.services.titleHighlight}</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            {t.services.subtitle}
          </p>
        </ScrollReveal3D>

        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((s, i) => (
            <motion.div key={s.title} variants={staggerItem} style={{ transformPerspective: 800 }}>
              <Card3D
                className="h-full"
                glowColor={s.color.replace("#", "").match(/.{2}/g)?.map(h => parseInt(h, 16)).join(",") || "255,107,0"}
              >
                <div className="sol-card group relative p-6 rounded-3xl bg-white/[0.02] border border-white/[0.06] transition-all duration-500 hover:bg-white/[0.04] overflow-hidden h-full">
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
                </div>
              </Card3D>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
