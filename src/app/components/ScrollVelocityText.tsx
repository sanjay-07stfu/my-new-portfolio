import { motion, useScroll } from "motion/react";
import { useEffect, useState } from "react";

export function ScrollVelocityText() {
  const { scrollYProgress } = useScroll();
  const [velocity, setVelocity] = useState(0);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const updateVelocity = () => {
      const currentScrollY = window.scrollY;
      const diff = currentScrollY - lastScrollY;
      setVelocity(Math.abs(diff));
      setLastScrollY(currentScrollY);
    };

    const interval = setInterval(updateVelocity, 50);
    return () => clearInterval(interval);
  }, [lastScrollY]);

  return (
    <motion.div
      className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-50 text-9xl font-bold text-white/10"
      style={{
        scale: Math.min(velocity / 20, 3),
        opacity: Math.min(velocity / 50, 0.5),
      }}
      animate={{
        rotate: [0, 360],
      }}
      transition={{
        rotate: {
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        },
      }}
    >
      SCROLL
    </motion.div>
  );
}
