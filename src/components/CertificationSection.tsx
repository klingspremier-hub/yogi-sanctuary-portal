import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Award, Globe, Clock, X, ZoomIn } from "lucide-react";
import certificateImage from "@/assets/certificate.jpeg";

const CertificationSection = () => {
  const [isImageEnlarged, setIsImageEnlarged] = useState(false);

  const benefits = [
    {
      icon: Award,
      title: "Yoga Alliance Acknowledged",
      description: "Eligible for Continuing Education (CE) hours"
    },
    {
      icon: Globe,
      title: "Teach Worldwide",
      description: "Suitable for teaching Yin Yoga classes internationally in studios, retreats, and wellness settings."
    },
    {
      icon: Clock,
      title: "50-Hour Training",
      description: "Authentic Yin Yoga Teacher Training rooted in the functional lineage of Paul Grilley, with depth in practice, anatomy, and methodology."
    }
  ];

  return (
    <>
      <section id="certification" className="py-32 luxury-gradient-warm texture-overlay relative overflow-hidden">
        {/* Decorative elements */}
        <div className="glow-orb w-72 h-72 -top-36 -right-36 opacity-30" />
        <div className="glow-orb w-56 h-56 bottom-20 -left-28 opacity-20" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <span className="text-gold text-[11px] uppercase tracking-editorial font-bold mb-6 block">
              The Achievement
            </span>
            <h2 className="font-serif text-4xl md:text-6xl text-foreground mb-6">
              Acknowledgement <span className="italic text-gold">& Certification</span>
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center">
            {/* Left Column - Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-3 space-y-8"
            >
              <div className="space-y-6">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Upon successful completion, participants receive a <span className="text-foreground font-medium">50-hour Yin Yoga Teacher Training certificate</span> issued by AnneHathaYoga.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  The certification reflects training in Yin Yoga asana, functional anatomy, teaching methodology, Yoga philosophy, and is acknowledged by Yoga Alliance as eligible for Continuing Education (CE) hours.
                </p>
              </div>

              {/* Benefits Cards - Horizontal with refined styling */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 pt-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    whileHover={{ y: -6, boxShadow: "0 15px 35px -10px rgba(212, 175, 55, 0.3)", backgroundColor: "rgba(212, 175, 55, 0.1)" }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.15 }}
                    className="group relative p-5 rounded-xl bg-background/50 backdrop-blur-sm border border-gold/10 hover:border-gold/30 cursor-pointer transition-all duration-150"
                  >
                    <div className="flex flex-col items-center text-center">
                      <div className="w-14 h-14 rounded-full bg-gradient-to-br from-gold/20 to-gold/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                        <benefit.icon className="w-6 h-6 text-gold" />
                      </div>
                      <h4 className="font-semibold text-foreground mb-2 text-sm">{benefit.title}</h4>
                      <p className="text-muted-foreground text-xs leading-relaxed">{benefit.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right Column - Certificate Image */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              whileHover={{ y: -6, boxShadow: "0 15px 35px -10px rgba(212, 175, 55, 0.3)" }}
              viewport={{ once: true }}
              transition={{ duration: 0.15 }}
              className="lg:col-span-2 relative cursor-pointer transition-all duration-150"
            >
              <div 
                className="relative group cursor-pointer"
                onClick={() => setIsImageEnlarged(true)}
              >
                {/* Decorative background */}
                <div className="absolute inset-0 bg-gradient-to-br from-gold/10 to-transparent rounded-2xl transform rotate-3 scale-105" />
                
                <div className="relative rounded-xl overflow-hidden shadow-2xl shadow-black/20">
                  <img
                    src={certificateImage}
                    alt="50-Hour Yin Yoga Teacher Training Certificate from AnneHathaYoga"
                    className="w-full h-auto select-none pointer-events-none"
                    draggable={false}
                    loading="lazy"
                    decoding="async"
                    onContextMenu={(e) => e.preventDefault()}
                  />
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
                </div>
                
                {/* Decorative corner accents */}
                <div className="absolute -bottom-3 -right-3 w-16 h-16 border-r-2 border-b-2 border-gold/40 rounded-br-lg" />
                <div className="absolute -top-3 -left-3 w-16 h-16 border-l-2 border-t-2 border-gold/40 rounded-tl-lg" />
              </div>
            </motion.div>
          </div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-center mt-16"
          >
            <a
              href="#apply"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-gold to-gold/90 text-primary font-semibold uppercase tracking-wider text-sm hover:from-primary hover:to-primary hover:text-primary-foreground transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Apply Now
            </a>
          </motion.div>

          {/* TTC Experiences Link */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-center mt-6"
          >
            <a
              href="https://www.annehatha.com/#reviews"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-gold transition-colors duration-300 text-sm tracking-wide"
            >
              Explore previous TTCs & student experiences →
            </a>
          </motion.div>
        </div>
      </section>

      {/* Enlarged Image Modal */}
      <AnimatePresence>
        {isImageEnlarged && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setIsImageEnlarged(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setIsImageEnlarged(false)}
                className="absolute -top-12 right-0 text-white hover:text-gold transition-colors"
              >
                <X className="w-8 h-8" />
              </button>
              <img
                src={certificateImage}
                alt="50-Hour Yin Yoga Teacher Training Certificate from AnneHathaYoga"
                className="w-full h-auto rounded-lg shadow-2xl select-none pointer-events-none"
                draggable={false}
                loading="lazy"
                decoding="async"
                onContextMenu={(e) => e.preventDefault()}
              />
              {/* Watermark overlay */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <span className="text-white/15 text-4xl md:text-6xl font-serif rotate-[-30deg] select-none">
                  AnneHathaYoga
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default CertificationSection;
