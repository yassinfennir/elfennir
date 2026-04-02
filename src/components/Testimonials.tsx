"use client";
import { motion } from "framer-motion";
import { CheckCircle2, Zap, Clock, Shield, Star, Quote } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/i18n/LanguageContext";
import { StaggerContainer, staggerItem } from "@/components/ScrollReveal3D";
import { Card3D } from "@/components/Card3D";

const solanaColors = ["#ff6b00", "#ff8c00", "#ffaa00", "#ff4500"];

const STAR_COUNT = 5;

function StarRating() {
  return (
    <div className="flex gap-1">
      {Array.from({ length: STAR_COUNT }).map((_, i) => (
        <Star
          key={i}
          size={16}
          className="fill-[#ff8c00] text-[#ff8c00]"
        />
      ))}
    </div>
  );
}

export function Testimonials() {
  const { t } = useLanguage();

  const testimonials = [
    {
      quote: t.testimonials.review1Quote,
      company: "Nordic Globe Oy",
      role: t.testimonials.review1Role,
      color: solanaColors[0],
    },
    {
      quote: t.testimonials.review2Quote,
      company: "GymHolvi",
      role: t.testimonials.review2Role,
      color: solanaColors[1],
    },
    {
      quote: t.testimonials.review3Quote,
      company: "Ha-Fix Oy",
      role: t.testimonials.review3Role,
      color: solanaColors[2],
    },
  ];

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
    <section id="testimonials" className="relative py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-2 text-sm text-[#ff8c00] mb-4"
          >
            <span className="w-10 h-px bg-gradient-to-r from-transparent to-[#ff8c00]/60" />
            {t.testimonials.badge}
            <span className="w-10 h-px bg-gradient-to-l from-transparent to-[#ff8c00]/60" />
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

        {/* Testimonial Cards */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {testimonials.map((item, i) => (
            <motion.div key={i} variants={staggerItem} style={{ transformPerspective: 800 }}>
              <Card3D className="h-full">
                <div className="group relative h-full p-7 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-[#ff8c00]/20 transition-all duration-500 overflow-hidden">
                  {/* Glow on hover */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                    style={{
                      background: `radial-gradient(ellipse at 50% 0%, ${item.color}08 0%, transparent 70%)`,
                    }}
                  />

                  <div className="relative flex flex-col h-full">
                    {/* Quote icon */}
                    <Quote
                      size={28}
                      className="mb-4 opacity-30"
                      style={{ color: item.color }}
                    />

                    {/* Stars */}
                    <div className="mb-4">
                      <StarRating />
                    </div>

                    {/* Quote text */}
                    <p className="text-slate-300 text-sm leading-relaxed flex-1 mb-6">
                      &ldquo;{item.quote}&rdquo;
                    </p>

                    {/* Divider */}
                    <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-4" />

                    {/* Company info */}
                    <div>
                      <div
                        className="font-bold text-base font-[var(--font-heading)]"
                        style={{ color: item.color }}
                      >
                        {item.company}
                      </div>
                      <div className="text-slate-500 text-xs mt-0.5">{item.role}</div>
                    </div>
                  </div>
                </div>
              </Card3D>
            </motion.div>
          ))}
        </StaggerContainer>

        {/* Guarantee Badges */}
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
