import { useState, useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import floralPattern from '../../assets/floral.jpg';
import engravingPattern from '../../assets/engraving.png';
import { guestData } from './guestData';

const veilEase = [0.19, 1, 0.22, 1];

const containerVars = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.65,
    },
  },
};

const itemVars = {
  hidden: { opacity: 0, y: 18, filter: 'blur(6px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.85,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

function MoonHalo() {
  return (
    <motion.svg
      aria-hidden="true"
      viewBox="0 0 700 700"
      className="absolute left-1/2 top-[26%] h-[88vmin] w-[88vmin] -translate-x-1/2 -translate-y-1/2 opacity-[0.16] pointer-events-none"
      animate={{ rotate: 360 }}
      transition={{ duration: 120, repeat: Infinity, ease: 'linear' }}
    >
      <defs>
        <radialGradient id="moonGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#F7F5F0" stopOpacity="0.42" />
          <stop offset="45%" stopColor="#DDE5E5" stopOpacity="0.16" />
          <stop offset="100%" stopColor="#DDE5E5" stopOpacity="0.02" />
        </radialGradient>
        <linearGradient id="silverStroke" x1="0" x2="1">
          <stop offset="0%" stopColor="#95A5A6" />
          <stop offset="30%" stopColor="#DDE5E5" />
          <stop offset="60%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#8E9B9B" />
        </linearGradient>
      </defs>

      <circle cx="350" cy="350" r="210" fill="url(#moonGlow)" />
      <g fill="none" stroke="url(#silverStroke)">
        <circle cx="350" cy="350" r="210" strokeWidth="1.2" opacity="0.65" />
        <circle cx="350" cy="350" r="170" strokeWidth="0.9" opacity="0.45" />
        <circle cx="350" cy="350" r="120" strokeWidth="0.8" opacity="0.35" />
        {Array.from({ length: 12 }).map((_, i) => (
          <path
            key={i}
            d="M350 112 C374 154 396 178 438 198 C398 214 374 238 350 282 C326 238 302 214 262 198 C304 178 326 154 350 112 Z"
            transform={`rotate(${i * 30} 350 350)`}
            strokeWidth="0.8"
            opacity="0.35"
          />
        ))}
      </g>
    </motion.svg>
  );
}

function PearlDivider() {
  return (
    <svg aria-hidden="true" viewBox="0 0 320 32" className="h-4 w-[180px] sm:h-5 sm:w-[230px]">
      <defs>
        <linearGradient id="silverLine" x1="0" x2="1">
          <stop offset="0%" stopColor="#7F8C8D" />
          <stop offset="35%" stopColor="#DDE5E5" />
          <stop offset="50%" stopColor="#FFFFFF" />
          <stop offset="70%" stopColor="#C7D0D0" />
          <stop offset="100%" stopColor="#7F8C8D" />
        </linearGradient>
      </defs>

      <g fill="none" stroke="url(#silverLine)" strokeLinecap="round">
        <path d="M16 16 H124" strokeWidth="1" opacity="0.85" />
        <path d="M196 16 H304" strokeWidth="1" opacity="0.85" />
        <circle cx="160" cy="16" r="4.8" fill="#F7F5F0" stroke="none" />
        <circle cx="160" cy="16" r="8.5" strokeWidth="0.7" opacity="0.4" />
      </g>
    </svg>
  );
}

function SilverCrest() {
  return (
    <svg aria-hidden="true" viewBox="0 0 280 120" className="h-16 w-[170px] sm:h-20 sm:w-[210px]">
      <defs>
        <linearGradient id="crestSilver" x1="0" x2="1">
          <stop offset="0%" stopColor="#829191" />
          <stop offset="28%" stopColor="#DCE4E4" />
          <stop offset="50%" stopColor="#FFFFFF" />
          <stop offset="76%" stopColor="#C5D0D0" />
          <stop offset="100%" stopColor="#7E8D8D" />
        </linearGradient>
      </defs>

      <g fill="none" stroke="url(#crestSilver)" strokeLinecap="round" strokeLinejoin="round">
        <path
          d="M26 94 C44 58 78 36 140 28 C202 36 236 58 254 94"
          strokeWidth="1.8"
        />
        <path
          d="M50 94 C68 66 94 50 140 44 C186 50 212 66 230 94"
          strokeWidth="1.1"
          opacity="0.7"
        />
        <path d="M92 70 C110 62 122 58 140 58 C158 58 170 62 188 70" strokeWidth="1" opacity="0.8" />
        <circle cx="140" cy="32" r="5.5" fill="#F7F5F0" stroke="none" />
        <circle cx="140" cy="32" r="9.5" strokeWidth="0.8" opacity="0.4" />
      </g>
    </svg>
  );
}

function FloralCorners({ className = '' }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 110 110" className={className}>
      <defs>
        <linearGradient id="floralSilver" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#859696" />
          <stop offset="38%" stopColor="#E8EEEE" />
          <stop offset="100%" stopColor="#A7B4B4" />
        </linearGradient>
      </defs>
      <g fill="none" stroke="url(#floralSilver)" strokeWidth="1.4" strokeLinecap="round">
        <path d="M10 94 C10 46 46 10 94 10" />
        <path d="M24 94 C24 58 58 24 94 24" opacity="0.72" />
        <path d="M16 72 C28 72 34 64 38 54 C42 44 52 38 64 38" opacity="0.8" />
        <circle cx="54" cy="54" r="4.4" fill="#F7F5F0" stroke="none" />
      </g>
    </svg>
  );
}

const WalimaCard = () => {
  const [isOpened, setIsOpened] = useState(false);
  const [searchParams] = useSearchParams();

  const toPossessive = (name) => {
    const trimmed = name.trim();
    if (!trimmed) return 'YOUR';
    return /s$/i.test(trimmed) ? `${trimmed}'` : `${trimmed}'S`;
  };

  const guestId = searchParams.get('id')?.trim().toLowerCase() || '';
  const guestName = guestId ? guestData[guestId] : null;

  const inviteAnchor = useMemo(() => {
    if (!guestName) {
      return {
        lead: 'MR. & MRS. TAHIR REQUEST',
        focus: 'YOUR COMPANY',
        tail: 'AT THE WALIMA OF THEIR BELOVED SON',
        full: 'MR. & MRS. TAHIR REQUEST YOUR COMPANY AT THE WALIMA OF THEIR SON',
        isPersonalized: false,
      };
    }

    return {
      lead: 'MR. & MRS. TAHIR REQUEST',
      focus: `${toPossessive(guestName)} COMPANY`,
      tail: 'AT THE WALIMA OF THEIR BELOVED SON',
      full: `MR. & MRS. TAHIR REQUEST ${toPossessive(guestName)} COMPANY AT THE WALIMA OF THEIR SON`,
      isPersonalized: true,
    };
  }, [guestName]);

  useEffect(() => {
    window.scrollTo(0, 0);

    document.documentElement.classList.add('route-walima');
    document.body.classList.add('route-walima');

    return () => {
      document.documentElement.classList.remove('route-walima');
      document.body.classList.remove('route-walima');
    };
  }, []);

  return (
    <section className="relative isolate min-h-[100dvh] overflow-hidden bg-[#0D2B2B] text-[#F7F5F0]">
      {/* base moonlit gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#1F5050_0%,#0D2B2B_34%,#0A1F1F_68%,#051111_100%)]" />

      {/* airy botanical texture */}
      <div
        className="absolute inset-0 opacity-[0.06] mix-blend-screen"
        style={{
          backgroundImage: `url(${floralPattern})`,
          backgroundRepeat: 'repeat',
          backgroundSize: '360px auto',
          backgroundPosition: 'center',
        }}
      />

      {/* silk weave */}
      <div
        className="absolute inset-0 opacity-[0.08] mix-blend-screen"
        style={{
          backgroundImage: `
            radial-gradient(circle at 18% 18%, rgba(255,255,255,0.06), transparent 18%),
            radial-gradient(circle at 82% 14%, rgba(255,255,255,0.04), transparent 16%),
            radial-gradient(circle at 50% 78%, rgba(255,255,255,0.035), transparent 20%),
            repeating-linear-gradient(
              100deg,
              rgba(255,255,255,0.03) 0px,
              rgba(255,255,255,0.015) 2px,
              transparent 4px,
              transparent 12px
            ),
            repeating-linear-gradient(
              0deg,
              rgba(255,255,255,0.012) 0px,
              rgba(255,255,255,0.012) 1px,
              transparent 3px,
              transparent 8px
            )
          `,
        }}
      />

      <MoonHalo />

      <div className="absolute inset-x-0 top-0 h-56 bg-[radial-gradient(circle_at_top,rgba(247,245,240,0.18),transparent_70%)]" />
      <div className="absolute inset-x-0 bottom-0 h-44 bg-[radial-gradient(circle_at_bottom,rgba(221,229,229,0.12),transparent_75%)]" />

      <motion.div
        variants={containerVars}
        initial="hidden"
        animate={isOpened ? 'visible' : 'hidden'}
        className="relative z-10 min-h-[100dvh] px-4 py-8 sm:px-6 sm:py-10"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 24, filter: 'blur(8px)' }}
          animate={
            isOpened
              ? {
                  opacity: 1,
                  scale: 1,
                  y: 0,
                  filter: 'blur(0px)',
                  transition: {
                    delay: 0.55,
                    duration: 1,
                    ease: [0.22, 1, 0.36, 1],
                  },
                }
              : {}
          }
          className="mx-auto flex min-h-[calc(100dvh-2rem)] max-w-5xl items-center justify-center"
        >
          <div className="relative w-full max-w-[760px]">
            {/* outer glow frame */}
            <motion.div
              variants={itemVars}
              className="pointer-events-none absolute inset-0 -z-10 scale-[1.025] rounded-[2rem] border border-white/10"
            />

            {/* main insert */}
            <motion.div
              variants={itemVars}
              className="relative overflow-hidden rounded-[2rem] border border-white/16 bg-[linear-gradient(180deg,rgba(245,247,247,0.08)_0%,rgba(255,255,255,0.02)_14%,rgba(10,31,31,0.20)_100%)] shadow-[0_36px_90px_rgba(0,0,0,0.34),inset_0_1px_0_rgba(255,255,255,0.14)] backdrop-blur-xl"
            >
              {/* floral watermark inside card */}
              <div
                className="pointer-events-none absolute inset-0 opacity-[0.035] mix-blend-screen"
                style={{
                  backgroundImage: `url(${floralPattern})`,
                  backgroundRepeat: 'repeat',
                  backgroundSize: '260px auto',
                  backgroundPosition: 'center',
                }}
              />

              {/* frosted pearl wash */}
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.14)_0%,rgba(255,255,255,0.06)_18%,rgba(255,255,255,0.02)_50%,rgba(255,255,255,0.06)_82%,rgba(255,255,255,0.12)_100%)]" />
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.16),transparent_42%),radial-gradient(circle_at_bottom,rgba(255,255,255,0.10),transparent_44%)]" />
              <div className="pointer-events-none absolute inset-[10px] rounded-[calc(2rem-10px)] border border-white/10" />

              {/* top crest */}
              <motion.div variants={itemVars} className="absolute left-1/2 top-4 z-20 -translate-x-1/2">
                <SilverCrest />
              </motion.div>

              {/* corners */}
              <FloralCorners className="absolute left-4 top-4 h-14 w-14 opacity-55" />
              <FloralCorners className="absolute right-4 top-4 h-14 w-14 rotate-90 opacity-55" />
              <FloralCorners className="absolute bottom-4 left-4 h-14 w-14 -rotate-90 opacity-55" />
              <FloralCorners className="absolute bottom-4 right-4 h-14 w-14 rotate-180 opacity-55" />

              <div className="relative px-6 pb-8 pt-24 sm:px-10 sm:pb-10 sm:pt-28 md:px-14">
                <motion.div variants={itemVars} className="mb-4 mt-0.5 flex justify-center">
                    <PearlDivider />
                </motion.div>

                {/* primary invitation anchor */}
                <motion.div variants={itemVars} className="mx-auto max-w-[46rem] text-center">
                    <p className="sr-only">{inviteAnchor.full}</p>

                    {inviteAnchor.isPersonalized ? (
                        <>
                        <p className="font-ui text-[11px] sm:text-[12px] uppercase tracking-[0.34em] text-[#F7F5F0]/92 drop-shadow-[0_1px_10px_rgba(0,0,0,0.18)]">
                            {inviteAnchor.lead}
                        </p>

                        <div className="mt-2.5">
                            <p className="mx-auto max-w-[18ch] leading-[1]">
                            <span className="font-display text-[clamp(1.95rem,4.8vw,3.1rem)] italic text-[#F7F5F0] drop-shadow-[0_2px_18px_rgba(255,255,255,0.12)]">
                                {guestName}
                            </span>
                            <span className="mt-1.5 block font-ui text-[11px] sm:text-[12px] uppercase tracking-[0.34em] text-[#DCE4E4]/90">
                                ’S COMPANY
                            </span>
                            </p>
                        </div>
                        </>
                    ) : (
                        <p className="mx-auto max-w-[34rem] font-ui text-[11px] sm:text-[13px] uppercase tracking-[0.3em] leading-[1.9] text-[#F7F5F0]/94 drop-shadow-[0_1px_10px_rgba(0,0,0,0.18)]">
                        MR. &amp; MRS. TAHIR REQUEST THE PLEASURE OF YOUR COMPANY
                        </p>
                    )}
                </motion.div>

                <motion.div variants={itemVars} className="mt-5 text-center">
                    <p className="font-display text-[1.15rem] italic tracking-[0.08em] text-[#E7EEEE] drop-shadow-[0_2px_14px_rgba(255,255,255,0.08)] sm:text-[1.35rem]">
                        To celebrate the Walima of their Beloved Son
                    </p>

                    <div className="mt-5">
                        <h1 className="font-display text-[clamp(2.1rem,5.2vw,4.3rem)] font-semibold uppercase leading-[0.94] tracking-[-0.03em] text-[#FFFFFF] drop-shadow-[0_6px_24px_rgba(0,0,0,0.28)]">
                        Ramooz Tahir
                        </h1>

                        <p className="my-2 font-cursive text-[1.75rem] text-[#DDE5E5] sm:my-3 sm:text-[2rem]">
                        and
                        </p>

                        <h1 className="font-display text-[clamp(2.1rem,5.2vw,4.3rem)] font-semibold uppercase leading-[0.94] tracking-[-0.03em] text-[#FFFFFF] drop-shadow-[0_6px_24px_rgba(0,0,0,0.28)]">
                        Maryam Imran
                        </h1>
                    </div>
                </motion.div>

                {/* distinctly different event plaque */}
                <motion.div variants={itemVars} className="mt-8">
                  <div className="text-center">
                    <p className="font-ui text-[10px] sm:text-[11px] uppercase tracking-[0.34em] text-[#DDE5E5]/84">
                      An Evening in Lahore
                    </p>
                  </div>

                  <div className="relative mt-4 overflow-hidden rounded-[1.9rem] border border-white/14 bg-white/[0.04] px-5 py-6 shadow-[0_18px_50px_rgba(0,0,0,0.22),inset_0_1px_0_rgba(255,255,255,0.16)] backdrop-blur-2xl sm:px-6 sm:py-6">
                    {/* engraved silver wash */}
                    <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.17)_0%,rgba(255,255,255,0.07)_24%,rgba(255,255,255,0.025)_54%,rgba(255,255,255,0.09)_82%,rgba(255,255,255,0.15)_100%)]" />

                    {/* engraving watermark */}
                    <div
                      className="pointer-events-none absolute inset-0 opacity-[0.11] mix-blend-screen"
                      style={{
                        backgroundImage: `url(${engravingPattern})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                      }}
                    />

                    {/* silver edge */}
                    <div className="pointer-events-none absolute inset-[1px] rounded-[calc(1.9rem-1px)] border border-white/10" />

                    {/* soft top/bottom pearl glow */}
                    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.16),transparent_42%),radial-gradient(circle_at_bottom,rgba(255,255,255,0.08),transparent_46%)]" />

                    <div className="relative z-10">
                      <div className="mb-5 flex items-center justify-center gap-3 text-[#DDE5E5]">
                        <div className="h-px w-10 bg-gradient-to-r from-transparent to-[#DDE5E5]/65" />
                        <p className="font-ui text-[11px] font-semibold uppercase tracking-[0.3em] text-[#F7F5F0]/92">
                          Reception Details
                        </p>
                        <div className="h-px w-10 bg-gradient-to-l from-transparent to-[#DDE5E5]/65" />
                      </div>

                      <div className="grid gap-5 md:grid-cols-[1fr_1.25fr_1fr] md:items-center">
                        {/* left meta */}
                        <div className="text-center md:text-left">
                          <p className="font-ui text-[10px] uppercase tracking-[0.32em] text-[#C7D0D0]/90">
                            Date
                          </p>
                          <p className="mt-2 font-display text-[1.45rem] leading-none text-[#FFFFFF]">
                            Monday
                          </p>
                          <p className="mt-2 font-ui text-[12px] uppercase tracking-[0.22em] text-[#DDE5E5]/88">
                            03 August 2026
                          </p>
                        </div>

                        {/* center venue hero */}
                        <div className="relative text-center px-2">
                          <div className="absolute left-0 top-1/2 hidden h-px w-8 -translate-y-1/2 bg-gradient-to-r from-transparent to-[#DDE5E5]/45 md:block" />
                          <div className="absolute right-0 top-1/2 hidden h-px w-8 -translate-y-1/2 bg-gradient-to-l from-transparent to-[#DDE5E5]/45 md:block" />

                          <p className="font-ui text-[10px] uppercase tracking-[0.32em] text-[#C7D0D0]/90">
                            Venue
                          </p>
                          <p className="mt-2 font-display text-[1.65rem] sm:text-[1.85rem] leading-tight text-[#FFFFFF] drop-shadow-[0_2px_14px_rgba(255,255,255,0.08)]">
                            Moonlit Garden Marquee
                          </p>
                          <p className="mt-2 font-ui text-[12px] uppercase tracking-[0.22em] text-[#DDE5E5]/82">
                            Reception &amp; Dinner
                          </p>
                        </div>

                        {/* right meta */}
                        <div className="text-center md:text-right">
                          <p className="font-ui text-[10px] uppercase tracking-[0.32em] text-[#C7D0D0]/90">
                            Time
                          </p>
                          <p className="mt-2 font-display text-[1.45rem] leading-none text-[#FFFFFF]">
                            7:00 PM
                          </p>
                          <p className="mt-2 font-ui text-[12px] uppercase tracking-[0.22em] text-[#DDE5E5]/88">
                            Onwards
                          </p>
                        </div>
                      </div>

                      <div className="mt-5 flex items-center justify-center gap-3 text-[#DDE5E5]">
                        <div className="h-px w-8 bg-gradient-to-r from-transparent to-[#DDE5E5]/45" />
                        <div className="h-[6px] w-[6px] rounded-full bg-[#F7F5F0]/80" />
                        <div className="h-px w-8 bg-gradient-to-l from-transparent to-[#DDE5E5]/45" />
                      </div>

                      <div className="mt-4 text-center">
                        <p className="font-ui text-[13px] leading-relaxed text-[#F7F5F0]/84">
                          123 Canal Side Avenue, Lahore
                        </p>
                      </div>

                      <div className="mt-6 flex justify-center">
                        <motion.a
                          href="#"
                          target="_blank"
                          rel="noreferrer"
                          whileHover={{ y: -2, scale: 1.015 }}
                          whileTap={{ scale: 0.985 }}
                          className="group relative inline-flex w-full max-w-[240px] items-center justify-center overflow-hidden rounded-full border border-white/18 bg-[linear-gradient(135deg,rgba(255,255,255,0.22)_0%,rgba(255,255,255,0.10)_30%,rgba(221,229,229,0.18)_62%,rgba(255,255,255,0.08)_100%)] px-6 py-3.5 text-center font-ui text-[10px] font-extrabold uppercase tracking-[0.3em] text-[#0A1F1F] shadow-[0_16px_38px_rgba(0,0,0,0.24),inset_0_1px_0_rgba(255,255,255,0.30)] backdrop-blur-xl"
                        >
                          <span className="absolute inset-0 bg-[linear-gradient(120deg,transparent_0%,rgba(255,255,255,0.40)_20%,transparent_38%)] opacity-80 transition-transform duration-700 group-hover:translate-x-full" />
                          <span className="relative">Location</span>
                        </motion.a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      {/* veil lift reveal */}
      <AnimatePresence>
        {!isOpened && (
          <motion.div
            key="veil-overlay"
            className="fixed inset-0 z-50"
            exit={{
              y: '-110%',
              opacity: 0,
              filter: 'blur(10px)',
              transition: {
                duration: 1.5,
                ease: veilEase,
              },
            }}
          >
            {/* veil body */}
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,251,246,0.92)_0%,rgba(248,245,240,0.74)_36%,rgba(232,236,236,0.58)_100%)] backdrop-blur-md" />

            {/* floral veil texture */}
            <div
              className="absolute inset-0 opacity-[0.08] mix-blend-multiply"
              style={{
                backgroundImage: `url(${floralPattern})`,
                backgroundRepeat: 'repeat',
                backgroundSize: '300px auto',
                backgroundPosition: 'center',
              }}
            />

            {/* moon shimmer */}
            <motion.div
              initial={{ opacity: 0.25, x: '-20%' }}
              animate={{ opacity: [0.25, 0.45, 0.25], x: ['-20%', '25%', '-20%'] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute inset-y-0 left-1/3 w-40 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.42),transparent)] blur-xl"
            />

            {/* CTA plaque */}
            <div className="absolute inset-0 z-10 flex items-center justify-center px-6">
              <motion.button
                type="button"
                onClick={() => setIsOpened(true)}
                whileHover={{ y: -2, scale: 1.01 }}
                whileTap={{ scale: 0.985 }}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="relative overflow-hidden rounded-[1.75rem] border border-white/24 bg-[linear-gradient(180deg,rgba(255,255,255,0.28)_0%,rgba(255,255,255,0.12)_100%)] px-8 py-6 shadow-[0_22px_60px_rgba(0,0,0,0.22),inset_0_1px_0_rgba(255,255,255,0.24)] backdrop-blur-xl"
              >
                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.22),transparent_30%,transparent_70%,rgba(255,255,255,0.08))]" />
                <div className="pointer-events-none absolute inset-[1px] rounded-[calc(1.75rem-1px)] border border-white/12" />

                <div className="relative text-center">
                  <p className="font-cursive text-[2.1rem] leading-none text-[#274949] sm:text-[2.45rem]">
                    Lift the Veil
                  </p>

                  <div className="mx-auto mt-3 flex items-center justify-center gap-3">
                    <div className="h-px w-10 bg-gradient-to-r from-transparent to-[#90A6A6]/70" />
                    <div className="h-[7px] w-[7px] rounded-full bg-[#F7F5F0] shadow-[0_0_14px_rgba(255,255,255,0.40)]" />
                    <div className="h-px w-10 bg-gradient-to-l from-transparent to-[#90A6A6]/70" />
                  </div>

                  <p className="mt-4 font-ui text-[10px] font-semibold uppercase tracking-[0.46em] text-[#274949]/72">
                    Tap to Reveal
                  </p>
                </div>
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default WalimaCard;