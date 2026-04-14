import { useMemo } from 'react';
import { motion } from 'framer-motion';
import { castData } from './castData';

const CastCard = ({ member }) => {
  const isBrideSide = member.side === 'bride';
  const cardBg = isBrideSide ? 'bg-shadi-maroon' : 'bg-shadi-emerald';
  const borderColor = member.isVIP ? 'border-shadi-gold shadow-[0_0_20px_rgba(212,175,55,0.4)]' : 'border-shadi-gold/20';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`relative snap-center min-w-[280px] md:min-w-[320px] aspect-[3/4] ${cardBg} rounded-2xl overflow-hidden border-2 ${borderColor} group`}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />
      <div className="h-full w-full flex items-center justify-center text-shadi-gold/10">
        <span className="text-8xl font-serif italic">{member.name[0]}</span>
      </div>

      {member.isVIP && (
        <div className="absolute top-4 right-4 z-20 bg-shadi-gold text-shadi-maroon text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-tighter shadow-lg">
          Starring
        </div>
      )}

      <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
        <p className="text-shadi-gold text-[10px] uppercase font-bold tracking-[0.2em] mb-1 italic">
          {member.role}
        </p>
        <h4 className="text-shadi-cream font-serif text-2xl md:text-3xl font-bold leading-tight">
          {member.name}
        </h4>
        
        <div className="h-0 group-hover:h-auto transition-all duration-500 overflow-hidden">
          <p className="text-shadi-gold/90 text-xs border-t border-shadi-gold/30 pt-3 mt-4">
            <span className="opacity-50 uppercase tracking-tighter">Special Ability:</span><br/>
            {member.skill}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

const Cast = () => {
  // 1. Logic to shuffle supporting cast only once
  const vips = useMemo(() => castData.filter(m => m.isVIP), []);
  
  const supporting = useMemo(() => {
    return castData
      .filter(m => !m.isVIP)
      .sort(() => Math.random() - 0.5);
  }, []);

  return (
    <section className="pt-24 pb-12 bg-shadi-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="mb-20 text-center md:text-left">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="font-cursive text-6xl text-shadi-maroon mb-6" // Increased margin and size
          >
            Introducing
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-serif text-4xl md:text-6xl text-shadi-emerald font-black uppercase tracking-tighter leading-none"
          >
            The Star-Studded Cast
          </motion.h3>
        </div>

        {/* 1. VIP Section */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <p className="text-shadi-maroon font-bold uppercase tracking-[0.4em] text-xs">
              The Leads
            </p>
            <div className="h-[1px] flex-1 bg-shadi-gold/30"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {vips.map((member) => (
              <CastCard key={member.name} member={member} />
            ))}
          </div>
        </div>

        {/* 2. Supporting Cast Section */}
        <div>
          <div className="flex items-center gap-4 mb-8">
            <p className="text-shadi-maroon font-bold uppercase tracking-[0.4em] text-xs">
              Supporting Cast
            </p>
            <div className="h-[1px] flex-1 bg-shadi-gold/30"></div>
          </div>

          <div className="flex overflow-x-auto gap-6 pb-12 snap-x no-scrollbar pt-2">
            {supporting.map((member) => (
              <CastCard key={member.name} member={member} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Cast;