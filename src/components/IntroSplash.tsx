"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";

/* ─── Animated Logo Mark ─── */
function LogoReveal() {
  return (
    <motion.div className="relative flex items-center justify-center">
      {/* Outer ring pulse */}
      <motion.div
        className="absolute w-36 h-36 rounded-full border border-[#ff6b00]/20"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: [0, 1.5, 1.2], opacity: [0, 0.5, 0] }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      />
      <motion.div
        className="absolute w-28 h-28 rounded-full border border-[#ff8c00]/15"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: [0, 1.8, 1.4], opacity: [0, 0.4, 0] }}
        transition={{ duration: 1.5, delay: 0.1, ease: "easeOut" }}
      />

      {/* Glowing core */}
      <motion.div
        className="absolute w-20 h-20 rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(255,107,0,0.3) 0%, transparent 70%)",
        }}
        initial={{ scale: 0 }}
        animate={{ scale: [0, 2, 1.5] }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      />

      {/* Logo image */}
      <motion.img
        src="/images/logo.png"
        alt=""
        className="w-16 h-16 relative z-10"
        initial={{ scale: 0, rotateY: -180, opacity: 0 }}
        animate={{ scale: 1, rotateY: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      />
    </motion.div>
  );
}

/* ─── Typing command line ─── */
function TerminalLine({ text, delay, color = "#ffaa00" }: { text: string; delay: number; color?: string }) {
  const [displayed, setDisplayed] = useState("");
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(t);
  }, [delay]);

  useEffect(() => {
    if (!started) return;
    let i = 0;
    const interval = setInterval(() => {
      i++;
      setDisplayed(text.slice(0, i));
      if (i >= text.length) clearInterval(interval);
    }, 25);
    return () => clearInterval(interval);
  }, [started, text]);

  if (!started) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 5 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex items-center gap-2 font-mono text-xs sm:text-sm"
    >
      <span className="text-[#ff6b00]">›</span>
      <span style={{ color }}>{displayed}</span>
      {displayed.length < text.length && (
        <span className="inline-block w-1.5 h-4 bg-current animate-pulse" style={{ color }} />
      )}
    </motion.div>
  );
}

/* ─── Progress bar ─── */
function LoadingBar() {
  return (
    <div className="w-48 sm:w-64 h-[2px] bg-white/[0.06] rounded-full overflow-hidden mt-6">
      <motion.div
        className="h-full rounded-full"
        style={{
          background: "linear-gradient(90deg, #ff6b00, #ff8c00, #ffaa00)",
        }}
        initial={{ width: "0%" }}
        animate={{ width: "100%" }}
        transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
      />
    </div>
  );
}

/* ─── Particle burst on exit ─── */
function ParticleBurst({ active }: { active: boolean }) {
  if (!active) return null;
  const particles = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    angle: (i / 30) * Math.PI * 2,
    distance: 100 + Math.random() * 200,
    size: 2 + Math.random() * 4,
    color: ["#ff6b00", "#ff8c00", "#ffaa00", "#ff4500"][Math.floor(Math.random() * 4)],
    delay: Math.random() * 0.15,
  }));

  return (
    <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full"
          style={{
            width: p.size,
            height: p.size,
            background: p.color,
            boxShadow: `0 0 ${p.size * 3}px ${p.color}`,
          }}
          initial={{ x: 0, y: 0, opacity: 1, scale: 1 }}
          animate={{
            x: Math.cos(p.angle) * p.distance,
            y: Math.sin(p.angle) * p.distance,
            opacity: 0,
            scale: 0,
          }}
          transition={{ duration: 0.6, delay: p.delay, ease: "easeOut" }}
        />
      ))}
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   MAIN INTRO SPLASH
   ═══════════════════════════════════════════════════════════════ */
export function IntroSplash({ children }: { children: React.ReactNode }) {
  const [phase, setPhase] = useState<"loading" | "burst" | "done">("loading");

  useEffect(() => {
    // Phase 1: Loading animation (2s)
    const t1 = setTimeout(() => setPhase("burst"), 2000);
    // Phase 2: Burst + fade out (0.5s)
    const t2 = setTimeout(() => setPhase("done"), 2500);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  const showSplash = phase === "loading" || phase === "burst";

  if (!showSplash) return <>{children}</>;

  return (
    <>
      {/* Main content hidden behind */}
      <div style={{ position: "fixed", top: 0, left: 0, right: 0, bottom: 0, zIndex: 0, opacity: 0 }}>
        {children}
      </div>

      {/* Splash overlay */}
      <AnimatePresence>
        {showSplash && (
          <motion.div
            className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#030308] overflow-hidden"
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Background grid */}
            <div
              className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(255,107,0,0.3) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(0,209,255,0.2) 1px, transparent 1px)
                `,
                backgroundSize: "60px 60px",
              }}
            />

            {/* Radial glow */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_600px_400px_at_center,rgba(255,107,0,0.08),transparent)]" />

            {/* Scan line */}
            <motion.div
              className="absolute left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#ff6b00]/30 to-transparent"
              animate={{ top: ["0%", "100%"] }}
              transition={{ duration: 2, ease: "linear" }}
              style={{ boxShadow: "0 0 20px rgba(255,107,0,0.2)" }}
            />

            {/* Corner decorations */}
            <div className="absolute top-6 left-6 text-[10px] font-mono text-white/10 space-y-1">
              <div>SYS.INIT</div>
              <div>v3.0.26</div>
            </div>
            <div className="absolute top-6 right-6 text-[10px] font-mono text-white/10 text-right space-y-1">
              <div>ELFENNIR.COM</div>
              <motion.div animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 1, repeat: Infinity }}>
                LOADING...
              </motion.div>
            </div>

            {/* Main content */}
            <div className="relative flex flex-col items-center gap-6">
              {/* Logo reveal */}
              <LogoReveal />

              {/* Name reveal */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="text-center"
              >
                <div className="text-white/30 text-[10px] tracking-[0.4em] uppercase font-mono mb-1">
                  YASSIN
                </div>
                <div
                  className="font-[var(--font-heading)] text-3xl sm:text-4xl font-extrabold tracking-tight"
                  style={{
                    background: "linear-gradient(135deg, #a78bfa, #818cf8, #06b6d4, #ffaa00)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundSize: "300% 300%",
                    animation: "gradient-shift 3s ease infinite",
                  }}
                >
                  EL FENNIR
                </div>
              </motion.div>

              {/* Terminal lines */}
              <div className="flex flex-col gap-1.5 mt-2">
                <TerminalLine text="Initializing AI systems..." delay={300} color="#ff6b00" />
                <TerminalLine text="Loading 3D environment..." delay={700} color="#ff8c00" />
                <TerminalLine text="Connecting neural networks..." delay={1100} color="#ffaa00" />
                <TerminalLine text="System ready ✓" delay={1600} color="#ffaa00" />
              </div>

              {/* Loading bar */}
              <LoadingBar />
            </div>

            {/* Particle burst on exit */}
            <ParticleBurst active={phase === "burst"} />

            {/* Bottom decorative line */}
            <motion.div
              className="absolute bottom-0 left-0 right-0 h-[1px]"
              style={{
                background: "linear-gradient(90deg, transparent, #ff6b00, #ff8c00, #ffaa00, transparent)",
              }}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
