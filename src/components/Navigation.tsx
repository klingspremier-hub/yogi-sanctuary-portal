import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import logoWhite from "@/assets/logo-white-small.webp";

const NavLink = ({
  href,
  children,
  onClick
}: {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
}) => (
  <a href={href} className="relative group py-2" onClick={onClick}>
    <span className="text-primary-foreground/70 group-hover:text-gold transition-colors duration-300">
      {children}
    </span>
    <span className="absolute bottom-0 left-0 w-0 h-px bg-gradient-to-r from-gold to-gold/50 group-hover:w-full transition-all duration-500" />
  </a>
);

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  const navLinks = [
    { href: "#top", label: "Overview" },
    { href: "#intention", label: "Intention" },
    { href: "#venue", label: "Venue" },
    { href: "#curriculum", label: "Curriculum" },
    { href: "#schedule", label: "Schedule" },
    { href: "#pricing", label: "Pricing" },
    { href: "#certification", label: "Certification" },
    { href: "#logistics", label: "Logistics" },
  ];

  return (
    <>
      <motion.nav
        className="fixed w-full z-[90] px-3 py-2 md:px-4 md:py-3 glass-nav"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="w-full flex justify-between items-center">
          <a href="https://yinyogattc.com" target="_blank" rel="noopener noreferrer" className="flex flex-col group shrink-0">
            <img
              alt="AnneHathaYoga"
              className="h-8 md:h-10 w-auto"
              src={logoWhite}
              width={143}
              height={80}
              loading="lazy"
              decoding="async"
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden xl:flex items-center gap-5 text-[11px] uppercase tracking-widest font-bold">
            {navLinks.map((link) => (
              <NavLink key={link.href} href={link.href}>
                {link.label}
              </NavLink>
            ))}
            <a
              href="#apply"
              className="group relative ml-2 px-7 py-3 bg-gradient-to-r from-gold to-gold/90 text-primary text-xs hover:from-primary-foreground hover:to-primary-foreground transition-all duration-500 btn-luxury shadow-lg overflow-hidden"
            >
              <span className="relative z-10">Apply</span>
            </a>
          </div>

          {/* Mobile: Apply Button + Menu Toggle */}
          <div className="xl:hidden flex items-center gap-2">
            <a
              href="#apply"
              className="px-4 py-2 bg-gradient-to-r from-gold to-gold/90 text-primary text-[10px] uppercase tracking-widest font-bold btn-luxury shadow-lg"
            >
              Apply
            </a>
            <button
              className="p-2 text-primary-foreground hover:text-gold transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-[85] bg-primary flex flex-col items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <nav className="flex flex-col items-center gap-6 text-lg uppercase tracking-widest font-bold">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-primary-foreground/70 hover:text-gold transition-colors duration-300"
                  onClick={closeMobileMenu}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#apply"
                className="mt-4 px-10 py-4 bg-gradient-to-r from-gold to-gold/90 text-primary text-sm btn-luxury shadow-lg"
                onClick={closeMobileMenu}
              >
                Apply Now
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;