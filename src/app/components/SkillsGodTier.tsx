import { motion, useInView } from "motion/react";
import { useRef } from "react";

export function SkillsGodTier() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skills = [
    { name: "React", level: 95, icon: "⚛️", color: "#61dafb", category: "Frontend" },
    { name: "TypeScript", level: 92, icon: "📘", color: "#3178c6", category: "Frontend" },
    { name: "Next.js", level: 88, icon: "▲", color: "#000000", category: "Frontend" },
    { name: "Tailwind", level: 94, icon: "🎨", color: "#06b6d4", category: "Frontend" },
    { name: "Motion", level: 90, icon: "✨", color: "#a855f7", category: "Frontend" },
    { name: "Node.js", level: 90, icon: "🟢", color: "#339933", category: "Backend" },
    { name: "Python", level: 85, icon: "🐍", color: "#3776ab", category: "Backend" },
    { name: "PostgreSQL", level: 82, icon: "🐘", color: "#4169e1", category: "Backend" },
    { name: "MongoDB", level: 86, icon: "🍃", color: "#47a248", category: "Backend" },
    { name: "Docker", level: 87, icon: "🐳", color: "#2496ed", category: "DevOps" },
    { name: "AWS", level: 85, icon: "☁️", color: "#ff9900", category: "DevOps" },
    { name: "Figma", level: 88, icon: "🎨", color: "#f24e1e", category: "Design" },
  ];

  return (
    <section
      id="skills"
      ref={ref}
      className="relative py-32 bg-slate-950 overflow-hidden"
    >
      {/* Hexagon Grid Background */}
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="hexagons" x="0" y="0" width="100" height="87" patternUnits="userSpaceOnUse">
              <motion.path
                d="M50 0 L93.3 25 L93.3 75 L50 100 L6.7 75 L6.7 25 Z"
                fill="none"
                stroke="#a855f7"
                strokeWidth="0.5"
                animate={{
                  stroke: ["#a855f7", "#3b82f6", "#ec4899", "#a855f7"],
                }}
                transition={{ duration: 10, repeat: Infinity }}
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hexagons)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-6xl md:text-8xl font-black mb-6"
            style={{
              background: "linear-gradient(135deg, #a855f7, #ec4899, #3b82f6)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            {["Skills", "&", "Expertise"].map((word, i) => (
              <motion.span
                key={i}
                className="inline-block mr-4"
                initial={{ opacity: 0, rotateY: 90, z: -100 }}
                animate={isInView ? { opacity: 1, rotateY: 0, z: 0 } : {}}
                transition={{
                  duration: 0.8,
                  delay: i * 0.2,
                  type: "spring",
                  stiffness: 100,
                }}
                style={{ transformStyle: "preserve-3d" }}
              >
                {word}
              </motion.span>
            ))}
          </motion.h2>
        </motion.div>

        {/* Circular Skill Visualization */}
        <div className="relative w-full max-w-4xl mx-auto h-[600px] mb-20">
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              duration: 60,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {skills.map((skill, i) => {
              const angle = (i / skills.length) * 2 * Math.PI;
              const radius = 250;
              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * radius;

              return (
                <motion.div
                  key={skill.name}
                  className="absolute"
                  style={{
                    left: "50%",
                    top: "50%",
                    x,
                    y,
                  }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{
                    delay: i * 0.1,
                    type: "spring",
                    stiffness: 200,
                    damping: 15,
                  }}
                >
                  <motion.div
                    className="relative -translate-x-1/2 -translate-y-1/2 group cursor-pointer"
                    animate={{
                      rotate: [0, -360],
                    }}
                    transition={{
                      duration: 60,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    whileHover={{
                      scale: 1.5,
                      z: 100,
                      transition: { duration: 0.3 },
                    }}
                    style={{
                      transformStyle: "preserve-3d",
                    }}
                  >
                    {/* Skill Circle */}
                    <motion.div
                      className="w-24 h-24 rounded-full flex items-center justify-center relative overflow-hidden"
                      style={{
                        background: `${skill.color}20`,
                        border: `2px solid ${skill.color}`,
                        boxShadow: `0 0 30px ${skill.color}40`,
                      }}
                      animate={{
                        boxShadow: [
                          `0 0 30px ${skill.color}40`,
                          `0 0 50px ${skill.color}60`,
                          `0 0 30px ${skill.color}40`,
                        ],
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      {/* Rotating Background */}
                      <motion.div
                        className="absolute inset-0"
                        style={{
                          background: `conic-gradient(from 0deg, ${skill.color}00, ${skill.color}, ${skill.color}00)`,
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

                      {/* Icon */}
                      <span className="text-4xl relative z-10">{skill.icon}</span>

                      {/* Skill Level Ring */}
                      <svg
                        className="absolute inset-0 w-full h-full -rotate-90"
                        viewBox="0 0 100 100"
                      >
                        <motion.circle
                          cx="50"
                          cy="50"
                          r="45"
                          fill="none"
                          stroke={skill.color}
                          strokeWidth="3"
                          strokeDasharray="283"
                          initial={{ strokeDashoffset: 283 }}
                          animate={
                            isInView
                              ? { strokeDashoffset: 283 - (283 * skill.level) / 100 }
                              : { strokeDashoffset: 283 }
                          }
                          transition={{ duration: 2, delay: i * 0.1 }}
                        />
                      </svg>
                    </motion.div>

                    {/* Skill Name Tooltip */}
                    <motion.div
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-2 whitespace-nowrap px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                      style={{
                        background: skill.color,
                        boxShadow: `0 10px 30px ${skill.color}40`,
                      }}
                      animate={{
                        rotate: [0, -360],
                      }}
                      transition={{
                        duration: 60,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    >
                      <span className="text-white font-semibold text-sm">
                        {skill.name} - {skill.level}%
                      </span>
                    </motion.div>
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Center Glow */}
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full"
            style={{
              background: "radial-gradient(circle, rgba(168,85,247,0.3), transparent)",
              filter: "blur(40px)",
            }}
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
          />
        </div>

        {/* Skill Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {["Frontend", "Backend", "DevOps", "Design"].map((category, catIndex) => (
            <motion.div
              key={category}
              className="relative group"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: catIndex * 0.1, duration: 0.8 }}
              style={{
                transformStyle: "preserve-3d",
                perspective: 1000,
              }}
            >
              <motion.div
                className="p-6 rounded-2xl relative overflow-hidden"
                style={{
                  background: "rgba(255,255,255,0.02)",
                  backdropFilter: "blur(20px)",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
                whileHover={{
                  rotateY: 10,
                  rotateX: 10,
                  scale: 1.05,
                  transition: { duration: 0.3 },
                }}
              >
                {/* Category Header */}
                <motion.h3
                  className="text-2xl font-bold mb-4 text-white"
                  animate={{
                    textShadow: [
                      "0 0 20px rgba(168,85,247,0.5)",
                      "0 0 40px rgba(168,85,247,0.8)",
                      "0 0 20px rgba(168,85,247,0.5)",
                    ],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  {category}
                </motion.h3>

                {/* Skills List */}
                <div className="space-y-2">
                  {skills
                    .filter((s) => s.category === category)
                    .map((skill, i) => (
                      <motion.div
                        key={skill.name}
                        className="flex items-center gap-2"
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: catIndex * 0.1 + i * 0.05 }}
                      >
                        <span className="text-2xl">{skill.icon}</span>
                        <span className="text-gray-300 text-sm">{skill.name}</span>
                      </motion.div>
                    ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
