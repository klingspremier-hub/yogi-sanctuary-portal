import { useState } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { toast } from "@/hooks/use-toast";
import { Send, Check, Flower } from "lucide-react";
interface ApplicationFormProps {
  selectedPackage: string;
}
const ApplicationForm = ({
  selectedPackage
}: ApplicationFormProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px"
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    lastname: "",
    email: "",
    package: selectedPackage || "Shared Room"
  });
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setIsSubmitting(true);

    // Simulate submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    toast({
      title: "Application Successfully Sent",
      description: "Thank you for your application for the May 2026 Yin Yoga Teacher Training Immersion. Your application has been received and will be reviewed shortly. You can expect a personal response within 24 hours with the next steps."
    });
    setFormData({
      name: "",
      lastname: "",
      email: "",
      package: "Shared Room"
    });
    setIsSubmitting(false);
  };
  const packages = [{
    value: "Shared Room",
    label: "Shared Room",
    icon: "✧"
  }, {
    value: "TTC Duo",
    label: "TTC Duo (2 Participants)",
    icon: "✦"
  }, {
    value: "Companion",
    label: "TTC + Companion",
    icon: "❖"
  }, {
    value: "Single Upgrade",
    label: "Single Occupancy Upgrade",
    icon: "◇"
  }];
  return <section id="apply" className="py-24 md:py-32 luxury-gradient-light texture-overlay relative overflow-hidden">
      {/* Decorative elements */}
      <div className="glow-orb w-80 h-80 -top-40 -right-40 opacity-40" />
      <div className="glow-orb w-64 h-64 bottom-0 -left-32 opacity-30" />
      
      <div className="max-w-4xl mx-auto px-6 relative z-10" ref={ref}>
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
          <span className="text-xs uppercase tracking-[0.3em] text-primary/70 font-medium">
            The Application
          </span>
          <h3 className="font-serif text-5xl md:text-6xl text-primary mb-6 mt-4">
            Application <span className="italic text-gold">& Enrollment</span>
          </h3>
          <p className="text-sm text-muted-foreground tracking-wide">Limited to 21 participants · Application required</p>
        </motion.div>

        <motion.form onSubmit={handleSubmit} className="yin-card-light p-10 md:p-16 relative" initial={{
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
          {/* Decorative top border */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold to-transparent" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            <div className="group">
              <label className="block text-[10px] uppercase tracking-[0.2em] text-primary font-bold mb-3 group-focus-within:text-gold transition-colors">
                First Name
              </label>
              <input 
                type="text" 
                value={formData.name} 
                onChange={e => setFormData({
                  ...formData,
                  name: e.target.value
                })} 
                required 
                title="Please enter your first name"
                className="luxury-input" 
                placeholder="Enter your first name" 
              />
            </div>
            <div className="group">
              <label className="block text-[10px] uppercase tracking-[0.2em] text-primary font-bold mb-3 group-focus-within:text-gold transition-colors">
                Last Name
              </label>
              <input 
                type="text" 
                value={formData.lastname} 
                onChange={e => setFormData({
                  ...formData,
                  lastname: e.target.value
                })} 
                required 
                title="Please enter your last name"
                className="luxury-input" 
                placeholder="Enter your last name" 
              />
            </div>
          </div>

          <div className="mb-10 group">
            <label className="block text-[10px] uppercase tracking-[0.2em] text-primary font-bold mb-3 group-focus-within:text-gold transition-colors">
              Email Address
            </label>
            <input 
              type="email" 
              value={formData.email} 
              onChange={e => setFormData({
                ...formData,
                email: e.target.value
              })} 
              required 
              title="Please enter a valid email address"
              className="luxury-input" 
              placeholder="your@email.com" 
            />
          </div>

          <div className="mb-12">
            <label className="block text-[10px] uppercase tracking-[0.2em] text-primary font-bold mb-6">
              Preferred Path
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {packages.map(option => <label key={option.value} className={`relative flex items-center gap-4 p-5 cursor-pointer border-2 transition-all duration-500 group ${formData.package === option.value ? "border-gold bg-gold/5 shadow-lg" : "border-border/30 hover:border-gold/50 hover:bg-gold/5"}`}>
                  <input type="radio" name="package" value={option.value} checked={formData.package === option.value} onChange={e => setFormData({
                ...formData,
                package: e.target.value
              })} className="sr-only" />
                  <span className={`text-2xl transition-transform duration-300 ${formData.package === option.value ? "text-gold scale-110" : "text-muted-foreground"}`}>
                    {option.icon}
                  </span>
                  <span className={`text-sm font-medium transition-colors ${formData.package === option.value ? "text-primary" : "text-muted-foreground"}`}>
                    {option.label}
                  </span>
                  {formData.package === option.value && <Check className="absolute right-4 w-4 h-4 text-gold" />}
                </label>)}
            </div>
          </div>

          <motion.button type="submit" disabled={isSubmitting} className="w-full py-6 bg-primary text-primary-foreground text-[12px] uppercase tracking-[0.3em] font-bold hover:bg-primary/90 transition-all shadow-xl btn-luxury disabled:opacity-50 flex items-center justify-center gap-3 group" whileHover={{
          scale: 1.02,
          boxShadow: "0 20px 40px -15px rgba(0,0,0,0.3)"
        }} whileTap={{
          scale: 0.98
        }} transition={{
          type: "spring",
          stiffness: 400,
          damping: 17
        }}>
            {isSubmitting ? <>
                <motion.div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full" animate={{
              rotate: 360
            }} transition={{
              duration: 1,
              repeat: Infinity,
              ease: "linear"
            }} />
                Processing...
              </> : <>
                Submit Application
                <motion.span className="inline-flex" whileHover={{
              x: 4
            }} transition={{
              type: "spring",
              stiffness: 400,
              damping: 10
            }}>
                  <Send className="w-4 h-4" />
                </motion.span>
              </>}
          </motion.button>
        </motion.form>
      </div>
    </section>;
};
export default ApplicationForm;