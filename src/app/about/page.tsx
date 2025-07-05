"use client";

import { useEffect, useRef, useState } from "react";
import BlurText from "@/components/ui/BlurText";

const Page = () => {
  const [isClient, setIsClient] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const locoRef = useRef<{ destroy?: () => void } | null>(null);

  // 🧠 Locomotive Scroll Setup
  useEffect(() => {
    import("locomotive-scroll").then((module) => {
      const el = document.querySelector("[data-scroll-container]") as HTMLElement | null;
      if (!el) return;
      locoRef.current = new module.default({
        el,
        smooth: true,
        lerp: 0.04,
        multiplier: 1.1,
        smartphone: {
          smooth: true,
        },
        tablet: {
          smooth: true,
          breakpoint: 1024,
        },
      });
    });

    return () => {
      locoRef.current?.destroy?.(); // cleanup
    };
  }, []);

  // 🎨 Particle Effect + isClient check
  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const canvasCtx = canvas.getContext("2d");
    if (!canvasCtx) return;

    const particles: {
      x: number;
      y: number;
      radius: number;
      color: string;
      alpha: number;
      dx: number;
      dy: number;
    }[] = [];

    const colors = ["#3b82f6", "#60a5fa", "#93c5fd"];

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    const mouse = { x: canvas.width / 2, y: canvas.height / 2 };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      createParticles(mouse.x, mouse.y);
    };
    window.addEventListener("mousemove", handleMouseMove);

    const createParticles = (x: number, y: number) => {
      for (let i = 0; i < 1; i++) {
        particles.push({
          x,
          y,
          radius: Math.random() * 2 + 1.5,
          color: colors[Math.floor(Math.random() * colors.length)],
          alpha: 1,
          dx: (Math.random() - 0.5) * 1.5,
          dy: (Math.random() - 0.5) * 1.5,
        });
      }
    };

    const animate = () => {
      canvasCtx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p, i) => {
        p.x += p.dx;
        p.y += p.dy;
        p.alpha -= 0.015;

        canvasCtx.beginPath();
        canvasCtx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        canvasCtx.fillStyle = `rgba(59, 130, 246, ${p.alpha})`;
        canvasCtx.fill();

        if (p.alpha <= 0) {
          particles.splice(i, 1);
        }
      });
      requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isClient]);

  return (
    <section
      ref={aboutRef}
      className="relative min-h-screen bg-black text-white overflow-hidden py-20 px-6 rounded-md"
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0 pointer-events-none"
      />

      <div className="relative z-10 max-w-2xl mx-auto gap-10">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold animate-bounce text-blue-500 mb-6">
            About Me
          </h2>
          <BlurText
            text={[
              "Hey! I'm Sandeep Sen, a curious soul from Bhopal who loves to keep things simple and meaningful. I believe in learning every day, finding joy in the little things, and always pushing myself to grow beyond my comfort zone. Honesty, growth, and genuine connections matter a lot to me—whether I'm building something cool, having a deep conversation, or just enjoying a quiet morning with good music.",
              "I see life as a journey of connecting ideas, people, and purpose, and I try to bring that mindset into everything I do. This portfolio is just a glimpse of who I am—not just as a creator, but as a person who values kindness, self-awareness, and the courage to keep evolving. If any of this resonates with you, let's connect—sometimes the best things start with a simple hello 🙂",
            ].join("<br/>")}
            className="text-lg md:text-xl text-gray-300 leading-relaxed"
            animateBy="words"
            direction="top"
            delay={60}
          />
          <div className="flex gap-6 mt-4 justify-start md:justify-start">
            {/* social buttons here... */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
