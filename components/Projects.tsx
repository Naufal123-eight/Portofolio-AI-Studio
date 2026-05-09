'use client';

import { motion } from 'motion/react';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';
import Image from 'next/image';

const projects = [
  {
    title: 'AdMetrics Dashboard',
    category: 'Full-Stack Web',
    image: 'https://picsum.photos/seed/ads/800/600',
    description: 'Dashboard analytics real-time untuk memantau performa iklan lintas platform.',
    tags: ['Next.js', 'PostgreSQL', 'Charts.js'],
    link: '#'
  },
  {
    title: 'Luxura Property',
    category: 'E-Commerce',
    image: 'https://picsum.photos/seed/property/800/600',
    description: 'Platform listing properti premium dengan fitur virtual tour dan booking sistem.',
    tags: ['React', 'Framer Motion', 'Stripe'],
    link: '#'
  },
  {
    title: 'SkyReach Advertising',
    category: 'Agency Site',
    image: 'https://picsum.photos/seed/agency/800/600',
    description: 'Landing page agensi periklanan dengan fokus pada konversi dan visual yang berani.',
    tags: ['Tailwind', 'Motion', 'GSAP'],
    link: '#'
  },
  {
    title: 'FinEdge App',
    category: 'Fintech',
    image: 'https://picsum.photos/seed/finance/800/600',
    description: 'Aplikasi manajemen keuangan pribadi dengan integrasi bank API.',
    tags: ['TypeScript', 'Node.js', 'Redis'],
    link: '#'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-fuchsia-400 font-mono text-sm tracking-[0.3em] uppercase mb-4"
            >
              Portfolio
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-display font-bold"
            >
              Selected Case Studies
            </motion.h2>
          </div>
          <motion.button
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="px-6 py-3 rounded-xl border border-white/10 hover:bg-white/5 transition-colors text-sm font-semibold flex items-center gap-2 group"
          >
            Lihat Semua Proyek
            <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </motion.button>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative"
            >
              {/* Image Container */}
              <div className="relative aspect-[4/3] rounded-[2.5rem] overflow-hidden glass mb-6 transition-transform duration-500 group-hover:scale-[0.98]">
                <Image 
                  src={project.image} 
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#030014] via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />
                
                {/* Floating Category Tag */}
                <div className="absolute top-6 left-6 px-4 py-2 glass rounded-full text-[10px] font-bold uppercase tracking-widest text-white backdrop-blur-md">
                  {project.category}
                </div>
              </div>

              <div className="px-2">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-display font-bold group-hover:text-cyan-400 transition-colors uppercase tracking-tight">
                    {project.title}
                  </h3>
                  <div className="flex gap-4">
                    <Github size={20} className="text-slate-500 hover:text-white cursor-pointer transition-colors" />
                    <ExternalLink size={20} className="text-slate-500 hover:text-white cursor-pointer transition-colors" />
                  </div>
                </div>
                
                <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-lg">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, j) => (
                    <span key={j} className="text-[10px] font-mono font-bold text-slate-500 bg-white/5 py-1 px-3 rounded-lg border border-white/5">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
