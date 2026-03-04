import { motion } from "motion/react";
import { useState, useEffect } from "react";

export function SplitTextReveal({ text, className = "" }: { text: string; className?: string }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const words = text.split(" ");

  return (
    <div className={`overflow-hidden ${className}`}>
      {words.map((word, wordIndex) => (
        <span key={wordIndex} className="inline-block overflow-hidden mr-2">
          {word.split("").map((char, charIndex) => (
            <motion.span
              key={charIndex}
              className="inline-block"
              initial={{ y: "100%", opacity: 0, rotateX: 90 }}
              animate={
                isVisible
                  ? { y: 0, opacity: 1, rotateX: 0 }
                  : { y: "100%", opacity: 0, rotateX: 90 }
              }
              transition={{
                duration: 0.5,
                delay: wordIndex * 0.1 + charIndex * 0.03,
                ease: [0.33, 1, 0.68, 1],
              }}
              style={{ transformOrigin: "center bottom" }}
            >
              {char}
            </motion.span>
          ))}
        </span>
      ))}
    </div>
  );
}
