"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
  live: string;
  index: number;
}

const ProjectCard = ({ title, description, image, link, live, index }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: "easeOut" }}
      className="relative group rounded-2xl overflow-hidden border border-black/10 bg-white hover:bg-white/80 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col"
    >
      <div className="relative w-full h-48 mb-4 overflow-hidden rounded-xl">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 rounded-xl border border-white/10 group-hover:border-blue-400/60 group-hover:backdrop-blur-sm transition-all pointer-events-none" />
      </div>
      <div className="flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-2xl font-semibold text-black px-3 mb-1">{title}</h3>
          <p className="text-gray-700 text-sm px-3 pb-4">{description}</p>
        </div>
        <div className="flex gap-4 px-3 pb-4 mt-auto">
          <a href={link} target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-black bg-gray-100 hover:bg-blue-100 p-2 rounded-full transition-colors" title="GitHub">
            <FaGithub size={22} />
          </a>
          <a href={live} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 bg-blue-50 hover:bg-blue-100 p-2 rounded-full transition-colors" title="Live Demo">
            <FaExternalLinkAlt size={20} />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
