import Seo from "../../components/common/Seo";
import HeroSection from "../../components/sections/HeroSection";
import StatsStrip from "../../components/sections/StatsStrip";
import PartnersMarquee from "../../components/sections/PartnersMarquee";
import AIFactoryOverview from "../../components/sections/AIFactoryOverview";
import CategorySlider from "../../components/sections/CategorySlider";
import FeaturedProducts from "../../components/sections/FeaturedProducts";
import ServicesGrid from "../../components/sections/ServicesGrid";
import Industries from "../../components/sections/Industries";
import WhyUs from "../../components/sections/WhyUs";
import GlobalPresence from "../../components/sections/GlobalPresence";
import CTASection from "../../components/sections/CTASection";

export default function Home() {
  return (
    <>
      <Seo
        title="Data Centre & IT Infrastructure"
        description="Coreflowtech delivers data centre solutions and IT infrastructure across India, and is an authorized KAYTUS distributor."
        path="/"
      />
      <HeroSection />
      <StatsStrip />
      <PartnersMarquee />
      <AIFactoryOverview />
      <CategorySlider />
      <FeaturedProducts />
      <ServicesGrid />
      <Industries />
      <WhyUs />
      <GlobalPresence />
      <CTASection />
    </>
  );
}
