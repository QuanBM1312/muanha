import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProblemsSection from "@/components/ProblemsSection";
import WhatYouSeekSection from "@/components/WhatYouSeekSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import PricingSection from "@/components/PricingSection";
import RoadmapSection from "@/components/RoadmapSection";
import RegistrationSection from "@/components/RegistrationSection";
import FreeGiftSection from "@/components/FreeGiftSection";
import ExpertsSection from "@/components/ExpertsSection";
import Footer from "@/components/Footer";

export default function Index() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <ProblemsSection />
      <WhatYouSeekSection />
      <TestimonialsSection />
      <PricingSection />
      <RoadmapSection />
      <RegistrationSection />
      <FreeGiftSection />
      <ExpertsSection />
      <Footer />
    </div>
  );
}
