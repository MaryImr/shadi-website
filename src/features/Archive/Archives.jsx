import { motion } from 'framer-motion';

const nikahImages = [
  { id: 1, title: "The Beginning", url: "https://placehold.co/600x400/064e3b/D4AF37?text=Nikkah+Moment+1" },
  { id: 2, title: "The Vows", url: "https://placehold.co/600x400/064e3b/D4AF37?text=Nikkah+Moment+2" },
  { id: 3, title: "The Signature", url: "https://placehold.co/600x400/064e3b/D4AF37?text=Nikkah+Moment+3" },
  { id: 4, title: "The Joy", url: "https://placehold.co/600x400/064e3b/D4AF37?text=Nikkah+Moment+4" },
];

const Archives = () => {
  return (
    <section id="archives" className="py-24 bg-[#F5F1E6] relative overflow-hidden">
      {/* Texture Overlay for Vintage Feel */}
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/paper-fibers.png')]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-shadi-gold font-bold uppercase tracking-[0.5em] text-[10px] mb-4"
          >
            Looking Back
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="font-serif text-5xl md:text-7xl text-shadi-emerald font-bold mb-4"
          >
            Chapter I: The Nikkah
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "100px" }}
            className="h-[1px] bg-shadi-gold mx-auto"
          />
        </div>

        {/* Horizontal Film Strip */}
        <div className="flex overflow-x-auto gap-8 pb-12 no-scrollbar snap-x">
          {nikahImages.map((img, i) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, rotate: i % 2 === 0 ? -2 : 2 }}
              whileInView={{ opacity: 1, rotate: 0 }}
              className="snap-center min-w-[300px] md:min-w-[450px] bg-white p-4 shadow-xl border border-shadi-gold/20"
            >
              <div className="aspect-[4/3] overflow-hidden mb-4">
                <img 
                  src={img.url} 
                  alt={img.title} 
                  className="w-full h-full object-cover sepia-[0.3] hover:sepia-0 transition-all duration-700"
                />
              </div>
              <p className="font-cursive text-2xl text-shadi-maroon text-center">{img.title}</p>
            </motion.div>
          ))}
        </div>

        {/* The Action Button */}
        <div className="mt-12 text-center">
          <motion.a
            href="https://nikkah-invitation-rose.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-10 py-4 bg-shadi-emerald text-shadi-gold border border-shadi-gold font-bold uppercase tracking-widest text-xs rounded-full shadow-[0_0_20px_rgba(6,78,59,0.3)] hover:bg-shadi-gold hover:text-shadi-emerald transition-all duration-300"
          >
            Revisit the Nikkah Site
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Archives;