import { motion } from "motion/react";
import { useEffect, useState } from "react";

export function AnimatedGrid() {
  const [cells, setCells] = useState<number[]>([]);

  useEffect(() => {
    setCells(Array.from({ length: 100 }, (_, i) => i));
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[0] opacity-5">
      <div className="grid grid-cols-10 grid-rows-10 w-full h-full">
        {cells.map((cell) => (
          <motion.div
            key={cell}
            className="border border-purple-500"
            animate={{
              opacity: [0.1, 0.5, 0.1],
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: cell * 0.02,
            }}
          />
        ))}
      </div>
    </div>
  );
}
