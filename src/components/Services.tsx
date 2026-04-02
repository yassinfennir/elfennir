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
  ShieldCheck,
  ArrowRight,
  Layers,
  Cpu,
  Share2,
  Mail,
  Users,
  BarChart3,
} from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { Card3D } from "@/components/Card3D";
import { ScrollReveal3D, StaggerContainer, staggerItem } from "@/components/ScrollReveal3D";

const SERVICE_COLORS = ["#ff6b00", "#ff8c00", "#ffaa00", "#ff4500"] as const;

const SERVICE_PRICES = [
  "270",  // Professional Online Presence
  "270",  // Digital Transformation
  "500",  // 24/7 AI Assistant
  "300",  // Client Acquisition
  "300",  // Business Automation
  "270",  // Google Visibility / SEO
  "540",  // Custom Systems
  "149",  // Personal IT Team (monthly)
  "270",  // Cyber Security
  "1490", // SaaS & Web App Development
  "690",  // AI Integration & API Development
  "390",  // Social Media Automation
  "290",  // Email Marketing Automation
  "590",  // CRM & Business Systems
  "490",  // Data Analytics & Dashboards
] as const;

const SWISS_PREMIUM_INDICES = [9, 10, 13] as const; // SaaS 1490, AI Integration 690, CRM 590

const EUR_TO_CHF_RATE = 0.94;

function eurToChf(eurPrice: string): string {
  const chf = Math.round(parseInt(eurPrice, 10) * EUR_TO_CHF_RATE / 10) * 10;
  return chf.toString();
}

export function Services() {
  const { t, locale } = useLanguage();
  const isGerman = locale === "de";

  const services = [
    { icon: Globe, title: t.services.service1Title, desc: t.services.service1Desc, color: SERVICE_COLORS[0], price: SERVICE_PRICES[0] },
    { icon: RefreshCw, title: t.services.service2Title, desc: t.services.service2Desc, color: SERVICE_COLORS[1], price: SERVICE_PRICES[1] },
    { icon: Bot, title: t.services.service3Title, desc: t.services.service3Desc, color: SERVICE_COLORS[2], price: SERVICE_PRICES[2] },
    { icon: Target, title: t.services.service4Title, desc: t.services.service4Desc, color: SERVICE_COLORS[3], price: SERVICE_PRICES[3] },
    { icon: CalendarCheck, title: t.services.service5Title, desc: t.services.service5Desc, color: SERVICE_COLORS[0], price: SERVICE_PRICES[4] },
    { icon: Search, title: t.services.service6Title, desc: t.services.service6Desc, color: SERVICE_COLORS[1], price: SERVICE_PRICES[5] },
    { icon: AppWindow, title: t.services.service7Title, desc: t.services.service7Desc, color: SERVICE_COLORS[2], price: SERVICE_PRICES[6] },
    { icon: Headphones, title: t.services.service8Title, desc: t.services.service8Desc, color: SERVICE_COLORS[3], price: SERVICE_PRICES[7] },
    { icon: ShieldCheck, title: t.services.service9Title, desc: t.services.service9Desc, color: SERVICE_COLORS[0], price: SERVICE_PRICES[8] },
    { icon: Layers, title: t.services.service10Title, desc: t.services.service10Desc, color: SERVICE_COLORS[1], price: SERVICE_PRICES[9] },
    { icon: Cpu, title: t.services.service11Title, desc: t.services.service11Desc, color: SERVICE_COLORS[2], price: SERVICE_PRICES[10] },
    { icon: Share2, title: t.services.service12Title, desc: t.services.service12Desc, color: SERVICE_COLORS[3], price: SERVICE_PRICES[11] },
    { icon: Mail, title: t.services.service13Title, desc: t.services.service13Desc, color: SERVICE_COLORS[0], price: SERVICE_PRICES[12] },
    { icon: Users, title: t.services.service14Title, desc: t.services.service14Desc, color: SERVICE_COLORS[1], price: SERVICE_PRICES[13] },
    { icon: BarChart3, title: t.services.service15Title, desc: t.services.service15Desc, color: SERVICE_COLORS[2], price: SERVICE_PRICES[14] },
  ];

  const extractRgb = (hex: string): string =>
    hex.replace("#", "").match(/.{2}/g)?.map(h => parseInt(h, 16)).join(",") || "255,107,0";

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

        {/* Swiss Premium subtitle for German */}
        {isGerman && (
          <p className="text-center text-sm text-[#14f195] font-mono mb-8 -mt-8">
            {t.services.swissPremiumSubtitle}
          </p>
        )}

        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {services.map((s, idx) => {
            const isSwissPremium = (SWISS_PREMIUM_INDICES as readonly number[]).includes(idx);
            return (
            <motion.div key={s.title} variants={staggerItem} style={{ transformPerspective: 800 }}>
              <Card3D
                className="h-full"
                glowColor={extractRgb(s.color)}
              >
                <div className="sol-card group relative p-6 rounded-3xl bg-white/[0.02] border border-white/[0.06] transition-all duration-500 hover:bg-white/[0.04] overflow-hidden h-full flex flex-col">
                  {/* Swiss Premium Badge */}
                  {isSwissPremium && (
                    <div className="absolute top-3 right-3 z-10 px-2 py-0.5 bg-[#14f195]/10 border border-[#14f195]/20 rounded-full">
                      <span className="text-[9px] font-bold text-[#14f195] uppercase tracking-wider font-mono">
                        {t.services.swissPremiumBadge}
                      </span>
                    </div>
                  )}
                  <div className="relative flex-1">
                    <div className="flex items-start justify-between mb-5">
                      <div
                        className="sol-icon w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300"
                        style={{ color: s.color }}
                      >
                        <s.icon size={20} className="group-hover:scale-110 transition-transform duration-300" />
                      </div>
                      <div className="flex flex-col items-end gap-1">
                        <span
                          className="text-xs font-medium px-2.5 py-1 rounded-full border transition-colors duration-300"
                          style={{
                            color: s.color,
                            borderColor: `${s.color}33`,
                            backgroundColor: `${s.color}0a`,
                          }}
                        >
                          {t.services.priceFrom} {s.price}&euro;
                        </span>
                        {isSwissPremium && (
                          <span className="text-[10px] text-slate-500 font-mono">
                            ~CHF {eurToChf(s.price)}
                          </span>
                        )}
                      </div>
                    </div>
                    <h3 className="font-[var(--font-heading)] text-white font-semibold mb-2 text-[15px]">
                      {s.title}
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed mb-5">{s.desc}</p>
                  </div>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1.5 text-sm font-medium transition-all duration-300 group/cta"
                    style={{ color: s.color }}
                  >
                    {t.services.serviceCta}
                    <ArrowRight
                      size={14}
                      className="transition-transform duration-300 group-hover/cta:translate-x-1"
                    />
                  </a>
                </div>
              </Card3D>
            </motion.div>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
