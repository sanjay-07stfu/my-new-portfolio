import { motion, useScroll, useTransform, useMotionValue, useSpring } from "motion/react";
import { ArrowRight, Github, Linkedin, Mail, Sparkles, Download, Code2, Zap } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { SplitTextReveal } from "./SplitTextReveal";

export function HeroGodTier() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 50, stiffness: 300 };
  const mouseXSpring = useSpring(mouseX, springConfig);
  const mouseYSpring = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      mouseX.set(e.clientX - window.innerWidth / 2);
      mouseY.set(e.clientY - window.innerHeight / 2);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const y = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  const rotateX = useTransform(mouseYSpring, [-500, 500], [10, -10]);
  const rotateY = useTransform(mouseXSpring, [-500, 500], [-10, 10]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950"
      style={{ perspective: "1200px" }}
    >
      {/* 3D Floating Elements */}
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: Math.random() * 100 + 50,
            height: Math.random() * 100 + 50,
          }}
          animate={{
            x: [0, Math.random() * 100 - 50, 0],
            y: [0, Math.random() * 100 - 50, 0],
            z: [0, Math.random() * 200 - 100, 0],
            rotateX: [0, 360],
            rotateY: [0, 360],
            rotateZ: [0, 360],
          }}
          transition={{
            duration: Math.random() * 20 + 10,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <div
            className="w-full h-full rounded-lg"
            style={{
              background: `linear-gradient(135deg, rgba(168,85,247,${Math.random() * 0.2}), rgba(59,130,246,${Math.random() * 0.2}))`,
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(255,255,255,0.1)",
              transformStyle: "preserve-3d",
            }}
          />
        </motion.div>
      ))}

      {/* Animated Grid with Perspective */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="w-full h-full"
          style={{
            rotateX,
            rotateY,
            transformStyle: "preserve-3d",
          }}
        >
          <svg className="w-full h-full" style={{ transform: "translateZ(-100px)" }}>
            <defs>
              <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
                <motion.path
                  d="M 50 0 L 0 0 0 50"
                  fill="none"
                  stroke="rgba(168,85,247,0.3)"
                  strokeWidth="0.5"
                  animate={{
                    stroke: [
                      "rgba(168,85,247,0.3)",
                      "rgba(59,130,246,0.3)",
                      "rgba(236,72,153,0.3)",
                      "rgba(168,85,247,0.3)",
                    ],
                  }}
                  transition={{ duration: 5, repeat: Infinity }}
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </motion.div>
      </div>

      {/* Energy Orbs */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`orb-${i}`}
          className="absolute"
          style={{
            left: `${(i * 12.5)}%`,
            top: "50%",
          }}
          animate={{
            y: [0, -300, 0],
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: i * 0.5,
            ease: "easeInOut",
          }}
        >
          <div
            className="w-32 h-32 rounded-full"
            style={{
              background: `radial-gradient(circle, rgba(168,85,247,0.6), transparent)`,
              filter: "blur(30px)",
            }}
          />
        </motion.div>
      ))}

      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-6 text-center"
        style={{ y, opacity, scale }}
      >
        {/* Animated Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, type: "spring", stiffness: 200 }}
          className="mb-8"
        >
          <motion.div
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full relative overflow-hidden"
            style={{
              background: "rgba(255,255,255,0.05)",
              backdropFilter: "blur(20px)",
              border: "1px solid rgba(255,255,255,0.1)",
            }}
            whileHover={{ scale: 1.05 }}
            animate={{
              boxShadow: [
                "0 0 30px rgba(168,85,247,0.3)",
                "0 0 60px rgba(168,85,247,0.6)",
                "0 0 30px rgba(168,85,247,0.3)",
              ],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <motion.div
              className="absolute inset-0"
              style={{
                background: "linear-gradient(90deg, transparent, rgba(168,85,247,0.5), transparent)",
              }}
              animate={{
                x: ["-200%", "200%"],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "linear",
              }}
            />
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <Zap className="w-5 h-5 text-yellow-400" fill="currentColor" />
            </motion.div>
            <span className="text-sm font-semibold text-white relative z-10">
              Available for Freelance
            </span>
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <Code2 className="w-5 h-5 text-blue-400" />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Name with 3D Transform */}
        <motion.div
          className="mb-8"
          style={{
            rotateX: useTransform(mouseYSpring, [-500, 500], [5, -5]),
            rotateY: useTransform(mouseXSpring, [-500, 500], [-5, 5]),
            transformStyle: "preserve-3d",
          }}
        >
          <motion.h1
            className="text-7xl md:text-9xl font-black relative"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            {["S", "A", "N", "J", "A", "Y", " ", "Y", "E", "D", "A", "G", "E"].map((letter, i) => (
              <motion.span
                key={i}
                className="inline-block"
                style={{
                  transformStyle: "preserve-3d",
                  background: "linear-gradient(135deg, #a855f7, #ec4899, #3b82f6)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
                animate={{
                  y: [0, -20, 0],
                  rotateX: [0, 360],
                  rotateY: [0, 360],
                }}
                transition={{
                  duration: 4,
                  delay: i * 0.1,
                  repeat: Infinity,
                  repeatDelay: 2,
                }}
                whileHover={{
                  scale: 1.2,
                  z: 50,
                  transition: { duration: 0.2 },
                }}
              >
                {letter === " " ? "\u00A0" : letter}
              </motion.span>
            ))}

            {/* Text Shadow Layers */}
            <motion.span
              className="absolute inset-0 -z-10"
              style={{
                background: "linear-gradient(135deg, #a855f7, #ec4899, #3b82f6)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                filter: "blur(20px)",
              }}
              animate={{
                opacity: [0.5, 1, 0.5],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              SANJAY YEDAGE
            </motion.span>
          </motion.h1>
        </motion.div>

        {/* Role with Split Text Animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mb-8"
        >
          <SplitTextReveal
            text="Full-Stack Developer & AI/ML Engineer"
            className="text-2xl md:text-4xl text-gray-300 font-light"
          />
        </motion.div>

        {/* Description with Morphing Background */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mb-12"
        >
          <motion.p
            className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed relative"
            style={{
              textShadow: "0 0 20px rgba(168,85,247,0.3)",
            }}
          >
            <motion.span
              className="absolute -inset-4 -z-10 rounded-2xl"
              style={{
                background: "linear-gradient(135deg, rgba(168,85,247,0.1), rgba(59,130,246,0.1))",
                filter: "blur(30px)",
              }}
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360],
              }}
              transition={{ duration: 10, repeat: Infinity }}
            />
            Diploma Computer Engineering student at Vidyalankar Polytechnic, building practical full-stack and AI/ML
            projects that solve real-world problems with clean, modern user experiences.
          </motion.p>
        </motion.div>

        {/* CTA Buttons with Advanced Animations */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="flex flex-wrap gap-6 justify-center mb-16"
        >
          {[
            {
              text: "View My Work",
              Icon: ArrowRight,
              primary: true,
              href: "#projects",
            },
            {
              text: "Download CV",
              Icon: Download,
              primary: false,
              href: "mailto:yedagesanjay8@gmail.com?subject=Resume%20Request",
            },
          ].map((button, i) => (
            <motion.a
              key={i}
              href={button.href}
              className={`group relative px-8 py-4 rounded-full font-semibold flex items-center gap-3 overflow-hidden ${
                button.primary ? "text-white" : "text-gray-300"
              }`}
              style={{
                transformStyle: "preserve-3d",
              }}
              whileHover={{ scale: 1.05, z: 50 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Background Layer */}
              <motion.div
                className="absolute inset-0 -z-10"
                style={{
                  background: button.primary
                    ? "linear-gradient(135deg, #a855f7, #ec4899, #3b82f6)"
                    : "rgba(255,255,255,0.05)",
                  border: button.primary ? "none" : "2px solid rgba(255,255,255,0.1)",
                  backdropFilter: "blur(20px)",
                }}
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  backgroundSize: "200% 200%",
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />

              {/* Shine Effect */}
              <motion.div
                className="absolute inset-0 -z-10"
                style={{
                  background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)",
                }}
                animate={{
                  x: ["-200%", "200%"],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 1,
                }}
              />

              {/* Particle Burst on Hover */}
              <motion.div
                className="absolute inset-0"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              >
                {[...Array(20)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-white rounded-full"
                    style={{
                      left: "50%",
                      top: "50%",
                    }}
                    animate={{
                      x: Math.cos((i / 20) * Math.PI * 2) * 50,
                      y: Math.sin((i / 20) * Math.PI * 2) * 50,
                      opacity: [1, 0],
                      scale: [0, 1],
                    }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      delay: (i / 20) * 0.5,
                    }}
                  />
                ))}
              </motion.div>

              <span className="relative z-10">{button.text}</span>
              <motion.div
                className="relative z-10"
                animate={{
                  x: [0, 5, 0],
                }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <button.Icon className="w-5 h-5" />
              </motion.div>
            </motion.a>
          ))}
        </motion.div>

        {/* Social Icons with 3D Effect */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 0.8 }}
          className="flex gap-6 justify-center"
        >
          {[
            { Icon: Github, href: "https://github.com/sanjay-07stfu", color: "#a855f7" },
            { Icon: Linkedin, href: "https://www.linkedin.com/in/sanjay-yedage-9a216934b/", color: "#3b82f6" },
            { Icon: Mail, href: "mailto:yedagesanjay8@gmail.com", color: "#ec4899" },
          ].map(({ Icon, href, color }, index) => (
            <motion.a
              key={index}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="relative group"
              style={{
                transformStyle: "preserve-3d",
              }}
              initial={{ opacity: 0, z: -100 }}
              animate={{ opacity: 1, z: 0 }}
              transition={{
                delay: 1.8 + index * 0.1,
                type: "spring",
                stiffness: 200,
              }}
              whileHover={{
                scale: 1.2,
                z: 50,
                rotateY: 360,
              }}
              whileTap={{ scale: 0.9 }}
            >
              <motion.div
                className="p-4 rounded-2xl relative overflow-hidden"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  backdropFilter: "blur(20px)",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
                animate={{
                  boxShadow: [
                    `0 0 20px ${color}40`,
                    `0 0 40px ${color}60`,
                    `0 0 20px ${color}40`,
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                {/* Rotating background */}
                <motion.div
                  className="absolute inset-0 -z-10"
                  style={{
                    background: `conic-gradient(from 0deg, transparent, ${color}, transparent)`,
                  }}
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />

                <Icon className="w-6 h-6 text-white relative z-10" />
              </motion.div>
            </motion.a>
          ))}
        </motion.div>

        {/* Scroll Indicator with Advanced Animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2, duration: 0.8 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            className="flex flex-col items-center gap-3"
            animate={{
              y: [0, 15, 0],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span className="text-gray-400 text-sm tracking-widest uppercase">Scroll</span>
            <div className="relative w-8 h-14">
              <motion.div
                className="w-full h-full rounded-full border-2 border-purple-500/50"
                animate={{
                  boxShadow: [
                    "0 0 20px rgba(168,85,247,0.3)",
                    "0 0 40px rgba(168,85,247,0.6)",
                    "0 0 20px rgba(168,85,247,0.3)",
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <motion.div
                className="absolute left-1/2 top-3 w-2 h-2 bg-purple-400 rounded-full"
                style={{ x: "-50%" }}
                animate={{
                  y: [0, 20, 0],
                  opacity: [1, 0, 1],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Vignette Effect */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(circle at center, transparent 0%, rgba(2,6,23,0.8) 100%)",
        }}
      />
    </section>
  );
}
