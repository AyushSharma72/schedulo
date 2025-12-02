import HeroSection from "../../components/Home/HeroSection";
import FeaturesSection from "../../components/Home/FeaturesSection";
import BenefitsSection from "../../components/Home/BenefitsSection";
import HowItWorks from "../../components/Home/HowItWorks";
import Footer from "../../components/Home/Footer";

export default function Homepage() {
  return (
    <div className="min-h-screen bg-white-main text-slate-dark">
      
      <HeroSection />
      <FeaturesSection />
      <BenefitsSection />
      <HowItWorks />
      <Footer />
    </div>
  );
}
