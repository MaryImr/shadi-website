import { motion } from 'framer-motion';

const Hero = () => {
  // Animation Variants for staggered entrance
  const containerVars = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.3, delayChildren: 0.5 } 
    }
  };

  const itemVars = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-shadi-emerald">
      
      {/* 1. Rotating Mandala Background (The "Bang") */}
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
        className="absolute w-[150%] h-[150%] opacity-15 pointer-events-none border-[30px] border-shadi-gold/20 rounded-full"
        style={{ backgroundImage: `url('https://www.transparenttextures.com/patterns/mandala-vines.png')` }}
      />

      {/* 2. Content Container */}
      <motion.div 
        variants={containerVars}
        initial="hidden"
        animate="visible"
        className="z-10 text-center px-6 flex flex-col items-center"
      >
        <motion.div variants={itemVars} className="mb-2">
          <span className="text-shadi-gold font-cursive text-3xl md:text-5xl drop-shadow-lg">
            Together with their families
          </span>
        </motion.div>

        <motion.div variants={itemVars} className="relative py-4">
          <h1 className="text-shadi-cream font-serif text-5xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-tight">
            RAMOOZ TAHIR <span className="text-shadi-gold block md:inline">&</span> MARYAM IMRAN
          </h1>
          {/* Decorative Gold Line */}
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ delay: 1.5, duration: 1 }}
            className="h-[2px] bg-shadi-gold mt-2 mx-auto"
          />
        </motion.div>

        <motion.div variants={itemVars} className="mt-6">
          <p className="text-shadi-gold font-bold uppercase tracking-[0.4em] text-[10px] md:text-sm border-y border-shadi-gold/30 py-2 px-4">
            Baraat & Walima • 2026
          </p>
        </motion.div>
      </motion.div>

      {/* 3. Floating Petals Animation */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ y: -100, x: Math.random() * 400, opacity: 0 }}
            animate={{ 
              y: 1000, 
              x: (Math.random() - 0.5) * 200, 
              opacity: [0, 0.6, 0],
              rotate: 360 
            }}
            transition={{ 
              duration: 12 + Math.random() * 10, 
              repeat: Infinity, 
              delay: i * 2 
            }}
            className="absolute text-shadi-gold/30 text-2xl"
          >
            🌸
          </motion.div>
        ))}
      </div>

      {/* 4. Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="absolute bottom-8 flex flex-col items-center text-shadi-gold"
      >
        <p className="text-[10px] uppercase tracking-[0.2em] mb-2 font-bold">Scroll to Enter</p>
        <motion.div 
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-px h-12 bg-gradient-to-b from-shadi-gold to-transparent"
        />
      </motion.div>
    </section>
  );
};

export default Hero;