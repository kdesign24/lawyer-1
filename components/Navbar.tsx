
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronRight } from 'lucide-react';
import { siteConfig } from '../data/siteData';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeSubMenu, setActiveSubMenu] = useState<string | null>(null);

  const dropdownBg = "bg-[#4a7c7a]";
  const itemStyle = "block px-4 py-3 text-white font-bold hover:bg-[#3d6664] transition-colors border-b border-black/10 last:border-0 whitespace-nowrap text-[13px] uppercase tracking-tighter";

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      {/* Top bar with Consultation info */}
      <div className="bg-gray-100 py-1 border-b hidden md:block">
        <div className="container mx-auto flex justify-end items-center px-4 space-x-4">
          <div className="flex items-center gap-0">
            <span className="bg-legal-gold px-4 py-2 text-black cursor-pointer hover:bg-yellow-400 transition-colors font-bold text-xs uppercase tracking-widest">
              FREE CONSULTATION
            </span>
            <span className="flex items-center gap-1 font-bold text-lg text-black ml-4">
              301-756-5336
            </span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="w-12 h-12 bg-legal-blue flex items-center justify-center text-white text-3xl font-serif">
              M
            </div>
            <div className="leading-tight">
              <h1 className="text-xl font-serif text-gray-800 tracking-tight font-bold">
                McCarthy, Winkelman<br />& Mester, LLP
              </h1>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-6 text-[14px] font-bold text-legal-blue tracking-tight">
            {siteConfig.navigation.map((navItem, nIdx) => (
              <div 
                key={nIdx}
                className="relative group py-2"
                onMouseEnter={() => setActiveDropdown(navItem.name)}
                onMouseLeave={() => {
                  setActiveDropdown(null);
                  setActiveSubMenu(null);
                }}
              >
                <Link to={`/${navItem.slug}`} className="hover:text-cyan-700 transition-colors cursor-pointer pb-2 flex items-center gap-1 uppercase tracking-tight">
                  {navItem.name}
                </Link>

                {navItem.subItems && activeDropdown === navItem.name && (
                  <div className={`absolute top-full left-0 w-64 ${dropdownBg} shadow-xl z-50 animate-fadeInShort`}>
                    {navItem.subItems.map((sub, sIdx) => (
                      <div 
                        key={sIdx} 
                        className="relative group/item"
                        onMouseEnter={() => sub.children ? setActiveSubMenu(sub.name) : setActiveSubMenu(null)}
                      >
                        <Link to={`/${sub.slug}`} className={`${itemStyle} flex justify-between items-center`}>
                          {sub.name}
                          {sub.children && <ChevronRight size={14} />}
                        </Link>
                        
                        {/* Nested Sub-Menu */}
                        {sub.children && activeSubMenu === sub.name && (
                          <div className={`absolute top-0 left-full w-64 ${dropdownBg} shadow-xl animate-fadeInShort ml-[1px]`}>
                            {sub.children.map((child, cIdx) => (
                              <Link key={cIdx} to={`/${sub.slug}/${child.toLowerCase().replace(/ /g, '-')}`} className={itemStyle}>
                                {child}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Toggle */}
          <button className="lg:hidden p-2 text-legal-blue" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t absolute top-full left-0 w-full shadow-2xl overflow-y-auto max-h-[80vh]">
          <div className="flex flex-col p-4 space-y-4 font-bold text-legal-blue">
            {siteConfig.navigation.map((nav, i) => (
              <Link key={i} to={`/${nav.slug}`} onClick={() => setIsOpen(false)}>{nav.name}</Link>
            ))}
            <div className="bg-legal-gold p-4 text-center text-black font-bold rounded">
              CALL: 301-756-5336
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
