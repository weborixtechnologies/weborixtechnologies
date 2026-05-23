import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import PortfolioPreview from "@/components/PortfolioPreview";
import AboutSection from "@/components/AboutSection";
import BusinessSection from "@/components/BusinessSection";
import Gallery from "@/components/Gallery";
import TestimonialsSection from "@/components/TestimonialsSection";
import MarketingSection from "@/components/MarketingSection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <ServicesSection />
      <PortfolioPreview />
      <AboutSection />
      <BusinessSection />
      <Gallery />
      <TestimonialsSection />
      <MarketingSection />
      <CtaSection />
      <Footer />
    </div>
  );
};

export default Index;
