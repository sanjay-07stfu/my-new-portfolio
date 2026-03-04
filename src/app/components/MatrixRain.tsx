import { motion } from "motion/react";
import { useState, useEffect } from "react";

export function MatrixRain() {
  const [columns, setColumns] = useState<number[]>([]);

  useEffect(() => {
    const cols = Math.floor(window.innerWidth / 20);
    setColumns(Array.from({ length: cols }, (_, i) => i));
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[0] opacity-10">
      {columns.map((col) => (
        <motion.div
          key={col}
          className="absolute top-0 text-green-500 font-mono text-xs"
          style={{
            left: col * 20,
          }}
          animate={{
            y: ["-100%", "100vh"],
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * 5,
          }}
        >
          {Array.from({ length: 30 }, () =>
            String.fromCharCode(33 + Math.floor(Math.random() * 94))
          ).join("")}
        </motion.div>
      ))}
    </div>
  );
}
