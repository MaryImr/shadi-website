import React from 'react';
import { motion } from 'framer-motion';


const MEMORIES_DATA = [
  {
    id: 1,
    title: "Where It All Began",
    image: new URL('../assets/Memories/mem1.jpeg', import.meta.url).href,
    tilt: -3,
  },
  {
    id: 2,
    title: "The First Roadtrip",
    image: new URL('../assets/Memories/mem2.jpeg', import.meta.url).href,
    tilt: 2,
  },
  {
    id: 3,
    title: "Unresolved Food Debates",
    image: new URL('../assets/Memories/mem3.jpeg', import.meta.url).href,
    tilt: -2,
  },
  {
    id: 4,
    title: "Saying 'Yes' 💍",
    image: new URL('../assets/Memories/mem4.jpeg', import.meta.url).href,
    tilt: 3,
  },
  {
    id: 5,
    title: "Our Coffee Headquarters",
    image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=600",
    tilt: -1,
  }
];

export default function MemoryGallery() {
  return (
    <div className="min-h-screen bg-shadi-cream px-6 py-12 bg-[radial-gradient(#e2d9c2_1px,transparent_1px)] [background-size:20px_20px] overflow-x-hidden">
      
      {/* Mobile-Optimized Header */}
      <div className="text-center mb-12">
        <motion.span 
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-shadi-gold text-[10px] uppercase font-bold tracking-[0.3em] block mb-1"
        >
          Our Story
        </motion.span>
        <motion.h1 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="font-serif text-3xl md:text-5xl font-black text-shadi-maroon leading-tight"
        >
          The Plot Twists
        </motion.h1>
      </div>

      {/* Mobile-First Stack Layout */}
      {/* Uses a single column on mobile, scales to an elegant staggered layout on larger screens */}
      <div className="max-w-md mx-auto flex flex-col gap-10 md:max-w-4xl md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-8 px-2 pb-12">
        {MEMORIES_DATA.map((memory, index) => {
          // Alternating offsets to make the vertical scroll feel organic and playful
          const isEven = index % 2 === 0;
          const xOffset = isEven ? '-4px' : '4px';

          return (
            <motion.div
              key={memory.id}
              initial={{ opacity: 0, y: 30, rotate: memory.tilt * 1.5 }}
              whileInView={{ 
                opacity: 1, 
                y: 0, 
                rotate: memory.tilt,
                x: [ '0px', xOffset, '0px' ] // Subtle shift as it moves into view
              }}
              viewport={{ once: true, margin: "-100px" }}
              whileTap={{ scale: 0.98, rotate: 0, zIndex: 10 }} // Mobile interactive press
              className="relative w-full bg-white p-3 shadow-[0_8px_25px_rgba(74,16,23,0.08)] border border-shadi-gold/10 rounded-sm"
            >
              {/* Elegant Little Gold Tape Overlay */}
              <div 
                className="absolute -top-2 left-1/2 -translate-x-1/2 w-16 h-4 bg-shadi-gold/15 backdrop-blur-[1px] border border-dashed border-shadi-gold/30 pointer-events-none z-10"
                style={{ clipPath: "polygon(0% 0%, 4% 100%, 96% 100%, 100% 0%)" }}
              />

              {/* Photo Frame Container (Square aspect ratio looks best for polaroids) */}
              <div className="w-full aspect-square bg-neutral-50 overflow-hidden relative rounded-sm">
                <img 
                  src={memory.image} 
                  alt={memory.title}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
                {/* Vintage overlay shading */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Polaroid Bottom Text - Clean & Centered */}
              <div className="pt-4 pb-1 text-center">
                <h3 className="font-serif font-bold text-base text-shadi-maroon tracking-wide">
                  {memory.title}
                </h3>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}