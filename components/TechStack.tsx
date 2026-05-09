'use client';

import { motion } from 'motion/react';

const technologies = [
  { name: 'React', level: 90, color: '#61DAFB' },
  { name: 'Next.js', level: 85, color: '#FFFFFF' },
  { name: 'Tailwind CSS', level: 95, color: '#38B2AC' },
  { name: 'TypeScript', level: 80, color: '#3178C6' },
  { name: 'Laravel', level: 75, color: '#FF2D20' },
  { name: 'PostgreSQL', level: 70, color: '#336791' },
];

export default function TechStack() {
  return (
    <section className="py-24 bg-white/[0.02] border-y border-white/5 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-violet-400 font-mono text-sm tracking-[0.3em] uppercase mb-4"
            >
              Technology
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-display font-bold mb-8"
            >
              Expertise & <br />Development Stack
            </motion.h2>
            <p className="text-slate-400 max-w-md leading-relaxed mb-8">
              Fokus pada teknologi modern yang memungkinkan pembuatan antarmuka berkualitas tinggi dan sistem backend yang robust.
            </p>
            
            <div className="grid grid-cols-3 gap-6">
              {[1, 2, 3].map((_, i) => (
                <div key={i} className="flex flex-col gap-1">
                  <span className="text-2xl font-display font-bold text-white">{(i + 1) * 3}+</span>
                  <span className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Years Exp.</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 relative">
            {/* Animated Glow in background */}
            <div className="absolute inset-0 bg-cyan-500/10 blur-[100px] -z-10 rounded-full" />
            
            {technologies.map((tech, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 glass rounded-3xl transition-transform hover:scale-[1.02]"
              >
                <div className="flex justify-between items-center mb-4">
                  <span className="font-bold text-sm">{tech.name}</span>
                  <span className="text-xs font-mono text-slate-500">{tech.level}%</span>
                </div>
                <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: `${tech.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: 0.2 }}
                    style={{ backgroundColor: tech.color }}
                    className="h-full shadow-[0_0_10px_rgba(255,255,255,0.3)]"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
