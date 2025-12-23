
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  const socialLinks = [
    { icon: <Facebook size={18} />, url: "#", name: "Facebook" },
    { icon: <Twitter size={18} />, url: "#", name: "Twitter" },
    { icon: <Linkedin size={18} />, url: "#", name: "LinkedIn" },
    { icon: <Instagram size={18} />, url: "#", name: "Instagram" }
  ];

  return (
    <footer className="bg-gray-900 text-gray-400 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-legal-blue flex items-center justify-center text-white text-2xl font-serif">M</div>
              <h2 className="text-xl font-serif text-white tracking-tight">McCarthy, Winkelman & Mester, LLP</h2>
            </div>
            <p className="max-w-md leading-relaxed mb-8">
              For decades, our firm has provided compassionate yet aggressive legal representation for those injured due to negligence. We stand by our clients in Maryland, D.C., and Virginia.
            </p>
            {/* Social Media Icons Row */}
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a 
                  key={social.name}
                  href={social.url} 
                  className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:bg-legal-gold hover:text-black hover:border-legal-gold transition-all duration-300"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link to="/" className="hover:text-legal-gold transition-colors">Home</Link></li>
              <li><Link to="/practice-areas" className="hover:text-legal-gold transition-colors">Practice Areas</Link></li>
              <li><Link to="/results" className="hover:text-legal-gold transition-colors">Successful Results</Link></li>
              <li><Link to="/blogs" className="hover:text-legal-gold transition-colors">Legal Blog</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-6">Contact Us</h4>
            <ul className="space-y-4 text-sm">
              <li>Prince George's County Office</li>
              <li className="font-bold text-white">Phone: 301-756-5336</li>
              <li>Fax: 301-756-5337</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs uppercase tracking-widest font-semibold">
          <p>© 2024 McCarthy, Winkelman & Mester, L.L.P. All Rights Reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Disclaimer</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
