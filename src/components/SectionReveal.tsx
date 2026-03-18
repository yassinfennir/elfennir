"use client";
import { motion, useScroll, useTransform, type MotionProps } from "framer-motion";
import { useRef } from "react";

/* Smooth section reveal with optional parallax */
export function SectionReveal({
  children,
  className = "",
  parallax = false,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  parallax?: boolean;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], parallax ? [60, -60] : [0, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0, 1, 1, 0]);

  return (
    <motion.div
      ref={ref}
      style={parallax ? { y, opacity } : undefined}
      initial={parallax ? undefined : { opacity: 0, y: 40 }}
      whileInView={parallax ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={
        parallax
          ? undefined
          : {
              duration: 0.8,
              delay,
              ease: [0.22, 1, 0.36, 1],
            }
      }
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* Stagger children animation */
export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

export const staggerItem = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

/* Ultra-smooth spring config for Framer Motion */
export const smoothSpring = {
  type: "spring" as const,
  stiffness: 100,
  damping: 30,
  mass: 1,
};

export const gentleSpring = {
  type: "spring" as const,
  stiffness: 60,
  damping: 20,
  mass: 0.8,
};
