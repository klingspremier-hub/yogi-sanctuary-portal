import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Star } from "lucide-react";
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
  </svg>;
interface DuoPricingItem {
  heading: string;
  earlyBirdPrice: string;
  regularPrice: string;
  note: string;
}
interface PricingCardProps {
  title: string;
  subtitle: string;
  description: string;
  originalPrice?: string;
  price: string;
  priceNote?: string;
  earlyBird?: string;
  featured?: boolean;
  duoPricing?: DuoPricingItem[];
  footerNote?: string;
  onSelect: () => void;
  buttonText: string;
}
const PricingCard = ({
  title,
  subtitle,
  description,
  originalPrice,
  price,
  priceNote,
  earlyBird,
  featured,
  duoPricing,
  footerNote,
  onSelect,
  buttonText
}: PricingCardProps) => {
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
  if (featured) {
    return <div className="bg-aubergine p-10 flex flex-col relative shadow-2xl scale-105 z-10 group cursor-pointer rounded-lg" style={{
      '--mouse-x': `${mousePos.x}%`,
      '--mouse-y': `${mousePos.y}%`
    } as React.CSSProperties} onMouseMove={handleMouseMove}>
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gold via-gold-glow to-gold rounded-t-lg"></div>
        <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-25 transition-opacity">
          <LotusIcon className="w-16 h-16 text-white" />
        </div>
        <h4 className="font-serif text-3xl text-white mb-4">{title}</h4>
        <p className="text-xs uppercase tracking-widest text-gold font-bold mb-8">
          {subtitle}
        </p>
        <p className="text-sm text-white/70 leading-relaxed mb-6 flex-grow group-hover:text-white/90 transition-colors">
          {description}
        </p>

        {duoPricing && <div className="space-y-6 mb-8">
            {duoPricing.map((item, i) => <div key={i} className={i !== duoPricing.length - 1 ? "border-b border-white/20 pb-5" : ""}>
                <div className="flex items-start gap-2 mb-2">
                  <Star className="w-3 h-3 text-gold mt-1 flex-shrink-0" fill="currentColor" />
                  <span className="text-sm text-white/80 font-medium">{item.heading}</span>
                </div>
                <div className="flex items-baseline gap-3 mb-1">
                  <span className="text-3xl font-serif text-white">{item.earlyBirdPrice}</span>
                  <span className="text-lg text-white/40 line-through">{item.regularPrice}</span>
                </div>
                <span className="text-xs uppercase text-green-400 font-bold">Early Bird Price</span>
              </div>)}
            {footerNote && <p className="text-sm text-white/70 leading-relaxed pt-2 border-t border-white/20">
                {footerNote}
              </p>}
          </div>}

        {/* Urgency indicator */}
        <div className="flex items-center justify-center gap-2 mb-4">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          <span className="text-xs text-green-400 font-medium">Only 3 duo spots remaining</span>
        </div>
        
        <button onClick={onSelect} className="block w-full py-4 text-center bg-gold text-primary text-[11px] uppercase tracking-widest hover:bg-gold-glow transition-all font-bold hover:shadow-lg hover:shadow-gold/20 relative overflow-hidden group">
          <span className="relative z-10">{buttonText}</span>
          <span className="absolute inset-0 bg-gradient-to-r from-gold-glow via-white/20 to-gold-glow opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity"></span>
        </button>
      </div>;
  }
  return <div className="yin-card p-10 flex flex-col group cursor-pointer" style={{
    '--mouse-x': `${mousePos.x}%`,
    '--mouse-y': `${mousePos.y}%`
  } as React.CSSProperties} onMouseMove={handleMouseMove}>
      <h4 className="font-serif text-3xl text-primary-foreground mb-4 group-hover:text-gold transition-colors">{title}</h4>
      <p className="text-xs uppercase tracking-widest text-gold font-bold mb-8">
        {subtitle}
      </p>
      <p className="text-sm text-primary-foreground/60 leading-relaxed mb-8 flex-grow group-hover:text-primary-foreground/80 transition-colors">
        {description}
      </p>

      <div className="mb-8">
        {originalPrice && <span className="block text-2xl text-primary-foreground/50 line-through font-serif mb-1">
            {originalPrice}
          </span>}
        <span className="block text-5xl font-serif transition-colors text-white">{price}</span>
        {earlyBird && <>
            <span className="text-xs uppercase text-green-400 font-bold">
              {earlyBird}
            </span>
            <p className="text-sm text-primary-foreground/60 mt-2 leading-relaxed">{priceNote}</p>
          </>}
        {!earlyBird && priceNote && <span className="text-[10px] uppercase text-primary-foreground/40 font-bold">
            {priceNote}
          </span>}
      </div>

      <button onClick={onSelect} className="block w-full py-4 text-center border border-primary-foreground/20 text-primary-foreground text-[11px] uppercase tracking-widest hover:bg-gold hover:text-primary hover:border-gold transition-all font-bold">
        {buttonText}
      </button>
    </div>;
};
interface PricingSectionProps {
  onPackageSelect: (pkg: string) => void;
}
const PricingSection = ({
  onPackageSelect
}: PricingSectionProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px"
  });
  return <section id="pricing" className="py-24 md:py-40 bg-primary relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-gold blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-gold blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10" ref={ref}>
        <motion.div className="text-center mb-16" initial={{
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
            The Investment
          </span>
          <h2 className="font-serif text-5xl md:text-7xl text-primary-foreground mb-8">
            Pricing <span className="italic text-gold">& Packages</span>
          </h2>
          <p className="text-primary-foreground/60 text-lg font-light max-w-2xl mx-auto text-center leading-relaxed">
            All packages include seven nights of shared accommodation, 
            the 50-hour Yin Yoga Teacher Training, 
            and nourishing local vegetarian full-board catering.
          </p>
        </motion.div>

        <motion.div className="grid grid-cols-1 lg:grid-cols-3 gap-0 items-stretch" initial={{
        opacity: 0,
        y: 30
      }} animate={isInView ? {
        opacity: 1,
        y: 0
      } : {}} transition={{
        duration: 1,
        delay: 0.2,
        ease: [0.16, 1, 0.3, 1]
      }}>
          {/* 1. Shared Room */}
          <PricingCard title="Shared Room" subtitle="Most Popular" description="Stay in a comfortable, light-filled single beds room, shared with one other participant." originalPrice="€1,995" price="€1,795" earlyBird="Early Bird Price" priceNote="Register before February 28, 2026. Early registration secures a €200 price advantage." onSelect={() => onPackageSelect("Shared Room")} buttonText="Register Now" />

          {/* 2. Duo Packages */}
          <PricingCard title="Duo Packages" subtitle="Best Value" description="Traveling with a friend, colleague, or partner allows you to share accommodation with someone you know, while benefiting from a more favorable package rate." price="" featured duoPricing={[{
          heading: "Two TTC participants sharing one room",
          earlyBirdPrice: "€3,390 total",
          regularPrice: "€3,790 total",
          note: "(€1,695 per person Early Bird / €1,895 per person Regular)"
        }, {
          heading: "One TTC participant and one non-participating retreat companion",
          earlyBirdPrice: "€2,650 total",
          regularPrice: "€2,850 total",
          note: ""
        }]} footerNote="Register before February 28, 2026. Early registration secures a €200 price advantage per person." onSelect={() => onPackageSelect("Duo Package")} buttonText="Book as a Duo" />

          {/* 3. Single Occupancy Upgrade */}
          <PricingCard title="Single Occupancy Upgrade" subtitle="Limited Availability" description="Accommodation is shared by default to support a sense of community. A limited number of private rooms are available for participants who prefer more solitude." price="+€450" priceNote="Surcharge in addition to selected individual package price. Allocated on a first-come basis." onSelect={() => onPackageSelect("Single Upgrade")} buttonText="Inquire About Single Occupancy" />
        </motion.div>
      </div>
    </section>;
};
export default PricingSection;