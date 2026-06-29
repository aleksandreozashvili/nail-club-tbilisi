import React from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { Phone, MessageCircle } from 'lucide-react';

export const FloatingButtons: React.FC = () => {
  const { t } = useLanguage();
  const whatsappUrl = "https://wa.me/995500880990";
  const phoneUrl = "tel:+995500880990";

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 items-end">
      {/* Call Button */}
      <a
        href={phoneUrl}
        aria-label={t.floating.call}
        className="group relative flex items-center gap-2 bg-gradient-to-tr from-amber-600 to-gold-500 hover:from-gold-500 hover:to-gold-400 text-black font-semibold p-3.5 sm:px-4 sm:py-3 rounded-full shadow-2xl hover:shadow-glow transition-all duration-300 hover:scale-105 active:scale-95"
      >
        <span className="hidden sm:inline text-xs font-bold tracking-wide uppercase pr-1">
          {t.floating.call}
        </span>
        <Phone className="w-5 h-5 fill-current animate-bounce" />
      </a>

      {/* WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={t.floating.whatsapp}
        className="group relative flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold p-3.5 sm:px-5 sm:py-3.5 rounded-full shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95"
      >
        <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-ping"></span>
        <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
        <span className="hidden sm:inline text-xs font-bold tracking-wide uppercase pr-1">
          WhatsApp
        </span>
        <MessageCircle className="w-6 h-6 fill-current" />
      </a>
    </div>
  );
};
