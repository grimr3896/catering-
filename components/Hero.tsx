
import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToBooking = () => {
    const element = document.getElementById('booking');
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image - Focus on the Art of Catering */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&q=80&w=2000" 
          alt="Exquisite Catering Display"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 hero-gradient"></div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-5xl">
        <span className="inline-block text-amber-400 font-medium tracking-[0.4em] uppercase mb-6 animate-in fade-in slide-in-from-bottom duration-700">
          Premier Catering Services
        </span>
        <h1 className="text-5xl md:text-8xl text-white font-bold leading-[1.1] mb-8 serif italic">
          Extraordinary Taste <br />
          <span className="not-italic font-normal">Delivered Anywhere</span>
        </h1>
        <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-light leading-relaxed">
          Lumière provides bespoke catering solutions for the most discerning clients. From intimate private dinners to grand-scale corporate events, we bring the chef's table to you.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button 
            onClick={scrollToBooking}
            className="px-10 py-4 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-full transition-all transform hover:scale-105 active:scale-95 shadow-xl"
          >
            Request a Catering Quote
          </button>
          <button 
            onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-10 py-4 bg-white/10 hover:bg-white/20 text-white backdrop-blur-md font-semibold rounded-full border border-white/30 transition-all"
          >
            View Our Services
          </button>
        </div>
      </div>

      <button 
        onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 hover:text-white transition-colors animate-bounce"
      >
        <ChevronDown size={32} />
      </button>
    </div>
  );
};

export default Hero;
