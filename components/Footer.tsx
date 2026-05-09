'use client';

import { motion } from 'motion/react';
import { Mail, MapPin, Send, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="relative pt-24 pb-12 overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Contact CTA Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative glass rounded-[3rem] p-10 md:p-16 mb-24 md:flex items-center justify-between text-center md:text-left group"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-violet-500/10 opacity-50 rounded-[3rem]" />
          
          <div className="relative z-10 max-w-xl mb-10 md:mb-0">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 leading-tight">
              Siap Memulai <span className="text-cyan-400">Proyek Digital</span> Anda?
            </h2>
            <p className="text-slate-400 text-lg">
              Mari bicarakan bagaimana saya bisa membantu bisnis Anda tumbuh melalui teknologi dan iklan digital yang tepat sasaran.
            </p>
          </div>
          
          <div className="relative z-10">
            <button className="px-10 py-5 rounded-2xl bg-white text-slate-950 font-bold text-lg hover:scale-105 active:scale-95 transition-transform flex items-center gap-3 mx-auto md:mx-0 shadow-[0_0_50px_rgba(255,255,255,0.2)]">
              Hubungi Saya
              <Send size={20} />
            </button>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-12 border-b border-white/5 pb-20">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-8">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-violet-600 flex items-center justify-center text-white">
                <span className="font-display font-black">NR</span>
              </div>
              <span className="text-xl font-display font-bold tracking-tight">Naufal<span className="text-cyan-400 font-sans">Rasyid</span></span>
            </div>
            <p className="text-slate-400 max-w-xs leading-relaxed mb-8">
              Membangun masa depan digital dengan desain yang memukau dan performa yang tak tertandingi.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-6 text-white">Quick Links</h4>
            <ul className="space-y-4">
              {['Home', 'Services', 'Projects', 'Process', 'Contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="text-slate-400 hover:text-cyan-400 transition-colors text-sm font-medium">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-6 text-white">Connect</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-slate-400">
                <Mail size={18} className="text-cyan-400" />
                <span className="text-sm">hi@naufalrasyid.com</span>
              </div>
              <div className="flex items-center gap-3 text-slate-400">
                <MapPin size={18} className="text-cyan-400" />
                <span className="text-sm">Jakarta, Indonesia</span>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-slate-500 font-mono">
            © {new Date().getFullYear()} Naufal Rasyid. All rights reserved.
          </p>
          <button 
            onClick={scrollToTop}
            className="w-12 h-12 rounded-xl glass flex items-center justify-center text-slate-400 hover:text-white transition-all hover:bg-cyan-500/10 hover:border-cyan-500/20 shadow-lg"
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
      
      {/* Footer Ambient Light */}
      <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-full max-w-2xl h-48 bg-cyan-500/10 blur-[100px] rounded-full -z-10" />
    </footer>
  );
}
