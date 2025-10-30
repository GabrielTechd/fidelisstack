import { motion } from "motion/react";

interface FloatingParticlesProps {
  count?: number;
  className?: string;
}

export function FloatingParticles({ count = 30, className = "" }: FloatingParticlesProps) {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {[...Array(count)].map((_, i) => {
        const size = Math.random() * 4 + 2;
        const duration = Math.random() * 10 + 15;
        const delay = Math.random() * 5;
        const initialX = Math.random() * 100;
        const initialY = Math.random() * 100;
        const colors = ["bg-blue-400", "bg-purple-400", "bg-pink-400", "bg-cyan-400"];
        const color = colors[Math.floor(Math.random() * colors.length)];

        return (
          <motion.div
            key={i}
            className={`absolute rounded-full ${color} opacity-20`}
            style={{
              width: size,
              height: size,
              left: `${initialX}%`,
              top: `${initialY}%`,
            }}
            animate={{
              y: [0, -100, 0],
              x: [0, Math.random() * 100 - 50, 0],
              opacity: [0.1, 0.3, 0.1],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration,
              delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        );
      })}
    </div>
  );
}
