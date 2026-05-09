'use client';

import { motion } from 'motion/react';
import { ArrowRight, Github, Instagram, Linkedin, Twitter } from 'lucide-react';

const socialLinks = [
  { icon: Github, href: '#' },
  { icon: Linkedin, href: '#' },
  { icon: Instagram, href: '#' },
  { icon: Twitter, href: '#' },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 animate-bounce-slow italic">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span className="text-[10px] font-bold tracking-widest uppercase text-cyan-400">Tech Enthusiast & Agency Owner</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-display font-extrabold leading-[1.1] mb-6">
              Crafting <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                Digital Vision.
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-400 max-w-xl mb-10 leading-relaxed">
              Mahasiswa Teknik Informatika. Spesialisasi dalam sistem web berperforma tinggi dan strategi periklanan berbasis data.
            </p>
            
            <div className="flex flex-wrap gap-4 items-center">
              <button className="group px-8 py-4 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold transition-all duration-300 flex items-center gap-2 shadow-[0_0_20px_rgba(34,211,238,0.4)] hover:scale-105 active:scale-95">
                Lihat Karya Saya
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              
              <div className="flex items-center gap-3 ml-2 lg:ml-6">
                {socialLinks.map((social, i) => (
                  <motion.a
                    key={i}
                    whileHover={{ y: -5 }}
                    href={social.href}
                    className="w-12 h-12 rounded-xl glass flex items-center justify-center text-slate-400 hover:text-white transition-colors"
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Visual Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="relative hidden lg:block"
          >
            {/* The Main Glass Card */}
            <div className="relative z-10 w-full aspect-square glass rounded-[3rem] p-12 flex flex-col justify-between overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-violet-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="flex justify-between items-start">
                <div className="w-20 h-20 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center shadow-inner">
                  <span className="text-3xl font-display font-black text-cyan-400">NR</span>
                </div>
                <div className="text-right">
                  <p className="text-xs font-mono text-slate-500 uppercase tracking-tighter mb-1">Current Focus</p>
                  <p className="text-sm font-semibold">Web App Development & <br />Ads Performance</p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-medium text-slate-400">
                    <span>Performance</span>
                    <span>100%</span>
                  </div>
                  <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: '100%' }}
                      transition={{ duration: 1.5, delay: 0.5 }}
                      className="h-full bg-gradient-to-r from-cyan-400 to-violet-500"
                    />
                  </div>
                </div>
                
                <div className="pt-8 grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
                    <p className="text-2xl font-display font-bold">24+</p>
                    <p className="text-[10px] uppercase tracking-widest text-slate-500">Proyek Selesai</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
                    <p className="text-2xl font-display font-bold">12+</p>
                    <p className="text-[10px] uppercase tracking-widest text-slate-500">Klien Aktif</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Floating Elements */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-8 -right-8 w-24 h-24 glass rounded-2xl flex items-center justify-center text-cyan-400 shadow-xl"
            >
              <div className="relative">
                <div className="absolute inset-0 blur-lg bg-cyan-400/30 opacity-50" />
                <ArrowRight className="-rotate-45 relative" size={32} />
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 25, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-10 -left-10 px-6 py-4 glass rounded-3xl flex items-center gap-4 shadow-2xl"
            >
              <div className="w-12 h-12 rounded-full bg-violet-500 flex items-center justify-center text-white font-bold">NV</div>
              <div>
                <p className="text-sm font-bold">Naufal Portfolio</p>
                <div className="flex gap-1">
                  {[1,2,3,4,5].map(i => <div key={i} className="w-1 h-1 rounded-full bg-cyan-400" />)}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
