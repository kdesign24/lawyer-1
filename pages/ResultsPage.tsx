
import React from 'react';
import Results from '../components/Results';

const ResultsPage: React.FC = () => {
  return (
    <div className="animate-fadeIn">
      <div className="bg-legal-blue text-white py-32 text-center">
        <h1 className="text-5xl font-serif mb-4">Successful Case Results</h1>
        <p className="text-legal-gold uppercase tracking-widest font-bold">Over $1 Billion Recovered for our Clients</p>
      </div>
      <Results />
      <div className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="bg-white p-12 shadow-xl border-l-8 border-legal-gold max-w-5xl mx-auto">
            <h3 className="text-2xl font-serif mb-6 italic">"We treat every case with the meticulous preparation required for trial, ensuring our clients receive maximum compensation."</h3>
            <p className="text-gray-800 font-bold uppercase tracking-widest">— Kevin J. McCarthy</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultsPage;
