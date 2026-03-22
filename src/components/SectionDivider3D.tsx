"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function SectionDivider3D({ text = "" }: { text?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const x1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const x2 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95]);

  return (
    <div ref={ref} className="relative py-16 overflow-hidden">
      <motion.div style={{ opacity, scale }} className="relative">
        {/* Animated gradient lines */}
        <div className="flex items-center gap-4 justify-center">
          <motion.div
            style={{ x: x1 }}
            className="h-px w-[30%] bg-gradient-to-r from-transparent via-[#ff6b00]/40 to-[#00d1ff]/20"
          />
          {text ? (
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-600 whitespace-nowrap">
              {text}
            </span>
          ) : (
            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#ff6b00] to-[#00d1ff] animate-pulse" />
          )}
          <motion.div
            style={{ x: x2 }}
            className="h-px w-[30%] bg-gradient-to-l from-transparent via-[#14f195]/40 to-[#f971ff]/20"
          />
        </div>
      </motion.div>
    </div>
  );
}

/* ─── Big Scrolling Marquee Text ─── */
export function ScrollingMarquee({
  words,
  className = "",
}: {
  words: string[];
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const x = useTransform(scrollYProgress, [0, 1], [0, -600]);

  return (
    <div ref={ref} className={`overflow-hidden py-12 ${className}`}>
      <motion.div style={{ x }} className="flex gap-8 whitespace-nowrap">
        {[...words, ...words, ...words].map((word, i) => (
          <span
            key={`${word}-${i}`}
            className="font-[var(--font-heading)] text-6xl sm:text-7xl lg:text-8xl font-bold text-transparent"
            style={{
              WebkitTextStroke: "1px rgba(255,107,0,0.15)",
            }}
          >
            {word}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
