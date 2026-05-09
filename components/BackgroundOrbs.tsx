'use client';

import { motion } from 'motion/react';

export default function BackgroundOrbs() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Cyan Orb */}
      <motion.div
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute -top-[10%] -left-[10%] w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-[120px]"
      />
      
      {/* Violet Orb */}
      <motion.div
        animate={{
          x: [0, -150, 0],
          y: [0, 100, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-[20%] -right-[10%] w-[600px] h-[600px] bg-violet-600/20 rounded-full blur-[140px]"
      />
      
      {/* Indigo Orb */}
      <motion.div
        animate={{
          x: [0, 80, 0],
          y: [0, -120, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute -bottom-[10%] left-[20%] w-[550px] h-[550px] bg-indigo-500/10 rounded-full blur-[130px]"
      />

      {/* Subtle Noise Texture Overlay (Optional but adds character) */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </div>
  );
}
