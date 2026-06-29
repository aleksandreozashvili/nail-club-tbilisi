import React from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { Instagram, Phone, MessageCircle, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-dark-surface border-t border-white/10 pt-16 pb-12 text-gray-400 text-sm relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Brand Col */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-gold-600 via-gold-400 to-gold-300 flex items-center justify-center p-[2px]">
                <div className="w-full h-full bg-dark-bg rounded-full flex items-center justify-center">
                  <span className="font-serif font-bold text-lg text-gold-400">NC</span>
                </div>
              </div>
              <span className="font-serif font-bold text-xl tracking-wider text-white">
                NAIL CLUB
              </span>
            </div>
            <p className="text-gray-400 text-xs leading-relaxed max-w-sm">
              {t.footer.description}
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://instagram.com/nailclub_tbilisi"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full glass-panel flex items-center justify-center text-gold-400 hover:bg-gold-500 hover:text-black transition-all"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me/995500880990"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-10 h-10 rounded-full glass-panel flex items-center justify-center text-gold-400 hover:bg-[#25D366] hover:text-white transition-all"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <a
                href="tel:+995500880990"
                aria-label="Phone"
                className="w-10 h-10 rounded-full glass-panel flex items-center justify-center text-gold-400 hover:bg-gold-500 hover:text-black transition-all"
              >
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif font-bold text-white text-base mb-4">
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a href="#services" className="hover:text-gold-400 transition-colors">
                  {t.nav.services}
                </a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-gold-400 transition-colors">
                  {t.nav.about}
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-gold-400 transition-colors">
                  {t.nav.howItWorks}
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-gold-400 transition-colors">
                  {t.nav.portfolio}
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-gold-400 transition-colors">
                  {t.nav.reviews}
                </a>
              </li>
            </ul>
          </div>

          {/* Services Col */}
          <div>
            <h4 className="font-serif font-bold text-white text-base mb-4">
              {t.services.title}
            </h4>
            <ul className="space-y-2.5 text-xs">
              {t.services.items.map((s) => (
                <li key={s.id}>
                  <a href="#services" className="hover:text-gold-400 transition-colors">
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Col */}
          <div className="space-y-3">
            <h4 className="font-serif font-bold text-white text-base mb-4">
              {t.footer.contactInfo}
            </h4>
            <div className="flex items-start gap-2.5 text-xs">
              <MapPin className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
              <span>{t.contact.addressValue}</span>
            </div>
            <div className="flex items-center gap-2.5 text-xs">
              <Phone className="w-4 h-4 text-gold-400 shrink-0" />
              <a href="tel:+995500880990" className="hover:text-gold-400 transition-colors">
                +995 500 880 990
              </a>
            </div>
            <div className="flex items-center gap-2.5 text-xs">
              <MessageCircle className="w-4 h-4 text-gold-400 shrink-0" />
              <a href="https://wa.me/995500880990" target="_blank" rel="noopener noreferrer" className="hover:text-gold-400 transition-colors">
                WhatsApp Chat
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p>
            © {new Date().getFullYear()} Nail Club Tbilisi. {t.footer.rights}
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-gold-400 transition-colors">
              {t.footer.privacyPolicy}
            </a>
            <a href="#" className="hover:text-gold-400 transition-colors">
              {t.footer.termsOfService}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
