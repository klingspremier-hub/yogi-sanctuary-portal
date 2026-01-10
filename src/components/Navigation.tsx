import { Menu } from "lucide-react";
import { motion } from "framer-motion";
import logoWhite from "@/assets/logo-white.webp";

const NavLink = ({
  href,
  children
}: {
  href: string;
  children: React.ReactNode;
}) => <a href={href} className="relative group py-2">
    <span className="text-primary-foreground/70 group-hover:text-gold transition-colors duration-300">
      {children}
    </span>
    <span className="absolute bottom-0 left-0 w-0 h-px bg-gradient-to-r from-gold to-gold/50 group-hover:w-full transition-all duration-500" />
  </a>;
const Navigation = () => {
  return <motion.nav className="fixed w-full z-[90] px-3 py-2 md:px-4 md:py-3 glass-nav" initial={{
    y: -100,
    opacity: 0
  }} animate={{
    y: 0,
    opacity: 1
  }} transition={{
    duration: 0.8,
    ease: [0.16, 1, 0.3, 1]
  }}>
      <div className="w-full flex justify-between items-center">
        <a href="#top" className="flex flex-col group shrink-0">
          <img 
            alt="AnneHathaYoga" 
            className="h-20 md:h-10 w-auto" 
            src={logoWhite}
            width={143}
            height={80}
          />
        </a>

        <div className="hidden xl:flex items-center gap-5 text-[11px] uppercase tracking-widest font-bold">
          <NavLink href="#top">Overview</NavLink>
          <NavLink href="#curriculum">Curriculum</NavLink>
          <NavLink href="#venue">Venue</NavLink>
          <NavLink href="#schedule">Schedule</NavLink>
          <NavLink href="#pricing">Pricing</NavLink>
          <NavLink href="#certification">Certification</NavLink>
          <NavLink href="#logistics">Logistics</NavLink>
          <a href="#apply" className="group relative ml-2 px-7 py-3 bg-gradient-to-r from-gold to-gold/90 text-primary text-xs hover:from-primary-foreground hover:to-primary-foreground transition-all duration-500 btn-luxury shadow-lg overflow-hidden">
            <span className="relative z-10">Apply</span>
          </a>
        </div>

        <button className="xl:hidden p-2 text-primary-foreground hover:text-gold transition-colors">
          <Menu className="w-6 h-6" />
        </button>
      </div>
    </motion.nav>;
};
export default Navigation;