import { useState, useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import jaliPattern from '../../assets/jali.jpg';
import processionMark from '../../assets/boquet.png';
import { guestData } from './guestData';

import floralTopLeft from '../../assets/top-left.png';
import floralBottomRight from '../../assets/bottom-right.png';

const weightedEase = [0.76, 0, 0.24, 1];

const containerVars = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 1.05,
    },
  },
};

const itemVars = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.82,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

function WatermarkRosette() {
  return (
    <motion.svg
      aria-hidden="true"
      viewBox="0 0 600 600"
      className="absolute left-1/2 top-1/2 h-[78vmin] w-[78vmin] -translate-x-1/2 -translate-y-1/2 opacity-[0.07] pointer-events-none"
      animate={{ rotate: 360 }}
      transition={{ duration: 95, repeat: Infinity, ease: 'linear' }}
    >
      <defs>
        <radialGradient id="goldFog">
          <stop offset="0%" stopColor="#F5E1A4" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#C1922E" stopOpacity="0.12" />
        </radialGradient>
      </defs>

      <g fill="none" stroke="url(#goldFog)">
        <circle cx="300" cy="300" r="190" strokeWidth="2" />
        <circle cx="300" cy="300" r="145" strokeWidth="1.5" />
        <circle cx="300" cy="300" r="92" strokeWidth="1.2" />
        {Array.from({ length: 16 }).map((_, i) => (
          <path
            key={i}
            d="M300 78 C322 116 348 136 392 148 C350 164 326 186 300 228 C274 186 250 164 208 148 C252 136 278 116 300 78 Z"
            transform={`rotate(${i * 22.5} 300 300)`}
            strokeWidth="1.05"
          />
        ))}
      </g>
    </motion.svg>
  );
}

function ValanceScallop() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 1440 180"
      className="absolute bottom-0 left-0 h-20 w-full"
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id="valanceFill" x1="0" x2="1">
          <stop offset="0%" stopColor="#22080B" />
          <stop offset="22%" stopColor="#3A0F14" />
          <stop offset="50%" stopColor="#5A1820" />
          <stop offset="78%" stopColor="#3A0F14" />
          <stop offset="100%" stopColor="#22080B" />
        </linearGradient>

        <linearGradient id="valanceTrim" x1="0" x2="1">
          <stop offset="0%" stopColor="#7C5615" />
          <stop offset="22%" stopColor="#C89B2E" />
          <stop offset="50%" stopColor="#FFF0B2" />
          <stop offset="78%" stopColor="#D4AF37" />
          <stop offset="100%" stopColor="#7C5615" />
        </linearGradient>
      </defs>

      <path
        d="M0 0H1440V92Q1380 144 1320 92T1200 92T1080 92T960 92T840 92T720 92T600 92T480 92T360 92T240 92T120 92T0 92Z"
        fill="url(#valanceFill)"
        opacity="0.98"
      />

      <path
        d="M0 92Q60 144 120 92T240 92T360 92T480 92T600 92T720 92T840 92T960 92T1080 92T1200 92T1320 92T1440 92"
        fill="none"
        stroke="url(#valanceTrim)"
        strokeWidth="2.5"
        opacity="0.9"
      />
    </svg>
  );
}

const BaraatCard = () => {
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
        lead: 'MR. & MRS. MUHAMMAD IMRAN REQUEST',
        focus: 'YOUR PRESENCE',
        tail: 'AT THE BARAAT OF THEIR BELOVED DAUGHTER',
        full: 'MR. & MRS. MUHAMMAD IMRAN REQUEST YOUR PRESENCE AT THE BARAAT OF THEIR DAUGHTER',
        isPersonalized: false,
      };
    }

    return {
      lead: 'MR. & MRS. MUHAMMAD IMRAN REQUEST',
      focus: `${toPossessive(guestName)} PRESENCE`,
      tail: 'AT THE BARAAT OF THEIR BELOVED DAUGHTER',
      full: `MR. & MRS. MUHAMMAD IMRAN REQUEST ${toPossessive(guestName)} PRESENCE AT THE BARAAT OF THEIR DAUGHTER`,
      isPersonalized: true,
    };
  }, [guestName]);
  
  useEffect(() => {
    window.scrollTo(0, 0);

    document.documentElement.classList.add('route-baraat');
    document.body.classList.add('route-baraat');

    return () => {
      document.documentElement.classList.remove('route-baraat');
      document.body.classList.remove('route-baraat');
    };
  }, []);

  const leftCurtainVars = {
    closed: { x: '0%' },
    opened: {
      x: ['0%', '1.5%', '-4%', '-108%'],
      transition: {
        duration: 1.85,
        ease: weightedEase,
        times: [0, 0.15, 0.26, 1],
      },
    },
  };

  const rightCurtainVars = {
    closed: { x: '0%' },
    opened: {
      x: ['0%', '-1.5%', '4%', '108%'],
      transition: {
        duration: 1.85,
        ease: weightedEase,
        times: [0, 0.15, 0.26, 1],
      },
    },
  };

  return (
    <section className="relative isolate min-h-[100dvh] overflow-hidden bg-[#FAF2F2] text-[#5B4545]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#FFF8F8_0%,#FCEEEE_35%,#F8E6E6_70%,#F6E2E2_100%)]" />

      <div
        className="absolute inset-0 opacity-[0.05] mix-blend-screen"
        style={{
          backgroundImage: `
            radial-gradient(circle at 20% 20%, rgba(244,225,228,0.08), transparent 22%),
            radial-gradient(circle at 78% 18%, rgba(236,214,217,0.06), transparent 18%),
            radial-gradient(circle at 50% 76%, rgba(232,208,211,0.05), transparent 22%),
            repeating-linear-gradient(
              100deg,
              rgba(255,255,255,0.035) 0px,
              rgba(255,255,255,0.016) 2px,
              transparent 4px,
              transparent 11px
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

      <div
        className="absolute inset-0 opacity-[0.012] mix-blend-screen"
        style={{
          backgroundImage: `url(${jaliPattern})`,
          backgroundRepeat: 'repeat',
          backgroundSize: '300px auto',
          backgroundPosition: 'center',
        }}
      />

      <WatermarkRosette />

      <div className="absolute inset-x-0 top-0 h-48 bg-[radial-gradient(circle_at_top,rgba(236,196,206,0.18),transparent_72%)]" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-[radial-gradient(circle_at_bottom,rgba(232,202,186,0.12),transparent_78%)]" />

      <motion.div
        variants={containerVars}
        initial="hidden"
        animate={isOpened ? 'visible' : 'hidden'}
        className="relative z-10 min-h-[100dvh] px-4 py-8 sm:px-6 sm:py-10"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={
            isOpened
              ? {
                  opacity: 1,
                  scale: 1,
                  y: 0,
                  transition: {
                    delay: 0.72,
                    duration: 0.88,
                    ease: [0.22, 1, 0.36, 1],
                  },
                }
              : {}
          }
          className="mx-auto flex min-h-[calc(100dvh-2rem)] max-w-5xl items-center justify-center"
        >
          <div className="relative w-full max-w-[760px]">
            <motion.div
              variants={itemVars}
              className="pointer-events-none absolute inset-0 -z-10 scale-[1.03] rounded-[2rem] border border-[#E4C461]/15"
            />

            <motion.div
              variants={itemVars}
              className="relative overflow-hidden rounded-[2rem] border border-[#D8BBB7]/50 bg-[linear-gradient(180deg,rgba(255,251,250,0.97)_0%,rgba(252,243,242,0.96)_100%)] shadow-[0_24px_60px_rgba(120,80,80,0.12),inset_0_1px_0_rgba(255,255,255,0.75)] backdrop-blur-xl"
            >
              <div
                className="absolute inset-0 opacity-[0.008] mix-blend-multiply pointer-events-none"
                style={{
                  backgroundImage: `url(${jaliPattern})`,
                  backgroundRepeat: 'repeat',
                  backgroundSize: '240px auto',
                  backgroundPosition: 'center',
                }}
              />

              <div
                className="absolute inset-0 opacity-[0.05] mix-blend-soft-light pointer-events-none"
                style={{
                  backgroundImage: `
                    radial-gradient(rgba(255,255,255,0.18) 0.6px, transparent 0.8px),
                    radial-gradient(rgba(0,0,0,0.16) 0.6px, transparent 0.8px)
                  `,
                  backgroundPosition: '0 0, 8px 8px',
                  backgroundSize: '16px 16px',
                }}
              />

              <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(248,223,223,0.16),transparent_22%,transparent_64%,rgba(240,214,214,0.08)_82%,transparent_100%)]" />
              <div className="absolute inset-[10px] rounded-[1.6rem] border border-[#E5CFCB]/70" />

              {/* Soft floral decorations */}
              <img
                src={floralTopLeft}
                alt=""
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute
                  left-0
                  top-0
                  z-[1]
                  w-[250px]
                  sm:w-[250px]
                  opacity-90
                  select-none
                "
              />

              <img
                src={floralBottomRight}
                alt=""
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute
                  bottom-0
                  right-0
                  z-[30]
                  w-[250px]
                  sm:w-[250px]
                  opacity-90
                  select-none
                "
              />

              <div className="relative z-10 px-6 pb-8 pt-24 sm:px-10 sm:pb-10 sm:pt-28 md:px-14">
                <motion.p
                  variants={itemVars}
                  className="mb-4 sm:mb-5 text-center font-arabic text-[clamp(1.05rem,2.2vw,1.45rem)] leading-relaxed text-[#B99163]"
                  dir="rtl"
                >
                  بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ
                </motion.p>

                <motion.div variants={itemVars} className="mx-auto mb-3 max-w-[46rem] text-center">
                  <p className="sr-only">{inviteAnchor.full}</p>

                  {inviteAnchor.isPersonalized ? (
                    <>
                      <p className="font-ui text-[11px] sm:text-[12px] uppercase tracking-[0.34em] text-[#5F4A46]/92 drop-shadow-[0_1px_10px_rgba(0,0,0,0.18)]">
                        {inviteAnchor.lead}
                      </p>

                      <div className="mt-2.5">
                        <p className="mx-auto max-w-[20ch] leading-[1]">
                          <span className="font-cursive text-[clamp(1.9rem,4.8vw,3.05rem)] text-[#B88484] drop-shadow-[0_2px_8px_rgba(184,132,132,0.10)]">
                            {guestName}
                          </span>
                          <span className="mt-1.5 block font-ui text-[11px] sm:text-[12px] uppercase tracking-[0.34em] text-[#5F4A46]/88">
                            ’S PRESENCE
                          </span>
                        </p>
                      </div>

                      <p className="mt-4 font-display text-[1.05rem] sm:text-[1.35rem] uppercase tracking-[0.22em] text-[#A97B5C]">
                        {inviteAnchor.tail}
                      </p>
                    </>
                  ) : (
                    <>
                      <p className="mx-auto max-w-[36rem] font-ui text-[11px] sm:text-[13px] uppercase tracking-[0.3em] leading-[1.9] text-[#5F4A46]/94 drop-shadow-[0_1px_10px_rgba(0,0,0,0.18)]">
                        MR. &amp; MRS. MUHAMMAD IMRAN<br/> REQUEST YOUR PRESENCE
                      </p>

                      <p className="mt-4 font-display text-[1.05rem] sm:text-[1.35rem] uppercase tracking-[0.22em] text-[#A97B5C]">
                        AT THE BARAAT OF THEIR BELOVED DAUGHTER
                      </p>
                    </>
                  )}
                </motion.div>

                <motion.div variants={itemVars} className="mb-7 mt-6 text-center">
                  <h1 className="font-display text-[clamp(2rem,5.3vw,4.15rem)] font-bold uppercase leading-[0.92] tracking-[-0.03em] text-[#6E4B4B] drop-shadow-[0_2px_6px_rgba(120,90,90,0.08)]">
                    Maryam Imran
                  </h1>

                  <p className="my-2 font-cursive text-[1.85rem] text-[#B88484] sm:my-3 sm:text-[2.2rem]">
                    and
                  </p>

                  <h1 className="font-display text-[clamp(2rem,5.3vw,4.15rem)] font-bold uppercase leading-[0.92] tracking-[-0.03em] text-[#6E4B4B] drop-shadow-[0_2px_6px_rgba(120,90,90,0.08)]">
                    Ramooz Tahir
                  </h1>
                </motion.div>

                <motion.div variants={itemVars} className="mt-4">
                  <div className="relative overflow-hidden rounded-[2rem] border border-[#E5CFCB]/70 bg-[linear-gradient(180deg,rgba(255,252,251,0.96)_0%,rgba(250,242,241,0.94)_45%,rgba(246,233,232,0.94)_100%)] px-5 py-5 shadow-[0_22px_60px_rgba(0,0,0,0.30),inset_0_1px_0_rgba(255,255,255,0.14)] backdrop-blur-xl sm:px-7 sm:py-6">
                    {/* warm plaque wash */}
                    <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.16)_0%,rgba(255,255,255,0.06)_18%,rgba(255,255,255,0.025)_52%,rgba(255,255,255,0.07)_82%,rgba(255,255,255,0.14)_100%)]" />

                    {/* soft gold edge bloom */}
                    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(244,225,228,0.10),transparent_42%),radial-gradient(circle_at_bottom,rgba(236,214,217,0.08),transparent_44%)]" />

                    {/* subtle jali atmosphere */}
                    <div
                      className="pointer-events-none absolute inset-0 opacity-[0.035] mix-blend-screen"
                      style={{
                        backgroundImage: `url(${jaliPattern})`,
                        backgroundRepeat: 'repeat',
                        backgroundSize: '220px auto',
                        backgroundPosition: 'center',
                      }}
                    />

                    {/* inner rim */}
                    <div className="pointer-events-none absolute inset-[1px] rounded-[calc(2rem-1px)] border border-[#E5CFCB]/50" />

                    <div className="relative z-10 text-center">
                      <div className="flex items-center justify-center gap-3 text-[#A97B5C]">
                        <div className="h-px w-9 bg-gradient-to-r from-transparent to-[#DDBEBB] sm:w-12" />
                        <p className="font-ui text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.34em] text-[#A97B5C]/92">
                          Baraat &amp; Dinner
                        </p>
                        <div className="h-px w-9 bg-gradient-to-l from-transparent to-[#DDBEBB] sm:w-12" />
                      </div>

                      <div className="mt-4 flex justify-center">
                        <div className="relative flex h-24 w-32 items-center justify-center sm:h-28 sm:w-36">
                          <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(240,214,214,0.16),transparent_70%)] scale-125" />
                          <img
                            src={processionMark}
                            alt=""
                            aria-hidden="true"
                            className="mx-auto mt-8 w-44 sm:w-52 opacity-75 contrast-90 saturate-75 select-none pointer-events-none"
                          />
                        </div>
                      </div>

                      <div className="mt-10 text-center">
                        <p className="font-ui text-[15px] sm:text-[12px] tracking-[0.28em] text-[#8C746F]">
                          Sheesh Mehal
                        </p>
                        <p className="my-2 font-display text-[1.05rem] sm:text-[2.05rem] uppercase leading-none text-[#A97B5C] drop-shadow-[0_2px_14px_rgba(0,0,0,0.22)]">
                          @ Islamabad Hotel
                        </p>
                      </div>

                      <div className="mt-1 grid grid-cols-2 gap-3 sm:gap-4">
                        <div className="rounded-[1.15rem] border border-[#E5CFCB]/60 bg-white/[0.03] px-3 py-3.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
                          <p className="font-ui text-[9px] sm:text-[10px] uppercase tracking-[0.28em] text-[#A97B5C]/84">
                            Date
                          </p>
                          <p className="mt-2 font-display text-[1.15rem] sm:text-[1.3rem] leading-none text-[#5F4A46]">
                            Saturday
                          </p>
                          <p className="mt-2 font-ui text-[11px] sm:text-[12px] uppercase tracking-[0.18em] text-[#7A6662]">
                            01 August 2026
                          </p>
                        </div>

                        <div className="rounded-[1.15rem] border border-[#E5CFCB]/60 bg-white/[0.03] px-3 py-3.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
                          <p className="font-ui text-[9px] sm:text-[10px] uppercase tracking-[0.28em] text-[#A97B5C]/84">
                            Time
                          </p>
                          <p className="mt-2 font-display text-[1.15rem] sm:text-[1.3rem] leading-none text-[#5F4A46]">
                            7:00 PM
                          </p>
                          <p className="mt-2 font-ui text-[11px] sm:text-[12px] uppercase tracking-[0.18em] text-[#7A6662]">
                            Onwards
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center justify-center">
                        <div className="h-px w-12 bg-[#DDBEBB]" />
                        <div className="mx-3 text-[#C7A6A3] text-lg">❀</div>
                        <div className="h-px w-12 bg-[#DDBEBB]" />
                      </div>

                      <p className="mt-4 font-ui text-[13px] leading-relaxed text-[#7A6662]">
                         G-6 Markaz, Islamabad
                      </p>

                      <div className="my-5 flex justify-center">
                        <motion.a
                          href="https://maps.app.goo.gl/3UzAZJ19NFsTqpjV9"
                          target="_blank"
                          rel="noreferrer"
                          whileHover={{ y: -2, scale: 1.015 }}
                          whileTap={{ scale: 0.985 }}
                          className="inline-flex items-center justify-center gap-2 rounded-full border border-[#DDBEBB] bg-[#FDF6F5] px-5 py-2.5 text-sm font-medium text-[#7A5A57] shadow-[0_2px_8px_rgba(120,90,90,0.08)] transition-all duration-200 hover:bg-[#F8ECEB] hover:border-[#CFA5A1] hover:shadow-[0_4px_12px_rgba(120,90,90,0.12)]
"
                          style={{
                            background:
                              'linear-gradient(135deg, #f7e8e8 0%, #efd8d8 45%, #e7caca 100%)',
                          }}
                        >
                          <span className="absolute inset-0 bg-[linear-gradient(120deg,transparent_0%,rgba(255,255,255,0.35)_20%,transparent_38%)] opacity-70 transition-transform duration-700 group-hover:translate-x-full" />
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

      <AnimatePresence>
        {!isOpened && (
          <motion.div
            key="curtain-overlay"
            className="fixed inset-0 z-50"
            exit={{ opacity: 0, transition: { delay: 1.15, duration: 0.35 } }}
          >
            {/* stage darkener */}
            <div className="pointer-events-none absolute inset-0 bg-white/5" />

            {/* top valance */}
            <div className="pointer-events-none absolute inset-x-0 top-0 z-30 h-24 sm:h-28">
              <div
                className="absolute inset-0"
                style={{
                  background:
                    'linear-gradient(180deg,#F9F0EF 0%,#F5E5E3 38%,#F2DEDC 72%,#F8EFEE 100%)',
                  boxShadow:
                    'inset 0 -10px 18px rgba(160,120,120,0.08), inset 0 1px 0 rgba(255,255,255,0.35)',
                }}
              />
              <div
                className="absolute inset-0 opacity-75"
                style={{
                  backgroundImage: `
                    repeating-linear-gradient(
                      90deg,
                      rgba(190,150,150,0.06) 0px,
                      rgba(190,150,150,0.06) 12px,
                      transparent 12px,
                      transparent 28px
                    ),
                    linear-gradient(
                      180deg,
                      rgba(255,255,255,0.20),
                      rgba(255,255,255,0.02)
                    )
                  `,
                }}
              />
              <ValanceScallop />
            </div>

            {/* center seam shadow */}
            <div className="pointer-events-none absolute inset-y-0 left-1/2 z-20 w-10 -translate-x-1/2 bg-[radial-gradient(ellipse_at_center,rgba(180,150,150,0.12),transparent_72%)]" />

            {/* center clasp + hanging plaque */}
            <div className="absolute left-1/2 top-[41%] z-40 -translate-x-1/2 -translate-y-1/2">
              <motion.button
                type="button"
                onClick={() => setIsOpened(true)}
                whileHover={{ y: -1, scale: 1.015 }}
                whileTap={{ scale: 0.975, y: 1 }}
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="relative"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-[#DDBEBB] bg-[#FFF8F7] shadow-[0_4px_12px_rgba(120,90,90,0.10)]">
                  <span className="text-xl text-[#B88484]">❀</span>
                </div>

                <div className="mx-auto h-6 w-px bg-gradient-to-b from-[#DDBEBB] to-transparent opacity-80" />

                <div className="relative overflow-hidden rounded-[1.4rem] border border-[#E5CFCB] bg-[linear-gradient(180deg,rgba(255,252,251,0.99)_0%,rgba(248,236,235,0.99)_100%)] px-6 py-4 shadow-[0_12px_28px_rgba(120,90,90,0.10),inset_0_1px_0_rgba(255,255,255,0.55)]">
                  <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.08),transparent_35%,transparent_72%,rgba(255,255,255,0.03))]" />
                  <div className="pointer-events-none absolute inset-[1px] rounded-[calc(1.4rem-1px)] border border-white/20" />

                  <div className="relative text-center">
                    <p className="font-cursive text-[2rem] leading-none text-[#6E4B4B] sm:text-[2.35rem]">
                      Open Invitation
                    </p>

                    <div className="mx-auto mt-3 flex items-center justify-center gap-3">
                      <div className="h-px w-10 bg-gradient-to-r from-transparent to-[#DDBEBB]" />
                      <div className="text-[#C7A6A3] text-sm">❀</div>
                      <div className="h-px w-10 bg-gradient-to-l from-transparent to-[#DDBEBB]" />
                    </div>

                    <p className="mt-3 font-ui text-[10px] font-semibold uppercase tracking-[0.24em] text-[#7A6662]">
                      Tap to Reveal
                    </p>
                  </div>
                </div>
              </motion.button>
            </div>

            {/* left drape */}
            <motion.div
              variants={leftCurtainVars}
              initial="closed"
              animate={isOpened ? 'opened' : 'closed'}
              className="absolute inset-y-0 left-0 z-20 w-[52%] overflow-hidden rounded-r-[2rem] border-r border-[#E5CFCB]/40"
              style={{
                willChange: 'transform',
                background: 'linear-gradient(90deg,#F9F0EF 0%,#F4E4E2 22%,#FFFDFC 50%,#F4E4E2 78%,#F9F0EF 100%)',
                boxShadow: 'inset -10px 0 16px rgba(180,140,140,0.08)',
              }}
            >
              <div
                className="absolute inset-0 opacity-85"
                style={{
                  backgroundImage: `
                    repeating-linear-gradient(
                      90deg,
                      rgba(190,150,150,0.08) 0px,
                      rgba(190,150,150,0.08) 10px,
                      transparent 10px,
                      transparent 26px
                    ),
                    linear-gradient(
                      180deg,
                      rgba(255,255,255,0.14),
                      rgba(255,255,255,0.02)
                    )
                  `,
                }}
              />

              {/* center gathers */}
              <div className="absolute inset-y-0 right-0 w-12 bg-[linear-gradient(90deg,rgba(0,0,0,0.20),rgba(255,255,255,0.03),rgba(0,0,0,0.16))] opacity-90" />

              {/* static sheen */}
              <div className="absolute inset-y-0 right-10 w-20 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.10),transparent)] opacity-70 blur-sm" />

              {/* gold trim */}
              <div className="absolute right-0 top-1/2 h-44 w-[2px] -translate-y-1/2 bg-gradient-to-b from-transparent via-[#DDBEBB] to-transparent opacity-80" />

              <div className="absolute inset-x-0 bottom-0 h-24 bg-[linear-gradient(180deg,transparent,rgba(120,90,90,0.08))]" />
            </motion.div>

            {/* right drape */}
            <motion.div
              variants={rightCurtainVars}
              initial="closed"
              animate={isOpened ? 'opened' : 'closed'}
              className="absolute inset-y-0 right-0 z-20 w-[52%] overflow-hidden rounded-l-[2rem] border-l border-[#E5CFCB]/40"
              style={{
                willChange: 'transform',
                background: 'linear-gradient(270deg,#F9F0EF 0%,#F4E4E2 22%,#FFFDFC 50%,#F4E4E2 78%,#F9F0EF 100%)',
                boxShadow: 'inset 10px 0 16px rgba(180,140,140,0.08)',
              }}
            >
              <div
                className="absolute inset-0 opacity-85"
                style={{
                  backgroundImage: `
                    repeating-linear-gradient(
                      90deg,
                      rgba(190,150,150,0.08) 0px,
                      rgba(190,150,150,0.08) 10px,
                      transparent 10px,
                      transparent 26px
                    ),
                    linear-gradient(
                      180deg,
                      rgba(255,255,255,0.14),
                      rgba(255,255,255,0.02)
                    )
                  `,
                }}
              />

              {/* center gathers */}
              <div className="absolute inset-y-0 left-0 w-12 bg-[linear-gradient(90deg,rgba(0,0,0,0.16),rgba(255,255,255,0.03),rgba(0,0,0,0.20))] opacity-90" />

              {/* static sheen */}
              <div className="absolute inset-y-0 left-10 w-20 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.10),transparent)] opacity-70 blur-sm" />

              {/* gold trim */}
              <div className="absolute left-0 top-1/2 h-44 w-[2px] -translate-y-1/2 bg-gradient-to-b from-transparent via-[#DDBEBB] to-transparent opacity-80" />

              <div className="absolute inset-x-0 bottom-0 h-24 bg-[linear-gradient(180deg,transparent,rgba(120,90,90,0.08))]" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default BaraatCard;