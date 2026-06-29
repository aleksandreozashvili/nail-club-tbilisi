import React from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="testimonials" className="py-24 relative bg-dark-surface/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-gold-400 block mb-3">
            Guest Experiences
          </span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-3xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4"
          >
            {t.testimonials.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-600 dark:text-gray-400 text-base sm:text-lg"
          >
            {t.testimonials.subtitle}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.testimonials.items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="p-8 rounded-3xl glass-card flex flex-col justify-between relative group hover:-translate-y-2 transition-all duration-500 border border-white/10"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-gold-500/10 group-hover:text-gold-500/20 transition-colors" />
              
              <div>
                <div className="flex items-center gap-1 text-gold-400 mb-6">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 dark:text-gray-300 text-sm italic leading-relaxed mb-8">
                  "{item.comment}"
                </p>
              </div>

              <div className="pt-4 border-t border-gray-200 dark:border-white/10 flex items-center justify-between">
                <div>
                  <h4 className="font-serif font-bold text-gray-900 dark:text-white text-base">
                    {item.name}
                  </h4>
                  <span className="text-xs text-gold-500 font-medium block">
                    {item.service}
                  </span>
                </div>
                <span className="text-xs text-gray-500 dark:text-gray-400">
                  {item.date}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
