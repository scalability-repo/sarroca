"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  showText?: boolean;
  animate?: boolean;
}

const sizeMap = {
  sm: { width: 140, height: 50 },
  md: { width: 200, height: 70 },
  lg: { width: 300, height: 105 },
  xl: { width: 420, height: 150 },
};

export function Logo({
  className = "",
  size = "md",
  animate = false
}: LogoProps) {
  const { width, height } = sizeMap[size];

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 1.2, ease: "easeOut" as const },
    },
  };

  return (
    <motion.div
      className={className}
      initial={animate ? "hidden" : "visible"}
      animate="visible"
      variants={fadeIn}
    >
      <Image
        src="/logo.png"
        alt="Sarroca 1935"
        width={width}
        height={height}
        priority
        className="object-contain"
      />
    </motion.div>
  );
}

// SVG Icon-only version for smaller uses (botanical burst pattern)
export function LogoIcon({
  className = "",
  size = 40,
  animate = false
}: {
  className?: string;
  size?: number;
  animate?: boolean;
}) {
  const leafVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.02,
        duration: 0.5,
        ease: "easeOut" as const,
      },
    }),
  };

  // Leaf angles for the radial burst pattern
  const leaves = [
    { angle: 0, length: 10, width: 3 },
    { angle: 30, length: 9, width: 2.5 },
    { angle: 60, length: 10, width: 3 },
    { angle: 90, length: 9, width: 2.5 },
    { angle: 120, length: 10, width: 3 },
    { angle: 150, length: 9, width: 2.5 },
    { angle: 180, length: 10, width: 3 },
    { angle: 210, length: 9, width: 2.5 },
    { angle: 240, length: 10, width: 3 },
    { angle: 270, length: 9, width: 2.5 },
    { angle: 300, length: 10, width: 3 },
    { angle: 330, length: 9, width: 2.5 },
  ];

  // Dot positions between leaves
  const dots = [
    { angle: 15, distance: 14, size: 2 },
    { angle: 45, distance: 13, size: 1.8 },
    { angle: 75, distance: 14, size: 2 },
    { angle: 105, distance: 13, size: 1.8 },
    { angle: 135, distance: 14, size: 2 },
    { angle: 165, distance: 13, size: 1.8 },
    { angle: 195, distance: 14, size: 2 },
    { angle: 225, distance: 13, size: 1.8 },
    { angle: 255, distance: 14, size: 2 },
    { angle: 285, distance: 13, size: 1.8 },
    { angle: 315, distance: 14, size: 2 },
    { angle: 345, distance: 13, size: 1.8 },
  ];

  return (
    <motion.svg
      viewBox="0 0 60 60"
      width={size}
      height={size}
      className={className}
      initial={animate ? "hidden" : "visible"}
      animate="visible"
      aria-label="Sarroca 1935"
    >
      <g transform="translate(30, 30)">
        {/* Leaves radiating outward */}
        {leaves.map((leaf, i) => {
          const rad = (leaf.angle * Math.PI) / 180;
          const x = Math.cos(rad) * 8;
          const y = Math.sin(rad) * 8;
          return (
            <motion.ellipse
              key={`leaf-${i}`}
              cx={x}
              cy={y}
              rx={leaf.width}
              ry={leaf.length}
              fill="#1a1a1a"
              custom={i}
              variants={leafVariants}
              transform={`rotate(${leaf.angle}, ${x}, ${y})`}
            />
          );
        })}

        {/* Small dots between leaves */}
        {dots.map((dot, i) => {
          const rad = (dot.angle * Math.PI) / 180;
          const x = Math.cos(rad) * dot.distance;
          const y = Math.sin(rad) * dot.distance;
          return (
            <motion.circle
              key={`dot-${i}`}
              cx={x}
              cy={y}
              r={dot.size}
              fill="#1a1a1a"
              custom={i + 12}
              variants={leafVariants}
            />
          );
        })}
      </g>
    </motion.svg>
  );
}
