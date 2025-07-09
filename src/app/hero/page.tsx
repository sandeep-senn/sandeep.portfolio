"use client";

import { useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import PillNavbar from "@/components/PillNavbar";

const Hero = () => {
  const BlurText = dynamic(() => import("@/components/ui/BlurText"), {
    ssr: false,
  });
  const heroRef = useRef<HTMLDivElement | null>(null);
  const HeroLottieBg = dynamic(() => import("@/components/HeroLottieBg"), {
    ssr: false,
  });

  useEffect(() => {
    let ctx: ReturnType<typeof gsap.context> | null = null;
    (async () => {
      const gsapModule = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsapModule.gsap.registerPlugin(ScrollTrigger);
      ctx = gsapModule.gsap.context(() => {
        if (heroRef.current) {
          gsapModule.gsap.fromTo(
            heroRef.current,
            { scale: 1 },
            {
              scale: 1.15,
              scrollTrigger: {
                trigger: heroRef.current,
                start: "top top",
                end: "bottom top+=200",
                scrub: 1.2,
                pin: false,
              },
              transformOrigin: "50% 50%",
              ease: "power1.inOut",
            }
          );
        }
      }, heroRef);
    })();
    return () => {
      if (ctx) ctx.revert();
    };
  }, []);

  return (
    <>
      <section
        ref={heroRef}
        className="relative min-h-screen bg-white text-black overflow-hidden pb-20 shadow-inner h-1"
      >
        {/* Lottie animated background */}
        <HeroLottieBg />
        <PillNavbar />
        <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 pt-24 text-center">
          {/* Avatar */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Avatar className="w-50 h-50 ring-4 ring-blue-500 shadow-lg mb-3 hover:scale-105 transition">
              <AvatarImage src="/pfpr.png" />
              <AvatarFallback></AvatarFallback>
            </Avatar>
          </motion.div>

          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <div className="w-full flex justify-center">
              <BlurText
                text="Sandeep Sen"
                delay={150}
                animateBy="words"
                direction="top"
                className="text-7xl text-black mb-1"
              />
            </div>
          </h1>

          <div className="text-lg md:text-2xl mt-4 text-gray-600">
            <TypeAnimation
              sequence={[
                "MERN Stack Developer",
                2000,
                "Tech Explorer",
                2000,
                "UI/UX Enthusiast",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </div>

          {/* Social Icons */}
          <div className="flex gap-6 mt-6 text-2xl text-blue-600">
            <a href="https://github.com/sandeep-senn" target="_blank">
              <FaGithub className="hover:scale-110 transition text-black" />
            </a>
            <a
              href="https://linkedin.com/in/sandeep-sen-762a4b256"
              target="_blank"
            >
              <FaLinkedin className="hover:scale-110 transition text-black" />
            </a>
            <a
              href="https://leetcode.com/sandeep_sen"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition"
            >
              <Image
                src="https://cdn.iconscout.com/icon/free/png-256/free-leetcode-logo-icon-download-in-svg-png-gif-file-formats--technology-social-media-vol-4-pack-logos-icons-2944960.png"
                alt="LeetCode"
                width={24}
                height={24}
                className="w-6 h-6"
              />
            </a>

            <a
              href="https://vercel.com/sandeep-sen"
              target="_blank"
              className="hover:scale-110 transition"
            >
              <svg
                viewBox="0 0 1155 1000"
                fill="black"
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
              >
                <path d="M577.5 0L1155 1000H0L577.5 0Z" />
              </svg>
            </a>
          </div>

          {/* Button */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="mt-10 bg-gradient-to-r from-blue-600 to-blue-800 rounded-full p-1"
          >
            <Button className="px-8 py-2 text-lg rounded-full bg-white text-blue-700 font-bold shadow-xl hover:brightness-110">
              Let’s Connect
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Hero;
