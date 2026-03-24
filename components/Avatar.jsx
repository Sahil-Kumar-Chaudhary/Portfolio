"use client";

import Image from "next/image";
import { motion, useMotionValue, useTransform } from "framer-motion";

const Avatar = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-100, 100], [10, -10]);
  const rotateY = useTransform(x, [-100, 100], [-10, 10]);

  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(event.clientX - centerX);
    y.set(event.clientY - centerY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div className="hidden xl:flex xl:max-w-none w-full h-full items-center justify-center">
      <motion.div
        style={{ x, y, rotateX, rotateY, perspective: 1000 }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ 
          type: "spring", 
          stiffness: 100, 
          damping: 20 
        }}
        className="relative cursor-pointer transition-shadow hover:drop-shadow-[0_0_40px_rgba(255,255,255,0.3)] z-0"
      >
        <Image
          src="/image12_nobg.png"
          alt="Sahil Kumar Chaudhary profile photo"
          width={737}
          height={678}
          priority
          className="translate-z-0 w-full h-auto max-w-[737px] object-contain transition-transform duration-300"
        />
      </motion.div>
    </div>
  );
};

export default Avatar;
