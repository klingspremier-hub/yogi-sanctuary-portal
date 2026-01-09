import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check, Home, GraduationCap, Utensils, BookOpen, Users, Flower2 } from "lucide-react";
const InclusionsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px"
  });
  const inclusions = [{
    icon: Home,
    title: "7 Nights Accommodation",
    description: "Shared room in single-story residential houses with private terrace, community pool, gardens, and Mediterranean views"
  }, {
    icon: GraduationCap,
    title: "50-Hour YA Certification",
    description: "Yoga Alliance-acknowledged Yin Yoga Teacher Training • YACEP eligible"
  }, {
    icon: Utensils,
    title: "Full-Board Catering",
    description: "Nourishing local vegetarian meals, including breakfast, lunch, and dinner, with snacks, water, tea, and coffee available throughout the day."
  }, {
    icon: BookOpen,
    title: "Training Materials",
    description: "Comprehensive training manual and full use of yoga props, including mats, bolsters, blankets"
  }, {
    icon: Flower2,
    title: "Daily Practice Sessions",
    description: "Morning pranayama, meditation, and evening Yin Yoga asana practice"
  }, {
    icon: Users,
    title: "Small Group Setting",
    description: "Intimate cohort ensuring personalized attention and meaningful connection"
  }];
  return <section className="py-24 md:py-32 luxury-gradient-warm relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/10 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/10 to-transparent" />

      <div className="max-w-6xl mx-auto px-6 relative z-10" ref={ref}>
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
            The Offering
          </span>
          <h2 className="font-serif text-4xl md:text-6xl text-foreground mb-6">
            Immersion <span className="italic text-gold">& Integration</span>
          </h2>
          <p className="text-foreground/60 text-lg font-light max-w-2xl mx-auto">
            A balanced week of focused learning, embodied practice, restorative leisure and nourishing meals, held within a certified training framework.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {inclusions.map((item, index) => {
          const Icon = item.icon;
          return <motion.div key={item.title} className="group p-8 border border-primary/10 hover:border-gold/30 bg-card/60 cursor-pointer transition-all duration-150" initial={{
            opacity: 0,
            y: 20
          }} animate={isInView ? {
            opacity: 1,
            y: 0
          } : {}} whileHover={{
            y: -6,
            boxShadow: "0 15px 35px -10px rgba(212, 175, 55, 0.3)",
            backgroundColor: "rgba(212, 175, 55, 0.08)"
          }} transition={{
            duration: 0.15
          }}>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-serif text-xl text-foreground mb-2 group-hover:text-primary transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-sm text-foreground/60 leading-relaxed group-hover:text-foreground/80 transition-colors">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>;
        })}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-16"
        >
          <a
            href="#pricing"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-gold to-gold/90 text-primary font-semibold uppercase tracking-wider text-sm hover:from-primary hover:to-primary hover:text-primary-foreground transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            View Packages
          </a>
        </motion.div>
      </div>
    </section>;
};
export default InclusionsSection;