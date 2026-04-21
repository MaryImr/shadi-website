import { useMemo } from 'react';
import { motion } from 'framer-motion';
import { castData } from './castData';

// Load all portraits from src/assets/FamilyPortraits
const portraitModules = import.meta.glob(
  '../../assets/FamilyPortraits/*.{png,jpg,jpeg,webp,avif}',
  { eager: true, import: 'default' }
);

const normalizeKey = (value = '') =>
  value
    .toLowerCase()
    .replace(/\.(png|jpe?g|webp|avif)$/i, '')
    .trim();

const slugify = (value = '') =>
  value
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');

const portraitMap = Object.entries(portraitModules).reduce((acc, [path, src]) => {
  const fileName = path.split('/').pop() || '';
  acc[normalizeKey(fileName)] = src;
  return acc;
}, {});

const getPortraitSrc = (member) => {
  // 1. Prefer explicit photo field from castData
  if (member.photo) {
    const explicitKey = normalizeKey(member.photo);
    if (portraitMap[explicitKey]) return portraitMap[explicitKey];
  }

  // 2. Fallback: try matching by slugified member name
  const fallbackKey = slugify(member.name);
  if (portraitMap[fallbackKey]) return portraitMap[fallbackKey];

  return null;
};

const CastCard = ({ member, photoSrc }) => {
  const isBrideSide = member.side === 'bride';
  const cardBg = isBrideSide ? 'bg-shadi-maroon' : 'bg-shadi-emerald';
  const borderColor = member.isVIP
    ? 'border-shadi-gold shadow-[0_0_20px_rgba(212,175,55,0.4)]'
    : 'border-shadi-gold/20';

  // Deterministic "Randomness" so it doesn't flicker on re-renders
  const isLeft = member.name.length % 2 === 0; 
  const randomRotation = (member.name.length % 10) - 5; // Slight variation in tilt

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`relative snap-center min-w-[280px] md:min-w-[320px] aspect-[3/4] ${cardBg} rounded-2xl overflow-hidden border-2 ${borderColor} group`}
    >
      {/* 1. PAPARAZZI FLASH */}
      <motion.div
        initial={{ x: '-100%', skewX: -20 }}
        whileInView={{ x: '200%' }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        className="absolute inset-0 z-20 bg-gradient-to-r from-transparent via-white/40 to-transparent pointer-events-none"
      />

      {/* 2. THE CUTE TAG (Bottom Left or Right) */}
      {member.skill && (
        <motion.div
          initial={{ y: 20, opacity: 0, scale: 0.8 }}
          whileInView={{ y: 0, opacity: 1, scale: 1, rotate: isLeft ? -12 + randomRotation : 12 + randomRotation }}
          transition={{ 
            type: "spring", 
            stiffness: 200, 
            damping: 15, 
            delay: 0.7 
          }}
          className={`absolute bottom-28 ${isLeft ? 'left-4' : 'right-4'} z-40 pointer-events-none origin-center`}
        >
          {/* The Tag Body */}
          <div className="bg-shadi-cream border-2 border-shadi-gold rounded-2xl px-2 py-3 shadow-2xl flex flex-col items-center min-w-[65px] max-w-[85px]">
            {/* Tiny "Safety Pin" or String Hole */}
            <div className="w-2 h-2 rounded-full bg-shadi-gold/40 border border-shadi-gold mb-2" />
            
            {/* <span className="text-[7px] text-shadi-maroon font-bold uppercase tracking-widest opacity-40 mb-1">
              VIBE
            </span>

            <div className="h-[1px] w-full bg-shadi-gold/20 mb-2" /> */}

            {/* The Skill */}
            <p className="font-serif text-shadi-emerald text-[10px] font-black leading-tight text-center break-words uppercase px-1">
              {member.skill}
            </p>
          </div>
        </motion.div>
      )}

      {/* 3. Portrait */}
      <div className="absolute inset-0 z-0">
        {photoSrc ? (
          <img
            src={photoSrc}
            alt={member.name}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <div className="h-full w-full flex items-center justify-center text-shadi-gold/10">
            <span className="text-8xl font-serif italic">{member.name[0]}</span>
          </div>
        )}
      </div>

      {/* 4. Cinematic Gradients */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10 pointer-events-none" />

      {/* 5. Starring Badge */}
      {member.isVIP && (
        <div className="absolute top-4 right-4 z-30 bg-shadi-gold text-shadi-maroon text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-tighter shadow-lg">
          Starring
        </div>
      )}

      {/* 6. Footer Content */}
      <div className="absolute bottom-0 left-0 right-0 p-6 z-30">
        <p className="text-shadi-gold text-[10px] uppercase font-bold tracking-[0.2em] mb-1 italic">
          {member.role}
        </p>
        <h4 className="text-shadi-cream font-serif text-2xl md:text-3xl font-bold leading-tight">
          {member.name}
        </h4>
      </div>
    </motion.div>
  );
};

const Cast = () => {
  const vips = useMemo(() => castData.filter((m) => m.isVIP), []);

  const supporting = useMemo(() => {
    return castData
      .filter((m) => !m.isVIP)
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
            className="font-cursive text-6xl text-shadi-maroon mb-6"
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

        {/* VIP Section */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <p className="text-shadi-maroon font-bold uppercase tracking-[0.4em] text-xs">
              The Leads
            </p>
            <div className="h-[1px] flex-1 bg-shadi-gold/30"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {vips.map((member) => (
              <CastCard
                key={member.name}
                member={member}
                photoSrc={getPortraitSrc(member)}
              />
            ))}
          </div>
        </div>

        {/* Supporting Cast Section */}
        <div>
          <div className="flex items-center gap-4 mb-8">
            <p className="text-shadi-maroon font-bold uppercase tracking-[0.4em] text-xs">
              Supporting Cast
            </p>
            <div className="h-[1px] flex-1 bg-shadi-gold/30"></div>
          </div>

          <div className="flex overflow-x-auto gap-6 pb-12 snap-x no-scrollbar pt-2">
            {supporting.map((member) => (
              <CastCard
                key={member.name}
                member={member}
                photoSrc={getPortraitSrc(member)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cast;