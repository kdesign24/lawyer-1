
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-[500px] md:h-[700px] overflow-hidden bg-legal-blue text-white flex items-center justify-center">
      {/* Background Image - Professional Law Building */}
      <div 
        className="absolute inset-0 z-0 opacity-50 bg-cover bg-center transition-transform duration-[10000ms] hover:scale-105"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2070')` }}
      />
      
      {/* Overlay Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h4 className="text-legal-gold font-bold uppercase tracking-[0.3em] mb-4 text-sm animate-pulse">Justice For The Injured</h4>
        <h1 className="text-4xl md:text-7xl font-serif mb-6 leading-tight">
          Experienced Personal Injury Attorneys
        </h1>
        <p className="text-xl md:text-2xl font-light italic mb-10 opacity-90 max-w-2xl mx-auto">
          Serving Maryland, Washington D.C. & Virginia with nearly 100 years of combined experience.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-legal-gold text-black font-bold py-4 px-10 rounded shadow-lg hover:bg-yellow-400 transition-all uppercase tracking-wider text-sm transform hover:-translate-y-1">
            Start Your Free Consultation
          </button>
          <button className="bg-transparent border-2 border-white text-white font-bold py-4 px-10 rounded hover:bg-white hover:text-legal-blue transition-all uppercase tracking-wider text-sm">
            View Success Stories
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
