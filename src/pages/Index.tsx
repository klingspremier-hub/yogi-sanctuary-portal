import { useEffect, useState, lazy, Suspense } from "react";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";

// Lazy load below-the-fold components
const IntentionSection = lazy(() => import("@/components/IntentionSection"));
const VenueSection = lazy(() => import("@/components/VenueSection"));
const CurriculumSection = lazy(() => import("@/components/CurriculumSection"));
const ScheduleSection = lazy(() => import("@/components/ScheduleSection"));
const InclusionsSection = lazy(() => import("@/components/InclusionsSection"));
const CertificationSection = lazy(() => import("@/components/CertificationSection"));
const FAQSection = lazy(() => import("@/components/FAQSection"));
const LogisticsSection = lazy(() => import("@/components/LogisticsSection"));
const PricingSection = lazy(() => import("@/components/PricingSection"));
const ApplicationForm = lazy(() => import("@/components/ApplicationForm"));
const Footer = lazy(() => import("@/components/Footer"));
const WhatsAppButton = lazy(() => import("@/components/WhatsAppButton"));

// Minimal loading fallback
const SectionLoader = () => (
  <div className="min-h-[200px] flex items-center justify-center">
    <div className="w-8 h-8 border-2 border-gold/30 border-t-gold rounded-full animate-spin" />
  </div>
);

const Index = () => {
  const [selectedPackage, setSelectedPackage] = useState("Shared Room");

  useEffect(() => {
    let activeInterval: number | null = null;

    const scrollToCurrentHash = (behavior: ScrollBehavior) => {
      if (activeInterval) {
        window.clearInterval(activeInterval);
        activeInterval = null;
      }

      const hash = window.location.hash;
      if (!hash || hash === "#") return;

      const id = decodeURIComponent(hash.slice(1));
      let attempts = 0;
      const maxAttempts = 60; // ~6s

      activeInterval = window.setInterval(() => {
        const el = document.getElementById(id);

        if (el) {
          const nav = document.querySelector("nav") as HTMLElement | null;
          const offset = nav ? nav.getBoundingClientRect().height + 16 : 96;
          const top = el.getBoundingClientRect().top + window.scrollY - offset;

          window.scrollTo({ top: Math.max(0, top), behavior });

          if (activeInterval) {
            window.clearInterval(activeInterval);
            activeInterval = null;
          }
          return;
        }

        attempts += 1;
        if (attempts >= maxAttempts && activeInterval) {
          window.clearInterval(activeInterval);
          activeInterval = null;
        }
      }, 100);
    };

    // Handle direct links like /#venue (React mounts after load; sections are lazy-loaded).
    if (window.location.hash) {
      window.requestAnimationFrame(() => scrollToCurrentHash("auto"));
    }

    const onHashChange = () => scrollToCurrentHash("smooth");
    window.addEventListener("hashchange", onHashChange);

    return () => {
      window.removeEventListener("hashchange", onHashChange);
      if (activeInterval) window.clearInterval(activeInterval);
    };
  }, []);

  const handlePackageSelect = (pkg: string) => {
    setSelectedPackage(pkg);
    document.getElementById("apply")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main id="top" className="overflow-x-hidden">
      <Navigation />
      <HeroSection />
      <Suspense fallback={<SectionLoader />}>
        <IntentionSection />
        <VenueSection />
        <CurriculumSection />
        <ScheduleSection />
        <InclusionsSection />
        <PricingSection onPackageSelect={handlePackageSelect} />
        <CertificationSection />
        <FAQSection />
        <LogisticsSection />
        <ApplicationForm selectedPackage={selectedPackage} />
        <Footer />
        <WhatsAppButton />
      </Suspense>
    </main>
  );
};

export default Index;
