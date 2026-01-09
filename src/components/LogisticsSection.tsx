import { motion } from "framer-motion";
import { Plane, Car, MapPin, MessageCircle } from "lucide-react";

const LogisticsSection = () => {
  const airports = [
    { name: "Gibraltar Airport", time: "approximately 20 minutes away" },
    { name: "Malaga Airport", time: "approximately 60 minutes away" },
    { name: "Jerez de la Frontera Airport", time: "approximately 75 minutes away" },
    { name: "Sevilla Airport", time: "approximately 2 hours away" },
  ];

  return (
    <section id="logistics" className="py-24 md:py-32 luxury-gradient-light texture-overlay relative overflow-hidden">
      {/* Decorative orbs */}
      <div className="glow-orb w-72 h-72 top-20 -left-20 opacity-40" />
      <div className="glow-orb w-96 h-96 bottom-10 -right-32 opacity-30" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-20"
        >
          <span className="text-gold text-[11px] uppercase tracking-editorial font-bold mb-6 block">
            The Arrival
          </span>
          <h2 className="mt-4 font-serif text-5xl md:text-7xl font-light text-primary tracking-tight">
            Travel <span className="italic text-gold">& Logistics</span>
          </h2>
          <div className="luxury-divider mt-10 max-w-md mx-auto" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
          {/* Airport Access Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            whileHover={{ y: -6, boxShadow: "0 15px 35px -10px rgba(212, 175, 55, 0.3)", backgroundColor: "rgba(212, 175, 55, 0.08)" }}
            transition={{ duration: 0.15 }}
            viewport={{ once: true }}
            className="yin-card-light p-8 md:p-10 cursor-pointer transition-all duration-150"
          >
            <motion.div 
              className="flex items-center gap-4 mb-6"
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <motion.div 
                className="w-14 h-14 flex items-center justify-center border border-gold/30 bg-gold/10"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Plane className="w-6 h-6 text-gold" />
              </motion.div>
              <h3 className="font-serif text-2xl md:text-3xl text-primary">Easy Access</h3>
            </motion.div>
            
            <div className="space-y-4">
              {airports.map((airport, index) => (
                <motion.div
                  key={airport.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  whileHover={{ x: 8, backgroundColor: "rgba(212, 175, 55, 0.08)" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-4 p-4 bg-cream/60 border border-gold/10 hover:border-gold/30 hover:shadow-md transition-all duration-300 cursor-pointer"
                >
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 15 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <MapPin className="w-5 h-5 text-gold flex-shrink-0" />
                  </motion.div>
                  <div className="flex-1">
                    <p className="text-lg font-medium text-primary">{airport.name}</p>
                    <p className="text-base text-muted-foreground">{airport.time}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Travel Support Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            whileHover={{ y: -6, boxShadow: "0 15px 35px -10px rgba(212, 175, 55, 0.3)", backgroundColor: "rgba(212, 175, 55, 0.08)" }}
            transition={{ duration: 0.15 }}
            viewport={{ once: true }}
            className="yin-card-light p-8 md:p-10 cursor-pointer transition-all duration-150"
          >
            <motion.div 
              className="flex items-center gap-4 mb-6"
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <motion.div 
                className="w-14 h-14 flex items-center justify-center border border-gold/30 bg-gold/10"
                whileHover={{ scale: 1.1, rotate: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Car className="w-6 h-6 text-gold" />
              </motion.div>
              <h3 className="font-serif text-2xl md:text-3xl text-primary">Travel Support</h3>
            </motion.div>
            
            <motion.p 
              className="text-lg text-foreground/80 mb-6 leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Upon registration you will receive our Travel Guide, including:
            </motion.p>
            
            <div className="space-y-4">
              {[
                "Trusted taxi contacts",
                "Public transport options",
                "Car rental tips",
                "Access to a private WhatsApp group for optional ride-sharing"
              ].map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  whileHover={{ x: -8, backgroundColor: "rgba(212, 175, 55, 0.08)" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3 p-3 bg-cream/60 border border-gold/10 hover:border-gold/30 hover:shadow-md transition-all duration-300 cursor-pointer"
                >
                  <motion.div
                    className="w-2 h-2 bg-gold rotate-45 flex-shrink-0"
                    whileHover={{ scale: 1.5, rotate: 90 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  />
                  <p className="text-lg text-foreground/80">{item}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Important Note */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 max-w-3xl mx-auto text-center"
        >
          <div className="p-6 md:p-8 border border-gold/20 bg-card/80 backdrop-blur-sm">
            <div className="flex items-center justify-center gap-3 mb-3">
              <MessageCircle className="w-5 h-5 text-gold" />
              <span className="text-sm tracking-[0.25em] text-red-500 uppercase font-medium">Please Note</span>
            </div>
            <p className="text-lg md:text-xl text-foreground/80 leading-relaxed">
              To maintain flexibility and competitive tuition rates, airport transfers are not included. 
              Our Travel Guide will help you arrange convenient transportation options.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LogisticsSection;
