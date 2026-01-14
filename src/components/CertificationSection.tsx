import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Award, Globe, Clock, X, ZoomIn } from "lucide-react";
import certificateImage from "@/assets/spain-certificate.png";
import eryt200Logo from "@/assets/eryt200.png";
import yacepLogo from "@/assets/yacep.png";
const CertificationSection = () => {
  const [isImageEnlarged, setIsImageEnlarged] = useState(false);
  const benefits = [{
    icon: Award,
    title: "Yoga Alliance Acknowledged",
    description: "Eligible for Continuing Education (CE) hours"
  }, {
    icon: Globe,
    title: "Teach Worldwide",
    description: "Suitable for teaching Yin Yoga classes internationally in studios, retreats, and wellness settings."
  }, {
    icon: Clock,
    title: "50-Hour Training",
    description: "Authentic Yin Yoga Teacher Training rooted in the functional lineage of Paul Grilley."
  }];
  return <>
      <section id="certification" className="py-32 luxury-gradient-warm texture-overlay relative overflow-hidden">
        {/* Decorative elements */}
        <div className="glow-orb w-72 h-72 -top-36 -right-36 opacity-30" />
        <div className="glow-orb w-56 h-56 bottom-20 -left-28 opacity-20" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.8
        }} className="text-center mb-20">
            <span className="text-gold text-[11px] uppercase tracking-editorial font-bold mb-6 block">
              The Achievement
            </span>
            <h2 className="font-serif text-4xl md:text-6xl mb-6 text-primary">
              Acknowledgement <span className="italic text-gold">& Certification</span>
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left Column - Text Content */}
            <motion.div 
              initial={{ opacity: 0, x: -40 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.8, delay: 0.2 }} 
              className="flex flex-col justify-center order-2 lg:order-1"
            >
              {/* Description */}
              <div className="space-y-5 mb-10">
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed font-light">
                  Upon successful completion, participants receive a 50-hour Yin Yoga Teacher Training certificate issued by AnneHathaYoga.
                </p>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed font-light">
                  The certification reflects training in Yin Yoga asana, functional anatomy, teaching methodology, Yoga philosophy, and is acknowledged by Yoga Alliance as eligible for Continuing Education (CE) hours.
                </p>
              </div>

              {/* Benefits List - Clean vertical layout */}
              <div className="space-y-4 mb-10">
                {benefits.map((benefit, index) => (
                  <motion.div 
                    key={benefit.title} 
                    initial={{ opacity: 0, x: -20 }} 
                    whileInView={{ opacity: 1, x: 0 }} 
                    viewport={{ once: true }} 
                    transition={{ duration: 0.5, delay: 0.1 * index }} 
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-10 h-10 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center shrink-0 group-hover:bg-gold/20 transition-colors duration-300">
                      <benefit.icon className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground text-sm mb-1">{benefit.title}</h4>
                      <p className="text-muted-foreground text-xs leading-relaxed">{benefit.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              {/* Yoga Alliance Logos */}
              <div className="flex items-center gap-8">
                <motion.img 
                  src={eryt200Logo} 
                  alt="E-RYT 200 Yoga Alliance" 
                  className="h-14 w-auto opacity-70 hover:opacity-100 transition-opacity duration-300" 
                  width={115} 
                  height={64}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 0.7, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                />
                <motion.img 
                  src={yacepLogo} 
                  alt="YACEP Yoga Alliance" 
                  className="h-14 w-auto opacity-70 hover:opacity-100 transition-opacity duration-300" 
                  width={115} 
                  height={64}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 0.7, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                />
              </div>
            </motion.div>

            {/* Right Column - Certificate Image */}
            <motion.div 
              initial={{ opacity: 0, x: 40 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.8, delay: 0.3 }} 
              className="relative order-1 lg:order-2"
            >
              <div className="relative group cursor-pointer" onClick={() => setIsImageEnlarged(true)}>
                {/* Decorative background */}
                <div className="absolute inset-0 bg-gradient-to-br from-gold/10 to-transparent rounded-2xl transform rotate-2 scale-105" />
                
                <motion.div 
                  className="relative rounded-xl overflow-hidden shadow-2xl shadow-black/20"
                  whileHover={{ y: -4, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.4)" }}
                  transition={{ duration: 0.3 }}
                >
                  <img src={certificateImage} alt="50-Hour Yin Yoga Teacher Training Certificate from AnneHathaYoga" className="w-full h-auto select-none pointer-events-none" draggable={false} loading="lazy" decoding="async" width={364} height={258} onContextMenu={e => e.preventDefault()} />
                  {/* Watermark overlay */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <span className="text-white/20 text-2xl md:text-3xl font-serif rotate-[-30deg] select-none">
                      AnneHathaYoga
                    </span>
                  </div>
                  {/* Zoom indicator */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                    <ZoomIn className="w-10 h-10 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </motion.div>
                
                {/* Decorative corner accents */}
                <div className="absolute -bottom-3 -right-3 w-16 h-16 border-r-2 border-b-2 border-gold/40 rounded-br-lg" />
                <div className="absolute -top-3 -left-3 w-16 h-16 border-l-2 border-t-2 border-gold/40 rounded-tl-lg" />
              </div>
            </motion.div>
          </div>

          {/* CTA Button */}
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.8,
          delay: 0.5
        }} className="text-center mt-16">
            <a href="https://yinyogattc.com/#about" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-gold to-gold/90 text-primary font-semibold uppercase tracking-wider text-sm hover:from-primary hover:to-primary hover:text-primary-foreground transition-all duration-300 shadow-lg hover:shadow-xl">
              About the Leading Teacher
            </a>
          </motion.div>

          {/* TTC Experiences Link */}
          <motion.div initial={{
          opacity: 0
        }} whileInView={{
          opacity: 1
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.8,
          delay: 0.7
        }} className="text-center mt-6">
            <a href="https://yinyogattc.com/#testimonials" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-gold transition-colors duration-300 text-sm tracking-wide">
              Explore previous TTCs & student experiences →
            </a>
          </motion.div>
        </div>
      </section>

      {/* Enlarged Image Modal */}
      <AnimatePresence>
        {isImageEnlarged && <motion.div initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} exit={{
        opacity: 0
      }} className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4" onClick={() => setIsImageEnlarged(false)}>
            <motion.div initial={{
          scale: 0.8,
          opacity: 0
        }} animate={{
          scale: 1,
          opacity: 1
        }} exit={{
          scale: 0.8,
          opacity: 0
        }} className="relative max-w-4xl w-full" onClick={e => e.stopPropagation()}>
              <button onClick={() => setIsImageEnlarged(false)} className="absolute -top-12 right-0 text-white hover:text-gold transition-colors">
                <X className="w-8 h-8" />
              </button>
              <img src={certificateImage} alt="50-Hour Yin Yoga Teacher Training Certificate from AnneHathaYoga" className="w-full h-auto rounded-lg shadow-2xl select-none pointer-events-none" draggable={false} loading="lazy" decoding="async" onContextMenu={e => e.preventDefault()} />
              {/* Watermark overlay */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <span className="text-white/15 text-4xl md:text-6xl font-serif rotate-[-30deg] select-none">
                  AnneHathaYoga
                </span>
              </div>
            </motion.div>
          </motion.div>}
      </AnimatePresence>
    </>;
};
export default CertificationSection;