
import React from 'react';
import PracticeAreas from '../components/PracticeAreas';

const PracticeAreasPage: React.FC = () => {
  return (
    <div className="animate-fadeIn">
      <div className="relative bg-legal-blue text-white py-32 text-center overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=2000')" }} />
        <div className="relative z-10">
          <h1 className="text-5xl md:text-6xl font-serif mb-4">Our Practice Areas</h1>
          <p className="text-legal-gold uppercase tracking-[0.3em] font-bold text-sm">Expertise built on decades of trial success</p>
        </div>
      </div>
      <PracticeAreas />
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="md:w-1/2">
               <img src="https://images.unsplash.com/photo-1521791136064-7986c2959663?auto=format&fit=crop&q=80&w=1000" alt="Consultation" className="rounded shadow-2xl" />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-serif mb-8">Ready to discuss your case?</h2>
              <p className="text-gray-600 mb-10 text-lg">No matter the size of the opponent, we are prepared to fight for the justice you deserve. We take cases to the highest courts if necessary.</p>
              <button className="bg-legal-gold text-black font-bold py-4 px-12 uppercase tracking-widest hover:bg-yellow-400 transition-all shadow-lg text-sm">
                Schedule Free Evaluation
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PracticeAreasPage;
