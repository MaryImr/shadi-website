import { motion } from 'framer-motion';

const archiveMoments = [
  // Engagement
  { id: 1, title: "ODTU '23", event: "Once Upon A Time", url: new URL('../../assets/ArchiveAssets/engagement1.jpg', import.meta.url).href },
  { id: 2, title: "The Ring", event: "Engagement", url: new URL('../../assets/ArchiveAssets/engagement2.jpeg', import.meta.url).href },
  { id: 3, title: "Sweet Beginnings", event: "Engagement", url: new URL('../../assets/ArchiveAssets/engagement3.jpeg', import.meta.url).href },
  // Nikkah
  { id: 4, title: "The Signature", event: "Nikkah", url: new URL('../../assets/ArchiveAssets/nikkah1.jpg', import.meta.url).href },
  { id: 5, title: "The Qubool Hai", event: "Nikkah", url: new URL('../../assets/ArchiveAssets/nikkah2.jpg', import.meta.url).href },
  { id: 6, title: "First Walk", event: "Nikkah", url: new URL('../../assets/ArchiveAssets/nikkah3.jpg', import.meta.url).href },
  { id: 7, title: "Family Portraits", event: "Nikkah", url: new URL('../../assets/ArchiveAssets/nikkah4.png', import.meta.url).href },
];

const Archives = () => {
  return (
    <section id="archives" className="pt-12 pb-16 bg-[#F5F1E6] relative overflow-hidden">
      {/* Texture Overlay */}
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-shadi-gold font-bold uppercase tracking-[0.5em] text-[10px] mb-4"
          >
            The Journey So Far
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="font-serif text-5xl md:text-7xl text-shadi-emerald font-bold mb-2"
          >
            The Prequels
          </motion.h2>
          <p className="font-cursive text-2xl text-shadi-maroon mb-6 italic">From Engagement to Nikkah...</p>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "120px" }}
            className="h-[1px] bg-shadi-gold mx-auto"
          />
        </div>

        {/* Cinematic Gallery */}
        <div className="flex overflow-x-auto gap-8 pb-8 no-scrollbar snap-x pt-4">
          {archiveMoments.map((img) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -8 }}
              className="snap-center min-w-[280px] md:min-w-[350px] relative group"
            >
              {/* Image Container with Side-specific Border */}
              <div className={`p-2 rounded-t-lg shadow-2xl border-t border-x border-shadi-gold/30 ${img.event === 'Engagement' ? 'bg-shadi-maroon' : 'bg-shadi-emerald'}`}>
                <div className="aspect-[3/4] overflow-hidden relative rounded-sm">
                  <div className="absolute top-2 left-2 z-20 bg-shadi-gold text-shadi-maroon text-[8px] font-bold px-2 py-1 uppercase tracking-tighter shadow-md">
                    {img.event}
                  </div>
                  
                  <img 
                    src={img.url} 
                    alt={img.title} 
                    className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 transition-all duration-700"
                  />
                </div>
              </div>
              
              {/* The New Caption Box (No more solid yellow) */}
              <div className={`py-4 px-2 border-x border-b border-shadi-gold/30 shadow-xl rounded-b-lg ${img.event === 'Engagement' ? 'bg-shadi-maroon' : 'bg-shadi-emerald'}`}>
                <p className="font-serif text-lg text-shadi-gold text-center tracking-widest uppercase font-light leading-none">
                  {img.title}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* The Action Button */}
        <div className="mt-8 text-center">
          <motion.a
            href="https://nikkah-invitation-rose.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-3 bg-shadi-emerald text-shadi-gold border border-shadi-gold/50 font-bold uppercase tracking-widest text-[10px] rounded-full shadow-xl hover:bg-shadi-maroon hover:text-white transition-all duration-500"
          >
            Explore Chapter I
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Archives;