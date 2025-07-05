"use client";

import { useEffect, useRef, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import BlurText from "@/components/ui/BlurText";
import AnimatedAvatar from "@/components/ui/AnimatedAvatar";


const page = () => {
  const [isClient, setIsClient] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const aboutRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setIsClient(true);
    // Only run client-side code if isClient is true
    if (!isClient) return;
    let loco: any;
    import("locomotive-scroll").then((module) => {
      const el = document.querySelector("[data-scroll-container]") as HTMLElement | undefined;
      if (!el) return;
      loco = new module.default({
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

    // Canvas particle effect (same as before)
    const canvas = canvasRef.current;
    if (!canvas) return;

    const canvasCtx = canvas.getContext("2d");
    if (!canvasCtx) return;

    let particles: {
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
      if (loco) loco.destroy();
    };
  }, [isClient]);

  return (
    <section ref={aboutRef} className="relative min-h-screen bg-black text-white overflow-hidden py-20 px-6 rounded-md">
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
              
              "I see life as a journey of connecting ideas, people, and purpose, and I try to bring that mindset into everything I do. This portfolio is just a glimpse of who I am—not just as a creator, but as a person who values kindness, self-awareness, and the courage to keep evolving. If any of this resonates with you, let's connect—sometimes the best things start with a simple hello 🙂"
            ].join("<br/>")}
            className="text-lg md:text-xl text-gray-300 leading-relaxed"
            animateBy="words"
            direction="top"
            delay={60}
          />
          <div className="flex gap-6 mt-4 justify-start md:justify-start">
            <a
              href="https://github.com/sandeep-senn"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white hover:bg-gray-200 text-black p-3 rounded-full shadow-md transition-all"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 0C5.37 0 0 5.373 0 12a12 12 0 008.207 11.385c.6.113.793-.263.793-.582 0-.287-.01-1.048-.016-2.058-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.333-1.754-1.333-1.754-1.09-.745.083-.73.083-.73 1.205.085 1.838 1.237 1.838 1.237 1.07 1.833 2.809 1.304 3.495.996.108-.775.418-1.305.76-1.605-2.665-.305-5.466-1.334-5.466-5.931 0-1.31.469-2.381 1.236-3.221-.124-.304-.536-1.527.117-3.176 0 0 1.008-.322 3.3 1.23a11.52 11.52 0 016 0c2.29-1.553 3.297-1.23 3.297-1.23.655 1.649.243 2.872.12 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.804 5.624-5.476 5.921.43.372.814 1.102.814 2.222 0 1.605-.014 2.899-.014 3.293 0 .321.192.699.8.58A12.01 12.01 0 0024 12c0-6.627-5.373-12-12-12z" />
              </svg>
            </a>

            <a
              href="https://linkedin.com/in/sandeep-sen-762a4b256"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white hover:bg-gray-200 text-blue-700 p-3 rounded-full shadow-md transition-all"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.791-1.75-1.766 0-.974.784-1.766 1.75-1.766s1.75.792 1.75 1.766c0 .975-.784 1.766-1.75 1.766zm13.5 11.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-10h3v1.571c1.396-2.586 7-2.777 7 2.476v5.953z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
