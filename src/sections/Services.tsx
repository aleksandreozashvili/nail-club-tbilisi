import React from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { motion } from 'framer-motion';
import { Sparkles, Clock, Tag, CheckCircle2, ArrowRight } from 'lucide-react';

export const Services: React.FC = () => {
  const { t } = useLanguage();

  const serviceImages = [
    'https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&w=600&q=80', // Nails
    'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=600&q=80', // Laser
    'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=600&q=80', // Eyebrows
    'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=600&q=80', // Make Up
  ];

  const handleBookClick = (serviceTitle: string) => {
    window.dispatchEvent(new CustomEvent('selectService', { detail: serviceTitle }));
  };

  return (
    <section id="services" className="py-24 relative bg-dark-surface/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-400 text-xs font-bold uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>VIP Treatments</span>
          </div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-3xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4"
          >
            {t.services.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-600 dark:text-gray-400 text-base sm:text-lg"
          >
            {t.services.subtitle}
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {t.services.items.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="rounded-[2.5rem] glass-card overflow-hidden flex flex-col group border border-white/10 dark:border-white/10 hover:border-gold-500/50 transition-all duration-500 shadow-xl hover:shadow-glow"
            >
              {/* Image Banner */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={serviceImages[index]}
                  alt={service.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-card via-transparent to-transparent opacity-90"></div>
                
                {/* Price Badge */}
                <div className="absolute top-4 right-4 px-4 py-1.5 rounded-full bg-dark-bg/90 backdrop-blur-md border border-gold-500/40 text-gold-400 font-bold text-sm shadow-lg flex items-center gap-1.5">
                  <Tag className="w-3.5 h-3.5" />
                  <span>{service.price}</span>
                </div>

                {/* Duration Badge */}
                <div className="absolute bottom-4 left-4 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-medium flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-gold-300" />
                  <span>{service.duration}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-7 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-gold-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-2.5 mb-8">
                    {service.features.map((feat, idx) => (
                      <li key={idx} className="flex items-center gap-2.5 text-xs text-gray-700 dark:text-gray-300 font-medium">
                        <CheckCircle2 className="w-4 h-4 text-gold-400 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action CTA */}
                <a
                  href="#contact"
                  onClick={() => handleBookClick(service.title)}
                  className="w-full py-3.5 rounded-2xl bg-white/5 hover:bg-gradient-to-r hover:from-gold-500 hover:to-gold-400 text-gray-900 dark:text-white hover:text-black font-bold text-sm tracking-wide uppercase transition-all duration-300 flex items-center justify-center gap-2 border border-white/10 hover:border-transparent group/btn shadow-md"
                >
                  <span>{t.services.bookService}</span>
                  <ArrowRight className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
