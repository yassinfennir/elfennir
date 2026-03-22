"use client";
import { motion } from "framer-motion";
import { CheckCircle2, Zap, Clock, Shield, Star, TrendingUp } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/i18n/LanguageContext";
import { ScrollReveal3D, StaggerContainer, staggerItem } from "@/components/ScrollReveal3D";
import { Card3D } from "@/components/Card3D";

function AnimatedNumber({ target, suffix = "" }: { target: string; suffix?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [value, setValue] = useState("0");
  const started = useRef(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting && !started.current) {
          started.current = true;
          // Animate to target value
          const num = parseInt(target.replace(/\D/g, ""));
          let current = 0;
          const step = Math.ceil(num / 30);
          const timer = setInterval(() => {
            current += step;
            if (current >= num) {
              setValue(target);
              clearInterval(timer);
            } else {
              setValue(String(current));
            }
          }, 40);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [target]);

  return <div ref={ref}>{value}{suffix}</div>;
}

const solanaColors = ["#ff6b00", "#00d1ff", "#14f195", "#f971ff"];

export function Testimonials() {
  const { t } = useLanguage();

  const guarantees = [
    {
      icon: CheckCircle2,
      label: t.testimonials.guarantee1Label,
      sub: t.testimonials.guarantee1Sub,
      color: solanaColors[2],
    },
    {
      icon: Clock,
      label: t.testimonials.guarantee2Label,
      sub: t.testimonials.guarantee2Sub,
      color: solanaColors[1],
    },
    {
      icon: Zap,
      label: t.testimonials.guarantee3Label,
      sub: t.testimonials.guarantee3Sub,
      color: solanaColors[3],
    },
    {
      icon: Shield,
      label: t.testimonials.guarantee4Label,
      sub: t.testimonials.guarantee4Sub,
      color: solanaColors[0],
    },
  ];

  return (
    <section className="relative py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-2 text-sm text-[#00d1ff] mb-4"
          >
            <span className="w-10 h-px bg-gradient-to-r from-transparent to-[#00d1ff]/60" />
            {t.testimonials.badge}
            <span className="w-10 h-px bg-gradient-to-l from-transparent to-[#00d1ff]/60" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="font-[var(--font-heading)] text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-white mb-5"
          >
            {t.testimonials.title1}{" "}
            <span className="gradient-text">{t.testimonials.titleHighlight}</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed"
          >
            {t.testimonials.subtitle}
          </motion.p>
        </div>

        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-4xl mx-auto">
          {guarantees.map((item, i) => (
            <motion.div key={i} variants={staggerItem} style={{ transformPerspective: 800 }}>
              <Card3D className="h-full">
                <div className="sol-card group relative text-center p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] transition-all duration-500 overflow-hidden h-full">
                  <div className="relative">
                    <div
                      className="sol-icon w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-105 transition-transform duration-300"
                      style={{ color: item.color }}
                    >
                      <item.icon size={20} />
                    </div>
                    <div className="text-white font-bold text-xl font-[var(--font-heading)]">{item.label}</div>
                    <div className="text-slate-500 text-xs mt-1">{item.sub}</div>
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
