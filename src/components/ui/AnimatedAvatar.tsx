"use client";
import { motion } from "framer-motion";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

interface AnimatedAvatarProps {
  src: string;
  alt?: string;
  size?: number;
}

const AnimatedAvatar = ({ src, alt = "Avatar", size = 120 }: AnimatedAvatarProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      style={{ width: size, height: size }}
      className="mx-auto mb-6"
    >
      <Avatar className="w-full h-full border-4 border-blue-500 shadow-lg">
        <AvatarImage src={src} alt={alt} />
        <AvatarFallback>?</AvatarFallback>
      </Avatar>
    </motion.div>
  );
};

export default AnimatedAvatar;
