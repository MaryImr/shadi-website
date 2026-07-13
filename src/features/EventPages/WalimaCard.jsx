import { useState, useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import floralPattern from '../../assets/floral.jpg';
import engravingPattern from '../../assets/engraving.png';
import backdropTop from '../../assets/backdropTop.png';
import backdropBottom from '../../assets/backdropBottom.png';
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

function PearlDivider() {
  return (
    <svg aria-hidden="true" viewBox="0 0 320 32" className="h-4 w-[180px] sm:h-5 sm:w-[230px]">
      <defs>
        <linearGradient id="silverLine" x1="0" x2="1">
          <stop offset="0%" stopColor="#7F8C8D" />
          <stop offset="35%" stopColor="#DDD2F1" />
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
    <section className="relative isolate min-h-[100dvh] overflow-hidden bg-[#F4F0FA] text-[#2D1849]">

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#FEFCFF_0%,#F5F0FA_36%,#EEE7F7_70%,#E7DEF4_100%)]" />

      {/* Backdrop */}
      <div className="pointer-events-none absolute inset-0 z-[2] overflow-hidden">
        {/* Top */}
        <div
          className="absolute top-0 left-0 right-0"
          style={{
            height: "340px", // adjust to match your artwork
            backgroundImage: `url(${backdropTop})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center top",
            backgroundSize: "min(1100px,100%) auto",
            filter: "none",
            mixBlendMode: "normal",
          }}
        />
      </div>

      {/* airy botanical texture */}
      <div
        className="absolute inset-0 opacity-[0.03] mix-blend-screen"
        style={{
          backgroundImage: `url(${floralPattern})`,
          backgroundRepeat: 'repeat',
          backgroundSize: '360px auto',
          backgroundPosition: 'center',
        }}
      />

      {/* silk weave */}
      <div
        className="absolute inset-0 opacity-[0.03] mix-blend-screen"
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

      {/* <MoonHalo /> */}

      <div className="absolute inset-x-0 top-0 h-56 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.22),transparent_72%)]" />
      <div className="absolute inset-x-0 bottom-0 h-44 bg-[radial-gradient(circle_at_bottom,rgba(171,147,219,0.22),transparent_75%)]" />

      <motion.div
        variants={containerVars}
        initial="hidden"
        animate={isOpened ? 'visible' : 'hidden'}
        className="relative z-[5] min-h-[100dvh] px-4 py-8 sm:px-6 sm:py-10"
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

            {/* main insert */}
            <motion.div
              variants={itemVars}
              className="relative overflow-hidden rounded-[2rem] bg-transparent shadow-[0_20px_55px_rgba(76,96,74,0.10)]"
            >

            {/* Royal side trims */}
            <div
              className="pointer-events-none absolute left-[18px] top-[42px] bottom-[42px] z-[25] w-[2px] rounded-full"
              style={{
                background:
                   "linear-gradient(to bottom, rgba(90,62,140,0) 0%, rgba(90,62,140,0.08) 10%, rgba(90,62,140,0.30) 22%, rgba(106,71,152,0.70) 38%, #8D69BF 50%, rgba(106,71,152,0.70) 62%, rgba(90,62,140,0.30) 78%, rgba(90,62,140,0.08) 90%, rgba(90,62,140,0) 100%)",
              }}
            />

            <div
              className="pointer-events-none absolute right-[18px] top-[42px] bottom-[42px] z-[25] w-[2px] rounded-full"
              style={{
                background:
                  "linear-gradient(to bottom, rgba(90,62,140,0) 0%, rgba(90,62,140,0.08) 10%, rgba(90,62,140,0.30) 22%, rgba(106,71,152,0.70) 38%, #8D69BF 50%, rgba(106,71,152,0.70) 62%, rgba(90,62,140,0.30) 78%, rgba(90,62,140,0.08) 90%, rgba(90,62,140,0) 100%)",
              }}
            />

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
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_42%),radial-gradient(circle_at_bottom,rgba(255,255,255,0.04),transparent_44%)]" />

              {/* top crest */}
              <motion.div variants={itemVars} className="absolute left-1/2 top-4 z-20 -translate-x-1/2">
                <SilverCrest />
              </motion.div>

              {/* corners */}
              <FloralCorners className="absolute left-4 top-4 h-14 w-14 opacity-55" />
              <FloralCorners className="absolute right-4 top-4 h-14 w-14 rotate-90 opacity-55" />
              <FloralCorners className="absolute bottom-4 left-4 h-14 w-14 -rotate-90 opacity-55" />
              <FloralCorners className="absolute bottom-4 right-4 h-14 w-14 rotate-180 opacity-55" />

              <div
                className="pointer-events-none absolute inset-10 rounded-[2rem]"
                style={{
                  background:
                    "radial-gradient(circle, rgba(255,252,255,0.44) 0%, rgba(244,238,251,0.18) 55%, transparent 90%)",
                }}
              />

              <div className="relative px-6 pb-18 pt-24 sm:px-10 sm:pb-24 sm:pt-28 md:px-14">
                <motion.div variants={itemVars} className="mb-4 mt-0.5 flex justify-center">
                    <PearlDivider />
                </motion.div>

                {/* primary invitation anchor */}
                <motion.div variants={itemVars} className="mx-auto max-w-[46rem] text-center">
                    <p className="sr-only">{inviteAnchor.full}</p>

                    {inviteAnchor.isPersonalized ? (
                        <>
                        <p className="font-ui text-[11px] sm:text-[12px] uppercase tracking-[0.34em] text-[#2D1849]/92 drop-shadow-[0_1px_10px_rgba(0,0,0,0.18)]">
                            {inviteAnchor.lead}
                        </p>

                        <div className="mt-2.5">
                            <p className="mx-auto max-w-[18ch] leading-[1]">
                            <span className="font-display text-[clamp(1.95rem,4.8vw,3.1rem)] italic text-[#2D1849] drop-shadow-[0_2px_18px_rgba(255,255,255,0.12)]">
                                {guestName}
                            </span>
                            <span className="mt-1.5 block font-ui text-[11px] sm:text-[12px] uppercase tracking-[0.34em] text-[#DCE4E4]/90">
                                ’S COMPANY
                            </span>
                            </p>
                        </div>
                        </>
                    ) : (
                        <p className="mx-auto max-w-[34rem] font-ui text-[11px] sm:text-[13px] uppercase tracking-[0.3em] leading-[1.9] text-[#2D1849]/94 drop-shadow-[0_1px_10px_rgba(0,0,0,0.18)]">
                        MR. &amp; MRS. TAHIR REQUEST THE PLEASURE OF YOUR COMPANY
                        </p>
                    )}
                </motion.div>

                <motion.div variants={itemVars} className="mt-5 text-center">
                    <p className="font-display text-[1.15rem] italic tracking-[0.08em] text-[#69518F] drop-shadow-[0_2px_14px_rgba(255,255,255,0.08)] sm:text-[1.35rem]">
                        To celebrate the Walima of their Beloved Son
                    </p>

                    <div className="mt-5">
                        <h1 className="font-display text-[clamp(2.1rem,5.2vw,4.3rem)] font-semibold uppercase leading-[0.94] tracking-[-0.03em] text-[#37234F] drop-shadow-[0_2px_6px_rgba(255,255,255,0.35)]">
                        Ramooz Tahir
                        </h1>

                        <p className="my-2 font-cursive text-[1.75rem] text-[#5A3D87] sm:my-3 sm:text-[2rem]">
                        and
                        </p>

                        <h1 className="font-display text-[clamp(2.1rem,5.2vw,4.3rem)] font-semibold uppercase leading-[0.94] tracking-[-0.03em] text-[#37234F] drop-shadow-[0_2px_6px_rgba(255,255,255,0.35)]">
                        Maryam Imran
                        </h1>
                    </div>
                </motion.div>

                {/* distinctly different event plaque */}
                <motion.div variants={itemVars} className="mt-8">
                  <div className="text-center">
                    <p className="font-ui text-[10px] sm:text-[11px] uppercase tracking-[0.34em] text-[#5A3D87]/84">
                      An Evening in Lahore
                    </p>
                  </div>

                  <div className="relative mt-4 overflow-hidden rounded-[1.9rem] border border-[#d7e5d5] bg-[rgba(250,247,255,0.24)] backdrop-blur-sm px-5 py-6 shadow-[0_12px_32px_rgba(74,58,112,0.10)] sm:px-6 sm:py-6">
                    {/* engraved silver wash */}
                    <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.17)_0%,rgba(255,255,255,0.07)_24%,rgba(255,255,255,0.025)_54%,rgba(255,255,255,0.09)_82%,rgba(255,255,255,0.15)_100%)]" />

                    {/* engraving watermark */}
                    <div
                      className="pointer-events-none absolute inset-0 opacity-[0.05] mix-blend-screen"
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
                      <div className="mb-5 flex items-center justify-center gap-3 text-[#5A3D87]">
                        <div className="h-px w-10 bg-gradient-to-r from-transparent to-[#DDD2F1]/65" />
                        <p className="font-ui text-[11px] font-semibold uppercase tracking-[0.3em] text-[#2D1849]/92">
                          Reception Details
                        </p>
                        <div className="h-px w-10 bg-gradient-to-l from-transparent to-[#DDD2F1]/65" />
                      </div>

                      <div className="grid gap-5 md:grid-cols-[1fr_1.25fr_1fr] md:items-center">
                        {/* left meta */}
                        <div className="text-center md:text-left">
                          <p className="font-ui text-[10px] uppercase tracking-[0.32em] text-[#6A518E]">
                            Date
                          </p>
                          <p className="mt-2 font-display text-[1.45rem] leading-none text-[#3B235C]">
                            Monday
                          </p>
                          <p className="mt-2 font-ui text-[12px] uppercase tracking-[0.22em] text-[#5A3D87]/88">
                            03 August 2026
                          </p>
                        </div>

                        {/* center venue hero */}
                        <div className="text-center md:text-right">
                          <p className="font-ui text-[10px] uppercase tracking-[0.32em] text-[#6A518E]">
                            Time
                          </p>
                          <p className="mt-2 font-display text-[1.45rem] leading-none text-[#3B235C]">
                            7:00 PM
                          </p>
                          <p className="mt-2 font-ui text-[12px] uppercase tracking-[0.22em] text-[#5A3D87]/88">
                            Onwards
                          </p>
                        </div>

                        {/* right meta */}
                        <div className="relative text-center px-2">
                          <div className="absolute left-0 top-1/2 hidden h-px w-8 -translate-y-1/2 bg-gradient-to-r from-transparent to-[#DDD2F1]/45 md:block" />
                          <div className="absolute right-0 top-1/2 hidden h-px w-8 -translate-y-1/2 bg-gradient-to-l from-transparent to-[#DDD2F1]/45 md:block" />

                          <p className="font-ui text-[10px] uppercase tracking-[0.32em] text-[#6A518E]">
                            Venue
                          </p>
                          <p className="mt-2 font-display text-[1.65rem] sm:text-[1.85rem] leading-tight text-[#3B235C] drop-shadow-[0_2px_14px_rgba(255,255,255,0.08)]">
                            Marabelle
                          </p>
                          <p className="mt-2 font-ui text-[12px] uppercase tracking-[0.22em] text-[#5A3D87]/82">
                            Reception &amp; Dinner
                          </p>
                        </div>
                      </div>

                      <div className="mt-5 flex items-center justify-center gap-3 text-[#5A3D87]">
                        <div className="h-px w-8 bg-gradient-to-r from-transparent to-[#DDD2F1]/45" />
                        <div className="h-[6px] w-[6px] rounded-full bg-[#F7F5F0]/80" />
                        <div className="h-px w-8 bg-gradient-to-l from-transparent to-[#DDD2F1]/45" />
                      </div>

                      <div className="mt-4 text-center">
                        <p className="font-ui text-[13px] leading-relaxed text-[#2D1849]/84">
                          Lahore Garrison Golf & Country Club, Saddar Town, Lahore
                        </p>
                      </div>

                      <div className="mt-6 flex justify-center">
                        <motion.a
                          href="https://maps.app.goo.gl/9hEE47FKfztdhktR6"
                          target="_blank"
                          rel="noreferrer"
                          whileHover={{ y: -2, scale: 1.015 }}
                          whileTap={{ scale: 0.985 }}
                          className="group relative inline-flex w-full max-w-[240px] items-center justify-center overflow-hidden rounded-full border border-[#D2C7E7] bg-[#F8F5FC] px-6 py-3.5 text-center font-ui text-[10px] font-extrabold uppercase tracking-[0.3em] text-[#2D1849] shadow-[0_8px_24px_rgba(78,61,118,0.10)]"
                        >
                          <span className="absolute inset-0 bg-[linear-gradient(120deg,transparent_0%,rgba(255,255,255,0.40)_20%,transparent_38%)] opacity-80 transition-transform duration-700 group-hover:translate-x-full" />
                          <span className="relative">Link to Location</span>
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

      {/* Bottom backdrop */}
      <div
        className="pointer-events-none absolute bottom-0 left-0 right-0 z-[8]"
        style={{
          height: "340px",
          backgroundImage: `url(${backdropBottom})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center bottom",
          backgroundSize: "min(1100px,100%) auto",
          filter: "none",
          mixBlendMode: "normal",
        }}
      />

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
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,253,255,0.96)_0%,rgba(246,240,252,0.90)_42%,rgba(236,229,248,0.84)_100%)] backdrop-blur-md" />

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

                <div className="relative overflow-hidden rounded-[1.75rem] border border-[#DDD4EE] bg-[#FCFAFF] px-8 py-6 shadow-[0_14px_36px_rgba(72,56,109,0.12)]">
                  <p className="font-cursive text-[2.1rem] leading-none text-[#62458A] sm:text-[2.45rem]">
                    Lift the Veil
                  </p>

                  <div className="mx-auto mt-3 flex items-center justify-center gap-3">
                    <div className="h-px w-10 bg-gradient-to-r from-transparent to-[#B4A3D6]/70" />
                    <div className="h-[7px] w-[7px] rounded-full bg-[#F7F5F0] shadow-[0_0_14px_rgba(255,255,255,0.40)]" />
                    <div className="h-px w-10 bg-gradient-to-l from-transparent to-[#B4A3D6]/70" />
                  </div>

                  <p className="mt-4 font-ui text-[10px] font-semibold uppercase tracking-[0.46em] text-[#5A4380]/72">
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