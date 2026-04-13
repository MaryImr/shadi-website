import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-shadi-emerald text-shadi-gold">
      {/* Decorative Texture Overlay */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/oriental-tiles.png')]"></div>
      
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="z-10 text-center px-4"
      >
        <h2 className="font-cursive text-4xl md:text-6xl mb-4 drop-shadow-md">
          The Grand Finale of
        </h2>
        <h1 className="text-shadi-cream font-serif text-6xl md:text-9xl font-bold tracking-tighter mb-6">
          RAMOOZ & MARYAM
        </h1>
        <div className="flex items-center justify-center gap-4">
          <div className="h-[1px] w-12 bg-shadi-gold"></div>
          <p className="uppercase tracking-[0.5em] text-xs md:text-sm font-bold text-shadi-gold">
            Baraat & Walima • 2026
          </p>
          <div className="h-[1px] w-12 bg-shadi-gold"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;