"use client";
import { useEffect, useRef } from "react";
import lottie, { AnimationItem } from "lottie-web";

const HeroLottieBg = () => {
  const container = useRef<HTMLDivElement>(null);
  useEffect(() => {
    let anim: AnimationItem | undefined;
    if (container.current) {
      anim = lottie.loadAnimation({
        container: container.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        path: "/anim.json",
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice",
          progressiveLoad: true,
        },
      });
    }
    return () => {
      anim?.destroy();
    };
  }, []);
  return (
    <div
      ref={container}
      className="absolute inset-0 w-full h-full flex items-center justify-center z-0 pointer-events-none opacity-80"
      aria-hidden="true"
      style={{ minHeight: 400, maxHeight: 900 }}
    />
  );
};

export default HeroLottieBg;
