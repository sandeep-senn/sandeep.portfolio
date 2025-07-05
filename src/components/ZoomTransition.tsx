"use client";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function ZoomTransition() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const el = containerRef.current;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { scale: 1, opacity: 1 },
        {
          scale: 2,
          opacity: 0,
          scrollTrigger: {
            trigger: el,
            start: "top top",
            end: "+=100%",
            scrub: true,
            pin: true,
            anticipatePin: 1,
          },
        }
      );
    }, el);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="w-full h-[40vh] flex items-center justify-center bg-transparent pointer-events-none">
      {/* You can add a logo, icon, or just leave it blank for a pure zoom effect */}
    </div>
  );
}
