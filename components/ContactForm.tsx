
import React from 'react';

const ContactForm: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-legal-blue text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-legal-gold uppercase tracking-widest font-bold mb-2">Schedule your case evaluation.</p>
          <h2 className="text-4xl md:text-5xl font-serif mb-12">Contact Our Firm today.</h2>
          
          <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <label className="block text-xs uppercase tracking-wider font-bold mb-2">Name (required)</label>
                <input type="text" required className="w-full bg-white text-gray-900 p-4 border-none focus:ring-2 focus:ring-legal-gold outline-none" />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-wider font-bold mb-2">Email (required)</label>
                <input type="email" required className="w-full bg-white text-gray-900 p-4 border-none focus:ring-2 focus:ring-legal-gold outline-none" />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-wider font-bold mb-2">Phone (required)</label>
                <input type="tel" required className="w-full bg-white text-gray-900 p-4 border-none focus:ring-2 focus:ring-legal-gold outline-none" />
              </div>
            </div>
            
            <div className="flex flex-col">
              <label className="block text-xs uppercase tracking-wider font-bold mb-2">Message</label>
              <textarea rows={8} className="w-full bg-white text-gray-900 p-4 border-none focus:ring-2 focus:ring-legal-gold outline-none flex-grow" />
              <button type="submit" className="mt-6 bg-legal-gold text-black font-bold py-4 uppercase tracking-widest hover:bg-yellow-400 transition-colors">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
