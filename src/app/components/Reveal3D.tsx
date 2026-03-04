import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export function Reveal3D({ children, direction = "up" }: { children: React.ReactNode; direction?: "up" | "down" | "left" | "right" }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const transforms = {
    up: {
      y: useTransform(scrollYProgress, [0, 0.5, 1], [200, 0, -200]),
      rotateX: useTransform(scrollYProgress, [0, 0.5, 1], [45, 0, -45]),
    },
    down: {
      y: useTransform(scrollYProgress, [0, 0.5, 1], [-200, 0, 200]),
      rotateX: useTransform(scrollYProgress, [0, 0.5, 1], [-45, 0, 45]),
    },
    left: {
      x: useTransform(scrollYProgress, [0, 0.5, 1], [200, 0, -200]),
      rotateY: useTransform(scrollYProgress, [0, 0.5, 1], [45, 0, -45]),
    },
    right: {
      x: useTransform(scrollYProgress, [0, 0.5, 1], [-200, 0, 200]),
      rotateY: useTransform(scrollYProgress, [0, 0.5, 1], [-45, 0, 45]),
    },
  };

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);

  return (
    <motion.div
      ref={ref}
      style={{
        ...transforms[direction],
        opacity,
        scale,
        transformStyle: "preserve-3d",
        perspective: 1000,
      }}
    >
      {children}
    </motion.div>
  );
}
