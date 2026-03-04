import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { useRef, useState } from "react";
import { ExternalLink, Github } from "lucide-react";

interface Project {
  title: string;
  description: string;
  tags: string[];
  color: string;
}

function ProjectCard3D({ project, index }: { project: Project; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 30, stiffness: 200 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -10]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-10, 10]), springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    mouseX.set((e.clientX - centerX) / rect.width);
    mouseY.set((e.clientY - centerY) / rect.height);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setIsHovering(false);
  };

  return (
    <motion.div
      ref={cardRef}
      className="relative group"
      style={{
        transformStyle: "preserve-3d",
        perspective: 1000,
      }}
      initial={{ opacity: 0, z: -200 }}
      whileInView={{ opacity: 1, z: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 0.8,
        delay: index * 0.1,
        type: "spring",
        stiffness: 100,
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        className="relative h-full rounded-3xl overflow-hidden"
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
          background: "rgba(255,255,255,0.02)",
          backdropFilter: "blur(20px)",
          border: "1px solid rgba(255,255,255,0.1)",
        }}
        animate={{
          boxShadow: isHovering
            ? [
                `0 20px 80px ${project.color}40`,
                `0 30px 100px ${project.color}60`,
                `0 20px 80px ${project.color}40`,
              ]
            : "0 10px 40px rgba(0,0,0,0.3)",
        }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        {/* Animated Background Gradient */}
        <motion.div
          className="absolute inset-0 opacity-20"
          style={{
            background: `linear-gradient(135deg, ${project.color}, transparent)`,
          }}
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
            backgroundSize: ["100% 100%", "200% 200%", "100% 100%"],
          }}
          transition={{ duration: 5, repeat: Infinity }}
        />

        {/* Shine Effect */}
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: `linear-gradient(135deg, transparent, ${project.color}30, transparent)`,
          }}
          animate={{
            x: ["-100%", "100%"],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatDelay: 0.5,
          }}
        />

        {/* 3D Layers */}
        <motion.div
          className="p-8 relative z-10"
          style={{
            transform: "translateZ(50px)",
          }}
        >
          {/* Floating Particles */}
          {isHovering &&
            [...Array(10)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 rounded-full"
                style={{
                  background: project.color,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -100],
                  opacity: [1, 0],
                  scale: [0, 1, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              />
            ))}

          {/* Project Number */}
          <motion.div
            className="absolute -top-6 -left-6 w-20 h-20"
            style={{
              transform: "translateZ(75px)",
            }}
          >
            <motion.div
              className="w-full h-full rounded-full flex items-center justify-center font-black text-4xl"
              style={{
                background: `linear-gradient(135deg, ${project.color}, ${project.color}80)`,
                boxShadow: `0 10px 40px ${project.color}40`,
              }}
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              {(index + 1).toString().padStart(2, "0")}
            </motion.div>
          </motion.div>

          {/* Title with Letter Animation */}
          <motion.h3
            className="text-3xl font-bold mb-4 text-white"
            style={{
              transform: "translateZ(60px)",
            }}
          >
            {project.title.split("").map((char, i) => (
              <motion.span
                key={i}
                className="inline-block"
                whileHover={{
                  y: -10,
                  color: project.color,
                  transition: { duration: 0.2 },
                }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.h3>

          {/* Description */}
          <motion.p
            className="text-gray-400 mb-6 leading-relaxed"
            style={{
              transform: "translateZ(55px)",
            }}
          >
            {project.description}
          </motion.p>

          {/* Tags */}
          <motion.div
            className="flex flex-wrap gap-2 mb-6"
            style={{
              transform: "translateZ(50px)",
            }}
          >
            {project.tags.map((tag, i) => (
              <motion.span
                key={i}
                className="px-3 py-1 rounded-full text-xs font-medium"
                style={{
                  background: `${project.color}20`,
                  color: project.color,
                  border: `1px solid ${project.color}40`,
                }}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: 0.5 + i * 0.1,
                  type: "spring",
                  stiffness: 200,
                }}
                whileHover={{
                  scale: 1.2,
                  rotate: [0, -10, 10, 0],
                  transition: { duration: 0.3 },
                }}
              >
                {tag}
              </motion.span>
            ))}
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            className="flex gap-4"
            style={{
              transform: "translateZ(70px)",
            }}
          >
            {[
              { Icon: ExternalLink, label: "Live Demo" },
              { Icon: Github, label: "Code" },
            ].map(({ Icon, label }, i) => (
              <motion.button
                key={i}
                className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold relative overflow-hidden group/btn"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  className="absolute inset-0"
                  style={{
                    background: project.color,
                    opacity: 0,
                  }}
                  whileHover={{ opacity: 0.2 }}
                />
                <Icon className="w-4 h-4 relative z-10" />
                <span className="relative z-10">{label}</span>
              </motion.button>
            ))}
          </motion.div>
        </motion.div>

        {/* Corner Accents */}
        {[
          { corner: "top-4 left-4", rotate: 0 },
          { corner: "top-4 right-4", rotate: 90 },
          { corner: "bottom-4 left-4", rotate: 270 },
          { corner: "bottom-4 right-4", rotate: 180 },
        ].map((pos, i) => (
          <motion.div
            key={i}
            className={`absolute ${pos.corner} w-8 h-8`}
            style={{
              transform: `rotate(${pos.rotate}deg) translateZ(30px)`,
            }}
            animate={{
              opacity: isHovering ? 1 : 0.3,
            }}
          >
            <svg viewBox="0 0 20 20" className="w-full h-full">
              <motion.path
                d="M 0 0 L 20 0 L 20 20"
                stroke={project.color}
                strokeWidth="2"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1, delay: i * 0.1 }}
              />
            </svg>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}

export function ProjectsGodTier() {
  const projects: Project[] = [
    {
      title: "AI Dashboard",
      description:
        "A cutting-edge analytics platform powered by machine learning, featuring real-time data visualization and predictive insights.",
      tags: ["React", "TypeScript", "TensorFlow", "D3.js"],
      color: "#a855f7",
    },
    {
      title: "E-Commerce Platform",
      description:
        "Full-stack shopping experience with advanced filtering, real-time inventory, and seamless payment integration.",
      tags: ["Next.js", "Stripe", "PostgreSQL", "Redis"],
      color: "#3b82f6",
    },
    {
      title: "Social Network",
      description:
        "Modern social platform with real-time messaging, media sharing, and AI-powered content recommendations.",
      tags: ["React Native", "GraphQL", "WebSockets", "AWS"],
      color: "#ec4899",
    },
    {
      title: "Design System",
      description:
        "Comprehensive component library with accessibility features, theming support, and extensive documentation.",
      tags: ["Storybook", "Tailwind", "TypeScript", "Figma"],
      color: "#f59e0b",
    },
    {
      title: "Blockchain Explorer",
      description:
        "Decentralized application for exploring blockchain transactions with real-time updates and analytics.",
      tags: ["Web3", "Ethereum", "React", "Node.js"],
      color: "#10b981",
    },
    {
      title: "Video Platform",
      description:
        "Streaming service with adaptive bitrate, live chat, and content recommendation engine.",
      tags: ["WebRTC", "FFmpeg", "MongoDB", "Express"],
      color: "#ef4444",
    },
  ];

  return (
    <section id="projects" className="relative py-32 bg-slate-950 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-px h-full"
            style={{
              left: `${(i / 20) * 100}%`,
              background: "linear-gradient(to bottom, transparent, rgba(168,85,247,0.1), transparent)",
            }}
            animate={{
              opacity: [0.1, 0.3, 0.1],
              scaleY: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.1,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-block mb-4"
            animate={{
              rotate: [0, 360],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <span className="text-6xl">💼</span>
          </motion.div>

          <h2 className="text-5xl md:text-7xl font-black mb-6">
            {["Featured", "Works"].map((word, i) => (
              <motion.span
                key={i}
                className="inline-block mr-4"
                initial={{ opacity: 0, rotateX: 90 }}
                whileInView={{ opacity: 1, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  delay: i * 0.2,
                  type: "spring",
                  stiffness: 100,
                }}
                style={{
                  background: "linear-gradient(135deg, #a855f7, #ec4899, #3b82f6)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {word}
              </motion.span>
            ))}
          </h2>

          <motion.p
            className="text-xl text-gray-400 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            A collection of projects that push boundaries and deliver exceptional results
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard3D key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
