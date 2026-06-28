import { Link } from "react-router-dom";
import { Heart } from "lucide-react";
import { useState, useEffect } from 'react';
import maryamImg from "../../assets/maryam.png";
import ramoozImg from "../../assets/ramooz.jpg";

const Invite = () => {

    useEffect(() => {
    window.scrollTo(0, 0);

    document.documentElement.classList.add('route-invite');
    document.body.classList.add('route-invite');

    return () => {
      document.documentElement.classList.remove('route-invite');
      document.body.classList.remove('route-invite');
    };
  }, []);

  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-b from-[#FFFDFB] via-[#FFF8F4] to-[#FCEEE7]">
      {/* Background Blobs */}
      <div className="absolute -top-32 -left-24 h-80 w-80 rounded-full bg-[#FFDCCB]/40 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-[#FFE9DE]/50 blur-3xl" />

      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-8 py-16 animate-fade-up">
        {/* Heading */}
        <p className="mb-4 animate-fade-up text-[11px] uppercase tracking-[0.45em] text-[#B68B74]">
          Baraat & Walima
        </p>

        {/* Couple Names */}
        <h1 className="animate-shimmer text-center font-serif leading-none text-[#493126]">
          <span className="block text-[58px] sm:text-7xl">Ramooz</span>

          <span className="my-3 block text-2xl text-[#CBA28E]">&</span>

          <span className="block text-[58px] sm:text-7xl">Maryam</span>
        </h1>

        {/* Portraits */}
            <div className="mt-10 flex items-center justify-center gap-5 sm:gap-8">
            {/* Bride */}
            <div className="relative animate-float">
                <div className="absolute inset-0 scale-110 rounded-full bg-[#F5CDB9]/50 blur-xl animate-glow" />

                <div className="relative h-40 w-40 overflow-hidden rounded-full border border-white/70 bg-white p-2 shadow-2xl ring-8 ring-white/40 sm:h-48 sm:w-48">
                <div className="relative h-full w-full overflow-hidden rounded-full">
                    <img
                    src={maryamImg}
                    alt="Maryam"
                    className="absolute left-1/2 top-1/2 h-full w-full -translate-x-1/2 -translate-y-[27%] object-cover scale-[1.55]"
                    />
                </div>
                </div>
            </div>

            {/* Groom */}
            <div className="relative animate-float-reverse">
                <div className="absolute inset-0 scale-110 rounded-full bg-[#F5CDB9]/40 blur-xl animate-glow" />

                <div className="relative h-40 w-40 overflow-hidden rounded-full border border-white/70 bg-white p-2 shadow-2xl ring-8 ring-white/40 sm:h-48 sm:w-48">
                <div className="relative h-full w-full overflow-hidden rounded-full">
                    <img
                    src={ramoozImg}
                    alt="Ramooz"
                    className="h-full w-full rounded-full object-cover"
                    />
                </div>
                </div>
            </div>
            </div>

        {/* Invitation Text */}
        <div className="mt-8 max-w-xs text-center">
          <Heart
            size={18}
            strokeWidth={1.5}
            className="mx-auto mb-5 animate-heart text-[#D5A088]"
          />

          <p className="leading-8 text-[#73574C]">
            Together with our families, we warmly invite you to celebrate the
            beginning of our forever.
          </p>
        </div>

        {/* Navigation Buttons */}
        <div className="mt-8 flex w-full max-w-sm gap-3">
            <Link
                to="/baraat"
                className="group animate-button flex flex-1 items-center justify-between rounded-full border border-[#E8C9BB] bg-white/70 px-5 py-4 backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] hover:bg-white hover:shadow-lg"
                >
                <span className="font-serif text-lg text-[#5A3D31]">
                    Baraat
                </span>

                <span className="animate-arrow text-[#D19B82] transition-transform duration-300 group-hover:translate-x-1">
                    →
                </span>
            </Link>

            <Link
                to="/walima"
                className="group animate-button flex flex-1 items-center justify-between rounded-full border border-[#E8C9BB] bg-white/70 px-5 py-4 backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] hover:bg-white hover:shadow-lg"
                >
                <span className="font-serif text-lg text-[#5A3D31]">
                    Walima
                </span>

                <span className="animate-arrow text-[#D19B82] transition-transform duration-300 group-hover:translate-x-1">
                    →
                </span>
            </Link>
        </div>

        {/* Footer */}
        <div className="mt-12 text-center">
          <div className="mx-auto mb-4 h-px w-16 bg-[#E8D5CC]" />

          <p className="text-xs uppercase tracking-[0.4em] text-[#B79C90]">
            August 2026
          </p>
        </div>
      </div>
    </main>
  );
};

export default Invite;