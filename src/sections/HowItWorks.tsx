import React from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { motion } from 'framer-motion';

export const HowItWorks: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="how-it-works" className="py-24 relative bg-dark-surface/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs font-bold uppercase tracking-widest text-gold-400 block mb-3">
            Simple Process
          </span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-3xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4"
          >
            {t.howItWorks.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-600 dark:text-gray-400 text-base sm:text-lg"
          >
            {t.howItWorks.subtitle}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connector Line for Desktop */}
          <div className="hidden md:block absolute top-1/2 left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent via-gold-500/40 to-transparent -translate-y-12"></div>

          {t.howItWorks.steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="p-8 rounded-[2rem] glass-card text-center relative z-10 flex flex-col items-center group hover:-translate-y-2 transition-all duration-500"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-gold-500 via-gold-400 to-amber-600 text-black font-serif text-2xl font-bold flex items-center justify-center mb-6 shadow-glow group-hover:scale-110 transition-transform duration-300">
                {step.number}
              </div>
              <h3 className="font-serif text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-gold-400 transition-colors">
                {step.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
