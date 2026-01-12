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
