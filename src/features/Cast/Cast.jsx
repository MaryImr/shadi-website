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

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`relative snap-center min-w-[280px] md:min-w-[320px] aspect-[3/4] ${cardBg} rounded-2xl overflow-hidden border-2 ${borderColor} group`}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />

      {/* Portrait / fallback */}
      <div className="absolute inset-0">
        {photoSrc ? (
          <img
            src={photoSrc}
            alt={member.name}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <div className="h-full w-full flex items-center justify-center text-shadi-gold/10">
            <span className="text-8xl font-serif italic">{member.name[0]}</span>
          </div>
        )}
      </div>

      {/* Extra subtle top vignette for cinematic depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-transparent z-10 pointer-events-none" />

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

        <motion.div
          className="h-0 group-hover:h-auto overflow-hidden transition-all duration-500"
          initial={false}
          variants={{
            visible: { height: 'auto', marginTop: '1rem', opacity: 1 },
            hidden: { height: 0, marginTop: 0, opacity: 0 },
          }}
          whileInView={window.innerWidth < 768 ? 'visible' : ''}
          viewport={{ margin: '-100px' }}
        >
          <p className="text-shadi-gold/90 text-xs border-t border-shadi-gold/30 pt-3">
            <span className="opacity-50 uppercase tracking-tighter text-[9px]">
              Special Ability:
            </span>
            <br />
            {member.skill}
          </p>
        </motion.div>
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