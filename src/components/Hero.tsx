"use client";
import { motion, useMotionValue, useTransform, useScroll } from "framer-motion";
import { ArrowRight, CheckCircle, Phone, Sparkles, Terminal, Code, Zap, Bot } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import { useLanguage } from "@/i18n/LanguageContext";
import Image from "next/image";

function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting && !started.current) {
          started.current = true;
          let start = 0;
          const step = Math.ceil(target / 40);
          const timer = setInterval(() => {
            start += step;
            if (start >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(start);
            }
          }, 30);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [target]);

  return <div ref={ref}>{count}{suffix}</div>;
}

/* Floating cartoon emoji bubbles */
function FloatingEmoji({ emoji, delay, x, y, size }: { emoji: string; delay: number; x: string; y: string; size: number }) {
  return (
    <motion.div
      className="absolute pointer-events-none select-none"
      style={{ left: x, top: y, fontSize: size }}
      initial={{ opacity: 0, scale: 0, rotate: -20 }}
      animate={{ opacity: [0, 1, 1, 0], scale: [0, 1.2, 1, 0.8], rotate: [-20, 10, -5, 15], y: [0, -30, -15, -50] }}
      transition={{ duration: 6, delay, repeat: Infinity, repeatDelay: 4, ease: "easeInOut" }}
    >
      {emoji}
    </motion.div>
  );
}

/* Cartoon-style floating badge */
function CartoonBadge({ icon: Icon, label, color, delay, className }: {
  icon: React.ComponentType<{ size?: number; className?: string }>; label: string; color: string; delay: number; className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay, type: "spring", stiffness: 200, damping: 15 }}
      className={`absolute z-20 ${className}`}
    >
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 3, delay: delay * 0.5, repeat: Infinity, ease: "easeInOut" }}
        className="flex items-center gap-2 px-4 py-2.5 rounded-2xl border-2 shadow-xl backdrop-blur-xl"
        style={{
          background: `linear-gradient(135deg, ${color}15, ${color}08)`,
          borderColor: `${color}30`,
          boxShadow: `0 8px 32px ${color}15, 0 4px 16px rgba(0,0,0,0.2)`,
        }}
      >
        <div className="w-8 h-8 rounded-xl flex items-center justify-center" style={{ background: `${color}20` }}>
          <Icon size={16} className={`text-current`} />
        </div>
        <span className="text-white text-xs font-bold whitespace-nowrap">{label}</span>
      </motion.div>
    </motion.div>
  );
}

export function Hero() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const contentParallax = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const photoScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);

  const trust = [t.hero.trust1, t.hero.trust2, t.hero.trust3];

  const stats = [
    { num: 23, suffix: "+", label: t.hero.stat1Label },
    { num: 100, suffix: "%", label: t.hero.stat2Label },
    { num: 3, suffix: "-5", label: t.hero.stat3Label },
    { num: 24, suffix: "/7", label: t.hero.stat4Label },
  ];

  function handleMouse(e: React.MouseEvent) {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: (e.clientX - rect.left) / rect.width - 0.5,
      y: (e.clientY - rect.top) / rect.height - 0.5,
    });
  }

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center overflow-hidden"
      onMouseMove={handleMouse}
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0015] via-[#08080f] to-[#001020]" />
        {/* Cartoon-style blob shapes */}
        <motion.div
          animate={{ x: [0, 30, -20, 0], y: [0, -40, 20, 0], scale: [1, 1.15, 0.95, 1] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[10%] left-[5%] w-[500px] h-[500px] bg-[#ff6b00]/[0.07] rounded-full blur-[120px]"
        />
        <motion.div
          animate={{ x: [0, -30, 25, 0], y: [0, 30, -20, 0], scale: [1, 0.9, 1.1, 1] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[20%] right-[10%] w-[400px] h-[400px] bg-[#00d1ff]/[0.06] rounded-full blur-[100px]"
        />
        <motion.div
          animate={{ x: [0, 20, -15, 0], y: [0, -20, 30, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[40%] right-[30%] w-[300px] h-[300px] bg-[#14f195]/[0.04] rounded-full blur-[80px]"
        />
      </div>

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
        backgroundSize: "60px 60px",
      }} />

      {/* Floating cartoon emojis */}
      <FloatingEmoji emoji="🚀" delay={0} x="8%" y="20%" size={28} />
      <FloatingEmoji emoji="⚡" delay={1.5} x="85%" y="15%" size={24} />
      <FloatingEmoji emoji="🎯" delay={3} x="75%" y="75%" size={26} />
      <FloatingEmoji emoji="💡" delay={2} x="12%" y="70%" size={22} />
      <FloatingEmoji emoji="🔥" delay={4} x="90%" y="50%" size={24} />

      {/* Noise overlay */}
      <div className="absolute inset-0 noise-overlay" />

      <motion.div style={{ y: contentParallax, opacity: heroOpacity }} className="relative max-w-7xl mx-auto px-6 pt-32 pb-20 w-full z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left — Text Content */}
          <div>
            {/* Cartoon Terminal Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, type: "spring", stiffness: 200 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#ff6b00]/[0.1] border-2 border-[#ff6b00]/25 rounded-full mb-8 shadow-[0_0_40px_rgba(255,107,0,0.15)]"
            >
              <Terminal size={14} className="text-[#ff6b00]" />
              <span className="text-sm text-white/90 font-bold tracking-wide">
                {t.hero.badge}
              </span>
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#14f195] opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#14f195]" />
              </span>
            </motion.div>

            {/* Big Headline with cartoon weight */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="font-[var(--font-heading)] text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-[4.2rem] font-extrabold text-white leading-[1.05] tracking-tight mb-6"
            >
              {t.hero.headline1}{" "}
              <br className="hidden sm:block" />
              {t.hero.headline2}{" "}
              <br className="hidden sm:block" />
              <span className="relative inline-block">
                <span className="gradient-text font-black">{t.hero.headline3}</span>
                <motion.span
                  className="absolute -bottom-2 left-0 right-0 h-[3px] rounded-full"
                  style={{ background: "linear-gradient(90deg, #ff6b00, #00d1ff, #14f195)" }}
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 1.2, delay: 0.8, ease: "easeOut" }}
                />
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="text-lg sm:text-xl text-slate-400 leading-relaxed mb-8 max-w-xl"
            >
              {t.hero.subtitle}
            </motion.p>

            {/* Trust points with cartoon checkmarks */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="flex flex-col gap-3 mb-10"
            >
              {trust.map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 + 0.12 * i, type: "spring" }}
                  className="flex items-center gap-3 group"
                >
                  <motion.div
                    whileHover={{ scale: 1.3, rotate: 10 }}
                    className="w-6 h-6 rounded-full bg-[#14f195]/15 border-2 border-[#14f195]/30 flex items-center justify-center flex-shrink-0"
                  >
                    <CheckCircle size={13} className="text-[#14f195]" />
                  </motion.div>
                  <span className="text-sm text-slate-300 font-medium">{item}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons — Cartoon style with bigger radius + shadows */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-wrap gap-3"
            >
              <motion.a
                href="https://wa.me/358466109064"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.97 }}
                className="group sol-btn-green inline-flex items-center justify-center gap-2.5 px-6 py-4 text-[14px] lg:text-[15px] lg:px-8 lg:py-4.5 font-bold rounded-2xl shadow-[0_6px_30px_rgba(20,241,149,0.3)]"
              >
                <Phone size={16} />
                <span>{t.hero.ctaWhatsapp}</span>
              </motion.a>
              <motion.a
                href="#pricing"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.97 }}
                className="sol-btn-ghost inline-flex items-center justify-center gap-2 px-6 py-4 text-[14px] lg:text-[15px] lg:px-8 rounded-2xl font-semibold border-2 border-white/10"
              >
                {t.hero.ctaPricing}
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.97 }}
                className="hidden sm:inline-flex group sol-btn items-center justify-center gap-2 px-6 py-4 text-white font-bold text-[14px] lg:text-[15px] lg:px-8 rounded-2xl shadow-[0_6px_30px_rgba(255,107,0,0.3)]"
              >
                <span className="relative z-[2]">{t.hero.ctaBookCall}</span>
                <ArrowRight size={16} className="relative z-[2] group-hover:translate-x-1 transition-transform" />
              </motion.a>
            </motion.div>
          </div>

          {/* Right — BIG PHOTO with cartoon frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -3 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.3, type: "spring", stiffness: 120 }}
            className="relative flex justify-center lg:justify-end"
          >
            {/* Floating badges around photo */}
            <CartoonBadge icon={Code} label="AI Developer" color="#ff6b00" delay={0.8} className="top-[5%] -left-[5%] lg:-left-[15%]" />
            <CartoonBadge icon={Zap} label="24h Delivery" color="#14f195" delay={1.1} className="top-[35%] -right-[2%] lg:-right-[12%]" />
            <CartoonBadge icon={Bot} label="AI Chatbots" color="#00d1ff" delay={1.4} className="bottom-[15%] -left-[3%] lg:-left-[10%]" />

            {/* Photo container with cartoon border */}
            <motion.div
              style={{ scale: photoScale }}
              className="relative w-[280px] sm:w-[340px] lg:w-[420px]"
            >
              {/* Glow behind photo */}
              <div className="absolute -inset-6 bg-gradient-to-br from-[#ff6b00]/20 via-[#00d1ff]/10 to-[#14f195]/20 rounded-[40px] blur-[40px]" />

              {/* Cartoon double border effect */}
              <div className="relative rounded-[32px] p-[3px] bg-gradient-to-br from-[#ff6b00] via-[#00d1ff] to-[#14f195]">
                <div className="rounded-[30px] p-[3px] bg-[#0a0a15]">
                  <div className="rounded-[28px] overflow-hidden relative">
                    <Image
                      src="/images/yassin.jpg"
                      alt="Yassin El Fennir — AI Developer & Founder"
                      width={420}
                      height={520}
                      className="w-full h-auto object-cover"
                      priority
                      sizes="(max-width: 640px) 280px, (max-width: 1024px) 340px, 420px"
                    />
                    {/* Bottom gradient overlay */}
                    <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0a0a15] to-transparent" />
                    {/* Name overlay */}
                    <div className="absolute bottom-4 left-5 right-5">
                      <h3 className="text-white font-bold text-xl font-[var(--font-heading)]">Yassin El Fennir</h3>
                      <p className="text-[#ff6b00] text-sm font-semibold">AI Agency Founder • Finland 🇫🇮</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sparkle decorations */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="absolute -top-3 -right-3 text-2xl"
              >
                ✨
              </motion.div>
              <motion.div
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute -bottom-2 -left-2 text-xl"
              >
                💫
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Stats with cartoon style */}
        <div className="mt-20 mb-2 sol-divider" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-8 pt-10"
        >
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.8 + 0.1 * i }}
              whileHover={{ scale: 1.05, y: -4 }}
              className="group text-center sm:text-left cursor-default"
            >
              <div className="font-[var(--font-heading)] text-3xl sm:text-4xl font-black text-white group-hover:gradient-text transition-all duration-300">
                <AnimatedCounter target={s.num} suffix={s.suffix} />
              </div>
              <div className="text-sm text-slate-500 mt-1 font-medium">{s.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#08080f] to-transparent z-20" />
    </section>
  );
}
