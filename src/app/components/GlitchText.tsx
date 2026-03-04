import { motion } from "motion/react";
import { useState, useEffect } from "react";

export function GlitchText({ text, className = "" }: { text: string; className?: string }) {
  const [isGlitching, setIsGlitching] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsGlitching(true);
      setTimeout(() => setIsGlitching(false), 200);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`relative inline-block ${className}`}>
      <motion.div
        className="relative z-10"
        animate={
          isGlitching
            ? {
                x: [0, -2, 2, -2, 2, 0],
                y: [0, 2, -2, 2, -2, 0],
              }
            : {}
        }
        transition={{ duration: 0.2 }}
      >
        {text}
      </motion.div>

      {/* Glitch layers */}
      {isGlitching && (
        <>
          <motion.div
            className="absolute inset-0 text-red-500"
            style={{ clipPath: "inset(0 0 0 0)" }}
            animate={{
              x: [-2, 2, -2],
              clipPath: [
                "inset(0 0 80% 0)",
                "inset(20% 0 60% 0)",
                "inset(40% 0 40% 0)",
              ],
            }}
            transition={{ duration: 0.2, repeat: 1 }}
          >
            {text}
          </motion.div>
          <motion.div
            className="absolute inset-0 text-cyan-500"
            style={{ clipPath: "inset(0 0 0 0)" }}
            animate={{
              x: [2, -2, 2],
              clipPath: [
                "inset(20% 0 60% 0)",
                "inset(60% 0 20% 0)",
                "inset(80% 0 0 0)",
              ],
            }}
            transition={{ duration: 0.2, repeat: 1 }}
          >
            {text}
          </motion.div>
        </>
      )}
    </div>
  );
}
