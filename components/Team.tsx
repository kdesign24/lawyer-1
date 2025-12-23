
import React from 'react';

const teamMembers = [
  { name: "Kevin J. McCarthy", role: "Founding Partner", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400&h=500" },
  { name: "Michael J. Winkelman", role: "Partner", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400&h=500" },
  { name: "Christian C. Mester", role: "Partner", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400&h=500" },
  { name: "Courtney D. Thomas", role: "Associate", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400&h=500" }
];

const Team: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-16 items-center mb-20">
          <div className="lg:w-1/2">
            <h4 className="text-legal-gold font-bold uppercase tracking-widest text-sm mb-4 border-l-4 border-legal-gold pl-4">Meet Your Advocates</h4>
            <h2 className="text-3xl md:text-5xl font-serif text-gray-800 mb-6 leading-tight">
              McCarthy, Winkelman & Mester, L.L.P. is your number one advocate.
            </h2>
            <p className="text-gray-600 mb-8 text-lg leading-relaxed">
              We have nearly 100 combined years of legal experience, and we are ready to put that to work for you. We are active in the profession, respected by other attorneys and judges, and we belong to several reputable legal associations.
            </p>
            <div className="flex gap-4">
               <div className="text-center">
                 <p className="text-3xl font-serif font-bold text-legal-blue">100+</p>
                 <p className="text-xs uppercase font-bold text-gray-400">Years Exp.</p>
               </div>
               <div className="w-px h-10 bg-gray-200 self-center"></div>
               <div className="text-center">
                 <p className="text-3xl font-serif font-bold text-legal-blue">$1B+</p>
                 <p className="text-xs uppercase font-bold text-gray-400">Recovered</p>
               </div>
            </div>
          </div>
          <div className="lg:w-1/2">
             <img src="https://images.unsplash.com/photo-1556155092-490a1ba16284?auto=format&fit=crop&q=80&w=1000" alt="Group of attorneys meeting" className="rounded-sm shadow-2xl border-8 border-gray-50" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, idx) => (
            <div key={idx} className="group">
              <div className="relative mb-6 overflow-hidden rounded-sm aspect-[4/5] shadow-lg">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-legal-blue/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                   <p className="text-white text-xs font-bold tracking-widest uppercase">View Profile</p>
                </div>
              </div>
              <h3 className="text-xl font-serif font-bold text-gray-800 mb-1">{member.name}</h3>
              <p className="text-legal-blue font-semibold text-xs uppercase tracking-wider">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
