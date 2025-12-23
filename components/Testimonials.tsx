
import React from 'react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    text: "Mike, I want you to know how very much I love to appreciate your professional guidance over the last 3 1/2 years. Your patience, perseverance, and intellectual fortitude have helped me through a very difficult time. I'm forever grateful.",
    author: "E.K."
  },
  {
    text: "Thank you so much for meeting with my husband and myself providing guidance to us that is extremely helpful. Your thoughts and insights make the process much less mysterious and stressful. My family and I sincerely appreciate you taking time out of your very busy day and your flexibility.",
    author: "D.O.H."
  },
  {
    text: "Wanted you to know I appreciated you taking the time to speak with me and recommending your friend for my brother to speak about his issue.",
    author: "N.W."
  },
  {
    text: "I would be remiss to not tell you what a pleasure it was to work with Mr. Winkelman. Several times over the past few months he took the time to call and speak to me, to consider my position and opinion, and discuss our options. Not only was he professional, but he was friendly and sincere.",
    author: "L.F."
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-3xl md:text-4xl font-serif text-gray-800 mb-16">Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((item, idx) => (
            <div key={idx} className="relative bg-legal-blue text-white p-12 rounded-lg shadow-xl">
              <Quote className="absolute top-6 left-6 opacity-10" size={60} />
              <p className="italic leading-relaxed mb-6 text-lg relative z-10">"{item.text}"</p>
              <p className="font-bold text-legal-gold tracking-widest">— {item.author}</p>
            </div>
          ))}
        </div>
        <div className="mt-16 text-center">
           <button className="bg-legal-blue text-white font-bold py-3 px-8 uppercase tracking-widest text-sm hover:bg-black transition-all">
            Read More Testimonials
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
