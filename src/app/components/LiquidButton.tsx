import { motion } from "motion/react";

export function LiquidButton({ children, className = "", onClick }: { children: React.ReactNode; className?: string; onClick?: () => void }) {
  return (
    <motion.button
      className={`relative overflow-hidden ${className}`}
      onClick={onClick}
      whileHover="hover"
      whileTap={{ scale: 0.95 }}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500"
        variants={{
          hover: {
            scale: [1, 1.5, 1.2, 1.8, 1],
            rotate: [0, 90, 180, 270, 360],
            borderRadius: ["30%", "40%", "50%", "40%", "30%"],
          },
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
      />
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
}
