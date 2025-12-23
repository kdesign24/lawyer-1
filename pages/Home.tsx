
import React from 'react';
import Hero from '../components/Hero';
import Awards from '../components/Awards';
import PracticeAreas from '../components/PracticeAreas';
import Team from '../components/Team';
import Results from '../components/Results';
import Testimonials from '../components/Testimonials';
import ContactForm from '../components/ContactForm';
import { Play } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="animate-fadeIn">
      <Hero />
      <Awards />
      
      {/* Intro Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <span className="text-legal-blue font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Maryland & D.C. Area</span>
              <h2 className="text-3xl md:text-5xl font-serif text-gray-800 mb-8 leading-tight">Championing the Rights of the Injured</h2>
              <p className="text-gray-700 leading-relaxed mb-8 text-lg">
                The attorneys at McCarthy, Winkelman & Mester, L.L.P. focus on litigation that seeks just and fair compensation for victims of another party's negligence. Whether it's a complex medical malpractice suit or a serious auto accident, our firm has the resources to fight for you.
              </p>
              <button className="bg-legal-gold text-black font-bold py-4 px-10 uppercase tracking-widest text-sm hover:shadow-xl transition-all">
                Learn About Our Firm
              </button>
            </div>
            <div className="lg:w-1/2 relative group cursor-pointer overflow-hidden rounded-lg shadow-2xl">
              <img src="https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&q=80&w=1000" alt="Law Library" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/50 transition-all">
                <div className="w-20 h-20 bg-legal-gold rounded-full flex items-center justify-center shadow-2xl">
                  <Play className="text-black fill-black ml-1" size={32} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specific Practice Detail - Auto Accident Image */}
      <section className="bg-legal-blue text-white py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row-reverse gap-16 items-center">
            <div className="lg:w-1/2">
               <h4 className="text-legal-gold font-bold uppercase tracking-widest text-sm mb-4">Practice Focus</h4>
               <h2 className="text-3xl md:text-5xl font-serif mb-8 leading-tight">Auto & Truck Accidents</h2>
               <p className="mb-10 text-gray-300 text-lg leading-relaxed">
                 Auto accidents are incredibly common in Maryland, but their impact can be life-altering. We represent victims of drunk driving, trucking negligence, and pedestrian accidents with aggressive advocacy.
               </p>
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                 {["Car Accidents", "Truck Negligence", "Motorcycle Claims", "Pedestrian Rights"].map(item => (
                   <div key={item} className="flex items-center gap-3 bg-white/5 p-4 border border-white/10 hover:bg-white/10 transition-colors cursor-pointer">
                     <div className="w-2 h-2 bg-legal-gold rounded-full"></div>
                     <span className="text-sm font-bold uppercase tracking-widest">{item}</span>
                   </div>
                 ))}
               </div>
            </div>
            <div className="lg:w-1/2">
              <img src="https://images.unsplash.com/photo-1594913366159-1832ff18a7d7?auto=format&fit=crop&q=80&w=1000" className="w-full rounded-lg shadow-2xl grayscale hover:grayscale-0 transition-all duration-700" alt="Car Accident Scene" />
            </div>
          </div>
        </div>
      </section>

      <PracticeAreas />
      <Team />
      <Results />
      
      {/* Blog Section with Contextual Images */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h4 className="text-legal-blue font-bold uppercase tracking-widest text-sm mb-2">Legal Insights</h4>
              <h2 className="text-3xl md:text-4xl font-serif">Recent News & Articles</h2>
            </div>
            <button className="hidden md:block text-legal-blue font-bold uppercase text-xs tracking-widest border-b-2 border-legal-gold pb-1">View All Blogs</button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { 
                title: "How to Prove Negligence in Maryland", 
                img: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=600",
                excerpt: "Proving negligence is the cornerstone of any personal injury claim. Learn the four key elements required." 
              },
              { 
                title: "Lost Earnings After An Accident", 
                img: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=600",
                excerpt: "Recovering financially involves more than just medical bills. Don't overlook your lost earning capacity." 
              },
              { 
                title: "Who is Liable for Falling Ice?", 
                img: "https://images.unsplash.com/photo-1516939884455-1445c8652f83?auto=format&fit=crop&q=80&w=600",
                excerpt: "Winter hazards in Maryland can lead to serious injuries. Discover who is held responsible in premises liability." 
              }
            ].map((post, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="h-64 overflow-hidden mb-6 rounded-sm shadow-md">
                   <img src={post.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={post.title} />
                </div>
                <h3 className="text-xl font-bold mb-4 group-hover:text-legal-blue transition-colors leading-tight">{post.title}</h3>
                <p className="text-gray-600 text-sm mb-6 leading-relaxed">{post.excerpt}</p>
                <span className="text-legal-blue font-bold uppercase text-xs tracking-widest group-hover:ml-2 transition-all">Read More →</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />
      <ContactForm />
    </div>
  );
};

export default Home;
