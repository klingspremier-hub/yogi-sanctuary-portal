import { useState, lazy, Suspense } from "react";
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

  const handlePackageSelect = (pkg: string) => {
    setSelectedPackage(pkg);
    document.getElementById("apply")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div id="top" className="overflow-x-hidden">
      <Navigation />
      <HeroSection />
      <Suspense fallback={<SectionLoader />}>
        <section id="intention">
          <IntentionSection />
        </section>
        <section id="venue">
          <VenueSection />
        </section>
        <section id="curriculum">
          <CurriculumSection />
        </section>
        <section id="schedule">
          <ScheduleSection />
        </section>
        <section id="inclusions">
          <InclusionsSection />
        </section>
        <section id="pricing">
          <PricingSection onPackageSelect={handlePackageSelect} />
        </section>
        <section id="certification">
          <CertificationSection />
        </section>
        <section id="faq">
          <FAQSection />
        </section>
        <section id="logistics">
          <LogisticsSection />
        </section>
        <section id="apply">
          <ApplicationForm selectedPackage={selectedPackage} />
        </section>
        <Footer />
        <WhatsAppButton />
      </Suspense>
    </div>
  );
};

export default Index;
