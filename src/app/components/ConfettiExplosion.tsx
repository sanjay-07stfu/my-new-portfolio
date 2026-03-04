import { motion } from "motion/react";
import { useEffect, useState } from "react";

interface Confetti {
  id: number;
  x: number;
  y: number;
  color: string;
  rotation: number;
  scale: number;
}

export function ConfettiExplosion() {
  const [confetti, setConfetti] = useState<Confetti[]>([]);
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    // Trigger confetti on page load
    setTimeout(() => {
      triggerConfetti();
    }, 500);

    // Trigger confetti periodically
    const interval = setInterval(() => {
      triggerConfetti();
    }, 15000);

    return () => clearInterval(interval);
  }, []);

  const triggerConfetti = () => {
    const colors = ["#a855f7", "#3b82f6", "#ec4899", "#f59e0b", "#10b981", "#ef4444"];
    const newConfetti: Confetti[] = [];

    for (let i = 0; i < 50; i++) {
      newConfetti.push({
        id: Date.now() + i,
        x: 50,
        y: 50,
        color: colors[Math.floor(Math.random() * colors.length)],
        rotation: Math.random() * 360,
        scale: Math.random() * 0.5 + 0.5,
      });
    }

    setConfetti(newConfetti);
    setShowConfetti(true);

    setTimeout(() => {
      setShowConfetti(false);
      setConfetti([]);
    }, 3000);
  };

  if (!showConfetti) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999]">
      {confetti.map((piece) => (
        <motion.div
          key={piece.id}
          className="absolute"
          style={{
            left: `${piece.x}%`,
            top: `${piece.y}%`,
            backgroundColor: piece.color,
            width: 10,
            height: 10,
          }}
          initial={{
            x: 0,
            y: 0,
            opacity: 1,
            rotate: piece.rotation,
            scale: piece.scale,
          }}
          animate={{
            x: (Math.random() - 0.5) * 1000,
            y: Math.random() * 1000 + 500,
            opacity: 0,
            rotate: piece.rotation + 360 * 3,
          }}
          transition={{
            duration: 3,
            ease: "easeOut",
          }}
        />
      ))}
    </div>
  );
}
