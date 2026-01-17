import { ArrowDown, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-compressed.webp";

const HeroSection = () => {
  return (
    <header id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden luxury-gradient-soft texture-overlay">
      {/* Floating orbs - hidden on mobile for performance */}
      <div className="glow-orb w-96 h-96 -top-48 -left-48 hidden md:block" style={{ animationDelay: '0s' }} />
      <div className="glow-orb w-64 h-64 top-1/4 -right-32 hidden md:block" style={{ animationDelay: '2s' }} />
      <div className="glow-orb w-80 h-80 bottom-0 left-1/4 hidden md:block" style={{ animationDelay: '4s' }} />
      
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

      <div className="relative z-10 text-center px-4 md:px-6 mt-20 md:mt-32 max-w-6xl mx-auto flex flex-col items-center">
        {/* LCP element - no motion wrapper, uses CSS animation for zero JS blocking */}
        <div className="animate-hero-fade-in">
          <h1 className="font-serif text-4xl sm:text-5xl md:text-[7rem] lg:text-[8.5rem] leading-[1.1] md:leading-[1] text-primary-foreground mb-6 md:mb-10">
            <span className="block drop-shadow-2xl">50-Hour Yin Yoga</span>
            <span className="inline-block italic font-light gold-shimmer mt-1 md:mt-2 leading-[1.1] pb-[0.2em] overflow-visible animate-hero-text-delay">
              Teacher Training
            </span>
          </h1>

          <h2 className="text-primary-foreground/70 text-base md:text-2xl font-extralight tracking-[0.2em] md:tracking-[0.3em] uppercase mb-6 md:mb-10 animate-hero-subtitle-delay">
            & Restorative Retreat
          </h2>

          {/* Date badge */}
          <div className="inline-flex items-center gap-2 md:gap-3 mb-8 md:mb-12 animate-hero-badge-delay">
            <div className="hidden md:block h-px w-12 bg-gradient-to-r from-transparent to-gold/60" />
            <div className="flex items-center gap-2 bg-primary-foreground/5 backdrop-blur-xl px-4 md:px-10 py-3 md:py-4 border border-gold/20 rounded-full shadow-lg">
              <Sparkles className="w-3 h-3 md:w-4 md:h-4 text-gold shrink-0" />
              <span className="text-gold text-[10px] sm:text-xs md:text-base uppercase tracking-[0.15em] md:tracking-[0.3em] font-medium">
                May 10-17 · 2026 · Spain
              </span>
              <Sparkles className="w-3 h-3 md:w-4 md:h-4 text-gold shrink-0" />
            </div>
            <div className="hidden md:block h-px w-12 bg-gradient-to-l from-transparent to-gold/60" />
          </div>

          <p className="text-primary-foreground/70 text-base max-w-3xl mx-auto mb-10 md:mb-16 italic font-serif leading-relaxed px-2 md:text-3xl font-normal animate-hero-desc-delay">
            An authentic, Yoga Alliance–acknowledged immersion. Created for those
            seeking a refined balance between intensive professional study and
            deeply restorative leisure.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 md:gap-8 items-center animate-hero-cta-delay">
            <a href="#pricing" className="group w-full sm:w-auto px-10 md:px-16 py-4 md:py-6 bg-gradient-to-r from-gold via-gold to-gold/90 text-primary text-[11px] md:text-[12px] uppercase tracking-editorial font-bold shadow-2xl hover:shadow-gold/30 btn-luxury relative overflow-hidden">
              <span className="relative z-10">View Packages</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary-foreground to-primary-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </a>
            <a href="#intention" className="flex items-center gap-3 text-primary-foreground/80 hover:text-gold transition-all duration-500 text-[10px] md:text-[11px] uppercase tracking-widest font-bold group">
              <span className="animated-border pb-1">Explore the Trainings</span>
              <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform duration-300" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator - uses CSS animation instead of framer-motion */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-scroll-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-gold/30 flex items-start justify-center p-2">
          <div className="w-1.5 h-1.5 rounded-full bg-gold animate-scroll-dot" />
        </div>
      </div>
    </header>
  );
};

export default HeroSection;