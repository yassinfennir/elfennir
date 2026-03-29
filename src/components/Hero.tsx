"use client";
import { motion, useMotionValue, useTransform, useScroll } from "framer-motion";
import { ArrowRight, CheckCircle, Phone, Sparkles, Terminal } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import { useLanguage } from "@/i18n/LanguageContext";
import { Scene3D } from "@/components/Scene3D";
import { MagneticButton } from "@/components/Card3D";
import { GlitchText, HackerTerminal, FloatingParticles, HackerGrid } from "@/components/HackerEffects";

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

/* ─── Tool nodes for the constellation ─── */
const techNodes = [
  { id: "center", label: "Your Business", logo: "", x: 50, y: 50, size: 76, color: "#ff6b00", isCenter: true },
  { id: "claude", label: "Claude Code", logo: "/images/logos/claude.svg", x: 18, y: 15, size: 54, color: "#D4A574" },
  { id: "n8n", label: "n8n", logo: "/images/logos/n8n.svg", x: 82, y: 12, size: 54, color: "#EA4B71" },
  { id: "nextjs", label: "Next.js", logo: "/images/logos/nextjs.svg", x: 8, y: 50, size: 50, color: "#ffffff" },
  { id: "stripe", label: "Payments", logo: "/images/logos/stripe.svg", x: 92, y: 48, size: 50, color: "#635BFF" },
  { id: "openai", label: "AI Chatbot", logo: "/images/logos/openai.svg", x: 22, y: 84, size: 50, color: "#00d1ff" },
  { id: "react", label: "React", logo: "/images/logos/react.svg", x: 50, y: 12, size: 46, color: "#61DAFB" },
  { id: "whatsapp", label: "WhatsApp", logo: "/images/logos/whatsapp.svg", x: 80, y: 82, size: 50, color: "#25D366" },
  { id: "vercel", label: "Deploy", logo: "/images/logos/vercel.svg", x: 90, y: 28, size: 46, color: "#ffffff" },
  { id: "brevo", label: "Email", logo: "/images/logos/brevo.svg", x: 12, y: 76, size: 44, color: "#0B996E" },
  { id: "tailwind", label: "Design", logo: "/images/logos/tailwind.svg", x: 50, y: 90, size: 46, color: "#38BDF8" },
  { id: "ts", label: "TypeScript", logo: "/images/logos/typescript.svg", x: 5, y: 32, size: 42, color: "#3178C6" },
];

const techConnections = [
  [0, 1], [0, 2], [0, 3], [0, 4], [0, 5], [0, 6], [0, 7], [0, 8], [0, 9], [0, 10],
  [1, 6], [2, 8], [3, 11], [5, 9], [7, 4], [6, 8], [9, 5], [10, 7],
];

/* ─── Animated Tech Connection Visual (Right Side) ─── */
function TechConnectionVisual() {
  return (
    <div className="relative w-full aspect-square max-w-[520px] mx-auto">
      <div className="absolute inset-[15%] bg-[#9945ff]/[0.06] rounded-full blur-[80px]" />
      <div className="absolute top-[20%] right-[20%] w-[40%] h-[40%] bg-[#00d1ff]/[0.04] rounded-full blur-[60px]" />

      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" fill="none" preserveAspectRatio="xMidYMid meet">
        <defs>
          <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#9945ff" stopOpacity="0.5" />
            <stop offset="50%" stopColor="#00d1ff" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#14f195" stopOpacity="0.5" />
          </linearGradient>
          <filter id="lineGlow">
            <feGaussianBlur stdDeviation="0.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {techConnections.map(([from, to], i) => (
          <motion.line
            key={`line-${i}`}
            x1={techNodes[from].x}
            y1={techNodes[from].y}
            x2={techNodes[to].x}
            y2={techNodes[to].y}
            stroke="url(#lineGrad)"
            strokeWidth="0.25"
            filter="url(#lineGlow)"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.4, 0.15, 0.4] }}
            transition={{ duration: 4, delay: i * 0.15, repeat: Infinity, ease: "easeInOut" }}
          />
        ))}

        {techConnections.slice(0, 10).map(([from, to], i) => (
          <motion.circle
            key={`pulse-${i}`}
            r="0.7"
            fill={techNodes[to].color}
            initial={{ cx: techNodes[from].x, cy: techNodes[from].y, opacity: 0 }}
            animate={{
              cx: [techNodes[from].x, techNodes[to].x],
              cy: [techNodes[from].y, techNodes[to].y],
              opacity: [0, 0.9, 0.9, 0],
            }}
            transition={{ duration: 1.8, delay: i * 0.5 + 1, repeat: Infinity, repeatDelay: 5, ease: "easeInOut" }}
          />
        ))}
      </svg>

      {techNodes.map((node, i) => (
        <motion.div
          key={node.id}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 + i * 0.08, type: "spring", stiffness: 180, damping: 18 }}
          className="absolute flex flex-col items-center gap-1.5"
          style={{ left: `${node.x}%`, top: `${node.y}%`, transform: "translate(-50%, -50%)" }}
        >
          <motion.div
            className={`relative rounded-full flex items-center justify-center ${
              node.isCenter
                ? "bg-gradient-to-br from-[#ff6b00]/20 to-[#ff8c00]/10 border-2 border-[#ff6b00]/40 shadow-[0_0_30px_rgba(255,107,0,0.2)]"
                : "bg-[#0c0c14] border border-white/[0.12] shadow-[0_4px_20px_rgba(0,0,0,0.5)] hover:border-white/[0.25] hover:shadow-[0_4px_25px_rgba(255,107,0,0.15)]"
            } transition-all duration-500`}
            style={{ width: node.size, height: node.size }}
            animate={node.isCenter ? { boxShadow: ["0 0 30px rgba(255,107,0,0.15)", "0 0 50px rgba(255,107,0,0.3)", "0 0 30px rgba(255,107,0,0.15)"] } : undefined}
            transition={node.isCenter ? { duration: 3, repeat: Infinity, ease: "easeInOut" } : undefined}
          >
            {node.isCenter ? (
              /* eslint-disable-next-line @next/next/no-img-element */
              <img src="/images/logo.png" alt="El Fennir" className="rounded-xl" style={{ width: node.size * 0.65, height: node.size * 0.65 }} />
            ) : (
              /* eslint-disable-next-line @next/next/no-img-element */
              <img src={node.logo} alt={node.label} className="rounded-lg" style={{ width: node.size * 0.6, height: node.size * 0.6 }} />
            )}
            {node.isCenter && (
              <>
                <motion.div
                  className="absolute inset-0 rounded-full border border-[#ff6b00]/20"
                  animate={{ scale: [1, 1.5, 1], opacity: [0.4, 0, 0.4] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                  className="absolute inset-0 rounded-full border border-[#ff8c00]/10"
                  animate={{ scale: [1, 2, 1], opacity: [0.2, 0, 0.2] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                />
              </>
            )}
          </motion.div>
          {!node.isCenter && (
            <span className="text-[10px] text-slate-400 font-medium whitespace-nowrap">{node.label}</span>
          )}
        </motion.div>
      ))}
    </div>
  );
}

export function Hero() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const contentParallax = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const scene3DScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.2]);
  const scene3DOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  const trust = [t.hero.trust1, t.hero.trust2, t.hero.trust3];

  const stats = [
    { num: 23, suffix: "+", label: t.hero.stat1Label },
    { num: 100, suffix: "%", label: t.hero.stat2Label },
    { num: 3, suffix: "-5", label: t.hero.stat3Label },
    { num: 24, suffix: "/7", label: t.hero.stat4Label },
  ];

  function handleMouse(e: React.MouseEvent) {
    mouseX.set(e.clientX);
    mouseY.set(e.clientY);
  }

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center overflow-hidden"
      onMouseMove={handleMouse}
    >
      {/* Dark base */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#030308] via-[#08080f] to-[#08080f]" />

      {/* Hacker grid background */}
      <HackerGrid />

      {/* 3D Scene Background */}
      <motion.div style={{ scale: scene3DScale, opacity: scene3DOpacity }} className="absolute inset-0">
        <Scene3D />
      </motion.div>

      {/* Floating particles */}
      <FloatingParticles count={30} />

      {/* Noise overlay */}
      <div className="absolute inset-0 noise-overlay" />

      {/* Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#08080f_70%)] opacity-40" />

      <motion.div style={{ y: contentParallax, opacity: heroOpacity }} className="relative max-w-7xl mx-auto px-6 pt-32 pb-20 w-full z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left — Text Content */}
          <div>
            {/* Terminal Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20, rotateX: 15 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              style={{ transformPerspective: 800 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#9945ff]/[0.08] border border-[#9945ff]/20 rounded-full mb-8 backdrop-blur-xl shadow-[0_0_30px_rgba(153,69,255,0.1)]"
            >
              <Terminal size={12} className="text-[#9945ff]" />
              <span className="text-sm text-slate-300 font-mono font-medium">
                {t.hero.badge}
              </span>
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#14f195] opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#14f195]" />
              </span>
            </motion.div>

            {/* Headline with Glitch effect */}
            <motion.h1
              initial={{ opacity: 0, y: 40, rotateX: 20 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              style={{ transformPerspective: 1000 }}
              className="font-[var(--font-heading)] text-3xl sm:text-4xl lg:text-[2.8rem] xl:text-[3.2rem] font-bold text-white leading-[1.1] tracking-tight mb-6"
            >
              {t.hero.headline1}{" "}
              <br className="hidden sm:block" />
              {t.hero.headline2}{" "}
              <br className="hidden sm:block" />
              <span className="relative inline-block text-[#14f195] font-extrabold">
                {t.hero.headline3}
                <motion.span
                  className="absolute -bottom-2 left-0 right-0 h-[2px]"
                  style={{
                    background: "linear-gradient(90deg, #9945ff, #00d1ff, #14f195)",
                    backgroundSize: "200% 100%",
                  }}
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
              className="text-lg sm:text-xl text-slate-400 leading-relaxed mb-8 max-w-2xl"
            >
              {t.hero.subtitle}
            </motion.p>

            {/* Trust points with cyber style */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="flex flex-col gap-3.5 mb-10"
            >
              {trust.map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 + 0.1 * i }}
                  className="flex items-center gap-3 group"
                >
                  <div className="w-5 h-5 rounded-full bg-[#14f195]/10 border border-[#14f195]/20 flex items-center justify-center flex-shrink-0 group-hover:shadow-[0_0_10px_#14f19540] transition-shadow">
                    <CheckCircle size={12} className="text-[#14f195]" />
                  </div>
                  <span className="text-sm text-slate-300 font-mono">{item}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons with magnetic effect */}
            <motion.div
              initial={{ opacity: 0, y: 20, rotateX: 10 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              style={{ transformPerspective: 800 }}
              className="flex flex-wrap gap-3"
            >
              <MagneticButton
                as="a"
                href="https://wa.me/358466109064"
                target="_blank"
                rel="noopener noreferrer"
                className="group sol-btn inline-flex items-center justify-center gap-2 px-5 py-3.5 text-white text-[13px] lg:text-[15px] lg:px-7 lg:py-4 font-semibold rounded-full"
              >
                <Phone size={15} />
                <span>{t.hero.ctaWhatsapp}</span>
              </MagneticButton>
              <a
                href="#pricing"
                className="sol-btn-ghost inline-flex items-center justify-center gap-2 px-5 py-3.5 text-[13px] lg:text-[15px] lg:px-7 lg:py-4 rounded-full"
                style={{ whiteSpace: "nowrap", textAlign: "center" }}
              >
                {t.hero.ctaPricing}
              </a>
              <MagneticButton
                as="a"
                href="#contact"
                className="hidden sm:inline-flex group sol-btn items-center justify-center gap-2 px-5 py-3.5 text-white font-semibold text-[13px] lg:text-[15px] lg:px-7 lg:py-4 transition-all duration-300"
              >
                <span className="relative z-[2]">{t.hero.ctaBookCall}</span>
                <ArrowRight size={16} className="relative z-[2] group-hover:translate-x-0.5 transition-transform" />
              </MagneticButton>
            </motion.div>
          </div>

          {/* Right — Tech Connection Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, rotateY: -15 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            style={{ transformPerspective: 1200 }}
            className="hidden lg:block"
          >
            <TechConnectionVisual />
          </motion.div>
        </div>

        {/* Stats with 3D entrance */}
        <div className="mt-20 mb-2 sol-divider" />
        <motion.div
          initial={{ opacity: 0, y: 30, rotateX: 10 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          style={{ transformPerspective: 1000 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-8 pt-10"
        >
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.8 + 0.1 * i }}
              className="group"
            >
              <div className="font-[var(--font-heading)] text-3xl sm:text-4xl font-bold text-white group-hover:gradient-text transition-all duration-300">
                <AnimatedCounter target={s.num} suffix={s.suffix} />
              </div>
              <div className="text-sm text-slate-500 mt-1 font-mono">{s.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#08080f] to-transparent z-20" />
    </section>
  );
}
