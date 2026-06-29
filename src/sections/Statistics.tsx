import React from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { motion } from 'framer-motion';
import { Users, Award, Sparkles, HeartHandshake } from 'lucide-react';

export const Statistics: React.FC = () => {
  const { t } = useLanguage();

  const stats = [
    {
      icon: Users,
      value: t.stats.happyClients,
      label: t.stats.happyClientsDesc,
    },
    {
      icon: Award,
      value: t.stats.experience,
      label: t.stats.experienceDesc,
    },
    {
      icon: Sparkles,
      value: t.stats.masters,
      label: t.stats.mastersDesc,
    },
    {
      icon: HeartHandshake,
      value: t.stats.satisfaction,
      label: t.stats.satisfactionDesc,
    },
  ];

  return (
    <section className="py-12 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 sm:p-8 rounded-3xl glass-card text-center group flex flex-col items-center justify-center relative overflow-hidden"
              >
                <div className="w-14 h-14 rounded-2xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center text-gold-400 mb-4 group-hover:scale-110 group-hover:bg-gold-500 group-hover:text-black transition-all duration-300">
                  <IconComponent className="w-7 h-7" />
                </div>
                <h3 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-1 text-gradient-gold">
                  {stat.value}
                </h3>
                <p className="text-xs sm:text-sm font-medium text-gray-600 dark:text-gray-400 uppercase tracking-wider">
                  {stat.label}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
