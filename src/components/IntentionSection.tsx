import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
const YinYangIcon = ({
  className
}: {
  className?: string;
}) => <svg viewBox="0 0 100 100" className={className} fill="currentColor">
    <circle cx="50" cy="50" r="48" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.3" />
    <path d="M50 2a48 48 0 0 1 0 96 24 24 0 0 1 0-48 24 24 0 0 0 0-48z" />
    <circle cx="50" cy="26" r="6" fill="hsl(var(--gold))" />
    <circle cx="50" cy="74" r="6" />
  </svg>;
const LotusIcon = ({
  className
}: {
  className?: string;
}) => <svg viewBox="0 0 100 100" className={className} fill="currentColor">
    <ellipse cx="50" cy="70" rx="8" ry="25" opacity="0.6" />
    <ellipse cx="35" cy="65" rx="7" ry="22" transform="rotate(-20 35 65)" opacity="0.5" />
    <ellipse cx="65" cy="65" rx="7" ry="22" transform="rotate(20 65 65)" opacity="0.5" />
    <ellipse cx="22" cy="55" rx="6" ry="18" transform="rotate(-40 22 55)" opacity="0.4" />
    <ellipse cx="78" cy="55" rx="6" ry="18" transform="rotate(40 78 55)" opacity="0.4" />
    <ellipse cx="15" cy="42" rx="5" ry="14" transform="rotate(-60 15 42)" opacity="0.3" />
    <ellipse cx="85" cy="42" rx="5" ry="14" transform="rotate(60 85 42)" opacity="0.3" />
  </svg>;
interface InteractiveCardProps {
  children: React.ReactNode;
  delay?: number;
  isInView: boolean;
}
const InteractiveCard = ({
  children,
  delay = 0,
  isInView
}: InteractiveCardProps) => {
  const [mousePos, setMousePos] = useState({
    x: 50,
    y: 50
  });
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width * 100;
    const y = (e.clientY - rect.top) / rect.height * 100;
    setMousePos({
      x,
      y
    });
  };
  return <motion.div initial={{
    opacity: 0,
    y: 20
  }} animate={isInView ? {
    opacity: 1,
    y: 0
  } : {}} transition={{
    duration: 1,
    delay,
    ease: [0.16, 1, 0.3, 1]
  }} className="bg-card/80 backdrop-blur-sm border border-primary/10 p-6 md:p-8 group cursor-pointer hover:border-primary/30 md:hover:-translate-y-1 transition-all duration-500 shadow-sm hover:shadow-lg" style={{
    "--mouse-x": `${mousePos.x}%`,
    "--mouse-y": `${mousePos.y}%`
  } as React.CSSProperties} onMouseMove={handleMouseMove}>
      {children}
    </motion.div>;
};
const IntentionSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px"
  });
  return <section id="intention" aria-labelledby="intention-heading" className="py-16 md:py-40 px-4 md:px-6 luxury-gradient-warm relative overflow-hidden">
      {/* Decorative Elements - hidden on mobile for performance */}
      <div className="absolute top-20 left-10 opacity-[0.08] hidden md:block">
        <YinYangIcon className="w-32 h-32 text-primary animate-[spin_30s_linear_infinite]" />
      </div>
      <div className="absolute bottom-20 right-10 opacity-[0.08] hidden md:block">
        <LotusIcon className="w-40 h-40 text-primary animate-float" />
      </div>
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 opacity-[0.03] hidden md:block">
        <LotusIcon className="w-96 h-96 text-primary" />
      </div>

      <div ref={ref} className="max-w-5xl mx-auto text-center relative z-10">
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} animate={isInView ? {
        opacity: 1,
        y: 0
      } : {}} transition={{
        duration: 1,
        ease: [0.16, 1, 0.3, 1]
      }}>
          <span className="text-sm uppercase tracking-editorial font-bold mb-4 md:mb-6 block text-gold">The Vision</span>
          <h2 id="intention-heading" className="font-serif text-2xl sm:text-3xl md:text-5xl lg:text-6xl mb-8 md:mb-12 leading-snug tracking-tight text-primary">
            Professional Depth <br />
            <span className="italic text-gold">& Deep Restoration</span>
          </h2>
          <p className="text-foreground/70 text-sm md:text-base leading-loose text-justify mb-6 md:mb-8 font-light max-w-3xl mx-auto">
            Set in the exclusive coastal enclave of Sotogrande, this training goes beyond aesthetic alignment. You will
            explore <strong className="text-primary">Authentic Functional Yin Yoga</strong> in the lineage of Paul
            Grilley, working with over 50 Yin Yoga asanas and eight myofascial archetypes-The curriculum weaves together
            ancient Vedic yoga philosophy through a contemporary lens, the wisdom of Yin and Yang and Traditional
            Chinese Medicine meridians, applied functional anatomy, sequencing skills, teaching methodology, and
            professional codes of conduct.
          </p>
          <p className="text-foreground/70 text-sm md:text-base leading-loose text-justify mt-6 md:mt-8 mb-10 md:mb-16 font-light max-w-3xl mx-auto">
            Throughout the week, equal emphasis is placed on embodying the art of holding space, stillness, and
            awareness within a daily Yin Yoga practice.
          </p>

          {/* The Intention Section */}
          <div className="mb-8 md:mb-12">
            <span className="text-primary text-sm uppercase tracking-editorial font-bold mb-3 md:mb-4 block">
              WHO IS THIS TRAINING FOR
            </span>
            <p className="text-foreground/70 text-sm md:text-base leading-loose text-justify font-light max-w-3xl mx-auto">
              This training is a bridge between professional development and personal restoration. It is crafted for:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 text-left">
            <InteractiveCard delay={0.2} isInView={isInView}>
              <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity">
                <YinYangIcon className="w-8 md:w-10 h-8 md:h-10 text-primary" />
              </div>
              <h3 className="font-serif text-xl md:text-2xl text-primary mb-2 md:mb-3">Certified Yoga Teachers</h3>
              <p className="text-sm md:text-base leading-relaxed text-foreground/60 group-hover:text-foreground/80 transition-colors">
                Who wish to integrate Authentic Functional Yin Yoga and fascia-targeted sequencing into their classes
                with knowledge, embodied experience, and confidence.
              </p>
            </InteractiveCard>

            <InteractiveCard delay={0.25} isInView={isInView}>
              <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity">
                <LotusIcon className="w-8 md:w-10 h-8 md:h-10 text-primary" />
              </div>
              <h3 className="font-serif text-xl md:text-2xl text-primary mb-2 md:mb-3">Health & Wellness Professionals</h3>
              <p className="text-sm md:text-base leading-relaxed text-foreground/60 group-hover:text-foreground/80 transition-colors">
                Seeking to apply anatomical and energetic Yin principles to their existing therapeutic or movement-based
                practice.
              </p>
            </InteractiveCard>

            <InteractiveCard delay={0.3} isInView={isInView}>
              <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity">
                <YinYangIcon className="w-8 md:w-10 h-8 md:h-10 text-primary" />
              </div>
              <h3 className="font-serif text-xl md:text-2xl text-primary mb-2 md:mb-3">Dedicated Practitioners</h3>
              <p className="text-sm md:text-base leading-relaxed text-foreground/60 group-hover:text-foreground/80 transition-colors">
                Who want to deepen their understanding of Yogic philosophy, Chakra and Meridian theory, and their own
                embodied Yin Yoga practice.
              </p>
            </InteractiveCard>

            <InteractiveCard delay={0.35} isInView={isInView}>
              <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity">
                <LotusIcon className="w-8 md:w-10 h-8 md:h-10 text-primary" />
              </div>
              <h3 className="font-serif text-xl md:text-2xl text-primary mb-2 md:mb-3">Soul Seekers</h3>
              <p className="text-sm md:text-base leading-relaxed text-foreground/60 group-hover:text-foreground/80 transition-colors">
                Feeling called to explore Yin Yoga beyond techniques and shapes, engaging with its philosophical,
                anatomical, and embodied layers in a calm, supportive environment that allows space to learn, rest, and
                integrate.
              </p>
            </InteractiveCard>
          </div>

          {/* CTA Button */}
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={isInView ? {
          opacity: 1,
          y: 0
        } : {}} transition={{
          duration: 0.8,
          delay: 0.5
        }} className="mt-16">
            <a href="#curriculum" className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-gold to-gold/90 text-primary font-semibold uppercase tracking-wider text-sm hover:from-primary hover:to-primary hover:text-primary-foreground transition-all duration-300 shadow-lg hover:shadow-xl">
              Explore the Training
            </a>
          </motion.div>

          {/* About Teacher Link */}
          <motion.div initial={{
          opacity: 0
        }} animate={isInView ? {
          opacity: 1
        } : {}} transition={{
          duration: 0.8,
          delay: 0.7
        }} className="mt-8">
            <a href="https://www.annehatha.com/#about" target="_blank" rel="noopener noreferrer" className="text-foreground/60 hover:text-gold transition-colors duration-300 text-sm tracking-wide">
              About the leading teacher →
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>;
};
export default IntentionSection;