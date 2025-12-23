
import React, { useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { siteConfig } from '../data/siteData';
import Sidebar from '../components/Sidebar';
import ContactForm from '../components/ContactForm';

const DynamicPage: React.FC = () => {
  const location = useLocation();
  
  // Clean up the pathname to get the correct slug key
  // e.g., /practice/bus-accidents -> practice/bus-accidents
  let slug = location.pathname.startsWith('/') 
    ? location.pathname.substring(1) 
    : location.pathname;
    
  // Default to our-firm if empty
  if (!slug || slug === "") slug = "our-firm";
  
  const pageData = siteConfig.pages[slug as keyof typeof siteConfig.pages];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  if (!pageData) {
    return (
      <div className="py-40 text-center animate-fadeIn">
        <h1 className="text-4xl font-serif text-legal-blue mb-4">Under Construction</h1>
        <p className="text-gray-500 max-w-md mx-auto">
          Detailed information about <strong>{slug}</strong> is currently being prepared. 
          Please check back soon or visit our <a href="/" className="text-cyan-700 underline font-bold">home page</a>.
        </p>
      </div>
    );
  }

  return (
    <div className="animate-fadeIn">
      {/* Dynamic Hero Section */}
      <section className="relative h-[450px] flex items-center justify-center text-white overflow-hidden shadow-inner">
        <div 
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{ backgroundImage: `url('${pageData.heroImage}')` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/60"></div>
        </div>
        <div className="relative z-10 text-center px-4 max-w-5xl">
          <h1 className="text-4xl md:text-7xl font-serif font-bold mb-6 drop-shadow-2xl">{pageData.title}</h1>
          <p className="text-xl md:text-3xl italic opacity-95 font-light tracking-wide">{pageData.subtitle}</p>
          <div className="mt-10">
            <button className="bg-legal-gold text-black font-bold py-4 px-10 uppercase tracking-[0.2em] text-sm hover:bg-yellow-400 transition-all shadow-xl transform hover:-translate-y-1">
              Start Your Free Consultation
            </button>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-16 xl:gap-24">
            
            {/* Left Content Column */}
            <div className={`w-full ${pageData.showSidebar ? 'lg:w-2/3' : 'lg:w-full'}`}>
              <div 
                className="prose prose-lg max-w-none text-gray-700 leading-[1.8] space-y-6 
                  prose-headings:font-serif prose-headings:text-legal-blue 
                  prose-p:text-gray-600 prose-li:text-gray-600
                  prose-strong:text-legal-blue prose-strong:font-bold"
                dangerouslySetInnerHTML={{ __html: pageData.content }}
              />
              
              {/* Call to Action Box - Screenshot Style */}
              <div className="mt-20 p-8 md:p-12 bg-[#ebf2f2] border-l-[10px] border-legal-gold shadow-md flex flex-col md:flex-row justify-between items-center gap-8 relative overflow-hidden group">
                <div className="absolute right-0 top-0 opacity-5 -translate-y-4 translate-x-4 pointer-events-none">
                   <div className="w-32 h-32 bg-legal-blue flex items-center justify-center text-white text-9xl font-serif">M</div>
                </div>
                <div className="flex-1 relative z-10">
                  <h3 className="text-2xl md:text-3xl font-serif font-bold text-legal-blue mb-3">Contact a {pageData.title}</h3>
                  <p className="text-gray-600 font-medium">If you've been wrongfully injured and need a competent legal advocate on your side, look no further. Contact McCarthy, Winkelman & Mester, L.L.P. today.</p>
                </div>
                <button className="relative z-10 whitespace-nowrap bg-legal-gold text-black font-bold py-5 px-10 uppercase tracking-[0.2em] text-xs hover:bg-yellow-400 transition-all shadow-lg transform hover:scale-105 active:scale-95">
                  Free Consultation
                </button>
              </div>
            </div>

            {/* Sidebar Column */}
            {pageData.showSidebar && (
              <div className="w-full lg:w-1/3">
                <div className="sticky top-28">
                  <Sidebar />
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Contextual Blogs Feed */}
      <section className="py-24 bg-gray-50 border-t border-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif text-gray-400 uppercase tracking-[0.3em]">Blogs</h2>
            <div className="h-1 w-20 bg-legal-gold mx-auto mt-4"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { 
                title: "How Do I Prove an Injury Was Caused by Negligence in Maryland?", 
                img: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=600",
                desc: "If you've been injured due to another party's carelessness, understanding how to prove their negligence is crucial."
              },
              { 
                title: "How Do I Prove Lost Earning Capacity After An Accident in Maryland?", 
                img: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=600",
                desc: "If you've suffered an injury that has impacted your ability to work, understanding how to prove lost earning capacity is crucial."
              },
              { 
                title: "Who is Liable if I Was Hit by Falling Ice or Snow in Maryland?", 
                img: "https://images.unsplash.com/photo-1516939884455-1445c8652f83?auto=format&fit=crop&q=80&w=600",
                desc: "Injured by falling ice or snow in MD? Discover your legal options and whether you can sue for damages in this blog post."
              }
            ].map((blog, i) => (
              <div key={i} className="bg-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
                <div className="h-56 overflow-hidden relative">
                  <img src={blog.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={blog.title} />
                  <div className="absolute top-4 left-4 bg-red-600 text-white p-2 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="font-bold text-legal-blue text-xl mb-6 min-h-[4rem] leading-tight group-hover:text-cyan-700 transition-colors">{blog.title}</h3>
                  <p className="text-sm text-gray-500 mb-8 line-clamp-3 leading-relaxed">{blog.desc}</p>
                  <button className="w-full bg-legal-blue text-white py-4 text-xs font-bold uppercase tracking-[0.2em] hover:bg-black transition-all shadow-md">Read More</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactForm />

      {/* Map Footer Section */}
      <section className="h-[450px] w-full relative group">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3106.33157523293!2d-76.84360342340882!3d38.90373404554471!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7eb910a905a3f%3A0xc6c429671192e27b!2s4300%20Forbes%20Blvd%20%23205%2C%20Lanham%2C%20MD%2020706!5e0!3m2!1sen!2sus!4v1715456321945!5m2!1sen!2sus" 
          className="w-full h-full border-0 grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000" 
          allowFullScreen 
          loading="lazy"
        ></iframe>
        <div className="absolute top-1/2 right-10 md:right-20 lg:right-32 -translate-y-1/2 bg-white/95 p-10 shadow-2xl backdrop-blur-md hidden md:block w-[400px] border-t-8 border-legal-blue animate-fadeIn">
           <div className="flex items-center gap-4 mb-8">
             <div className="w-12 h-12 bg-legal-blue text-white flex items-center justify-center font-serif text-2xl shadow-lg">M</div>
             <div>
                <p className="font-bold text-legal-blue text-lg leading-tight">McCarthy, Winkelman<br/>& Mester, LLP</p>
             </div>
           </div>
           <div className="space-y-6">
             <div>
               <p className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 mb-2">Office Address</p>
               <p className="text-sm text-gray-700 font-medium leading-relaxed">4300 Forbes Boulevard, Suite 205<br/>Lanham, Maryland 20706-4314</p>
             </div>
             <div className="grid grid-cols-2 gap-4">
               <div>
                 <p className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 mb-2">Phone</p>
                 <p className="text-sm text-gray-800 font-bold">301-756-5336</p>
               </div>
               <div>
                 <p className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 mb-2">Fax</p>
                 <p className="text-sm text-gray-800 font-bold">301-262-0562</p>
               </div>
             </div>
             <div className="pt-4 flex gap-4 text-legal-blue">
                <a href="#" className="hover:scale-125 transition-transform"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg></a>
                <a href="#" className="hover:scale-125 transition-transform"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.84 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg></a>
             </div>
           </div>
        </div>
      </section>
    </div>
  );
};

export default DynamicPage;
