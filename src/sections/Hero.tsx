import React from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { motion } from 'framer-motion';
import { Calendar, Phone, MessageCircle, MapPin, Sparkles, Star } from 'lucide-react';

export const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-gold-500/15 via-rose-gold/10 to-transparent rounded-full blur-[140px] pointer-events-none -z-10 animate-pulse"></div>
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-gold-400/10 rounded-full blur-[120px] pointer-events-none -z-10"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-amber-600/10 rounded-full blur-[120px] pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Text & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="lg:col-span-7 flex flex-col items-start text-left"
          >
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel border border-gold-500/30 text-gold-400 text-xs sm:text-sm font-semibold mb-6 shadow-glow">
              <Sparkles className="w-4 h-4 text-gold-400 animate-spin-slow" />
              <span>{t.hero.badge}</span>
            </div>

            {/* Headline */}
            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 dark:text-white leading-[1.1] mb-6">
              {t.hero.headline.split(' ')[0]}{' '}
              <span className="text-gradient-gold block sm:inline">
                {t.hero.headline.split(' ').slice(1).join(' ')}
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-2xl font-normal leading-relaxed mb-8">
              {t.hero.subheadline}
            </p>

            {/* Location Pill */}
            <div className="flex items-center gap-2.5 text-xs sm:text-sm text-gray-500 dark:text-gray-400 font-medium mb-8 bg-white/5 dark:bg-white/[0.03] px-4 py-2 rounded-lg border border-white/10">
              <MapPin className="w-4 h-4 text-gold-400 shrink-0" />
              <span>{t.hero.locationNote}</span>
              <span className="flex h-2 w-2 relative ml-1">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
            </div>

            {/* CTA Buttons Grid */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <a
                href="#contact"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-gold-400 via-gold-500 to-amber-600 text-black font-bold text-sm sm:text-base tracking-wide uppercase shadow-glow hover:shadow-glow-lg transition-all duration-300 transform hover:-translate-y-0.5 flex items-center justify-center gap-2.5"
              >
                <Calendar className="w-5 h-5" />
                <span>{t.hero.ctaBook}</span>
              </a>

              <a
                href="tel:+995500880990"
                className="w-full sm:w-auto px-7 py-4 rounded-full glass-card text-gray-900 dark:text-white font-semibold text-sm sm:text-base hover:border-gold-500/50 transition-all duration-300 flex items-center justify-center gap-2.5"
              >
                <Phone className="w-5 h-5 text-gold-400" />
                <span>{t.hero.ctaCall}</span>
              </a>

              <a
                href="https://wa.me/995500880990"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-7 py-4 rounded-full border border-[#25D366]/40 bg-[#25D366]/10 hover:bg-[#25D366] text-gray-900 dark:text-white hover:text-white font-semibold text-sm sm:text-base transition-all duration-300 flex items-center justify-center gap-2.5"
              >
                <MessageCircle className="w-5 h-5 text-[#25D366] group-hover:text-white" />
                <span>{t.hero.ctaWhatsApp}</span>
              </a>
            </div>

            {/* Trust rating badge */}
            <div className="mt-10 pt-8 border-t border-gray-200 dark:border-white/10 flex items-center gap-4">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <img
                    key={i}
                    src={`https://images.unsplash.com/photo-${1534528741775 + i * 1000}-53994a69daeb?auto=format&fit=crop&w=100&h=100&q=80`}
                    alt="Client"
                    className="w-10 h-10 rounded-full border-2 border-dark-bg object-cover"
                    loading="lazy"
                  />
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1 text-gold-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                  <span className="text-gray-900 dark:text-white font-bold ml-1.5 text-sm">4.9 / 5.0</span>
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  500+ გაკეთებული პროცედურა თვეში
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Hero Visual Showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Decorative Frame */}
              <div className="absolute -inset-2 rounded-[2.5rem] bg-gradient-to-tr from-gold-500/30 via-transparent to-gold-400/30 blur-xl opacity-70"></div>
              
              {/* Main Image Container */}
              <div className="relative rounded-[2rem] overflow-hidden border border-white/20 dark:border-white/10 shadow-2xl bg-dark-surface aspect-[4/5]">
                <img
                  src="https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=800&q=80"
                  alt="Nail Club Tbilisi Luxury Interior & Nails"
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/80 via-transparent to-transparent"></div>
                
                {/* Floating Card Overlay */}
                <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl glass-panel border border-white/20 flex items-center justify-between shadow-2xl">
                  <div className="flex items-center gap-3.5">
                    <div className="w-12 h-12 rounded-xl bg-gold-500/20 flex items-center justify-center text-gold-400 font-serif text-xl font-bold border border-gold-500/30">
                      NC
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white tracking-wide">
                        Soprano Titanium
                      </h4>
                      <p className="text-xs text-gold-300">
                        100% უმტკივნეულო ლაზერი
                      </p>
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-[11px] font-bold border border-emerald-500/30">
                    VIP
                  </span>
                </div>
              </div>

              {/* Floating Badge Top Right */}
              <div className="absolute -top-6 -right-6 hidden sm:flex items-center gap-3 p-4 rounded-2xl glass-panel border border-white/20 animate-bounce shadow-xl">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-gold-500 to-amber-500 flex items-center justify-center text-black font-bold">
                  💅
                </div>
                <div>
                  <div className="text-xs font-bold text-white">Luxio & Kodi</div>
                  <div className="text-[10px] text-gray-400">100% ორიგინალი</div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
