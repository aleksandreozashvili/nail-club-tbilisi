import React from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { motion } from 'framer-motion';
import { Calendar, Phone, MessageCircle, MapPin, Sparkles, Star } from 'lucide-react';

export const Hero: React.FC = () => {
  const { t } = useLanguage();

  const clientInitials = ['AN', 'MK', 'NS', 'EL'];
  const gradientColors = [
    'from-pink-500 to-rose-400',
    'from-amber-500 to-gold-400',
    'from-purple-500 to-indigo-400',
    'from-emerald-500 to-teal-400'
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden w-full max-w-full">
      {/* Background Glows (Responsive to avoid overflow) */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] max-w-[600px] h-[600px] bg-gradient-to-tr from-gold-500/15 via-rose-gold/10 to-transparent rounded-full blur-[140px] pointer-events-none -z-10 animate-pulse"></div>
      <div className="absolute top-1/3 left-4 sm:left-10 w-64 sm:w-96 h-64 sm:h-96 bg-gold-400/10 rounded-full blur-[100px] pointer-events-none -z-10"></div>
      <div className="absolute bottom-10 right-4 sm:right-10 w-64 sm:w-96 h-64 sm:h-96 bg-amber-600/10 rounded-full blur-[100px] pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Text & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="lg:col-span-7 flex flex-col items-start text-left w-full max-w-full overflow-hidden"
          >
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel border border-gold-500/30 text-gold-400 text-xs sm:text-sm font-semibold mb-6 shadow-glow max-w-full overflow-hidden text-ellipsis whitespace-nowrap">
              <Sparkles className="w-4 h-4 text-gold-400 animate-spin-slow shrink-0" />
              <span className="truncate">{t.hero.badge}</span>
            </div>

            {/* Headline */}
            <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 dark:text-white leading-[1.15] mb-6 break-words w-full">
              {t.hero.headline.split(' ')[0]}{' '}
              <span className="text-gradient-gold block sm:inline">
                {t.hero.headline.split(' ').slice(1).join(' ')}
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-2xl font-normal leading-relaxed mb-8 break-words">
              {t.hero.subheadline}
            </p>

            {/* Location Pill */}
            <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-500 dark:text-gray-400 font-medium mb-8 bg-white/5 dark:bg-white/[0.03] px-4 py-2 rounded-lg border border-white/10 max-w-full overflow-hidden">
              <MapPin className="w-4 h-4 text-gold-400 shrink-0" />
              <span className="truncate">{t.hero.locationNote}</span>
              <span className="flex h-2 w-2 relative ml-1 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
            </div>

            {/* CTA Buttons Grid */}
            <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto">
              <a
                href="#contact"
                className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-gradient-to-r from-gold-400 via-gold-500 to-amber-600 text-black font-bold text-xs sm:text-sm md:text-base tracking-wide uppercase shadow-glow hover:shadow-glow-lg transition-all duration-300 transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
                <span className="truncate">{t.hero.ctaBook}</span>
              </a>

              <a
                href="tel:+995500880990"
                className="w-full sm:w-auto px-6 sm:px-7 py-3.5 sm:py-4 rounded-full glass-card text-gray-900 dark:text-white font-semibold text-xs sm:text-sm md:text-base hover:border-gold-500/50 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-gold-400 shrink-0" />
                <span className="truncate">{t.hero.ctaCall}</span>
              </a>

              <a
                href="https://wa.me/995500880990"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 sm:px-7 py-3.5 sm:py-4 rounded-full border border-[#25D366]/40 bg-[#25D366]/10 hover:bg-[#25D366] text-gray-900 dark:text-white hover:text-white font-semibold text-xs sm:text-sm md:text-base transition-all duration-300 flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#25D366] group-hover:text-white shrink-0" />
                <span className="truncate">{t.hero.ctaWhatsApp}</span>
              </a>
            </div>

            {/* Trust rating badge */}
            <div className="mt-8 sm:mt-10 pt-6 sm:pt-8 border-t border-gray-200 dark:border-white/10 flex flex-wrap items-center gap-4 w-full">
              <div className="flex -space-x-2 shrink-0">
                {clientInitials.map((init, i) => (
                  <div
                    key={i}
                    className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full border-2 border-dark-bg bg-gradient-to-tr ${gradientColors[i]} flex items-center justify-center text-white font-bold text-xs shadow-md`}
                  >
                    {init}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1 text-gold-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current shrink-0" />
                  ))}
                  <span className="text-gray-900 dark:text-white font-bold ml-1.5 text-xs sm:text-sm">4.9 / 5.0</span>
                </div>
                <p className="text-[11px] sm:text-xs text-gray-500 dark:text-gray-400 mt-0.5">
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
            className="lg:col-span-5 relative w-full max-w-full"
          >
            <div className="relative mx-auto max-w-sm sm:max-w-md lg:max-w-none w-full">
              {/* Decorative Frame */}
              <div className="absolute -inset-2 rounded-[2.5rem] bg-gradient-to-tr from-gold-500/30 via-transparent to-gold-400/30 blur-xl opacity-70"></div>
              
              {/* Main Image Container */}
              <div className="relative rounded-[2rem] overflow-hidden border border-white/20 dark:border-white/10 shadow-2xl bg-dark-surface aspect-[4/5] w-full">
                <img
                  src="https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=800&q=80"
                  alt="Nail Club Tbilisi Luxury Interior & Nails"
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/90 via-transparent to-transparent"></div>
                
                {/* Floating Card Overlay */}
                <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 p-4 sm:p-5 rounded-2xl glass-panel border border-white/20 flex items-center justify-between shadow-2xl">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gold-500/20 flex items-center justify-center text-gold-400 font-serif text-lg sm:text-xl font-bold border border-gold-500/30 shrink-0">
                      NC
                    </div>
                    <div className="overflow-hidden">
                      <h4 className="text-xs sm:text-sm font-bold text-white tracking-wide truncate">
                        Soprano Titanium
                      </h4>
                      <p className="text-[10px] sm:text-xs text-gold-300 truncate">
                        100% უმტკივნეულო ლაზერი
                      </p>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-[10px] sm:text-[11px] font-bold border border-emerald-500/30 shrink-0 ml-2">
                    VIP
                  </span>
                </div>
              </div>

              {/* Floating Badge Top Right */}
              <div className="absolute -top-4 -right-4 hidden md:flex items-center gap-3 p-3.5 rounded-2xl glass-panel border border-white/20 animate-bounce shadow-xl">
                <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-gold-500 to-amber-500 flex items-center justify-center text-black font-bold">
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
