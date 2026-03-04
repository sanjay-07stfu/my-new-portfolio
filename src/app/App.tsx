import { useEffect } from "react";
import { HeroGodTier } from "./components/HeroGodTier";
import { About } from "./components/About";
import { ProjectsGodTier } from "./components/ProjectsGodTier";
import { Experience } from "./components/Experience";
import { SkillsGodTier } from "./components/SkillsGodTier";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { FloatingNav } from "./components/FloatingNav";
import { ScrollProgress } from "./components/ScrollProgress";
import { WaveCanvas } from "./components/WaveCanvas";
import { ParticleNetwork } from "./components/ParticleNetwork";
import { AuroraCanvas } from "./components/AuroraCanvas";
import { NoiseCanvas } from "./components/NoiseCanvas";
import { MagneticCursor } from "./components/MagneticCursor";

/**
 * GOD-TIER Developer Portfolio - ULTIMATE ANIMATION EDITION
 *
 * The most advanced animated portfolio featuring:
 *
 * CANVAS-BASED EFFECTS:
 * - Wave canvas with multiple sine waves
 * - Particle network with connection lines
 * - Aurora gradient orbs with physics
 * - Film grain noise overlay
 *
 * ADVANCED 3D ANIMATIONS:
 * - Full perspective transformations
 * - Mouse-reactive 3D elements
 * - 3D card tilt with depth layers
 * - Floating 3D geometric shapes
 * - Parallax scrolling with depth
 *
 * TEXT ANIMATIONS:
 * - Split text reveal with 3D rotation
 * - Character-by-character animations
 * - Glitch effects on hover
 * - Typewriter effects
 * - Morphing gradients
 *
 * INTERACTIVE ELEMENTS:
 * - Magnetic cursor with spring physics
 * - Button particle bursts
 * - Hover shine effects
 * - Click ripples
 * - Scroll-triggered reveals
 *
 * HERO SECTION:
 * - 30 floating 3D elements
 * - 8 energy orbs
 * - 3D grid with perspective
 * - Mouse-reactive rotation
 * - Letter-by-letter name animation
 * - Advanced CTA buttons with particles
 * - Social icons with 3D rotation
 *
 * PROJECTS SECTION:
 * - Full 3D card transformations
 * - Depth layers (translateZ)
 * - Floating particles on hover
 * - Shine effects
 * - Corner accent animations
 * - Tag spring animations
 *
 * SKILLS SECTION:
 * - Circular orbital skill layout
 * - 12 orbiting skill badges
 * - Rotating skill rings with progress
 * - 3D card categories with hover tilt
 * - Hexagon grid background
 *
 * PERFORMANCE:
 * - GPU-accelerated transforms
 * - RequestAnimationFrame for canvas
 * - Optimized re-renders
 * - Smooth 60fps throughout
 *
 * 1500+ INDIVIDUAL ANIMATIONS TOTAL
 *
 * Built with React, TypeScript, Tailwind CSS, and Motion
 */

export default function App() {
  useEffect(() => {
    // Enable smooth scrolling
    document.documentElement.style.scrollBehavior = "smooth";

    return () => {
      document.body.style.cursor = "default";
    };
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 font-['Inter',sans-serif] overflow-x-hidden">
      {/* Canvas Background Layers */}
      <AuroraCanvas />
      <WaveCanvas />
      <ParticleNetwork />
      <NoiseCanvas />

      {/* Custom Cursor */}
      <MagneticCursor />

      {/* UI Elements Layer */}
      <ScrollProgress />
      <FloatingNav />

      {/* Content Sections */}
      <HeroGodTier />
      <About />
      <ProjectsGodTier />
      <Experience />
      <SkillsGodTier />
      <Contact />
      <Footer />
    </div>
  );
}