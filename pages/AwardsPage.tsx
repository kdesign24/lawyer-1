
import React from 'react';
import Awards from '../components/Awards';

const AwardsPage: React.FC = () => {
  return (
    <div className="animate-fadeIn">
      {/* Awards Hero */}
      <section className="relative h-[400px] flex items-center justify-center text-white overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=2000')` }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4">Awards & Recognitions</h1>
          <p className="text-xl md:text-2xl italic opacity-90">Recognized Nationally for Legal Excellence & Client Advocacy</p>
        </div>
      </section>

      {/* Main Awards Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif text-legal-blue mb-6">Our Commitment to Excellence</h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              The attorneys at McCarthy, Winkelman & Mester, L.L.P. are honored to be recognized by the most prestigious organizations in the legal field. These accolades reflect our tireless dedication to our clients and our consistent record of success in complex personal injury litigation.
            </p>
          </div>
          
          <Awards />

          <div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="p-8 bg-gray-50 border-t-4 border-legal-gold shadow-sm">
              <h3 className="text-xl font-serif font-bold text-legal-blue mb-4">Peer Reviewed Excellence</h3>
              <p className="text-gray-600">
                Many of our honors come from peer reviews, where fellow attorneys and judges acknowledge our legal ability and ethical standards. Being recognized by our colleagues is a testament to the quality of representation we provide.
              </p>
            </div>
            <div className="p-8 bg-gray-50 border-t-4 border-legal-gold shadow-sm">
              <h3 className="text-xl font-serif font-bold text-legal-blue mb-4">Client-First Mentality</h3>
              <p className="text-gray-600">
                While we appreciate professional awards, our greatest honor is the feedback we receive from our clients. Every award represents a life we've helped rebuild after a devastating accident or medical error.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-legal-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-serif mb-8">Work with a Highly Awarded Legal Team</h2>
          <p className="text-xl opacity-80 mb-10 max-w-2xl mx-auto">Experience matters. Put our recognized expertise to work for your case.</p>
          <button className="bg-legal-gold text-black font-bold py-4 px-10 uppercase tracking-widest text-sm hover:bg-yellow-400 transition-all">
            Start Your Free Consultation
          </button>
        </div>
      </section>
    </div>
  );
};

export default AwardsPage;
