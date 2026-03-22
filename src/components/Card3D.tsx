"use client";
import { useRef, useState } from "react";
import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";

const ROTATION_RANGE = 12;
const HALF_ROTATION_RANGE = ROTATION_RANGE / 2;

export function Card3D({
  children,
  className = "",
  glowColor = "153,69,255",
}: {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [hovering, setHovering] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x, { stiffness: 200, damping: 20 });
  const ySpring = useSpring(y, { stiffness: 200, damping: 20 });

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const transform = useMotionTemplate`perspective(1000px) rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;
  const spotlightBackground = useMotionTemplate`radial-gradient(300px circle at ${mouseX}px ${mouseY}px, rgba(${glowColor},0.12), transparent 80%)`;

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseXPos = e.clientX - rect.left;
    const mouseYPos = e.clientY - rect.top;

    const rX = ((mouseYPos / height) * ROTATION_RANGE - HALF_ROTATION_RANGE) * -1;
    const rY = (mouseXPos / width) * ROTATION_RANGE - HALF_ROTATION_RANGE;

    x.set(rX);
    y.set(rY);
    mouseX.set(mouseXPos);
    mouseY.set(mouseYPos);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
    setHovering(false);
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={handleMouseLeave}
      style={{ transform, transformStyle: "preserve-3d" }}
      className={`relative ${className}`}
    >
      {/* Spotlight glow */}
      <motion.div
        className="pointer-events-none absolute inset-0 rounded-[inherit] z-[1] opacity-0 transition-opacity duration-500"
        style={{
          background: spotlightBackground,
          opacity: hovering ? 1 : 0,
        }}
      />
      <div style={{ transform: "translateZ(0)" }} className="relative z-[2]">
        {children}
      </div>
    </motion.div>
  );
}

/* ─── Magnetic Button ─── */
export function MagneticButton({
  children,
  className = "",
  as = "button",
  ...props
}: {
  children: React.ReactNode;
  className?: string;
  as?: "button" | "a";
  [key: string]: unknown;
}) {
  const ref = useRef<HTMLElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x, { stiffness: 300, damping: 15 });
  const ySpring = useSpring(y, { stiffness: 300, damping: 15 });

  function handleMouseMove(e: React.MouseEvent) {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    x.set((e.clientX - cx) * 0.15);
    y.set((e.clientY - cy) * 0.15);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  const Component = motion[as] as typeof motion.div;

  return (
    <Component
      ref={ref as React.Ref<HTMLDivElement>}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: xSpring, y: ySpring }}
      className={className}
      {...props}
    >
      {children}
    </Component>
  );
}
