import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { HolographicCard } from "./HolographicCard";

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillCategories = [
    {
      title: "Frontend",
      color: "from-purple-500 to-pink-500",
      icon: "🎨",
      skills: [
        { name: "HTML/CSS", level: 95, icon: "🌐" },
        { name: "JavaScript", level: 85, icon: "⚡" },
        { name: "React", level: 85, icon: "⚛️" },
        { name: "Tailwind CSS", level: 80, icon: "🎨" },
        { name: "Vite", level: 75, icon: "⚡" },
        { name: "Motion/Framer", level: 70, icon: "✨" },
      ],
    },
    {
      title: "Backend",
      color: "from-blue-500 to-cyan-500",
      icon: "⚙️",
      skills: [
        { name: "Python", level: 90, icon: "🐍" },
        { name: "Flask", level: 80, icon: "🌶️" },
        { name: "Node.js", level: 75, icon: "🟢" },
        { name: "REST APIs", level: 80, icon: "🔌" },
        { name: "MongoDB", level: 70, icon: "🍃" },
        { name: "SQLite", level: 75, icon: "💾" },
      ],
    },
    {
      title: "AI/ML",
      color: "from-green-500 to-emerald-500",
      icon: "🤖",
      skills: [
        { name: "TensorFlow", level: 80, icon: "🧠" },
        { name: "Keras", level: 80, icon: "🔬" },
        { name: "OpenCV", level: 75, icon: "👁️" },
        { name: "CNN/Image Processing", level: 75, icon: "📸" },
        { name: "Speech Recognition", level: 70, icon: "🎤" },
        { name: "NLP", level: 65, icon: "💬" },
      ],
    },
    {
      title: "Tools & Others",
      color: "from-orange-500 to-red-500",
      icon: "🛠️",
      skills: [
        { name: "Git/GitHub", level: 85, icon: "📦" },
        { name: "GitHub Actions", level: 70, icon: "🔄" },
        { name: "Figma", level: 75, icon: "🎨" },
        { name: "Canva", level: 80, icon: "🖼️" },
        { name: "C++", level: 75, icon: "⚙️" },
        { name: "Java", level: 70, icon: "☕" },
      ],
    },
  ];

  return (
    <section
      id="skills"
      ref={ref}
      className="relative py-32 bg-slate-950 overflow-hidden"
    >
      {/* Animated background circles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full border border-purple-500/10"
          style={{
            width: 100 + i * 50,
            height: 100 + i * 50,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
            opacity: [0.05, 0.15, 0.05],
          }}
          transition={{
            duration: 10 + i,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {"Skills & Expertise".split("").map((char, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: i * 0.03, duration: 0.3 }}
                className="inline-block"
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </h2>
          <motion.div
            className="w-20 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full mb-6"
            animate={{
              scaleX: [1, 1.5, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and the technologies
            I work with.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {skillCategories.map((category, catIndex) => {
            return (
              <motion.div
                key={category.title}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative"
              >
                <motion.div
                  className="relative h-full p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 transition-all duration-300 group-hover:border-white/20"
                  animate={{
                    boxShadow: [
                      "0 0 0 rgba(168, 85, 247, 0)",
                      "0 0 20px rgba(168, 85, 247, 0.2)",
                      "0 0 0 rgba(168, 85, 247, 0)",
                    ],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: catIndex * 0.2,
                  }}
                >
                  {/* Animated Glow Effect */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl bg-gradient-to-br opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                    style={{
                      backgroundImage: `linear-gradient(to bottom right, var(--tw-gradient-stops))`,
                    }}
                    animate={{
                      rotate: [0, 360],
                    }}
                    transition={{
                      duration: 10,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />

                  <div className="relative z-10">
                    {/* Icon with rotation animation */}
                    <motion.div
                      className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${category.color} mb-4`}
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <motion.div
                        animate={{
                          y: [0, -5, 0],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: catIndex * 0.1,
                        }}
                      >
                        <span className="text-white text-xl">{category.icon}</span>
                      </motion.div>
                    </motion.div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-white mb-4">
                      {category.title}
                    </h3>

                    {/* Skills with stagger and bounce */}
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, index) => (
                        <motion.span
                          key={skill.name}
                          className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-300 hover:bg-white/10 hover:border-white/20 transition-colors cursor-default"
                          initial={{ opacity: 0, scale: 0, rotate: -180 }}
                          animate={
                            isInView
                              ? {
                                  opacity: 1,
                                  scale: 1,
                                  rotate: 0,
                                }
                              : { opacity: 0, scale: 0, rotate: -180 }
                          }
                          transition={{
                            delay: catIndex * 0.1 + index * 0.05,
                            duration: 0.5,
                            type: "spring",
                            stiffness: 200,
                            damping: 15,
                          }}
                          whileHover={{
                            scale: 1.15,
                            transition: { duration: 0.3 },
                          }}
                        >
                          <span className="text-white text-sm">{skill.icon}</span>
                          {skill.name}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* Corner accent */}
                  <motion.div
                    className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 rounded-2xl`}
                    initial={{ scale: 0, rotate: 45 }}
                    whileHover={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Additional Info with floating animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <motion.div
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-white/10"
            animate={{
              y: [0, -10, 0],
              boxShadow: [
                "0 0 20px rgba(168, 85, 247, 0.1)",
                "0 10px 30px rgba(168, 85, 247, 0.3)",
                "0 0 20px rgba(168, 85, 247, 0.1)",
              ],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <span className="text-gray-300">
              Always learning and exploring new technologies
            </span>
            <motion.span
              className="text-2xl"
              animate={{
                rotate: [0, 20, -20, 0],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              🚀
            </motion.span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}