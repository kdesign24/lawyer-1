
import React from 'react';

const BlogPage: React.FC = () => {
  const posts = [
    { title: "Understanding Negligence", date: "Oct 12, 2024", cat: "Injury Law", img: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=800" },
    { title: "Witness Statements Importance", date: "Sep 28, 2024", cat: "Litigation", img: "https://images.unsplash.com/photo-1589994160839-163cd2b5efc1?auto=format&fit=crop&q=80&w=800" },
    { title: "Government Entity Claims", date: "Sep 15, 2024", cat: "Legal Advice", img: "https://images.unsplash.com/photo-1521791136064-7986c2959663?auto=format&fit=crop&q=80&w=800" },
    { title: "Post-Accident Checklist", date: "Aug 30, 2024", cat: "Auto Safety", img: "https://images.unsplash.com/photo-1594913366159-1832ff18a7d7?auto=format&fit=crop&q=80&w=800" },
    { title: "Malpractice Statutes", date: "Aug 12, 2024", cat: "Malpractice", img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800" },
    { title: "Wrongful Death Damages", date: "Jul 25, 2024", cat: "Family Rights", img: "https://images.unsplash.com/photo-1523292562811-8fa7962a78c8?auto=format&fit=crop&q=80&w=800" }
  ];

  return (
    <div className="animate-fadeIn">
       <div className="relative bg-legal-blue text-white py-32 text-center overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=2000')" }} />
        <div className="relative z-10">
          <h1 className="text-5xl md:text-6xl font-serif mb-4">Legal Insights & News</h1>
          <p className="text-legal-gold uppercase tracking-[0.3em] font-bold text-sm">Empowering our community with knowledge</p>
        </div>
      </div>
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {posts.map((post, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="aspect-video bg-gray-200 mb-6 overflow-hidden rounded-sm shadow-md">
                  <img src={post.img} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt={post.title} />
                </div>
                <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-legal-blue mb-4">
                  <span className="bg-gray-100 px-2 py-1">{post.cat}</span>
                  <span className="text-gray-400">{post.date}</span>
                </div>
                <h3 className="text-2xl font-serif font-bold group-hover:text-legal-blue transition-colors mb-4 leading-tight">{post.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">Expert analysis and essential information regarding your rights in {post.cat.toLowerCase()} cases.</p>
                <button className="text-legal-blue font-bold uppercase text-xs tracking-[0.2em] border-b-2 border-legal-gold pb-1 hover:border-legal-blue transition-all">Read Full Article</button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
