import React from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { motion } from 'framer-motion';
import { Star, MapPin, Zap } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const { t } = useLanguage();
  const icons = [Star, MapPin, Zap];

  return (
    <section id="why-us" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Visual Grid */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 grid grid-cols-2 gap-4 sm:gap-6"
          >
            <div className="space-y-4 sm:space-y-6">
              <div className="rounded-3xl overflow-hidden shadow-2xl border border-white/10 aspect-[4/5] bg-dark-surface">
                <img
                  src="https://images.unsplash.com/photo-1519014816548-bf5fe059798b?auto=format&fit=crop&w=600&q=80"
                  alt="Nail Master in Tbilisi"
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
              <div className="p-6 rounded-3xl glass-panel text-center border border-gold-500/30">
                <span className="font-serif text-3xl font-bold text-gradient-gold block mb-1">100%</span>
                <span className="text-xs text-gray-400 font-semibold uppercase tracking-wider">Sanitary Guarantee</span>
              </div>
            </div>

            <div className="space-y-4 sm:space-y-6 pt-8 sm:pt-12">
              <div className="p-6 rounded-3xl bg-gradient-to-br from-gold-500 to-amber-600 text-black shadow-glow text-center">
                <span className="font-serif text-3xl font-bold block mb-1">VIP</span>
                <span className="text-xs font-bold uppercase tracking-wider">Lounge & Prosecco</span>
              </div>
              <div className="rounded-3xl overflow-hidden shadow-2xl border border-white/10 aspect-[4/5] bg-dark-surface">
                <img
                  src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=600&q=80"
                  alt="Brow styling"
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
            </div>
          </motion.div>

          {/* Right Column: Text content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 space-y-8"
          >
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-gold-400 block mb-3">
                Why Nail Club
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl font-bold text-gray-900 dark:text-white leading-tight mb-4">
                {t.whyChooseUs.title}
              </h2>
              <p className="text-gray-600 dark:text-gray-400 text-base sm:text-lg">
                {t.whyChooseUs.subtitle}
              </p>
            </div>

            <div className="space-y-6">
              {t.whyChooseUs.items.map((item, index) => {
                const IconComp = icons[index % icons.length];
                return (
                  <div
                    key={index}
                    className="p-6 rounded-2xl glass-card flex items-start gap-5 border border-white/10 hover:border-gold-500/40 transition-all duration-300"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-400 shrink-0">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-serif text-lg font-bold text-gray-900 dark:text-white mb-1">
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
