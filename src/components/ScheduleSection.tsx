import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Sunrise, Moon, Coffee, BookOpen, Users, Flower2, Camera, Plane, GraduationCap, PartyPopper, UtensilsCrossed } from "lucide-react";

const ScheduleSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const schedule = [
    { time: "07:30", activity: "Sunrise Meditation & Pranayama", icon: Sunrise, all: true },
    { time: "08:30", activity: "Vegetarian Breakfast", icon: Coffee },
    {
      time: "09:30",
      activity: "How to Teach",
      subtitle: "Methodology, anatomy, hands-on skills",
      icon: BookOpen,
      ttcOnly: true,
    },
    { time: "13:00", activity: "Nourishing Lunch", icon: Coffee },
    { time: "14:00", activity: "Self-study & Leisure Time", highlight: true, icon: Flower2 },
    {
      time: "16:00",
      activity: "Theory Class",
      subtitle: "Philosophy, Fascia, Meridians",
      icon: BookOpen,
      ttcOnly: true,
    },
    { time: "17:00", activity: "Group Assignments", ttcOnly: true, icon: Users },
    { time: "18:15", activity: "Yin Yoga Asana Practice", icon: Flower2, all: true },
    { time: "19:45", activity: "Vegetarian Dinner", icon: Coffee },
    { time: "20:45", activity: "Study or Gentle Leisure", highlight: true, icon: Moon },
    { time: "23:00", activity: "Noble Silence", icon: Moon },
  ];

  const arrivalSchedule = [
    { time: "16:00", activity: "Arrival & Check-in" },
    { time: "17:30", activity: "Opening Ceremony" },
    { time: "19:00", activity: "Welcome Dinner" },
    { time: "20:30", activity: "Silent Yin Practice" },
  ];

  const saturdaySchedule = [
    { time: "07:30 – 08:15", activity: "Sunrise meditation and pranayama", icon: Sunrise },
    { time: "08:30 – 09:15", activity: "Breakfast", icon: Coffee },
    { time: "09:30 – 13:00", activity: "Final practical exams and TTC closing", icon: GraduationCap, ttcOnly: true },
    { time: "13:00 – 14:00", activity: "Lunch", icon: Coffee },
    { time: "14:00 – 19:00", activity: "Extended leisure time", icon: Flower2, highlight: true },
    { time: "19:00 – 20:00", activity: "Group closing ceremony and photos", icon: Camera },
    { time: "20:00 – 21:30", activity: "Farewell dinner", icon: PartyPopper },
    { time: "21:30 onwards", activity: "Leisure time", icon: Moon, highlight: true },
  ];

  const sundaySchedule = [
    { time: "09:00 – 10:00", activity: "Breakfast", icon: Coffee },
    { time: "11:00", activity: "Departure", icon: Plane },
  ];

  return (
    <section id="schedule" className="py-24 md:py-40 luxury-gradient-dark texture-overlay relative overflow-hidden">
      {/* Decorative orbs */}
      <div className="glow-orb w-96 h-96 -top-48 -right-48" style={{ animationDelay: '0s' }} />
      <div className="glow-orb w-64 h-64 bottom-0 -left-32" style={{ animationDelay: '3s' }} />
      
      <div className="max-w-6xl mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="text-gold text-[11px] uppercase tracking-editorial font-bold mb-6 block">
            The Rhythm
          </span>
          <h2 className="font-serif text-5xl md:text-7xl mb-6 text-primary-foreground">
            Training <span className="italic gold-shimmer">Schedule</span>
          </h2>
          <p className="text-primary-foreground/50 font-light max-w-md mx-auto text-lg mb-8">
            Structured yet spacious, allowing learning<br className="hidden sm:inline" /> and leisure to find a natural balance.
          </p>
          
          {/* Legend for TTC vs Retreat Companions */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-sm mb-6">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-gold rounded-sm rotate-45"></span>
              <span className="text-primary-foreground/70">TTC Participants</span>
              <span className="text-primary-foreground/40 text-xs">— Full training curriculum</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-gold rounded-sm rotate-45"></span>
              <span className="text-primary-foreground/70">Retreat Companions</span>
              <span className="text-primary-foreground/40 text-xs">— Practice sessions only</span>
            </div>
          </div>
          <p className="text-primary-foreground/60 text-base max-w-xl mx-auto italic">
            Non-participating companions may join the morning and evening practice sessions, 
            meals, and leisure time while TTC participants attend training modules.
          </p>
          <div className="luxury-divider max-w-xs mx-auto mt-10" />
        </motion.div>

        {/* Sunday Arrival */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="yin-card p-8 md:p-10">
            <h3 className="text-gold text-sm uppercase tracking-widest font-bold mb-8 flex items-center gap-3">
              <span className="w-8 h-px bg-gold/50" />
              Sunday, May 10 | Arrival
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {arrivalSchedule.map((item, index) => (
                <motion.div
                  key={index}
                  className="text-center p-4 border border-gold/10 hover:border-gold/30 transition-colors duration-500"
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  <span className="block text-gold font-bold text-lg mb-2">{item.time}</span>
                  <span className="text-primary-foreground/60 text-sm">{item.activity}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Training Days Table */}
        <motion.div
          className="yin-card p-8 md:p-12 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          <h3 className="text-gold text-sm uppercase tracking-widest font-bold mb-10 text-center flex items-center justify-center gap-4">
            <span className="w-12 h-px bg-gradient-to-r from-transparent to-gold/50" />
            Mon–Fri | Training Days
            <span className="w-12 h-px bg-gradient-to-l from-transparent to-gold/50" />
          </h3>
          
          <div className="space-y-2">
            {schedule.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  className={`flex items-center gap-6 p-4 transition-all duration-500 hover:bg-gold/5 group ${
                    item.highlight ? "bg-primary-foreground/5 border-l-2 border-gold" : ""
                  }`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.05 }}
                >
                  <span className="w-20 text-gold font-bold text-sm tracking-wider">{item.time}</span>
                  <Icon className={`w-4 h-4 ${item.highlight ? "text-gold" : "text-primary-foreground/30"} group-hover:text-gold transition-colors`} />
                  <div className="flex-1">
                    <span className={`${item.highlight ? "italic text-gold/80" : "text-primary-foreground/80"} ${item.ttcOnly ? "font-semibold" : ""}`}>
                      {item.activity}
                      {item.all && <span className="text-xs text-gold/60 ml-2">(All)</span>}
                      {item.ttcOnly && <span className="text-xs text-primary-foreground/40 ml-2">(TTC Only)</span>}
                    </span>
                    {item.subtitle && (
                      <span className="block text-xs text-primary-foreground/40 mt-1">
                        {item.subtitle}
                      </span>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Saturday - Completion and Celebration */}
        <motion.div
          className="yin-card p-8 md:p-12 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          <h3 className="text-gold text-sm uppercase tracking-widest font-bold mb-10 text-center flex items-center justify-center gap-4">
            <span className="w-12 h-px bg-gradient-to-r from-transparent to-gold/50" />
            Saturday, May 16 | Completion and Celebration
            <span className="w-12 h-px bg-gradient-to-l from-transparent to-gold/50" />
          </h3>
          
          <div className="space-y-2">
            {saturdaySchedule.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  className={`flex items-center gap-6 p-4 transition-all duration-500 hover:bg-gold/5 group ${
                    item.highlight ? "bg-primary-foreground/5 border-l-2 border-gold" : ""
                  }`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.5 + index * 0.05 }}
                >
                  <span className="w-32 text-gold font-bold text-sm tracking-wider">{item.time}</span>
                  <Icon className={`w-4 h-4 ${item.highlight ? "text-gold" : "text-primary-foreground/30"} group-hover:text-gold transition-colors`} />
                  <div className="flex-1">
                    <span className={`${item.highlight ? "italic text-gold/80" : "text-primary-foreground/80"} ${item.ttcOnly ? "font-semibold" : ""}`}>
                      {item.activity}
                      {item.ttcOnly && <span className="text-xs text-primary-foreground/40 ml-2">(TTC Only)</span>}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Sunday - Departure */}
        <motion.div
          className="yin-card p-8 md:p-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <h3 className="text-gold text-sm uppercase tracking-widest font-bold mb-10 text-center flex items-center justify-center gap-4">
            <span className="w-12 h-px bg-gradient-to-r from-transparent to-gold/50" />
            Sunday, May 17 | Departure
            <span className="w-12 h-px bg-gradient-to-l from-transparent to-gold/50" />
          </h3>
          
          <div className="space-y-2">
            {sundaySchedule.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  className="flex items-center gap-6 p-4 transition-all duration-500 hover:bg-gold/5 group"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.6 + index * 0.05 }}
                >
                  <span className="w-32 text-gold font-bold text-sm tracking-wider">{item.time}</span>
                  <Icon className="w-4 h-4 text-primary-foreground/30 group-hover:text-gold transition-colors" />
                  <div className="flex-1">
                    <span className="text-primary-foreground/80">{item.activity}</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ScheduleSection;
