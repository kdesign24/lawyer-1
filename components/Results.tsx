
import React from 'react';

const results = [
  {
    category: "Slip and Fall Accidents",
    title: "Eight Figure Settlement",
    description: "This case settled at the beginning of the trial for $20,100,000 and a structure was used that will pay the Plaintiffs over $125,000,000 in their lifetime."
  },
  {
    category: "Medical Malpractice",
    title: "High Seven Figure Settlement",
    description: "On behalf of a woman who developed a subarachnoid hemorrhage that was not timely treated and who now requires 24/7 round-the-clock care."
  },
  {
    category: "Auto Accidents",
    title: "$6,000,000",
    description: "Obtained for a quadriplegic injured in a motor vehicle accident."
  }
];

const Results: React.FC = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-3xl md:text-4xl font-serif text-gray-800 mb-16">Successful Cases</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {results.map((item, idx) => (
            <div key={idx} className="bg-white p-10 shadow-sm border border-gray-100 flex flex-col items-center text-center">
              <p className="text-legal-blue font-bold uppercase tracking-widest text-sm mb-6">{item.category}</p>
              <h3 className="text-2xl md:text-3xl font-serif text-gray-800 mb-6 font-bold leading-tight">{item.title}</h3>
              <p className="text-gray-600 mb-8 flex-grow">{item.description}</p>
              <button className="bg-legal-gold text-black text-xs font-bold py-3 px-6 uppercase tracking-wider hover:shadow-lg transition-all">
                See More Successful Cases
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Results;
