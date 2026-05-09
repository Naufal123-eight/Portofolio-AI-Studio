'use client';

import { motion } from 'motion/react';
import { Layout, LineChart, Globe, Zap, Cpu, BarChart3 } from 'lucide-react';

const services = [
  {
    title: 'Full-Stack Web Development',
    description: 'Membangun aplikasi web modern yang responsif, cepat, dan terukur menggunakan ekosistem React/Next.js.',
    icon: Layout,
    color: 'cyan',
    features: ['React & Next.js', 'State Management', 'API Integration', 'UI/UX Implementation']
  },
  {
    title: 'Digital Advertising Strategy',
    description: 'Optimasi kampanye iklan digital (Meta, Google, TikTok) untuk memaksimalkan ROI dan pertumbuhan bisnis.',
    icon: LineChart,
    color: 'violet',
    features: ['Paid Ads Management', 'Creative Directing', 'Conversion Tracking', 'A/B Testing']
  },
  {
    title: 'Brand Identity Design',
    description: 'Menciptakan identitas visual yang profesional dan berkesan untuk brand atau startup Anda.',
    icon: Globe,
    color: 'fuchsia',
    features: ['Logo Systems', 'Design Guidelines', 'Typography', 'Visual Assets']
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="mb-20 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-cyan-400 font-mono text-sm tracking-[0.3em] uppercase mb-4"
          >
            Capabilities
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-display font-bold"
          >
            Layanan Unggulan
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative p-8 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] overflow-hidden glass-hover"
            >
              {/* Decorative Background Glow */}
              <div className={`absolute -right-8 -top-8 w-32 h-32 rounded-full blur-[60px] opacity-20 transition-opacity group-hover:opacity-40 
                ${service.color === 'cyan' ? 'bg-cyan-400' : service.color === 'violet' ? 'bg-violet-600' : 'bg-fuchsia-500'}`} 
              />

              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 shadow-lg 
                ${service.color === 'cyan' ? 'bg-cyan-400/20 text-cyan-400' : service.color === 'violet' ? 'bg-violet-600/20 text-violet-400' : 'bg-fuchsia-500/20 text-fuchsia-400'}`}
              >
                <service.icon size={28} />
              </div>

              <h3 className="text-2xl font-display font-bold mb-4">{service.title}</h3>
              <p className="text-slate-400 leading-relaxed mb-8 text-sm md:text-base">
                {service.description}
              </p>

              <ul className="space-y-3">
                {service.features.map((feature, j) => (
                  <li key={j} className="flex items-center gap-3 text-xs font-medium text-slate-300">
                    <div className="w-1 h-1 rounded-full bg-cyan-400" />
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="mt-10 pt-6 border-t border-white/5 flex justify-between items-center opacity-40 group-hover:opacity-100 transition-opacity">
                <span className="text-[10px] uppercase tracking-widest font-bold">Learn more</span>
                <Zap size={14} className="text-cyan-400" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
