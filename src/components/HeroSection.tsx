import { motion } from "framer-motion";
import { ArrowDown, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-palace.webp";
const HeroSection = () => {
  return <header className="relative min-h-screen flex items-center justify-center overflow-hidden luxury-gradient-soft texture-overlay">
      {/* Floating orbs - warmer */}
      <div className="glow-orb w-96 h-96 -top-48 -left-48" style={{
      animationDelay: '0s'
    }} />
      <div className="glow-orb w-64 h-64 top-1/4 -right-32" style={{
      animationDelay: '2s'
    }} />
      <div className="glow-orb w-80 h-80 bottom-0 left-1/4" style={{
      animationDelay: '4s'
    }} />
      
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          className="w-full h-full object-cover opacity-50 scale-105" 
          alt="Templo Sotogrande Aerial" 
          loading="eager" 
          decoding="async" 
          fetchPriority="high"
          width={1521}
          height={1071}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/60 via-primary/20 to-primary/90"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/40 via-transparent to-primary/40"></div>
      </div>

      <div className="relative z-10 text-center px-6 mt-32 max-w-6xl mx-auto">
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 1.2,
        ease: [0.16, 1, 0.3, 1]
      }}>
          <motion.h1 className="font-serif text-5xl md:text-[7rem] lg:text-[8.5rem] leading-[1.05] md:leading-[1] text-primary-foreground mb-10" initial={{
          opacity: 0,
          y: 40
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 1,
          delay: 0.3
        }}>
            <span className="block drop-shadow-2xl">50-Hour Yin Yoga</span>
            <span className="inline-block italic font-light gold-shimmer mt-2 leading-[1.1] pb-[0.2em] overflow-visible">Teacher Training</span>
          </motion.h1>

          <motion.h2 className="text-primary-foreground/70 text-lg md:text-2xl font-extralight tracking-[0.3em] uppercase mb-10" initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} transition={{
          duration: 1,
          delay: 0.5
        }}>
            & Restorative Retreat
          </motion.h2>

          {/* Date badge - placed below Restorative Retreat */}
          <motion.div className="inline-flex items-center gap-3 mb-12" initial={{
          opacity: 0,
          scale: 0.9
        }} animate={{
          opacity: 1,
          scale: 1
        }} transition={{
          duration: 0.8,
          delay: 0.6
        }}>
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-gold/60" />
            <div className="flex items-center gap-2 bg-primary-foreground/5 backdrop-blur-xl px-10 py-4 border border-gold/20 rounded-full shadow-lg">
              <Sparkles className="w-4 h-4 text-gold" />
              <span className="text-gold text-sm md:text-base uppercase tracking-[0.3em] font-medium">
                May 10 - 17 · 2026 · Spain · Andalusia · Sotogrande
              </span>
              <Sparkles className="w-4 h-4 text-gold" />
            </div>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-gold/60" />
          </motion.div>

          <motion.p className="text-primary-foreground/70 text-lg md:text-2xl font-light max-w-3xl mx-auto mb-16 italic font-serif leading-relaxed" initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 1,
          delay: 0.7
        }}>
            An authentic, Yoga Alliance–acknowledged immersion. Created for those
            seeking a refined balance between intensive professional study and
            deeply restorative leisure.
          </motion.p>

          <motion.div className="flex flex-col md:flex-row justify-center gap-8 items-center" initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 1,
          delay: 0.9
        }}>
            <a href="#pricing" className="group w-full md:w-auto px-16 py-6 bg-gradient-to-r from-gold via-gold to-gold/90 text-primary text-[12px] uppercase tracking-editorial font-bold shadow-2xl hover:shadow-gold/30 btn-luxury relative overflow-hidden">
              <span className="relative z-10">View Packages</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary-foreground to-primary-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </a>
            <a href="#intention" className="flex items-center gap-3 text-primary-foreground/80 hover:text-gold transition-all duration-500 text-[11px] uppercase tracking-widest font-bold group">
              <span className="animated-border pb-1">Explore the Trainings</span>
              <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform duration-300" />
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div className="absolute bottom-12 left-1/2 -translate-x-1/2" animate={{
      y: [0, 8, 0]
    }} transition={{
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }}>
        <div className="w-6 h-10 rounded-full border-2 border-gold/30 flex items-start justify-center p-2">
          <motion.div className="w-1.5 h-1.5 rounded-full bg-gold" animate={{
          y: [0, 12, 0],
          opacity: [1, 0.3, 1]
        }} transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }} />
        </div>
      </motion.div>
    </header>;
};
export default HeroSection;