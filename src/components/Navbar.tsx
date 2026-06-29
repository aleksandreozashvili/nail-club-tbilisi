import React, { useState, useEffect } from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { LanguageSwitcher } from './LanguageSwitcher';
import { ThemeSwitcher } from './ThemeSwitcher';
import { Menu, X, Sparkles, PhoneCall } from 'lucide-react';

export const Navbar: React.FC = () => {
  const { t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t.nav.services, href: '#services' },
    { name: t.nav.about, href: '#why-us' },
    { name: t.nav.howItWorks, href: '#how-it-works' },
    { name: t.nav.portfolio, href: '#portfolio' },
    { name: t.nav.reviews, href: '#testimonials' },
    { name: t.nav.faq, href: '#faq' },
    { name: t.nav.contact, href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'glass-nav py-3.5 shadow-xl'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="flex items-center gap-3 group focus:outline-none"
        >
          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-gold-600 via-gold-400 to-gold-300 flex items-center justify-center p-[2px] shadow-glow transition-transform duration-500 group-hover:scale-110">
            <div className="w-full h-full bg-dark-bg rounded-full flex items-center justify-center">
              <span className="font-serif font-bold text-lg bg-gradient-to-r from-gold-300 to-gold-500 bg-clip-text text-transparent">
                NC
              </span>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-serif font-bold text-lg sm:text-xl tracking-wider text-gray-900 dark:text-white group-hover:text-gold-400 transition-colors">
              NAIL CLUB
            </span>
            <span className="text-[10px] tracking-[0.25em] uppercase text-gold-600 dark:text-gold-400 font-semibold -mt-1">
              TBILISI
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-gold-500 dark:hover:text-gold-400 transition-colors duration-200 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-gold-400 after:to-gold-600 hover:after:w-full after:transition-all after:duration-300"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right Controls */}
        <div className="hidden sm:flex items-center gap-3">
          <LanguageSwitcher />
          <ThemeSwitcher />
          <a
            href="#contact"
            className="relative group overflow-hidden rounded-full p-[1px] font-semibold text-xs tracking-wider uppercase"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-gold-400 via-gold-500 to-amber-600 rounded-full animate-pulse"></span>
            <div className="relative px-5 py-2.5 rounded-full bg-dark-bg transition-all duration-300 group-hover:bg-transparent flex items-center gap-1.5 text-gold-300 group-hover:text-black">
              <Sparkles className="w-3.5 h-3.5 text-gold-400 group-hover:text-black transition-colors" />
              <span>{t.nav.bookNow}</span>
            </div>
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="flex items-center gap-1 sm:hidden shrink-0">
          <LanguageSwitcher />
          <ThemeSwitcher />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
            className="p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:text-gold-400 focus:outline-none"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden glass-panel border-t border-white/10 mt-3 px-4 pt-4 pb-6 space-y-3 animate-fadeIn">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium px-3 py-2 rounded-lg text-gray-800 dark:text-gray-200 hover:bg-gold-500/10 hover:text-gold-400 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-3 rounded-xl bg-gradient-to-r from-gold-500 to-gold-400 text-black font-bold text-sm tracking-wide uppercase shadow-glow flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4" />
                {t.nav.bookNow}
              </a>
              <a
                href="tel:+995500880990"
                className="w-full text-center py-2.5 rounded-xl border border-white/20 text-gray-700 dark:text-gray-300 font-medium text-sm flex items-center justify-center gap-2 hover:bg-white/5"
              >
                <PhoneCall className="w-4 h-4 text-gold-400" />
                +995 500 880 990
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
