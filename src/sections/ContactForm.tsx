import React, { useState, useEffect } from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { motion } from 'framer-motion';
import { MessageCircle, MapPin, Phone, Clock, Sparkles } from 'lucide-react';

export const ContactForm: React.FC = () => {
  const { t } = useLanguage();

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  // Listen for preselected service from Services section
  useEffect(() => {
    const handleSelectService = (event: Event) => {
      const customEvent = event as CustomEvent<string>;
      if (customEvent.detail) {
        setFormData((prev) => ({ ...prev, service: customEvent.detail }));
      }
    };

    window.addEventListener('selectService', handleSelectService);
    return () => window.removeEventListener('selectService', handleSelectService);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim() || !formData.service) {
      alert('Please fill required fields (*) / გთხოვთ შეავსოთ სავალდებულო ველები (*)');
      return;
    }

    setIsSubmitting(true);

    // Rule 1: Extract fields
    const { name, phone, email, service, message } = formData;

    // Rule 6: Format information in active language
    const header = t.whatsappMsg.newBooking;
    const nameLine = `${t.whatsappMsg.name} ${name}`;
    const phoneLine = `${t.whatsappMsg.phone} ${phone}`;
    const emailLine = email.trim() ? `${t.whatsappMsg.email} ${email}` : '';
    const serviceLine = `${t.whatsappMsg.service} ${service}`;
    const messageLine = message.trim() ? `${t.whatsappMsg.message} ${message}` : '';

    // Rule 3: Append call-to-action note telling user to press send button
    const ctaNote = t.whatsappMsg.pressSend;

    // Rule 2: Clean and readable formatting using %0A or \n
    const lines = [
      header,
      '',
      nameLine,
      phoneLine,
      emailLine,
      serviceLine,
      messageLine,
      '',
      '------------------------',
      ctaNote
    ].filter(line => line !== null && line !== undefined && line !== '');

    const rawText = lines.join('\n');
    const encodedText = encodeURIComponent(rawText);

    // Rule 5: Target phone number without '+' or '00'
    const targetPhoneNumber = '995500880990';

    // Rule 4: Construct final URL
    const whatsappUrl = `https://wa.me/${targetPhoneNumber}?text=${encodedText}`;

    setTimeout(() => {
      setIsSubmitting(false);
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    }, 600);
  };

  return (
    <section id="contact" className="py-24 relative bg-dark-surface/40 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-400 text-xs font-bold uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>VIP Reservation</span>
          </div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-3xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4"
          >
            {t.contact.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-600 dark:text-gray-400 text-base sm:text-lg"
          >
            {t.contact.subtitle}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 p-8 sm:p-10 rounded-[2.5rem] glass-card border border-white/10 shadow-2xl relative"
          >
            <div className="mb-8 pb-6 border-b border-gray-200 dark:border-white/10">
              <h3 className="font-serif text-2xl font-bold text-gray-900 dark:text-white mb-2">
                {t.contact.formTitle}
              </h3>
              <p className="text-xs sm:text-sm text-gold-500 font-medium">
                ✨ {t.contact.formSubtitle}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-gray-700 dark:text-gray-300 mb-2">
                    {t.contact.nameLabel}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={t.contact.namePlaceholder}
                    className="w-full px-4 py-3.5 rounded-xl bg-white/5 dark:bg-black/30 border border-gray-300 dark:border-white/10 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-500 focus:outline-none focus:border-gold-400 focus:ring-1 focus:ring-gold-400 transition-all text-sm"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-gray-700 dark:text-gray-300 mb-2">
                    {t.contact.phoneLabel}
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder={t.contact.phonePlaceholder}
                    className="w-full px-4 py-3.5 rounded-xl bg-white/5 dark:bg-black/30 border border-gray-300 dark:border-white/10 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-500 focus:outline-none focus:border-gold-400 focus:ring-1 focus:ring-gold-400 transition-all text-sm"
                  />
                </div>
              </div>

              {/* Email & Service */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-gray-700 dark:text-gray-300 mb-2">
                    {t.contact.emailLabel}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={t.contact.emailPlaceholder}
                    className="w-full px-4 py-3.5 rounded-xl bg-white/5 dark:bg-black/30 border border-gray-300 dark:border-white/10 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-500 focus:outline-none focus:border-gold-400 focus:ring-1 focus:ring-gold-400 transition-all text-sm"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-xs font-bold uppercase tracking-wider text-gray-700 dark:text-gray-300 mb-2">
                    {t.contact.serviceLabel}
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3.5 rounded-xl bg-white/5 dark:bg-black/30 border border-gray-300 dark:border-white/10 text-gray-900 dark:text-white focus:outline-none focus:border-gold-400 focus:ring-1 focus:ring-gold-400 transition-all text-sm [&>option]:bg-dark-card [&>option]:text-white"
                  >
                    <option value="" disabled>{t.contact.servicePlaceholder}</option>
                    {t.services.items.map((srv) => (
                      <option key={srv.id} value={srv.title}>
                        {srv.title} ({srv.price})
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-gray-700 dark:text-gray-300 mb-2">
                  {t.contact.messageLabel}
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={t.contact.messagePlaceholder}
                  className="w-full px-4 py-3.5 rounded-xl bg-white/5 dark:bg-black/30 border border-gray-300 dark:border-white/10 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-500 focus:outline-none focus:border-gold-400 focus:ring-1 focus:ring-gold-400 transition-all text-sm resize-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-2xl bg-gradient-to-r from-[#25D366] to-[#20bd5a] hover:from-[#20bd5a] hover:to-[#1ca84f] text-white font-bold text-base tracking-wide uppercase shadow-2xl hover:shadow-glow transition-all duration-300 flex items-center justify-center gap-3 transform hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-70"
              >
                <MessageCircle className="w-6 h-6 fill-current" />
                <span>{isSubmitting ? t.contact.submitting : t.contact.submitBtn}</span>
              </button>
            </form>
          </motion.div>

          {/* Right Column: Info & Perks */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="p-8 rounded-[2.5rem] glass-card border border-white/10 space-y-8">
              <h3 className="font-serif text-2xl font-bold text-gray-900 dark:text-white border-b border-gray-200 dark:border-white/10 pb-4">
                {t.contact.infoTitle}
              </h3>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center text-gold-400 shrink-0 mt-1">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-1">
                    {t.contact.addressLabel}
                  </h4>
                  <p className="text-sm font-semibold text-gray-900 dark:text-white leading-relaxed">
                    {t.contact.addressValue}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center text-gold-400 shrink-0 mt-1">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-1">
                    {t.contact.phoneInfoLabel}
                  </h4>
                  <a
                    href="tel:+995500880990"
                    className="text-sm font-semibold text-gray-900 dark:text-white hover:text-gold-400 transition-colors block"
                  >
                    +995 500 880 990
                  </a>
                  <a
                    href="tel:+995579288080"
                    className="text-xs text-gray-500 dark:text-gray-400 hover:text-gold-400 transition-colors block mt-0.5"
                  >
                    +995 579 28 80 80
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center text-gold-400 shrink-0 mt-1">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-1">
                    {t.contact.hoursLabel}
                  </h4>
                  <p className="text-sm font-semibold text-gray-900 dark:text-white">
                    {t.contact.hoursValue}
                  </p>
                </div>
              </div>
            </div>

            {/* VIP Perks Card */}
            <div className="p-8 rounded-[2.5rem] bg-gradient-to-br from-gold-500/20 via-gold-500/5 to-transparent border border-gold-500/30 text-center space-y-3">
              <span className="inline-block px-3 py-1 rounded-full bg-gold-500 text-black text-[11px] font-bold uppercase tracking-wider">
                VIP Guarantee
              </span>
              <h4 className="font-serif text-xl font-bold text-gray-900 dark:text-white">
                უფასო ყავა & Prosecco ყოველ ვიზიტზე 🥂
              </h4>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                ჩვენ ვზრუნავთ არა მხოლოდ თქვენს სილამაზეზე, არამედ თქვენს განწყობაზეც.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
