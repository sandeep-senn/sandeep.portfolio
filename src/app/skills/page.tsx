"use client";
import { motion } from "framer-motion";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiMongodb,
  SiNodedotjs,
  SiFramer,
  SiGithub,
  SiGit,
  SiPostman,
  SiWordpress,
  SiNextdotjs,
  SiExpress,
  SiMysql,
  SiTypescript,
  SiVite,
  SiPinterest,
  SiRedux,
  SiClerk
} from "react-icons/si";

const skills = [
  { icon: SiHtml5, name: "HTML", color: "#e34c26" },
  { icon: SiCss3, name: "CSS", color: "#264de4" },
  { icon: SiJavascript, name: "JavaScript", color: "#f0db4f" },
  { icon: SiReact, name: "React", color: "#61dbfb" },
  { icon: SiTypescript, name: "TypeScript", color: "#00758F" },
  { icon: SiTailwindcss, name: "Tailwind", color: "#38bdf8" },
  { icon: SiWordpress, name: "WordPress", color: "#21759b" },
  { icon: SiMongodb, name: "MongoDB", color: "#47A248" },
  { icon: SiNodedotjs, name: "Node.js", color: "#68A063" },
  { icon: SiFramer, name: "Framer", color: "#0055FF" },
  { icon: SiMysql, name: "MySQL", color: "#00758F" },
  { icon: SiClerk, name: "Clerk", color: "#00758F" },
  { icon: SiGithub, name: "GitHub", color: "#ffffff" },
  { icon: SiGit, name: "Git", color: "#F05032" },
  { icon: SiPostman, name: "Postman", color: "#FF6C37" },
  { icon: SiNextdotjs, name: "Next.js", color: "#ffffff" },
  { icon: SiExpress, name: "Express", color: "#ffffff" },
  { icon: SiVite, name: "Vite", color: "#00758F" },
  { icon: SiPinterest, name: "Pinterest", color: "#00758F" },
  { icon: SiRedux, name: "Redux", color: "#00758F" },
];

export default function Skills() {
  return (
    <section className="min-h-screen bg-black text-white px-6 py-20 rounded-b-4xl">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-7xl font-bold animate-pulse text-white text-center mb-16 tracking-widest">
          S&nbsp;K&nbsp;I&nbsp;L&nbsp;L&nbsp;S
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {skills.map(({ icon: Icon, name, color }, i) => (
            <motion.div
              key={name}
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: i * 0.15 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white/5 border border-white/20 rounded-2xl p-4 flex flex-col items-center gap-3 backdrop-blur-md shadow-lg hover:border-white/40 transition-all"
            >
              <Icon className="w-12 h-12" style={{ color }} />
              <span className="text-white text-sm font-medium tracking-wide">
                {name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
