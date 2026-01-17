import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { toast } from "@/hooks/use-toast";
import { Send, Check, AlertCircle } from "lucide-react";
import HCaptcha from "./HCaptcha";
import useLoadHCaptcha from "@/hooks/useLoadHCaptcha";

interface ApplicationFormProps {
  selectedPackage: string;
}

interface FormErrors {
  name?: string;
  lastname?: string;
  email?: string;
  captcha?: string;
}

const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const HCAPTCHA_SITE_KEY = "80de2d4a-c34c-4e14-959e-9b58db1ed048";

const ApplicationForm = ({
  selectedPackage
}: ApplicationFormProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px"
  });
  const { isLoaded: isCaptchaLoaded, loadScript: loadCaptcha } = useLoadHCaptcha();
  const [formInteracted, setFormInteracted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    lastname: "",
    email: "",
    package: selectedPackage || "Shared Room"
  });
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const [errors, setErrors] = useState<FormErrors>({});
  const [showGeneralError, setShowGeneralError] = useState(false);
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [captchaKey, setCaptchaKey] = useState(0);

  // Load hCaptcha when user interacts with form (reduces TBT)
  const handleFormInteraction = () => {
    if (!formInteracted) {
      setFormInteracted(true);
      loadCaptcha();
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = "First name is required";
    }
    
    if (!formData.lastname.trim()) {
      newErrors.lastname = "Last name is required";
    }
    
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!captchaToken) {
      newErrors.captcha = "Please complete the captcha";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleBlur = (field: string) => {
    setTouched(prev => ({ ...prev, [field]: true }));
    validateForm();
  };

  const handleCaptchaVerify = (token: string) => {
    setCaptchaToken(token);
    setErrors(prev => ({ ...prev, captcha: undefined }));
  };

  const handleCaptchaExpire = () => {
    setCaptchaToken(null);
  };

  const resetCaptcha = () => {
    setCaptchaToken(null);
    setCaptchaKey(prev => prev + 1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Mark all fields as touched
    setTouched({ name: true, lastname: true, email: true, captcha: true });
    
    const isValid = validateForm();
    
    if (!isValid) {
      setShowGeneralError(true);
      return;
    }
    
    setShowGeneralError(false);
    setIsSubmitting(true);

    try {
      const response = await fetch("https://usebasin.com/f/7cdaa76d2ac2", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          lastname: formData.lastname.trim(),
          email: formData.email.trim(),
          package: formData.package,
          "h-captcha-response": captchaToken
        })
      });

      if (!response.ok) {
        throw new Error("Submission failed");
      }

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
      setErrors({});
      setTouched({});
      resetCaptcha();
    } catch (error) {
      toast({
        title: "Submission Failed",
        description: "There was an error sending your application. Please try again or contact us directly.",
        variant: "destructive"
      });
      resetCaptcha();
    } finally {
      setIsSubmitting(false);
    }
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

  const getInputClassName = (field: keyof FormErrors) => {
    const hasError = touched[field] && errors[field];
    return `luxury-input ${hasError ? 'border-2 border-destructive ring-2 ring-destructive/20' : ''}`;
  };

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
                First Name <span className="text-destructive">*</span>
              </label>
              <input 
                type="text" 
                value={formData.name} 
                onChange={e => setFormData({
                  ...formData,
                  name: e.target.value
                })}
                onFocus={handleFormInteraction}
                onBlur={() => handleBlur('name')}
                className={getInputClassName('name')} 
                placeholder="Enter your first name" 
              />
              {touched.name && errors.name && (
                <p className="text-destructive text-xs mt-2 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" />
                  {errors.name}
                </p>
              )}
            </div>
            <div className="group">
              <label className="block text-[10px] uppercase tracking-[0.2em] text-primary font-bold mb-3 group-focus-within:text-gold transition-colors">
                Last Name <span className="text-destructive">*</span>
              </label>
              <input 
                type="text" 
                value={formData.lastname} 
                onChange={e => setFormData({
                  ...formData,
                  lastname: e.target.value
                })}
                onFocus={handleFormInteraction}
                onBlur={() => handleBlur('lastname')}
                className={getInputClassName('lastname')} 
                placeholder="Enter your last name" 
              />
              {touched.lastname && errors.lastname && (
                <p className="text-destructive text-xs mt-2 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" />
                  {errors.lastname}
                </p>
              )}
            </div>
          </div>

          <div className="mb-10 group">
            <label className="block text-[10px] uppercase tracking-[0.2em] text-primary font-bold mb-3 group-focus-within:text-gold transition-colors">
              Email Address <span className="text-destructive">*</span>
            </label>
            <input 
              type="email" 
              value={formData.email} 
              onChange={e => setFormData({
                ...formData,
                email: e.target.value
              })}
              onFocus={handleFormInteraction}
              onBlur={() => handleBlur('email')}
              className={getInputClassName('email')} 
              placeholder="your@email.com" 
            />
            {touched.email && errors.email && (
              <p className="text-destructive text-xs mt-2 flex items-center gap-1">
                <AlertCircle className="w-3 h-3" />
                {errors.email}
              </p>
            )}
          </div>

          <div className="mb-12">
            <label className="block text-[10px] uppercase tracking-[0.2em] text-primary font-bold mb-6">
              Preferred Path
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {packages.map(option => <label key={option.value} className={`relative flex items-center gap-4 p-5 cursor-pointer border-2 transition-all duration-500 group ${formData.package === option.value ? "border-gold bg-gold/5 shadow-lg" : "border-border/30 hover:border-gold/50 hover:bg-gold/5"}`}>
                  <input type="radio" name="package" value={option.value} checked={formData.package === option.value} onChange={e => {
                    handleFormInteraction();
                    setFormData({
                      ...formData,
                      package: e.target.value
                    });
                  }} className="sr-only" />
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

          {/* hCaptcha - Loaded on form interaction to reduce TBT */}
          <div className="mb-8">
            {isCaptchaLoaded ? (
              <HCaptcha
                key={captchaKey}
                siteKey={HCAPTCHA_SITE_KEY}
                onVerify={handleCaptchaVerify}
                onExpire={handleCaptchaExpire}
              />
            ) : (
              <div className="flex justify-center py-4">
                <div className="w-[303px] h-[78px] bg-muted/30 border border-border/50 rounded flex items-center justify-center">
                  <span className="text-xs text-muted-foreground">Loading verification...</span>
                </div>
              </div>
            )}
            {touched.captcha && errors.captcha && (
              <p className="text-destructive text-xs mt-3 flex items-center justify-center gap-1">
                <AlertCircle className="w-3 h-3" />
                {errors.captcha}
              </p>
            )}
          </div>

          {/* General error message */}
          {showGeneralError && (
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6 p-4 bg-destructive/10 border border-destructive/30 rounded-lg flex items-center gap-3"
            >
              <AlertCircle className="w-5 h-5 text-destructive flex-shrink-0" />
              <p className="text-destructive text-sm font-medium">
                Please fill in all required fields correctly.
              </p>
            </motion.div>
          )}

          <motion.button
            type="submit"
            disabled={isSubmitting || !captchaToken}
            className="w-full relative px-4 sm:px-6 py-6 bg-primary text-primary-foreground text-[11px] sm:text-[12px] uppercase tracking-[0.18em] sm:tracking-[0.3em] hover:tracking-[0.18em] sm:hover:tracking-[0.3em] font-bold hover:bg-primary/90 transition-all shadow-xl btn-luxury disabled:opacity-50 flex items-center justify-center group"
            whileHover={{
              scale: 1.02,
              boxShadow: "0 20px 40px -15px rgba(0,0,0,0.3)"
            }}
            whileTap={{
              scale: 0.98
            }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 17
            }}
          >
            {isSubmitting ? (
              <>
                <motion.div
                  className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                />
                <span className="w-full text-center whitespace-nowrap">Processing...</span>
              </>
            ) : (
              <>
                <span className="w-full text-center whitespace-nowrap">Submit Application</span>
                <motion.span
                  className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 inline-flex"
                  whileHover={{ x: 4 }}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 10
                  }}
                >
                  <Send className="w-4 h-4" />
                </motion.span>
              </>
            )}
          </motion.button>
        </motion.form>
      </div>
    </section>;
};
export default ApplicationForm;
