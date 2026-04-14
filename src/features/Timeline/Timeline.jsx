import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const events = [
  {
    id: 'baraat',
    episode: "Episode II",
    title: "The Baraat",
    date: "August 1st, 2026",
    venue: "Placeholder Venue Name, City",
    time: "7:00 PM onwards",
    theme: "bg-shadi-maroon",
    accent: "text-shadi-gold"
  },
  {
    id: 'walima',
    episode: "Episode III",
    title: "The Walima",
    date: "August 3rd, 2026",
    venue: "Placeholder Venue Name, City",
    time: "8:00 PM onwards",
    theme: "bg-shadi-emerald",
    accent: "text-shadi-gold"
  }
];

const Timeline = () => {
  const navigate = useNavigate();

  return (
    <section className="pt-24 pb-12 bg-[#FAF9F6] relative overflow-hidden">
      
      {/* Texture & Gradient */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/mandala-vines.png')]" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-shadi-gold/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.p
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             className="text-shadi-maroon font-bold uppercase tracking-[0.6em] text-[10px] mb-4"
          >
            Save The Dates
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="font-cursive text-6xl text-shadi-maroon mb-2"
          >
            The Grand Finale
          </motion.h2>
          <h3 className="font-serif text-4xl md:text-6xl text-shadi-emerald font-black uppercase tracking-tighter">
            Showtimes & Venues
          </h3>
          <div className="h-px w-32 bg-shadi-gold mx-auto mt-6" />
        </div>

        {/* Schedule Grid */}
        <div className="grid md:grid-cols-2 gap-12 relative mb-20">
          {events.map((event) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className={`${event.theme} rounded-3xl p-8 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.2)] relative overflow-hidden group border border-shadi-gold/30`}
            >
              {/* Ticket Stub Notch */}
              <div className="absolute -right-10 top-1/2 -translate-y-1/2 w-20 h-20 bg-[#FAF9F6] rounded-full border-l border-shadi-gold/20" />
              
              <div className="relative z-10">
                <p className={`${event.accent} font-bold tracking-[0.4em] text-[10px] mb-4 opacity-80 uppercase`}>
                  {event.episode}
                </p>
                
                <h4 className="text-shadi-cream font-serif text-5xl md:text-7xl font-bold mb-8 italic tracking-tighter">
                  {event.title}
                </h4>

                <div className="space-y-6 mb-12 border-l border-shadi-gold/30 pl-6">
                  <div className="flex flex-col">
                    <span className="text-shadi-gold font-bold text-[9px] uppercase tracking-[0.3em] mb-1">Date</span>
                    <p className="text-shadi-cream font-serif text-2xl">{event.date}</p>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-shadi-gold font-bold text-[9px] uppercase tracking-[0.3em] mb-1">Venue</span>
                    <p className="text-shadi-cream/90 text-sm md:text-lg font-light tracking-wide">{event.venue}</p>
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02, backgroundColor: '#fff', color: '#064e3b' }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => navigate(`/${event.id}`)}
                  className="w-full py-4 bg-shadi-gold text-shadi-maroon font-black uppercase tracking-[0.2em] text-[10px] rounded-xl shadow-2xl transition-all duration-300"
                >
                  Get Your Digital Invitation
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 3. The "Trademark" Style Signature Line */}
        <div className="flex flex-col items-center mt-12">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-shadi-gold/60 to-transparent mb-8" />
        
        <p className="text-shadi-maroon font-serif text-sm md:text-lg uppercase tracking-[0.8em] text-center ml-[0.8em]">
            Maryam <span className="text-shadi-gold mx-2">&</span> Ramooz
        </p>
        
        <p className="text-shadi-maroon/80 font-bold text-[10px] md:text-xs uppercase tracking-[0.4em] mt-4 bg-shadi-gold/10 px-4 py-1 rounded-full border border-shadi-gold/20">
            Est. 2026 • The Grand Finale
        </p>
        </div>

      </div>
    </section>
  );
};

export default Timeline;