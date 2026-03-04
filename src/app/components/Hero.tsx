import { motion } from "motion/react";
import { ArrowRight, Github, Linkedin, Mail, Sparkles, Download } from "lucide-react";
import { useState, useEffect } from "react";
import { MagneticButton } from "./MagneticButton";
import { TextScramble } from "./TextScramble";
import { GlitchText } from "./GlitchText";
import { ParallaxLayer } from "./ParallaxLayer";

export function Hero() {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const fullText = "Full-Stack Developer & Creative Problem Solver";
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + fullText[index]);
        setIndex(index + 1);
      }, 50);
      return () => clearTimeout(timeout);
    }
  }, [index, fullText]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950">
      {/* Parallax Background Layers */}
      <ParallaxLayer speed={-0.5} className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl" />
      </ParallaxLayer>
      
      <ParallaxLayer speed={0.3} className="absolute inset-0">
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
      </ParallaxLayer>

      <ParallaxLayer speed={0.6} className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl" />
      </ParallaxLayer>

      {/* Mouse follower gradient */}
      <motion.div
        className="fixed w-[500px] h-[500px] rounded-full pointer-events-none z-[3]"
        style={{
          background: "radial-gradient(circle, rgba(168,85,247,0.15) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
        animate={{
          x: mousePosition.x - 250,
          y: mousePosition.y - 250,
        }}
        transition={{
          type: "spring",
          damping: 30,
          stiffness: 200,
        }}
      />

      {/* Animated geometric shapes */}
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute border-2 border-purple-500/10"
          style={{
            width: 50 + i * 20,
            height: 50 + i * 20,
            left: `${10 + i * 8}%`,
            top: `${20 + i * 5}%`,
          }}
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 10 + i * 2,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}

      {/* Orbiting circles */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={`orbit-${i}`}
          className="absolute"
          style={{
            width: 200 + i * 100,
            height: 200 + i * 100,
            border: "1px solid rgba(168,85,247,0.2)",
            borderRadius: "50%",
            top: "50%",
            left: "50%",
          }}
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20 + i * 5,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}

      {/* DNA Helix */}
      <svg className="absolute inset-0 w-full h-full opacity-10" style={{ zIndex: 1 }}>
        {[...Array(20)].map((_, i) => (
          <motion.circle
            key={`dna-${i}`}
            r="5"
            fill="#a855f7"
            initial={{
              cx: 100,
              cy: 50 + i * 50,
            }}
            animate={{
              cx: [100, 200, 100],
              cy: 50 + i * 50,
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.1,
            }}
          />
        ))}
      </svg>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        {/* Greeting */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-4"
        >
          <motion.span
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 backdrop-blur-sm"
            animate={{
              boxShadow: [
                "0 0 20px rgba(168,85,247,0.3)",
                "0 0 40px rgba(168,85,247,0.6)",
                "0 0 20px rgba(168,85,247,0.3)",
              ],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="w-4 h-4 text-purple-400" />
            </motion.div>
            <span className="text-purple-400">Welcome to my portfolio</span>
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="w-4 h-4 text-purple-400" />
            </motion.div>
          </motion.span>
        </motion.div>

        {/* Name with glitch effect */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
          className="text-6xl md:text-8xl font-bold mb-6"
        >
          <GlitchText text="Your Name" className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500" />
        </motion.h1>

        {/* Animated role text with typewriter */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mb-8"
        >
          <motion.p
            className="text-xl md:text-3xl text-gray-300 font-light min-h-[40px]"
            animate={{
              backgroundImage: [
                "linear-gradient(45deg, #a855f7, #ec4899)",
                "linear-gradient(90deg, #ec4899, #3b82f6)",
                "linear-gradient(135deg, #3b82f6, #a855f7)",
              ],
            }}
            transition={{ duration: 5, repeat: Infinity }}
          >
            <span className="inline-block border-r-2 border-purple-400 pr-1">
              {text}
            </span>
          </motion.p>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-12"
        >
          <TextScramble text="Building exceptional digital experiences with modern technologies and creative solutions. Passionate about clean code, beautiful design, and innovative problem-solving." />
        </motion.p>

        {/* CTA Buttons with liquid and magnetic effects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="flex flex-wrap gap-4 justify-center mb-16"
        >
          <MagneticButton className="group px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full text-white font-semibold flex items-center gap-2 hover:shadow-2xl hover:shadow-purple-500/50 transition-all overflow-hidden">
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500"
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 0.5 }}
            />
            <span className="relative z-10">View My Work</span>
            <motion.div
              className="relative z-10"
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowRight className="w-5 h-5" />
            </motion.div>
          </MagneticButton>

          <MagneticButton className="group px-8 py-4 bg-white/5 backdrop-blur-sm border-2 border-white/10 rounded-full text-white font-semibold flex items-center gap-2 hover:bg-white/10 hover:border-purple-500/50 transition-all">
            <Download className="w-5 h-5" />
            <span>Download CV</span>
          </MagneticButton>
        </motion.div>

        {/* Social Links with enhanced animations */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="flex gap-6 justify-center"
        >
          {[
            { Icon: Github, href: "#", delay: 0, color: "hover:text-purple-400" },
            { Icon: Linkedin, href: "#", delay: 0.1, color: "hover:text-blue-400" },
            { Icon: Mail, href: "#", delay: 0.2, color: "hover:text-pink-400" },
          ].map(({ Icon, href, delay, color }, index) => (
            <motion.a
              key={index}
              href={href}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.4 + delay, type: "spring", stiffness: 200 }}
              whileHover={{ scale: 1.2, rotate: [0, -10, 10, 0] }}
              whileTap={{ scale: 0.9 }}
              className={`p-4 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-gray-400 ${color} transition-colors relative group`}
            >
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100"
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              />
              <Icon className="w-6 h-6 relative z-10" />
            </motion.a>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.8 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-gray-400 text-sm">Scroll to explore</span>
            <motion.div
              className="w-6 h-10 rounded-full border-2 border-purple-500/50 flex justify-center p-2"
              animate={{
                boxShadow: [
                  "0 0 10px rgba(168,85,247,0.3)",
                  "0 0 20px rgba(168,85,247,0.6)",
                  "0 0 10px rgba(168,85,247,0.3)",
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <motion.div
                className="w-1.5 h-1.5 rounded-full bg-purple-400"
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Animated corner accents */}
      {[
        { position: "top-0 left-0", rotate: 0 },
        { position: "top-0 right-0", rotate: 90 },
        { position: "bottom-0 left-0", rotate: 270 },
        { position: "bottom-0 right-0", rotate: 180 },
      ].map((corner, i) => (
        <motion.div
          key={i}
          className={`absolute ${corner.position} w-32 h-32`}
          style={{ rotate: corner.rotate }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.3, scale: 1 }}
          transition={{ delay: 2 + i * 0.1, duration: 0.5 }}
        >
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <motion.path
              d="M 0 0 L 100 0 L 100 100"
              stroke="url(#cornerGradient)"
              strokeWidth="2"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ delay: 2.5 + i * 0.1, duration: 1 }}
            />
            <defs>
              <linearGradient id="cornerGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#a855f7" />
                <stop offset="100%" stopColor="#3b82f6" />
              </linearGradient>
            </defs>
          </svg>
        </motion.div>
      ))}
    </section>
  );
}