import { useEffect, useRef } from "react";

interface Orb {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: { r: number; g: number; b: number };
}

export function AuroraCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const orbs: Orb[] = [
      { x: canvas.width * 0.2, y: canvas.height * 0.3, vx: 0.5, vy: 0.3, radius: 300, color: { r: 168, g: 85, b: 247 } },
      { x: canvas.width * 0.8, y: canvas.height * 0.7, vx: -0.4, vy: -0.5, radius: 350, color: { r: 59, g: 130, b: 246 } },
      { x: canvas.width * 0.5, y: canvas.height * 0.5, vx: 0.3, vy: -0.4, radius: 280, color: { r: 236, g: 72, b: 153 } },
      { x: canvas.width * 0.7, y: canvas.height * 0.2, vx: -0.6, vy: 0.4, radius: 320, color: { r: 16, g: 185, b: 129 } },
    ];

    const animate = () => {
      ctx.fillStyle = "rgba(2, 6, 23, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      orbs.forEach((orb) => {
        orb.x += orb.vx;
        orb.y += orb.vy;

        if (orb.x < 0 || orb.x > canvas.width) orb.vx *= -1;
        if (orb.y < 0 || orb.y > canvas.height) orb.vy *= -1;

        const gradient = ctx.createRadialGradient(orb.x, orb.y, 0, orb.x, orb.y, orb.radius);
        gradient.addColorStop(0, `rgba(${orb.color.r}, ${orb.color.g}, ${orb.color.b}, 0.4)`);
        gradient.addColorStop(0.5, `rgba(${orb.color.r}, ${orb.color.g}, ${orb.color.b}, 0.2)`);
        gradient.addColorStop(1, `rgba(${orb.color.r}, ${orb.color.g}, ${orb.color.b}, 0)`);

        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      });

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[0]"
      style={{ filter: "blur(80px)", opacity: 0.6 }}
    />
  );
}
