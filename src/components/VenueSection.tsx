import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { MapPin, Maximize, Wifi, ChevronLeft, ChevronRight } from "lucide-react";

// Import venue images
import venuePool from "@/assets/venue-pool.jpg";
import venueBedroom from "@/assets/venue-bedroom.jpg";
import venueTwinRoom from "@/assets/venue-twin-room.jpg";
import venueKitchen from "@/assets/venue-kitchen.jpg";
import venueAerial from "@/assets/venue-aerial.jpg";
import venueBathroom from "@/assets/venue-bathroom.jpg";
const venueImages = [{
  src: venuePool,
  alt: "Saltwater pool with Mediterranean views"
}, {
  src: venueBedroom,
  alt: "Comfortable bedroom with warm tones"
}, {
  src: venueTwinRoom,
  alt: "Twin room with natural light"
}, {
  src: venueKitchen,
  alt: "Fully equipped kitchen and dining area"
}, {
  src: venueAerial,
  alt: "Aerial view of Templo Sotogrande"
}, {
  src: venueBathroom,
  alt: "Elegant bathroom with natural materials"
}];
const WaveIcon = ({
  className
}: {
  className?: string;
}) => <svg viewBox="0 0 200 50" className={className} fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M0 25 Q25 10 50 25 T100 25 T150 25 T200 25" opacity="0.6" />
    <path d="M0 35 Q25 20 50 35 T100 35 T150 35 T200 35" opacity="0.4" />
    <path d="M0 45 Q25 30 50 45 T100 45 T150 45 T200 45" opacity="0.2" />
  </svg>;
interface FeatureCardProps {
  icon: React.ReactNode;
  text: string;
  delay: number;
  isInView: boolean;
}
const FeatureCard = ({
  icon,
  text,
  delay,
  isInView
}: FeatureCardProps) => {
  return <motion.div initial={{
    opacity: 0,
    y: 20
  }} animate={isInView ? {
    opacity: 1,
    y: 0
  } : {}} transition={{
    duration: 0.6,
    delay,
    ease: [0.16, 1, 0.3, 1]
  }} className="group relative flex-1 p-4 bg-gradient-to-br from-card via-card to-cream rounded-xl border border-gold/20 shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden">
      {/* Decorative corner accent */}
      <div className="absolute top-0 right-0 w-12 h-12 bg-gradient-to-bl from-gold/10 to-transparent rounded-bl-full" />
      
      {/* Subtle glow effect on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-gold/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      
    </motion.div>;
};
const VenueSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px"
  });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-play functionality
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % venueImages.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [isPaused]);
  const nextSlide = () => {
    setCurrentIndex(prev => (prev + 1) % venueImages.length);
  };
  const prevSlide = () => {
    setCurrentIndex(prev => (prev - 1 + venueImages.length) % venueImages.length);
  };
  return <section id="venue" className="py-24 md:py-40 px-6 bg-cream overflow-hidden relative">
      {/* Decorative wave pattern */}
      <div className="absolute bottom-0 left-0 right-0 opacity-10">
        <WaveIcon className="w-full h-20 text-primary" />
      </div>
      <div className="absolute top-20 right-10 opacity-5">
        <WaveIcon className="w-64 h-16 text-gold" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10" ref={ref}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          <motion.div className="lg:col-span-5" initial={{
          opacity: 0,
          x: -30
        }} animate={isInView ? {
          opacity: 1,
          x: 0
        } : {}} transition={{
          duration: 1,
          ease: [0.16, 1, 0.3, 1]
        }}>
            <span className="text-[11px] uppercase tracking-editorial font-bold mb-6 block text-gold">
              The Sanctuary
            </span>
            <h2 className="font-serif text-5xl md:text-7xl text-primary mb-8 leading-none">
              Templo <span className="italic text-gold">& Sotogrande</span>
            </h2>
            <p className="text-mauve-900/70 text-base leading-loose mb-6 text-justify font-light">
              We have chosen Templo Sotogrande specifically because it is not a
              hotel. It is a <strong className="text-primary">purpose-designed sanctuary</strong>.
            </p>
            <p className="text-mauve-900/70 text-base leading-loose mb-8 text-justify font-light">
              Unlike traditional resorts, the accommodation consists of five single-story
              residential houses clustered around a saltwater pool and ecological
              gardens. This layout ensures a small-group feel where you can enjoy the 
              'Sangha' in shared courtyards, while still finding a private patio, 
              rooftop terrace, or a comfortable living room or kitchen for study & leisure.
            </p>
            
            <a href="https://templosotogrande.eu/en/exclusive-use-templo-sotogrande#gallery" target="_blank" rel="noopener noreferrer" className="inline-block text-primary hover:text-gold underline underline-offset-4 transition-colors duration-300 text-base font-medium">
              See all pictures of Templo Sotogrande
            </a>
            
          </motion.div>

          <motion.div className="lg:col-span-7 relative lg:sticky lg:top-24 self-start" initial={{
          opacity: 0,
          x: 30,
          clipPath: "inset(0 100% 0 0)"
        }} animate={isInView ? {
          opacity: 1,
          x: 0,
          clipPath: "inset(0 0 0 0)"
        } : {}} transition={{
          duration: 1.5,
          ease: [0.7, 0, 0.3, 1]
        }}>
            <div className="aspect-video shadow-2xl relative group overflow-hidden border-8 border-card" onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>
              <AnimatePresence mode="sync">
                <motion.img key={currentIndex} src={venueImages[currentIndex].src} className="absolute inset-0 w-full h-full object-cover" alt={venueImages[currentIndex].alt} loading="lazy" decoding="async" initial={{
                opacity: 0,
                scale: 1.1,
                filter: "blur(8px)"
              }} animate={{
                opacity: 1,
                scale: 1,
                filter: "blur(0px)"
              }} exit={{
                opacity: 0,
                scale: 0.95,
                filter: "blur(8px)"
              }} transition={{
                duration: 1.8,
                ease: [0.4, 0, 0.2, 1]
              }} />
              </AnimatePresence>
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Navigation arrows */}
              <button onClick={prevSlide} className="absolute left-4 top-1/2 -translate-y-1/2 bg-card/90 hover:bg-card p-2 rounded-full shadow-lg transition-all opacity-0 group-hover:opacity-100" aria-label="Previous image">
                <ChevronLeft className="w-5 h-5 text-primary" />
              </button>
              <button onClick={nextSlide} className="absolute right-4 top-1/2 -translate-y-1/2 bg-card/90 hover:bg-card p-2 rounded-full shadow-lg transition-all opacity-0 group-hover:opacity-100" aria-label="Next image">
                <ChevronRight className="w-5 h-5 text-primary" />
              </button>

              {/* Dots indicator */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {venueImages.map((_, index) => <button key={index} onClick={() => setCurrentIndex(index)} className={`w-2 h-2 rounded-full transition-all ${index === currentIndex ? "bg-gold w-6" : "bg-card/70 hover:bg-card"}`} aria-label={`Go to image ${index + 1}`} />)}
              </div>

            </div>
            
            {/* Heading below gallery */}
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={isInView ? {
            opacity: 1,
            y: 0
          } : {}} transition={{
            duration: 0.8,
            delay: 0.2,
            ease: [0.16, 1, 0.3, 1]
          }} className="mt-10 mb-4 text-primary">
              <span className="text-sm uppercase tracking-editorial font-bold text-primary">SOTOGRANDE </span>
            </motion.div>
            
            {/* Description text below gallery */}
            <motion.p className="text-mauve-900/70 text-base leading-loose text-justify font-light" initial={{
            opacity: 0,
            y: 20
          }} animate={isInView ? {
            opacity: 1,
            y: 0
          } : {}} transition={{
            duration: 0.8,
            delay: 0.3,
            ease: [0.16, 1, 0.3, 1]
          }}>
              Templo finds its home in Sotogrande, a serene coastal enclave in southern Andalusia where sea, landscape, and light shape a slower rhythm of life. Situated between the Mediterranean and the Andalusian hills, the training unfolds in harmony with its surroundings, allowing focused study and quiet integration to extend naturally beyond the practice spaces.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>;
};
export default VenueSection;