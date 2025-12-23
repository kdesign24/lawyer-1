
import React from 'react';
import { Car, HeartPulse, Dog, AlertTriangle, ShieldAlert, Crosshair, Construction, Stethoscope, Briefcase, PlusCircle } from 'lucide-react';

const areas = [
  { title: "Auto Accidents", icon: <Car size={32} /> },
  { title: "Medical Malpractice", icon: <HeartPulse size={32} /> },
  { title: "Dog Bites", icon: <Dog size={32} /> },
  { title: "Slip and Fall Accidents", icon: <AlertTriangle size={32} /> },
  { title: "Defective Products", icon: <ShieldAlert size={32} /> },
  { title: "Wrongful Death", icon: <PlusCircle size={32} /> },
  { title: "Construction Accidents", icon: <Construction size={32} /> },
  { title: "Nursing Home Neglect", icon: <Stethoscope size={32} /> },
  { title: "Work Injuries", icon: <Briefcase size={32} /> },
  { title: "Learn More", icon: <Crosshair size={32} /> }
];

const PracticeAreas: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif text-gray-800 mb-6">Our Practice Areas</h2>
          <p className="text-gray-600 leading-relaxed">
            As seasoned litigation attorneys, the partners of McCarthy, Winkelman & Mester, L.L.P. have spent years balancing the proverbial scales of justice, and have certainly represented their share of Davids against Goliath-sized opponents, compensating for the disparate quantity of resources with quality.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {areas.map((area, idx) => (
            <div 
              key={idx} 
              className="group bg-legal-blue text-white p-8 flex flex-col items-center justify-center text-center transition-all duration-300 hover:bg-legal-gold hover:text-black cursor-pointer shadow-md transform hover:-translate-y-2"
            >
              <div className="mb-4 opacity-80 group-hover:opacity-100">{area.icon}</div>
              <h3 className="text-sm font-bold uppercase tracking-wide leading-tight">{area.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PracticeAreas;
