import React from 'react';
import { LanguageProvider } from './hooks/useLanguage';
import { ThemeProvider } from './hooks/useTheme';
import { Navbar } from './components/Navbar';
import { FloatingButtons } from './components/FloatingButtons';
import { Hero } from './sections/Hero';
import { Statistics } from './sections/Statistics';
import { Benefits } from './sections/Benefits';
import { Services } from './sections/Services';
import { WhyChooseUs } from './sections/WhyChooseUs';
import { HowItWorks } from './sections/HowItWorks';
import { Portfolio } from './sections/Portfolio';
import { Testimonials } from './sections/Testimonials';
import { FAQ } from './sections/FAQ';
import { ContactForm } from './sections/ContactForm';
import { Footer } from './sections/Footer';

export const App: React.FC = () => {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="min-h-screen flex flex-col relative overflow-x-hidden w-full max-w-full selection:bg-gold-500 selection:text-black">
          <Navbar />
          <main className="flex-1 w-full overflow-hidden">
            <Hero />
            <Statistics />
            <Benefits />
            <Services />
            <WhyChooseUs />
            <HowItWorks />
            <Portfolio />
            <Testimonials />
            <FAQ />
            <ContactForm />
          </main>
          <Footer />
          <FloatingButtons />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
};

export default App;
