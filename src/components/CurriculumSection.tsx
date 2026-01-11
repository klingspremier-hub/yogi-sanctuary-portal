import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
const MoonIcon = ({
  className,
  phase = "full"
}: {
  className?: string;
  phase?: "full" | "crescent" | "half";
}) => {
  if (phase === "crescent") {
    return <svg viewBox="0 0 100 100" className={className} fill="currentColor">
        <path d="M50 5C25.2 5 5 25.2 5 50s20.2 45 45 45c6.3 0 12.3-1.3 17.8-3.6-16.5-8.9-27.8-26.3-27.8-46.4s11.3-37.5 27.8-46.4C62.3 6.3 56.3 5 50 5z" />
      </svg>;
  }
  return <svg viewBox="0 0 100 100" className={className} fill="currentColor">
      <circle cx="50" cy="50" r="45" />
    </svg>;
};
const ChakraIcon = ({
  className
}: {
  className?: string;
}) => <svg viewBox="0 0 100 100" className={className} fill="none" stroke="currentColor">
    <circle cx="50" cy="50" r="45" strokeWidth="1" />
    <circle cx="50" cy="50" r="35" strokeWidth="1" />
    <circle cx="50" cy="50" r="25" strokeWidth="1" />
    <circle cx="50" cy="50" r="15" strokeWidth="1" />
    <circle cx="50" cy="50" r="5" fill="currentColor" />
    {[0, 60, 120, 180, 240, 300].map(angle => <line key={angle} x1="50" y1="5" x2="50" y2="95" strokeWidth="0.5" transform={`rotate(${angle} 50 50)`} />)}
  </svg>;
const MeridianIcon = ({
  className
}: {
  className?: string;
}) => <svg viewBox="0 0 100 100" className={className} fill="none" stroke="currentColor">
    <path d="M50 10 Q30 30 50 50 T50 90" strokeWidth="2" opacity="0.8" />
    <path d="M30 20 Q50 40 30 60 T30 90" strokeWidth="1.5" opacity="0.6" />
    <path d="M70 20 Q50 40 70 60 T70 90" strokeWidth="1.5" opacity="0.6" />
    <circle cx="50" cy="25" r="3" fill="currentColor" />
    <circle cx="50" cy="50" r="3" fill="currentColor" />
    <circle cx="50" cy="75" r="3" fill="currentColor" />
  </svg>;
interface InteractiveModuleCardProps {
  children: React.ReactNode;
  index: number;
  isInView: boolean;
  icon: React.ReactNode;
}
const InteractiveModuleCard = ({
  children,
  index,
  isInView,
  icon
}: InteractiveModuleCardProps) => {
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
  return <motion.div className="yin-card p-12 group cursor-pointer" initial={{
    opacity: 0,
    y: 30
  }} animate={isInView ? {
    opacity: 1,
    y: 0
  } : {}} transition={{
    duration: 1,
    delay: index * 0.15,
    ease: [0.16, 1, 0.3, 1]
  }} style={{
    '--mouse-x': `${mousePos.x}%`,
    '--mouse-y': `${mousePos.y}%`
  } as React.CSSProperties} onMouseMove={handleMouseMove}>
      <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-30 transition-opacity duration-500">
        {icon}
      </div>
      {children}
    </motion.div>;
};
const CurriculumSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px"
  });
  const modules = [{
    title: "Functional Anatomy",
    icon: <ChakraIcon className="w-16 h-16 text-gold" />,
    items: [{
      strong: "Skeletal Variation:",
      text: "Understanding how bone structure, joint mobility, and individual proportions shape each body's unique experience of a pose."
    }, {
      strong: "Fascia Study:",
      text: "Exploring myofascial networks, the interplay of tension and compression, and how tissue rebound influences long-term health."
    }, {
      strong: "Pose Families:",
      text: "Understanding the core pose families and 50+ Yin Yoga asanas and functional variations, including wall-supported Yin"
    }]
  }, {
    title: "Energetic Body",
    icon: <MeridianIcon className="w-16 h-16 text-gold" />,
    items: [{
      strong: "Meridian Theory:",
      text: "Understanding the Chinese Organ Clock and its structural framework for mapping energy flow through the body."
    }, {
      strong: "Chakras & Prana:",
      text: "Understanding the subtle body's energy centers"
    }, {
      strong: "Bioelectricity:",
      text: "Learning how Pranic flow, also known as Qi, moves through the fascial networks of the body"
    }]
  }, {
    title: "The Art of Teaching",
    icon: <MoonIcon className="w-16 h-16 text-gold" phase="crescent" />,
    items: [{
      strong: "Holding Space:",
      text: "Cultivating presence and silence that allows meaningful practice to unfold."
    }, {
      strong: "Cueing & Sequencing:",
      text: "Designing clear, intelligent sequences with precise verbal guidance and mindful use of touch."
    }, {
      strong: "Ethics & Professionalism:",
      text: "Understanding teacher responsibilities, ethical boundaries, and the integrity required when guiding others."
    }]
  }];
  return <section id="curriculum" className="py-24 md:py-40 bg-primary relative overflow-hidden">
      {/* Decorative floating elements */}
      <div className="absolute top-32 left-20 opacity-[0.03]">
        <ChakraIcon className="w-64 h-64 text-gold animate-[spin_60s_linear_infinite]" />
      </div>
      <div className="absolute bottom-32 right-20 opacity-[0.03]">
        <MeridianIcon className="w-48 h-48 text-gold animate-float" />
      </div>
      
      {/* Moon phases decoration */}
      <div className="absolute top-20 right-1/4 flex gap-4 opacity-5">
        <MoonIcon className="w-6 h-6 text-gold" phase="crescent" />
        <MoonIcon className="w-6 h-6 text-gold" phase="half" />
        <MoonIcon className="w-6 h-6 text-gold" phase="full" />
        <MoonIcon className="w-6 h-6 text-gold" phase="half" />
        <MoonIcon className="w-6 h-6 text-gold" phase="crescent" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10" ref={ref}>
        <motion.div className="text-center mb-24" initial={{
        opacity: 0,
        y: 30
      }} animate={isInView ? {
        opacity: 1,
        y: 0
      } : {}} transition={{
        duration: 1,
        ease: [0.16, 1, 0.3, 1]
      }}>
          <span className="text-gold text-[11px] uppercase tracking-editorial font-bold mb-6 block">
            The Curriculum
          </span>
          <h2 className="font-serif text-5xl md:text-7xl italic leading-none mb-6 text-primary-foreground">
            Deepening <span className="not-italic text-accent">Your Craft</span>
          </h2>
          <p className="text-primary-foreground/70 text-lg md:text-xl font-light max-w-2xl mx-auto mb-8">
            The curriculum unfolds through three interconnected pillars, supporting both technical understanding and embodied practice.
          </p>
          <div className="w-32 h-[1px] bg-gradient-to-r from-transparent via-gold/40 to-transparent mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {modules.map((module, index) => <InteractiveModuleCard key={module.title} index={index} isInView={isInView} icon={module.icon}>
              <h4 className="font-serif text-3xl text-gold mb-6 italic group-hover:text-gold-glow transition-colors">
                {module.title}
              </h4>
              <ul className="space-y-4 text-sm text-primary-foreground/60 font-light">
                {module.items.map((item, i) => <li key={i} className="group-hover:text-primary-foreground/80 transition-colors">
                    <strong className="text-gold/80">{item.strong}</strong> {item.text}
                  </li>)}
              </ul>
            </InteractiveModuleCard>)}
        </div>
      </div>
    </section>;
};
export default CurriculumSection;