import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Phone, Instagram } from "lucide-react";
import logoWhite from "@/assets/logo-white.png";
const Footer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-50px"
  });
  return <footer className="luxury-gradient-dark texture-overlay py-24 px-6 relative overflow-hidden" ref={ref}>
      {/* Decorative orbs */}
      <div className="glow-orb w-64 h-64 -bottom-32 -left-32 opacity-30" />
      <div className="glow-orb w-48 h-48 -top-24 -right-24 opacity-20" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Logo and tagline */}
        <motion.div className="text-center mb-16 flex flex-col items-center" initial={{
        opacity: 0,
        y: 30
      }} animate={isInView ? {
        opacity: 1,
        y: 0
      } : {}} transition={{
        duration: 1
      }}>
          <a href="https://www.yinyogattc.com" target="_blank" rel="noopener noreferrer" className="block mb-6">
            <img src={logoWhite} alt="AnneHathaYoga" className="h-16 md:h-22 w-auto" width={143} height={64} />
          </a>
          <p className="text-primary-foreground/40 text-sm font-light tracking-widest uppercase">
            Authentic Yin Yoga Training
          </p>
        </motion.div>

        {/* Luxury divider */}
        <div className="luxury-divider max-w-md mx-auto mb-16" />

        {/* Info grid - 2 columns now */}
        <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm font-light text-primary-foreground/60 max-w-md mx-auto mb-16" initial={{
        opacity: 0,
        y: 20
      }} animate={isInView ? {
        opacity: 1,
        y: 0
      } : {}} transition={{
        duration: 1,
        delay: 0.2
      }}>
          <div className="text-center">
            <h5 className="flex items-center justify-center gap-2 text-gold uppercase tracking-widest text-xs mb-6 font-bold">
              <Mail className="w-4 h-4" />
              Contact
            </h5>
            <div className="space-y-2">
              <p className="hover:text-gold transition-colors">
                <a href="mailto:info@yinyogattc.com">info@yinyogattc.com</a>
              </p>
              <p className="flex items-center justify-center gap-2 hover:text-gold transition-colors">
                <Phone className="w-3 h-3" />
                <a href="tel:+31627088945">+31 6 27088945</a>
              </p>
            </div>
          </div>

          <div className="text-center">
            <h5 className="text-gold uppercase tracking-widest text-xs mb-6 font-bold">
              Connect
            </h5>
            <div className="flex items-center justify-center gap-4">
              <a href="https://www.instagram.com/annehathayoga/" target="_blank" rel="noopener noreferrer" className="p-3 border border-gold/20 hover:border-gold hover:bg-gold/10 transition-all duration-300 group">
                <Instagram className="w-4 h-4 text-primary-foreground/60 group-hover:text-gold transition-colors" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Yoga Alliance Logos */}
        <motion.div className="flex items-center justify-center gap-8 mb-12" initial={{
        opacity: 0,
        y: 20
      }} animate={isInView ? {
        opacity: 1,
        y: 0
      } : {}} transition={{
        duration: 1,
        delay: 0.25
      }}>
          <a href="https://app.yogaalliance.org/teacherpublicprofile?id=003TR00001HoymfYAB" target="_blank" rel="noopener noreferrer" className="opacity-60 hover:opacity-100 transition-opacity">
            
          </a>
          <a href="https://app.yogaalliance.org/yaceppublicprofile?id=003TR00001HoymfYAB" target="_blank" rel="noopener noreferrer" className="opacity-60 hover:opacity-100 transition-opacity">
            
          </a>
        </motion.div>

        {/* Navigation Links */}
        <motion.div className="flex flex-wrap items-center justify-center gap-6 mb-8 text-xs text-primary-foreground/40" initial={{
        opacity: 0
      }} animate={isInView ? {
        opacity: 1
      } : {}} transition={{
        duration: 1,
        delay: 0.3
      }}>
          <a href="https://www.annehatha.com/#about" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors duration-300">
            About Anne van Keulen
          </a>
          <span className="text-primary-foreground/20">•</span>
          <a href="https://www.annehatha.com/#gallery" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors duration-300">
            Gallery
          </a>
          <span className="text-primary-foreground/20">•</span>
          <a href="https://www.annehatha.com/#reviews" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors duration-300">
            Student Experiences
          </a>
          <span className="text-primary-foreground/20">•</span>
          <a href="https://app.yogaalliance.org/teacherpublicprofile?id=003TR00001HoymfYAB" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors duration-300">
            Yoga Alliance Teacher Profile
          </a>
          <span className="text-primary-foreground/20">•</span>
          <a href="https://app.yogaalliance.org/yaceppublicprofile?id=003TR00001HoymfYAB" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors duration-300">
            YACEP Profile
          </a>
        </motion.div>

        {/* Bottom bar */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-gold/20 to-transparent mb-8" />
        
        <motion.div className="flex flex-col md:flex-row items-center justify-between gap-4" initial={{
        opacity: 0
      }} animate={isInView ? {
        opacity: 1
      } : {}} transition={{
        duration: 1,
        delay: 0.4
      }}>
          <p className="text-[10px] uppercase tracking-widest text-primary-foreground/30">
            © 2026 AnneHatha Yoga
          </p>
          <div className="flex items-center gap-6 text-[10px] uppercase tracking-widest text-primary-foreground/30">
            <a href="#" className="hover:text-gold transition-colors">Privacy Policy</a>
            <span>•</span>
            <a href="#" className="hover:text-gold transition-colors">Terms</a>
            <span>•</span>
            <a href="#" className="hover:text-gold transition-colors">General Terms & Conditions</a>
          </div>
        </motion.div>
      </div>
    </footer>;
};
export default Footer;