import React from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { MapPin, Navigation, ExternalLink } from 'lucide-react';

export const GoogleMapSection: React.FC = () => {
  const { t } = useLanguage();

  const googleMapsUrl = "https://www.google.com/maps/search/?api=1&query=47+Kazbegi+Avenue+Tbilisi+Georgia";

  return (
    <section className="py-12 relative bg-dark-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl bg-dark-surface aspect-[16/7] min-h-[360px] flex items-center justify-center group">
          {/* Decorative map mockup background */}
          <div className="absolute inset-0 opacity-40 group-hover:opacity-50 transition-opacity duration-700 bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:24px_24px] bg-dark-card"></div>
          
          <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-transparent to-dark-bg/60 pointer-events-none"></div>

          {/* Floating Location Card */}
          <div className="relative z-10 p-8 sm:p-10 rounded-[2.5rem] glass-panel border border-gold-500/40 text-center max-w-lg mx-4 shadow-glow transform transition-transform duration-500 group-hover:scale-105">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-gold-500 via-gold-400 to-amber-600 text-black flex items-center justify-center mx-auto mb-6 shadow-glow animate-bounce">
              <MapPin className="w-8 h-8 stroke-[2.5]" />
            </div>

            <span className="text-xs font-bold uppercase tracking-widest text-gold-400 block mb-2">
              Visit Salon
            </span>
            
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-2">
              Nail Club Tbilisi
            </h3>
            
            <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base font-medium mb-8">
              {t.contact.addressValue}
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-gold-500 to-gold-400 text-black font-bold text-xs uppercase tracking-wide flex items-center gap-2 shadow-md hover:shadow-glow transition-all"
              >
                <Navigation className="w-4 h-4" />
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5 ml-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
