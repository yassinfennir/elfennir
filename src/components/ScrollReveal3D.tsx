"use client";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";

/* ─── 3D Scroll Reveal — Elements rotate/translate in 3D as they enter viewport ─── */
export function ScrollReveal3D({
  children,
  className = "",
  direction = "up",
  rotateX = 15,
  rotateY = 0,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  direction?: "up" | "left" | "right";
  rotateX?: number;
  rotateY?: number;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const rawProgress = useTransform(scrollYProgress, [0, 0.4], [0, 1]);
  const progress = useSpring(rawProgress, { stiffness: 100, damping: 30 });

  const opacity = useTransform(progress, [0, 1], [0, 1]);
  const rX = useTransform(progress, [0, 1], [rotateX, 0]);
  const rY = useTransform(progress, [0, 1], [rotateY, 0]);
  const translateY = useTransform(progress, [0, 1], [direction === "up" ? 60 : 0, 0]);
  const translateX = useTransform(progress, [0, 1], [
    direction === "left" ? -60 : direction === "right" ? 60 : 0,
    0,
  ]);
  const scale = useTransform(progress, [0, 1], [0.95, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        opacity,
        rotateX: rX,
        rotateY: rY,
        y: translateY,
        x: translateX,
        scale,
        transformPerspective: 1200,
        transformStyle: "preserve-3d",
      }}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─── Parallax Section — Background moves at different speed ─── */
export function ParallaxSection({
  children,
  className = "",
  speed = 0.2,
}: {
  children: React.ReactNode;
  className?: string;
  speed?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [100 * speed, -100 * speed]);

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div style={{ y }}>{children}</motion.div>
    </div>
  );
}

/* ─── Horizontal Scroll Text ─── */
export function ScrollingText({
  text,
  className = "",
  speed = 0.5,
}: {
  text: string;
  className?: string;
  speed?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const x = useTransform(scrollYProgress, [0, 1], [0, -500 * speed]);

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.div style={{ x }} className="flex whitespace-nowrap">
        {Array.from({ length: 4 }).map((_, i) => (
          <span key={i} className="mx-8">
            {text}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

/* ─── Stagger Children on scroll ─── */
export function StaggerContainer({
  children,
  className = "",
  staggerDelay = 0.08,
}: {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerDelay,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export const staggerItem = {
  hidden: {
    opacity: 0,
    y: 40,
    rotateX: 10,
  },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  },
};
