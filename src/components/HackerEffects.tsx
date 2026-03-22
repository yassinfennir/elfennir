"use client";
import { useEffect, useRef, useState, useMemo, useCallback } from "react";
import { motion, useMotionValue, useSpring, useTransform, useScroll, useMotionTemplate, AnimatePresence } from "framer-motion";

/* ═══════════════════════════════════════════════════════════════
   MATRIX RAIN — Falling code characters background
   ═══════════════════════════════════════════════════════════════ */
export function MatrixRain({ opacity = 0.06, speed = 1, density = 30 }: { opacity?: number; speed?: number; density?: number }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    const chars = "01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン{}[]<>/\\|=+-*&^%$#@!";
    const fontSize = 14;
    let columns: number;
    let drops: number[];

    function resize() {
      canvas!.width = window.innerWidth;
      canvas!.height = window.innerHeight;
      columns = Math.floor(canvas!.width / fontSize);
      drops = Array(columns).fill(1).map(() => Math.random() * -100);
    }

    resize();
    window.addEventListener("resize", resize);

    const colors = ["#9945ff", "#00d1ff", "#14f195", "#f971ff"];

    function draw() {
      ctx!.fillStyle = `rgba(8,8,15,${0.05 * speed})`;
      ctx!.fillRect(0, 0, canvas!.width, canvas!.height);

      for (let i = 0; i < columns; i++) {
        if (Math.random() > density / 100) continue;
        const char = chars[Math.floor(Math.random() * chars.length)];
        const color = colors[Math.floor(Math.random() * colors.length)];
        ctx!.fillStyle = color;
        ctx!.font = `${fontSize}px monospace`;
        ctx!.globalAlpha = 0.3 + Math.random() * 0.7;
        ctx!.fillText(char, i * fontSize, drops[i] * fontSize);
        ctx!.globalAlpha = 1;

        if (drops[i] * fontSize > canvas!.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i] += speed;
      }
      animationId = requestAnimationFrame(draw);
    }

    draw();
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, [opacity, speed, density]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{ opacity }}
    />
  );
}

/* ═══════════════════════════════════════════════════════════════
   GLITCH TEXT — Cyberpunk text distortion effect
   ═══════════════════════════════════════════════════════════════ */
export function GlitchText({
  children,
  className = "",
  as: Tag = "span",
  intensity = 1,
}: {
  children: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "span" | "div";
  intensity?: number;
}) {
  return (
    <Tag className={`relative inline-block ${className}`}>
      {/* Main text */}
      <span className="relative z-10">{children}</span>
      {/* Glitch layers */}
      <span
        className="absolute inset-0 z-0 opacity-80"
        style={{
          color: "#00d1ff",
          animation: `glitch-1 ${2 / intensity}s infinite linear alternate-reverse`,
          clipPath: "inset(0 0 65% 0)",
        }}
        aria-hidden
      >
        {children}
      </span>
      <span
        className="absolute inset-0 z-0 opacity-80"
        style={{
          color: "#f971ff",
          animation: `glitch-2 ${3 / intensity}s infinite linear alternate-reverse`,
          clipPath: "inset(65% 0 0 0)",
        }}
        aria-hidden
      >
        {children}
      </span>
    </Tag>
  );
}

/* ═══════════════════════════════════════════════════════════════
   CYBER CARD — Holographic 3D card with scan line
   ═══════════════════════════════════════════════════════════════ */
export function CyberCard({
  children,
  className = "",
  glowColor = "#9945ff",
  hoverScale = 1.02,
}: {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
  hoverScale?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const [hovering, setHovering] = useState(false);

  const smoothX = useSpring(rotateX, { stiffness: 150, damping: 20 });
  const smoothY = useSpring(rotateY, { stiffness: 150, damping: 20 });

  const scanY = useMotionValue(0);
  const spotlight = useMotionTemplate`radial-gradient(400px circle at ${mouseX}px ${mouseY}px, ${glowColor}22, transparent 60%)`;
  const borderGlow = useMotionTemplate`radial-gradient(300px circle at ${mouseX}px ${mouseY}px, ${glowColor}44, transparent 70%)`;

  useEffect(() => {
    if (!hovering) return;
    let start = 0;
    let id: number;
    function animate(ts: number) {
      if (!start) start = ts;
      const progress = ((ts - start) % 2000) / 2000;
      scanY.set(progress * 100);
      id = requestAnimationFrame(animate);
    }
    id = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(id);
  }, [hovering, scanY]);

  function handleMouseMove(e: React.MouseEvent) {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    mouseX.set(x);
    mouseY.set(y);
    rotateX.set(((y / rect.height) * 14 - 7) * -1);
    rotateY.set((x / rect.width) * 14 - 7);
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => {
        setHovering(false);
        rotateX.set(0);
        rotateY.set(0);
      }}
      whileHover={{ scale: hoverScale }}
      style={{
        rotateX: smoothX,
        rotateY: smoothY,
        transformPerspective: 1200,
        transformStyle: "preserve-3d",
      }}
      className={`relative group ${className}`}
    >
      {/* Holographic border glow */}
      <motion.div
        className="absolute -inset-px rounded-[inherit] opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"
        style={{ background: borderGlow }}
      />

      {/* Scan line */}
      <motion.div
        className="absolute inset-0 rounded-[inherit] overflow-hidden pointer-events-none z-10 opacity-0 group-hover:opacity-100 transition-opacity"
      >
        <motion.div
          className="absolute left-0 right-0 h-[1px]"
          style={{
            top: useMotionTemplate`${scanY}%`,
            background: `linear-gradient(90deg, transparent, ${glowColor}80, transparent)`,
            boxShadow: `0 0 15px ${glowColor}60`,
          }}
        />
      </motion.div>

      {/* Spotlight */}
      <motion.div
        className="absolute inset-0 rounded-[inherit] z-[1] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: spotlight }}
      />

      {/* Content */}
      <div className="relative z-[2]" style={{ transform: "translateZ(20px)" }}>
        {children}
      </div>
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   HACKER TERMINAL — Animated typing terminal
   ═══════════════════════════════════════════════════════════════ */
export function HackerTerminal({
  lines,
  className = "",
  typingSpeed = 30,
  lineDelay = 500,
}: {
  lines: { prefix?: string; text: string; color?: string }[];
  className?: string;
  typingSpeed?: number;
  lineDelay?: number;
}) {
  const [displayedLines, setDisplayedLines] = useState<{ prefix: string; text: string; color: string; typing: boolean }[]>([]);
  const [currentLine, setCurrentLine] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.3 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible || currentLine >= lines.length) return;

    const line = lines[currentLine];
    if (currentChar === 0) {
      setDisplayedLines((prev) => [
        ...prev,
        {
          prefix: line.prefix || ">",
          text: "",
          color: line.color || "#14f195",
          typing: true,
        },
      ]);
    }

    if (currentChar < line.text.length) {
      const timer = setTimeout(() => {
        setDisplayedLines((prev) => {
          const updated = [...prev];
          updated[updated.length - 1] = {
            ...updated[updated.length - 1],
            text: line.text.slice(0, currentChar + 1),
          };
          return updated;
        });
        setCurrentChar((c) => c + 1);
      }, typingSpeed + Math.random() * 20);
      return () => clearTimeout(timer);
    } else {
      setDisplayedLines((prev) => {
        const updated = [...prev];
        updated[updated.length - 1] = { ...updated[updated.length - 1], typing: false };
        return updated;
      });
      const timer = setTimeout(() => {
        setCurrentLine((l) => l + 1);
        setCurrentChar(0);
      }, lineDelay);
      return () => clearTimeout(timer);
    }
  }, [isVisible, currentLine, currentChar, lines, typingSpeed, lineDelay]);

  return (
    <div ref={ref} className={`relative rounded-2xl overflow-hidden ${className}`}>
      {/* Window chrome */}
      <div className="flex items-center gap-2 px-4 py-3 bg-[#0c0c14] border-b border-white/[0.06]">
        <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
        <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
        <div className="w-3 h-3 rounded-full bg-[#28c840]" />
        <span className="text-[10px] text-slate-500 ml-2 font-mono">elfennir@server ~ %</span>
      </div>
      {/* Terminal body */}
      <div className="bg-[#08080f]/90 backdrop-blur-xl p-5 font-mono text-sm space-y-1.5 min-h-[200px] border border-white/[0.06] border-t-0 rounded-b-2xl">
        {displayedLines.map((line, i) => (
          <div key={i} className="flex items-start gap-2">
            <span className="text-slate-600 flex-shrink-0">{line.prefix}</span>
            <span style={{ color: line.color }}>
              {line.text}
              {line.typing && (
                <span className="inline-block w-2 h-4 bg-current ml-0.5 animate-pulse" />
              )}
            </span>
          </div>
        ))}
        {currentLine >= lines.length && (
          <div className="flex items-center gap-2 mt-2">
            <span className="text-slate-600">{">"}</span>
            <span className="inline-block w-2 h-4 bg-[#14f195] animate-pulse" />
          </div>
        )}
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   PARALLAX FLOATING ELEMENTS — Random tech icons floating
   ═══════════════════════════════════════════════════════════════ */
export function FloatingParticles({ count = 20, className = "" }: { count?: number; className?: string }) {
  const particles = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: 2 + Math.random() * 4,
        duration: 15 + Math.random() * 20,
        delay: Math.random() * 10,
        color: ["#9945ff", "#00d1ff", "#14f195", "#f971ff"][Math.floor(Math.random() * 4)],
      })),
    [count]
  );

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.x}%`,
            top: `${p.y}%`,
            background: p.color,
            boxShadow: `0 0 ${p.size * 3}px ${p.color}40`,
          }}
          animate={{
            y: [0, -30, 0, 20, 0],
            x: [0, 15, -10, 5, 0],
            opacity: [0.2, 0.6, 0.3, 0.5, 0.2],
            scale: [1, 1.3, 0.9, 1.1, 1],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   DATA STREAM — Horizontal flowing data visualization
   ═══════════════════════════════════════════════════════════════ */
export function DataStream({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const x = useTransform(scrollYProgress, [0, 1], [0, -1000]);

  const blocks = useMemo(() =>
    Array.from({ length: 60 }, (_, i) => ({
      width: 20 + Math.random() * 80,
      height: 3 + Math.random() * 8,
      gap: 4 + Math.random() * 8,
      color: ["#9945ff", "#00d1ff", "#14f195", "#f971ff"][Math.floor(Math.random() * 4)],
      opacity: 0.1 + Math.random() * 0.4,
    })),
    []
  );

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.div style={{ x }} className="flex items-center gap-1 whitespace-nowrap py-4">
        {blocks.map((b, i) => (
          <div
            key={i}
            className="rounded-full flex-shrink-0"
            style={{
              width: b.width,
              height: b.height,
              background: b.color,
              opacity: b.opacity,
              marginRight: b.gap,
            }}
          />
        ))}
      </motion.div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   SCROLL PROGRESS INDICATOR — Vertical line with dot
   ═══════════════════════════════════════════════════════════════ */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  return (
    <div className="fixed right-4 top-1/2 -translate-y-1/2 z-40 hidden lg:block">
      <div className="relative w-[2px] h-32 bg-white/[0.06] rounded-full overflow-hidden">
        <motion.div
          className="absolute top-0 left-0 right-0 origin-top rounded-full"
          style={{
            scaleY,
            background: "linear-gradient(180deg, #9945ff, #00d1ff, #14f195)",
            height: "100%",
          }}
        />
      </div>
      <motion.div
        className="absolute left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-[#9945ff] shadow-[0_0_10px_#9945ff80]"
        style={{
          top: useTransform(scaleY, (v) => `${v * 128}px`),
        }}
      />
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   MAGNETIC CURSOR — Custom cursor that reacts to elements
   ═══════════════════════════════════════════════════════════════ */
export function MagneticCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      setVisible(true);
    };
    const handleLeave = () => setVisible(false);
    const handleEnter = () => setVisible(true);

    window.addEventListener("mousemove", handleMove);
    document.addEventListener("mouseleave", handleLeave);
    document.addEventListener("mouseenter", handleEnter);

    // Detect hoverable elements
    const observer = new MutationObserver(() => {
      document.querySelectorAll("a, button, [data-magnetic]").forEach((el) => {
        el.addEventListener("mouseenter", () => setHovering(true));
        el.addEventListener("mouseleave", () => setHovering(false));
      });
    });
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", handleMove);
      document.removeEventListener("mouseleave", handleLeave);
      document.removeEventListener("mouseenter", handleEnter);
      observer.disconnect();
    };
  }, []);

  if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) return null;

  return (
    <AnimatePresence>
      {visible && (
        <>
          <motion.div
            className="fixed pointer-events-none z-[9999] rounded-full mix-blend-difference"
            animate={{
              x: pos.x - (hovering ? 20 : 8),
              y: pos.y - (hovering ? 20 : 8),
              width: hovering ? 40 : 16,
              height: hovering ? 40 : 16,
            }}
            transition={{ type: "spring", stiffness: 500, damping: 28 }}
            style={{
              background: hovering
                ? "radial-gradient(circle, #9945ff88, #00d1ff44)"
                : "rgba(255,255,255,0.8)",
              border: hovering ? "1px solid rgba(153,69,255,0.5)" : "none",
            }}
          />
          <motion.div
            className="fixed pointer-events-none z-[9998] rounded-full border border-white/10"
            animate={{
              x: pos.x - 24,
              y: pos.y - 24,
              width: 48,
              height: 48,
              opacity: hovering ? 0 : 0.3,
            }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
          />
        </>
      )}
    </AnimatePresence>
  );
}

/* ═══════════════════════════════════════════════════════════════
   ANIMATED COUNTER with easing
   ═══════════════════════════════════════════════════════════════ */
export function AnimatedNumber({ value, suffix = "", className = "" }: { value: number; suffix?: string; className?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          let start = 0;
          const duration = 1500;
          const startTime = performance.now();
          function animate(now: number) {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.round(eased * value));
            if (progress < 1) requestAnimationFrame(animate);
          }
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [value]);

  return (
    <span ref={ref} className={className}>
      {count}{suffix}
    </span>
  );
}

/* ═══════════════════════════════════════════════════════════════
   HACKER GRID — Animated background grid with glowing nodes
   ═══════════════════════════════════════════════════════════════ */
export function HackerGrid({ className = "" }: { className?: string }) {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {/* Grid lines */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(153,69,255,0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,209,255,0.2) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />
      {/* Glowing intersections */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `radial-gradient(circle 2px at center, #9945ff 0%, transparent 100%)`,
          backgroundSize: "80px 80px",
        }}
      />
      {/* Moving scan line */}
      <motion.div
        className="absolute left-0 right-0 h-[1px]"
        style={{
          background: "linear-gradient(90deg, transparent, #9945ff40, #00d1ff30, transparent)",
          boxShadow: "0 0 20px #9945ff20",
        }}
        animate={{ top: ["0%", "100%"] }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      />
    </div>
  );
}
