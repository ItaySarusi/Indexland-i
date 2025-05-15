"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface WaveRevealProps {
  text: string;
  className?: string;
  direction?: "up" | "down" | "left" | "right";
  delay?: number;
  duration?: string;
  blur?: boolean;
  staggerChildren?: number;
}

export default function WaveReveal({
  text,
  className,
  direction = "up",
  delay = 0,
  duration = "800ms",
  blur = true,
  staggerChildren = 0.05,
}: WaveRevealProps) {
  // מגדירים את כיוון האנימציה
  const directionVariants = {
    up: {
      hidden: { y: 20, opacity: 0 },
      visible: { y: 0, opacity: 1 },
    },
    down: {
      hidden: { y: -20, opacity: 0 },
      visible: { y: 0, opacity: 1 },
    },
    left: {
      hidden: { x: 20, opacity: 0 },
      visible: { x: 0, opacity: 1 },
    },
    right: {
      hidden: { x: -20, opacity: 0 },
      visible: { x: 0, opacity: 1 },
    },
  };

  const selectedVariant = directionVariants[direction];

  // מפצלים את הטקסט לתווים בודדים כדי להפעיל אנימציה על כל אחד בנפרד
  const characters = text.split("");

  // קובעים את הסגנון של הקונטיינר
  const containerClassName = cn(
    "inline-flex overflow-hidden",
    blur && "filter transition-all",
    className
  );

  return (
    <motion.div
      className={containerClassName}
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren,
            delayChildren: delay / 1000, // המרה ממילישניות לשניות
          },
        },
      }}
      style={{
        // מגדירים את משך האנימציה דרך ה-CSS אם צריך
        "--duration": duration,
      } as React.CSSProperties}
    >
      {characters.map((char, index) => (
        <motion.span
          key={`${char}-${index}`}
          variants={selectedVariant}
          transition={{
            duration: Number(duration.replace("ms", "")) / 1000, // המרה ממילישניות לשניות
            ease: [0.2, 0.65, 0.3, 0.9], // אפקט תנועה מותאם
          }}
          className={cn(
            "inline-block",
            char === " " ? "ml-1" : ""
          )}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.div>
  );
} 