
import React from 'react';

const Awards: React.FC = () => {
  // Using high-quality representative logos for legal awards and recognitions.
  // These are common badges used by top-tier law firms.
  const logos = [
    { 
      name: 'Super Lawyers', 
      url: 'https://cdn.superlawyers.com/images/badges/sl-badge-gold.png' 
    },
    { 
      name: 'Best Lawyers 2024', 
      url: 'https://www.bestlawyers.com/Content/img/badges/2024/BL-Badge-2024.png' 
    },
    { 
      name: 'Martindale Hubbell AV Preeminent', 
      url: 'https://www.martindale.com/markasimage.php?id=2100145&size=7' 
    },
    { 
      name: 'Million Dollar Advocates Forum', 
      url: 'https://www.milliondollaradvocates.com/images/mdaf-logo-new.png' 
    },
    { 
      name: 'Avvo Rating 10.0 Superb', 
      url: 'https://www.avvo.com/assets/badges/rating_10_large-9e8c75069f9e9e7c5e5e7e9e8c75069f.png' 
    }
  ];

  return (
    <section className="py-16 bg-white border-b border-gray-100">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h3 className="text-gray-400 text-xs uppercase tracking-[0.4em] mb-4 font-bold">
            Nationally Recognized For Excellence
          </h3>
          <div className="h-px w-20 bg-legal-gold mx-auto opacity-50"></div>
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24">
          {logos.map((logo, idx) => (
            <div key={idx} className="group relative flex flex-col items-center">
              <div className="relative">
                <img 
                  src={logo.url} 
                  alt={logo.name} 
                  className="h-20 md:h-24 w-auto object-contain transition-all duration-700 filter group-hover:brightness-110 grayscale group-hover:grayscale-0 group-hover:scale-110" 
                  onError={(e) => {
                    // If the external image link fails, we use a professional gold seal fallback
                    const target = e.target as HTMLImageElement;
                    target.src = "https://images.unsplash.com/photo-1578574577315-3fbeb0cecdc2?auto=format&fit=crop&q=80&w=200&h=200";
                    target.className = "h-20 w-20 rounded-full object-cover border-4 border-legal-gold grayscale group-hover:grayscale-0";
                  }}
                />
                {/* Subtle Glow Effect on Hover */}
                <div className="absolute inset-0 bg-legal-gold/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
              </div>
              
              {/* Tooltip for Award Name */}
              <span className="absolute -bottom-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-[10px] font-bold text-legal-blue uppercase tracking-widest whitespace-nowrap bg-gray-50 px-2 py-1 rounded shadow-sm">
                {logo.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Awards;
