import TextAction from "../../components/ui/TextAction";
import ActionButton from "../../components/ui/ActionButton";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import Seo from "../../components/common/Seo";
import Container from "../../components/ui/Container";
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
import "./home.css";

export default function Home() {
  return (
    <div className="home-page text-primary [&>section]:border-b [&>section]:border-border">
      <Seo title="Data Centre & IT Infrastructure" description="Coreflowtech delivers data centre solutions and IT infrastructure across India, with authorized KAYTUS, CxTEK, and AFS supply." path="/" />
      <section className="overflow-hidden bg-white" aria-labelledby="home-title">
        <Container className="grid min-h-[min(790px,96vh)] grid-cols-[minmax(0,1.16fr)_minmax(0,.84fr)] gap-[clamp(42px,5vw,100px)] pt-[152px] pb-[70px] max-[767px]:min-h-0 max-[767px]:grid-cols-1 max-[767px]:gap-12.5 max-[767px]:pt-[132px] max-[767px]:pb-[58px] max-[480px]:pt-[110px]">
          <div className="flex min-w-0 flex-col items-start justify-center">
            <p className="mb-9.5 flex flex-wrap gap-x-6 gap-y-2.5 text-[11px] font-bold tracking-[.16em] text-secondary max-[480px]:text-[9px]"><span>01 / COREFLOWTECH</span><span className="border-l border-border pl-6">INFRASTRUCTURE FOR INDIA</span></p>
            <h1 className="max-w-[960px] text-[clamp(56px,6.55vw,112px)] leading-[.99] font-semibold tracking-[-.078em] max-[767px]:text-[clamp(53px,10vw,82px)] max-[480px]:text-[clamp(50px,12vw,64px)]" id="home-title">Data centre and IT infrastructure, <em className="block not-italic text-secondary">delivered in India.</em></h1>
            <p className="mt-9 max-w-[650px] text-[clamp(17px,1.4vw,21px)] leading-[1.65] text-muted">From the data hall to the network edge, Coreflowtech brings design, equipment, deployment and support together for your infrastructure projects.</p>
            <div className="mt-9 flex flex-wrap items-center gap-5.5">
              <ActionButton to="/contact" icon={<ArrowUpRight size={20} aria-hidden="true" />}>Discuss your requirement</ActionButton>
              <TextAction to="/products" icon={<ArrowRight size={18} aria-hidden="true" />}>Explore solutions</TextAction>
            </div>
            <p className="mt-11 flex items-center gap-3 text-xs font-semibold text-secondary"><span className="block h-px w-7 bg-current" /> Authorized KAYTUS, CxTEK and AFS distributor in India</p>
          </div>
          <InfrastructureVisual />
        </Container>
      </section>
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
    </div>
  );
}

function InfrastructureVisual() {
  const racks = ["COMPUTE", "STORAGE", "NETWORK", "POWER", "COOLING"];
  return (
    <div className="home-visual" aria-label="Line diagram of a data centre stack: compute, storage, network, power and cooling" role="img">
      <div className="home-visual-top"><span>CF / SYSTEMS</span><span>01—05</span></div>
      <div className="home-visual-diagram">
        <div className="home-visual-axis"><span>INFRASTRUCTURE<br />STACK</span><i /></div>
        <div className="home-visual-racks">
          {racks.map((rack, index) => <div className="home-visual-rack" key={rack}><span>0{index + 1}</span><strong>{rack}</strong><i /><i /><i /></div>)}
        </div>
        <div className="home-visual-trace"><i /><i /><i /></div>
      </div>
      <div className="home-visual-bottom"><span>DESIGN / BUILD / SUPPORT</span><span>INDIA ↗</span></div>
    </div>
  );
}
