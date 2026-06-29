import React from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { motion } from 'framer-motion';
import { ShieldCheck, Gem, Coffee, ThumbsUp } from 'lucide-react';

export const Benefits: React.FC = () => {
  const { t } = useLanguage();

  const icons = [ShieldCheck, Gem, Coffee, ThumbsUp];

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-3xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4"
          >
            {t.benefits.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-600 dark:text-gray-400 text-base sm:text-lg"
          >
            {t.benefits.subtitle}
          </motion.p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {t.benefits.items.map((item, index) => {
            const IconComponent = icons[index % icons.length];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="p-8 rounded-3xl glass-card flex flex-col items-start relative group hover:-translate-y-2 transition-all duration-500"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-gold-400 to-amber-600 text-black flex items-center justify-center mb-6 shadow-glow group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="w-7 h-7 stroke-[2.5]" />
                </div>
                <h3 className="font-serif text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-gold-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  {item.description}
                </p>
                <div className="mt-6 pt-4 border-t border-gray-200 dark:border-white/5 w-full flex items-center justify-between text-xs text-gold-500 font-semibold uppercase tracking-wider">
                  <span>Nail Club Standard</span>
                  <span>✓</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
