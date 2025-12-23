
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, PlayCircle, Phone, Mail, MessageSquare } from 'lucide-react';
import { siteConfig } from '../data/siteData';

const Sidebar: React.FC = () => {
  const location = useLocation();
  const [expanded, setExpanded] = useState<string | null>("Auto Accidents");

  const practiceMenu = siteConfig.navigation.find(n => n.name === "Practice Areas")?.subItems || [];

  return (
    <aside className="w-full lg:w-80 flex flex-col gap-8">
      {/* Video Block */}
      <div className="relative group cursor-pointer overflow-hidden rounded shadow-lg aspect-video bg-legal-blue flex items-center justify-center">
        <img src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=400" className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform" alt="Video Thumb" />
        <div className="relative z-10 text-center px-4">
          <PlayCircle size={48} className="text-white mx-auto mb-2 opacity-80 group-hover:opacity-100" />
          <p className="text-white font-serif text-sm font-bold">McCarthy, Winkelman & Mester Overview</p>
        </div>
      </div>

      {/* Practice Areas List */}
      <div className="bg-[#4a7c7a] shadow-xl overflow-hidden">
        <div className="p-4 bg-white border-b border-gray-100">
          <h3 className="text-legal-blue font-serif text-xl font-bold text-center">Our Practice Areas</h3>
        </div>
        <div className="flex flex-col">
          {practiceMenu.map((item, idx) => (
            <div key={idx} className="border-b border-black/10 last:border-0">
              <div 
                className={`flex justify-between items-center px-4 py-3 cursor-pointer hover:bg-[#3d6664] transition-colors ${location.pathname.includes(item.slug) ? 'bg-[#3d6664]' : ''}`}
                onClick={() => setExpanded(expanded === item.name ? null : item.name)}
              >
                <Link to={`/${item.slug}`} className="text-white font-bold text-sm uppercase tracking-tight">{item.name}</Link>
                {item.children && <ChevronRight size={16} className={`text-white transition-transform ${expanded === item.name ? 'rotate-90' : ''}`} />}
              </div>
              
              {/* Children (Nested) */}
              {item.children && expanded === item.name && (
                <div className="bg-[#5c8d8a]">
                  {item.children.map((child, cIdx) => (
                    <Link 
                      key={cIdx} 
                      to={`/${item.slug}/${child.toLowerCase().replace(/ /g, '-')}`}
                      className="block px-8 py-2 text-white text-sm font-semibold hover:bg-[#4a7c7a] border-b border-black/5 last:border-0"
                    >
                      {child}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="bg-[#fde68a] p-1 flex flex-col gap-1 shadow-md">
        <div className="bg-[#fde68a] text-center py-2 font-bold text-legal-blue uppercase text-xs tracking-widest border-b border-yellow-600/20">
          Free Consultation
        </div>
        <button className="bg-white hover:bg-gray-50 py-3 flex items-center justify-center gap-2 text-legal-blue font-bold text-sm transition-colors border-b border-gray-100">
          <Phone size={16} /> Call Us
        </button>
        <button className="bg-white hover:bg-gray-50 py-3 flex items-center justify-center gap-2 text-legal-blue font-bold text-sm transition-colors border-b border-gray-100">
          <Mail size={16} /> Email Us
        </button>
        <button className="bg-white hover:bg-gray-50 py-3 flex items-center justify-center gap-2 text-legal-blue font-bold text-sm transition-colors">
          <MessageSquare size={16} /> Chat Now
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
