import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import jaliPattern from '../../assets/jali.jpg';

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
  hidden: { opacity: 0, y: 22, filter: 'blur(8px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.9,
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

function ArchDivider() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 360 44"
      className="h-5 w-[180px] sm:h-6 sm:w-[240px]"
    >
      <defs>
        <linearGradient id="archDividerGold" x1="0" x2="1">
          <stop offset="0%" stopColor="#7C5615" />
          <stop offset="22%" stopColor="#C89B2E" />
          <stop offset="50%" stopColor="#FFF0B2" />
          <stop offset="78%" stopColor="#D4AF37" />
          <stop offset="100%" stopColor="#7C5615" />
        </linearGradient>
      </defs>

      <g
        fill="none"
        stroke="url(#archDividerGold)"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* side lines */}
        <path d="M16 22 H108" strokeWidth="1.2" opacity="0.85" />
        <path d="M252 22 H344" strokeWidth="1.2" opacity="0.85" />

        {/* balanced dots */}
        <circle cx="122" cy="22" r="2.2" fill="#DAB85A" stroke="none" />
        <circle cx="238" cy="22" r="2.2" fill="#DAB85A" stroke="none" />

        {/* centered outer arch */}
        <path
          d="
            M138 28
            C138 20, 144 14, 152 13
            C155 8, 161 5, 168 5
            C173 5, 177 7, 180 11
            C183 7, 187 5, 192 5
            C199 5, 205 8, 208 13
            C216 14, 222 20, 222 28
          "
          strokeWidth="1.45"
        />

        {/* centered inner echo */}
        <path
          d="
            M150 28
            C150 22, 155 18, 161 17
            C164 13, 171 10, 180 10
            C189 10, 196 13, 199 17
            C205 18, 210 22, 210 28
          "
          strokeWidth="1"
          opacity="0.82"
        />

        {/* arch base */}
        <path d="M138 28 H222" strokeWidth="1.05" opacity="0.82" />
      </g>
    </svg>
  );
}

function CornerFlourish({ className = '' }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 100 100" className={className}>
      <defs>
        <linearGradient id="cornerGold" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#8C6316" />
          <stop offset="40%" stopColor="#E6C35A" />
          <stop offset="100%" stopColor="#FFF0B2" />
        </linearGradient>
      </defs>
      <g fill="none" stroke="url(#cornerGold)" strokeWidth="1.8" strokeLinecap="round">
        <path d="M10 90 C10 45 45 10 90 10" />
        <path d="M26 90 C26 54 54 26 90 26" />
        <path d="M10 72 C28 72 28 54 46 54 C64 54 64 36 82 36" />
        <circle cx="52" cy="52" r="5" />
      </g>
    </svg>
  );
}

function ArchCartouche() {
  return (
    <svg aria-hidden="true" viewBox="0 0 240 120" className="h-16 w-[160px] sm:h-20 sm:w-[210px]">
      <defs>
        <linearGradient id="cartoucheGold" x1="0" x2="1">
          <stop offset="0%" stopColor="#8C6316" />
          <stop offset="25%" stopColor="#DAB14B" />
          <stop offset="50%" stopColor="#FFF0B2" />
          <stop offset="75%" stopColor="#D2A232" />
          <stop offset="100%" stopColor="#8C6316" />
        </linearGradient>
      </defs>

      <g fill="none" stroke="url(#cartoucheGold)" strokeLinecap="round" strokeLinejoin="round">
        <path
          d="M26 98
             Q26 44 70 28
             Q86 6 120 6
             Q154 6 170 28
             Q214 44 214 98"
          strokeWidth="2.4"
        />
        <path
          d="M42 98
             Q42 54 80 40
             Q94 22 120 22
             Q146 22 160 40
             Q198 54 198 98"
          strokeWidth="1.5"
          opacity="0.8"
        />
        <path d="M78 74 C94 62 102 58 120 58 C138 58 146 62 162 74" strokeWidth="1.4" />
        <path d="M86 84 C102 76 108 74 120 74 C132 74 138 76 154 84" strokeWidth="1.2" opacity="0.85" />
        <circle cx="120" cy="44" r="5.5" strokeWidth="1.5" />
        <circle cx="120" cy="44" r="2.4" fill="#F4DE95" stroke="none" />
        <path d="M56 98 H184" strokeWidth="1.4" opacity="0.75" />
      </g>
    </svg>
  );
}

const BaraatCard = () => {
  const [isOpened, setIsOpened] = useState(false);

  const leftCurtainVars = {
    closed: { x: '0%' },
    opened: {
      x: ['0%', '2%', '-6%', '-103%'],
      transition: {
        duration: 2.1,
        ease: weightedEase,
        times: [0, 0.12, 0.24, 1],
      },
    },
  };

  const rightCurtainVars = {
    closed: { x: '0%' },
    opened: {
      x: ['0%', '-2%', '6%', '103%'],
      transition: {
        duration: 2.1,
        ease: weightedEase,
        times: [0, 0.12, 0.24, 1],
      },
    },
  };

  return (
    <section className="relative isolate min-h-[100svh] overflow-hidden bg-[#3A0F14] text-[#F8F1DE]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#5A1820_0%,#3A0F14_32%,#2A0B0F_68%,#1E080B_100%)]" />

      <div
        className="absolute inset-0 opacity-[0.11] mix-blend-screen"
        style={{
          backgroundImage: `
            radial-gradient(circle at 20% 20%, rgba(255,240,178,0.065), transparent 22%),
            radial-gradient(circle at 78% 18%, rgba(255,240,178,0.04), transparent 18%),
            radial-gradient(circle at 50% 76%, rgba(255,240,178,0.03), transparent 22%),
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
        className="absolute inset-0 opacity-[0.03] mix-blend-screen"
        style={{
          backgroundImage: `url(${jaliPattern})`,
          backgroundRepeat: 'repeat',
          backgroundSize: '300px auto',
          backgroundPosition: 'center',
        }}
      />

      <WatermarkRosette />

      <div className="absolute inset-x-0 top-0 h-48 bg-[radial-gradient(circle_at_top,rgba(236,205,114,0.16),transparent_70%)]" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-[radial-gradient(circle_at_bottom,rgba(236,205,114,0.10),transparent_75%)]" />

      <motion.div
        variants={containerVars}
        initial="hidden"
        animate={isOpened ? 'visible' : 'hidden'}
        className="relative z-10 min-h-[100svh] px-4 py-8 sm:px-6 sm:py-10"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 30, filter: 'blur(10px)' }}
          animate={
            isOpened
              ? {
                  opacity: 1,
                  scale: 1,
                  y: 0,
                  filter: 'blur(0px)',
                  transition: {
                    delay: 0.85,
                    duration: 1.2,
                    ease: [0.22, 1, 0.36, 1],
                  },
                }
              : {}
          }
          className="mx-auto flex min-h-[calc(100svh-2rem)] max-w-5xl items-center justify-center"
        >
          <div className="relative w-full max-w-[760px]">
            <motion.div
              variants={itemVars}
              className="pointer-events-none absolute inset-0 -z-10 scale-[1.03] rounded-t-[8rem] rounded-b-[2rem] border border-[#E4C461]/15"
            />

            <motion.div
              variants={itemVars}
              className="relative overflow-hidden rounded-t-[8rem] rounded-b-[2rem] border border-[#E2C35F]/30 bg-[linear-gradient(180deg,rgba(68,18,24,0.92)_0%,rgba(30,8,11,0.95)_100%)] shadow-[0_35px_80px_rgba(0,0,0,0.45),inset_0_1px_0_rgba(255,241,198,0.14)] backdrop-blur-xl"
            >
              <div
                className="absolute inset-0 opacity-[0.02] mix-blend-screen pointer-events-none"
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

              <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,241,198,0.12),transparent_18%,transparent_60%,rgba(255,241,198,0.05)_78%,transparent_100%)]" />
              <div className="absolute inset-[10px] rounded-t-[7.2rem] rounded-b-[1.6rem] border border-[#E2C35F]/15" />

              <motion.div
                variants={itemVars}
                className="absolute left-1/2 top-4 z-20 -translate-x-1/2"
              >
                <ArchCartouche />
              </motion.div>

              <CornerFlourish className="absolute left-4 top-4 h-14 w-14 opacity-55" />
              <CornerFlourish className="absolute right-4 top-4 h-14 w-14 rotate-90 opacity-55" />
              <CornerFlourish className="absolute bottom-4 left-4 h-14 w-14 -rotate-90 opacity-55" />
              <CornerFlourish className="absolute bottom-4 right-4 h-14 w-14 rotate-180 opacity-55" />

              <div className="relative px-6 pb-8 pt-24 sm:px-10 sm:pb-10 sm:pt-28 md:px-14">
                <motion.p
                  variants={itemVars}
                  className="mb-4 sm:mb-5 text-center font-arabic text-[clamp(1.05rem,2.2vw,1.45rem)] leading-relaxed text-[#E7C86A]"
                  dir="rtl"
                >
                  بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ
                </motion.p>

                <motion.div variants={itemVars} className="mb-4 flex justify-center">
                  <ArchDivider />
                </motion.div>

                <motion.div variants={itemVars} className="mx-auto max-w-[34rem] text-center">
                  <p className="font-ui text-[10px] sm:text-[11px] uppercase tracking-[0.38em] text-[#F8F1DE]/72">
                    Mr. &amp; Mrs. Imran request the pleasure of your company
                  </p>

                  <p className="mt-4 font-display text-[1.05rem] sm:text-[1.35rem] uppercase tracking-[0.26em] text-[#E7C86A]">
                    At the Baraat of
                  </p>
                </motion.div>

                <motion.div variants={itemVars} className="mb-7 mt-6 text-center">
                  <h1 className="font-display text-[clamp(2rem,5.3vw,4.15rem)] font-bold uppercase leading-[0.92] tracking-[-0.03em] text-[#FBF4E4] drop-shadow-[0_8px_25px_rgba(0,0,0,0.35)]">
                    Ramooz Tahir
                  </h1>

                  <p className="my-2 font-cursive text-[1.85rem] text-[#E7C86A] sm:my-3 sm:text-[2.2rem]">
                    and
                  </p>

                  <h1 className="font-display text-[clamp(2rem,5.3vw,4.15rem)] font-bold uppercase leading-[0.92] tracking-[-0.03em] text-[#FBF4E4] drop-shadow-[0_8px_25px_rgba(0,0,0,0.35)]">
                    Maryam Imran
                  </h1>
                </motion.div>

                <motion.div variants={itemVars} className="mb-8 flex justify-center">
                  <div className="rotate-180">
                    <ArchDivider />
                  </div>
                </motion.div>

                <motion.div variants={itemVars} className="mt-3">
                  <div className="relative overflow-hidden rounded-[2rem] border border-white/18 bg-white/[0.03] px-5 py-6 shadow-[0_20px_55px_rgba(0,0,0,0.26),inset_0_1px_0_rgba(255,255,255,0.22)] backdrop-blur-2xl sm:px-7 sm:py-7">
                    {/* heavier frosted white body */}
                    <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.22)_0%,rgba(255,255,255,0.10)_18%,rgba(255,255,255,0.045)_48%,rgba(255,255,255,0.10)_78%,rgba(255,255,255,0.24)_100%)]" />

                    {/* milky top and bottom bloom */}
                    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,248,230,0.22),transparent_40%),radial-gradient(circle_at_bottom,rgba(255,248,230,0.2),transparent_40%)]" />

                    {/* faint center depth so it doesn't go flat */}
                    <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,transparent_0%,rgba(30,8,11,0.04)_35%,rgba(30,8,11,0.08)_50%,rgba(30,8,11,0.04)_65%,transparent_100%)]" />

                    {/* frosted haze */}
                    <div className="pointer-events-none absolute inset-0 bg-white/[0.015]" />

                    {/* glass rim */}
                    <div className="pointer-events-none absolute inset-[1px] rounded-[calc(2rem-1px)] border border-white/12" />

                    {/* subtle gold tint */}
                    <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(212,175,55,0.06),transparent_28%,transparent_72%,rgba(212,175,55,0.04))]" />

                    <div className="relative z-10">
                      <div className="mb-5 flex items-center justify-center gap-3 text-[#E7C86A]">
                        <div className="h-px w-8 bg-gradient-to-r from-transparent to-[#D4AF37]/75 sm:w-10" />
                        <p className="font-ui text-[11px] font-semibold uppercase tracking-[0.32em] text-[#E7C86A] drop-shadow-[0_1px_8px_rgba(0,0,0,0.22)]">
                          Event Details
                        </p>
                        <div className="h-px w-8 bg-gradient-to-l from-transparent to-[#D4AF37]/75 sm:w-10" />
                      </div>

                      <div className="grid gap-6 md:grid-cols-[1fr_auto_1fr] md:items-center md:gap-8">
                        {/* When */}
                        <div className="text-center md:text-right">
                          <p className="mb-2 font-ui text-[11px] font-semibold uppercase tracking-[0.28em] text-[#E7C86A] drop-shadow-[0_1px_6px_rgba(0,0,0,0.18)]">
                            When
                          </p>
                          <p className="font-display text-[1.65rem] leading-none text-[#FFF8EB] drop-shadow-[0_2px_12px_rgba(0,0,0,0.22)] sm:text-[1.8rem]">
                            Saturday
                          </p>
                        </div>

                        {/* lifted date centerpiece */}
                        <div className="relative mx-auto">
                          <div className="absolute inset-0 translate-y-2 scale-[0.94] rounded-full bg-black/28 blur-xl" />

                          <div className="relative flex h-[126px] w-[126px] items-center justify-center rounded-full border border-white/28 bg-[linear-gradient(180deg,rgba(255,255,255,0.18)_0%,rgba(255,255,255,0.08)_42%,rgba(0,0,0,0.03)_100%)] shadow-[0_26px_55px_rgba(0,0,0,0.28),inset_0_2px_14px_rgba(255,255,255,0.20)] backdrop-blur-2xl sm:h-[140px] sm:w-[140px]">
                            <div className="absolute -inset-[2px] rounded-full border border-[#E0BD5A]/30" />
                            <div className="absolute inset-[10px] rounded-full border border-white/14" />
                            <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_35%_24%,rgba(255,245,210,0.30),transparent_38%,rgba(0,0,0,0.02)_100%)]" />

                            <div className="relative text-center">
                              <p className="font-ui text-[11px] font-semibold uppercase tracking-[0.3em] text-[#E7C86A] drop-shadow-[0_1px_6px_rgba(0,0,0,0.22)]">
                                Aug
                              </p>
                              <p className="mt-1 font-ui text-[3rem] leading-none font-extrabold tracking-tight text-[#FFF2C2] tabular-nums drop-shadow-[0_2px_14px_rgba(0,0,0,0.26)] sm:text-[3.3rem]">
                                01
                              </p>
                              <p className="mt-1 font-ui text-[12px] font-medium uppercase tracking-[0.24em] text-[#FFF8EB]/88">
                                2026
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* Where */}
                        <div className="text-center md:text-left">
                          <p className="mb-2 font-ui text-[11px] font-semibold uppercase tracking-[0.28em] text-[#E7C86A] drop-shadow-[0_1px_6px_rgba(0,0,0,0.18)]">
                            Where
                          </p>
                          <p className="font-display text-[1.5rem] leading-tight text-[#FFF8EB] drop-shadow-[0_2px_12px_rgba(0,0,0,0.22)] sm:text-[1.65rem]">
                            Placeholder Luxury Marquee
                          </p>
                          <p className="mt-2 font-ui text-[13px] leading-relaxed text-[#F8F1DE]/88">
                            Plot 123, Diplomatic Enclave, Islamabad
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  variants={itemVars}
                  className="mt-7 flex flex-col items-center gap-4"
                >
                  <div className="flex items-center gap-3 text-[#E7C86A]">
                    <div className="h-px w-10 bg-gradient-to-r from-transparent to-[#D4AF37]/70" />
                    <p className="font-ui text-[10px] font-semibold uppercase tracking-[0.42em] text-[#E7C86A]/90">
                      Baraat &amp; Dinner
                    </p>
                    <div className="h-px w-10 bg-gradient-to-l from-transparent to-[#D4AF37]/70" />
                  </div>

                  <motion.a
                    href="#"
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ y: -2, scale: 1.015 }}
                    whileTap={{ scale: 0.985 }}
                    className="group relative inline-flex w-full max-w-[240px] sm:max-w-[260px] items-center justify-center overflow-hidden rounded-full px-6 py-3.5 text-center font-ui text-[10px] font-extrabold uppercase tracking-[0.28em] text-[#2A082F] shadow-[0_16px_40px_rgba(0,0,0,0.35),inset_0_2px_8px_rgba(255,255,255,0.35)]"
                    style={{
                      background:
                        'linear-gradient(135deg, #8a6319 0%, #d4af37 22%, #fff0af 50%, #c99c2d 70%, #7c5615 100%)',
                    }}
                  >
                    <span className="absolute inset-0 bg-[linear-gradient(120deg,transparent_0%,rgba(255,255,255,0.35)_20%,transparent_38%)] opacity-70 transition-transform duration-700 group-hover:translate-x-full" />
                    <span className="relative">Location</span>
                  </motion.a>
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
            className="fixed inset-0 z-50 flex"
            exit={{ opacity: 0, transition: { delay: 1.35, duration: 0.45 } }}
          >
            {/* center interaction plaque */}
            <motion.div className="pointer-events-none absolute inset-0 z-30 flex items-center justify-center px-6">
              <motion.button
                type="button"
                onClick={() => setIsOpened(true)}
                whileHover={{ y: -2, scale: 1.015 }}
                whileTap={{ scale: 0.975, y: 1 }}
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  y: [0, -3, 0],
                }}
                transition={{
                  opacity: { duration: 0.6 },
                  scale: { duration: 0.6 },
                  y: { duration: 2.8, repeat: Infinity, ease: 'easeInOut' },
                }}
                className="pointer-events-auto relative overflow-hidden rounded-[1.75rem] border border-[#E7C86A]/30 bg-[linear-gradient(180deg,rgba(255,248,235,0.10)_0%,rgba(255,255,255,0.03)_100%)] px-8 py-6 shadow-[0_22px_60px_rgba(0,0,0,0.38),inset_0_1px_0_rgba(255,255,255,0.18)] backdrop-blur-xl"
              >
                {/* subtle gloss */}
                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.16),transparent_28%,transparent_68%,rgba(255,255,255,0.06))]" />

                {/* inner border */}
                <div className="pointer-events-none absolute inset-[1px] rounded-[calc(1.75rem-1px)] border border-white/8" />

                <div className="relative text-center">
                  <p className="font-cursive text-[2.2rem] leading-none text-[#F0D98A] sm:text-[2.6rem]">
                    Open Invitation
                  </p>

                  <div className="mx-auto mt-3 flex items-center justify-center gap-3">
                    <div className="h-px w-10 bg-gradient-to-r from-transparent to-[#D4AF37]/70" />
                    <div className="h-[7px] w-[7px] rounded-full bg-[#D4AF37]/80 shadow-[0_0_12px_rgba(212,175,55,0.35)]" />
                    <div className="h-px w-10 bg-gradient-to-l from-transparent to-[#D4AF37]/70" />
                  </div>

                  <p className="mt-4 font-ui text-[10px] font-semibold uppercase tracking-[0.48em] text-[#F8F1DE]/72">
                    Tap to Reveal
                  </p>
                </div>
              </motion.button>
            </motion.div>

            {/* left curtain */}
            <motion.div
              variants={leftCurtainVars}
              initial="closed"
              animate={isOpened ? 'opened' : 'closed'}
              className="relative h-full w-1/2 overflow-hidden border-r border-[#E7C86A]/12"
              style={{
                background:
                  'linear-gradient(90deg, #120506 0%, #1E080B 16%, #3A0F14 34%, #5A1820 52%, #341014 70%, #180708 100%)',
                boxShadow:
                  'inset -26px 0 52px rgba(0,0,0,0.50), inset 0 0 0 1px rgba(255,235,180,0.04)',
              }}
            >
              {/* velvet folds */}
              <div
                className="absolute inset-0 opacity-85"
                style={{
                  backgroundImage: `
                    repeating-linear-gradient(
                      90deg,
                      rgba(255,255,255,0.018) 0px,
                      rgba(255,255,255,0.018) 16px,
                      rgba(0,0,0,0.10) 30px,
                      rgba(255,255,255,0.008) 44px,
                      rgba(0,0,0,0.14) 60px
                    ),
                    radial-gradient(circle at 34% 28%, rgba(255,234,188,0.08), transparent 24%),
                    linear-gradient(180deg, rgba(255,255,255,0.025), rgba(0,0,0,0.16))
                  `,
                }}
              />

              {/* moving velvet sheen */}
              <motion.div
                animate={{ x: ['-25%', '10%', '-25%'] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute inset-y-0 right-10 w-24 bg-[linear-gradient(90deg,transparent,rgba(255,241,198,0.14),transparent)] blur-md"
              />

              {/* center trim */}
              <div className="absolute right-0 top-1/2 h-40 w-[2px] -translate-y-1/2 bg-gradient-to-b from-transparent via-[#D4AF37] to-transparent opacity-75" />

              {/* bottom fade */}
              <div className="absolute inset-x-0 bottom-0 h-24 bg-[linear-gradient(180deg,transparent,rgba(0,0,0,0.16))]" />
            </motion.div>

            {/* right curtain */}
            <motion.div
              variants={rightCurtainVars}
              initial="closed"
              animate={isOpened ? 'opened' : 'closed'}
              className="relative h-full w-1/2 overflow-hidden border-l border-[#E7C86A]/12"
              style={{
                background:
                  'linear-gradient(270deg, #120506 0%, #1E080B 16%, #3A0F14 34%, #5A1820 52%, #341014 70%, #180708 100%)',
                boxShadow:
                  'inset 26px 0 52px rgba(0,0,0,0.50), inset 0 0 0 1px rgba(255,235,180,0.04)',
              }}
            >
              <div
                className="absolute inset-0 opacity-85"
                style={{
                  backgroundImage: `
                    repeating-linear-gradient(
                      90deg,
                      rgba(255,255,255,0.018) 0px,
                      rgba(255,255,255,0.018) 16px,
                      rgba(0,0,0,0.10) 30px,
                      rgba(255,255,255,0.008) 44px,
                      rgba(0,0,0,0.14) 60px
                    ),
                    radial-gradient(circle at 66% 28%, rgba(255,234,188,0.08), transparent 24%),
                    linear-gradient(180deg, rgba(255,255,255,0.025), rgba(0,0,0,0.16))
                  `,
                }}
              />

              <motion.div
                animate={{ x: ['25%', '-10%', '25%'] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute inset-y-0 left-10 w-24 bg-[linear-gradient(90deg,transparent,rgba(255,241,198,0.14),transparent)] blur-md"
              />

              <div className="absolute left-0 top-1/2 h-40 w-[2px] -translate-y-1/2 bg-gradient-to-b from-transparent via-[#D4AF37] to-transparent opacity-75" />
              <div className="absolute inset-x-0 bottom-0 h-24 bg-[linear-gradient(180deg,transparent,rgba(0,0,0,0.16))]" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default BaraatCard;