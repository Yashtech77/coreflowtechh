import TextAction from "../../components/ui/TextAction";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { company, values } from "../../data/company";
import { timeline } from "../../data/timeline";
import Seo from "../../components/common/Seo";
import Container from "../../components/ui/Container";
import CTASection from "../../components/sections/CTASection";
import GlobalPresence from "../../components/sections/GlobalPresence";
import StatsStrip from "../../components/sections/StatsStrip";

const scope = ["Data centre design & build", "Enterprise IT deployment", "Authorized brand supply"];

export default function About() {
  return (
    <div className="home-page about-page text-primary [&>section:last-child]:border-b-0">
      <Seo
        title="About us"
        description="Coreflowtech delivers data centre solutions and IT infrastructure across India, and is an authorized KAYTUS, CxTEK, and AFS distributor."
        path="/about"
      />

      <section className="bg-white" aria-labelledby="about-title">
        <Container className="grid min-h-[720px] grid-cols-[minmax(0,1.18fr)_minmax(0,.82fr)] items-end gap-[clamp(50px,8vw,130px)] pt-[150px] pb-[105px] max-[767px]:min-h-0 max-[767px]:grid-cols-1 max-[767px]:gap-16 max-[767px]:pt-[135px] max-[767px]:pb-[75px] max-[480px]:pt-[110px] max-[480px]:pb-[65px]">
          <div>
            <p className="m-0 text-[11px] font-bold tracking-[.18em] uppercase text-secondary">01 / About Coreflowtech</p>
            <h1 className="mt-7 max-w-[930px] text-[clamp(59px,6.3vw,105px)] leading-none font-semibold tracking-[-.077em] max-[767px]:text-[clamp(52px,9.5vw,78px)] max-[480px]:text-[clamp(48px,12vw,65px)]" id="about-title">Data centre and IT infrastructure <em className="block not-italic text-secondary">for India.</em></h1>
            <p className="mt-8 max-w-[690px] text-[clamp(16px,1.3vw,20px)] leading-[1.72] text-muted">{company.story}</p>
            <TextAction className="mt-8" to="/products" icon={<ArrowRight size={18} aria-hidden="true" />}>Explore what we deliver</TextAction>
          </div>
          <div className="self-end border-t border-border" aria-label="Coreflowtech scope">
            <p className="py-5 text-[11px] font-bold tracking-[.18em] uppercase text-secondary">Our scope / 01—03</p>
            {scope.map((item, index) => <div className="grid grid-cols-[38px_1fr_22px] items-baseline gap-4.5 border-b border-border py-5 max-[480px]:grid-cols-[28px_1fr_18px] max-[480px]:gap-3" key={item}><span className="text-[11px] font-bold text-secondary">0{index + 1}</span><strong className="text-[clamp(20px,1.9vw,30px)] leading-[1.2] font-medium tracking-[-.04em]">{item}</strong><ArrowUpRight className="text-secondary" size={21} aria-hidden="true" /></div>)}
            <p className="mt-6 max-w-[280px] text-xs leading-[1.65] text-muted">One team across planning, products, delivery and support.</p>
          </div>
        </Container>
      </section>

      <StatsStrip />

      <section className="bg-white py-[clamp(90px,8vw,140px)] max-[480px]:py-[82px]" aria-labelledby="about-story-title">
        <Container>
          <div className="mb-16 grid grid-cols-[minmax(0,1fr)_minmax(0,2fr)] gap-12.5 max-[767px]:mb-11 max-[767px]:block">
            <p className="text-[11px] font-bold tracking-[.18em] uppercase text-secondary">02 / Our direction</p>
            <h2 className="m-0 max-w-[970px] text-[clamp(48px,5.4vw,88px)] leading-[1.04] font-semibold tracking-[-.07em] max-[767px]:mt-5 max-[767px]:text-[clamp(44px,8vw,70px)]" id="about-story-title">Infrastructure first. <span className="text-secondary">Every layer connected.</span></h2>
          </div>
          <div className="grid grid-cols-2 gap-x-[8%] border-t border-border max-[767px]:grid-cols-1">
            <article className="min-h-[320px] border-b border-border pt-7 pb-9 max-[767px]:min-h-[250px]"><span className="text-[11px] font-bold tracking-[.14em] uppercase text-secondary">01 / Mission</span><h3 className="mt-[70px] mb-4 text-[clamp(28px,2.6vw,43px)] leading-[1.13] font-semibold tracking-[-.055em] max-[767px]:mt-10">Make complex infrastructure deliverable.</h3><p className="max-w-[650px] text-[15px] leading-[1.75] text-muted">{company.mission}</p></article>
            <article className="min-h-[320px] border-b border-border pt-7 pb-9 max-[767px]:min-h-[250px]"><span className="text-[11px] font-bold tracking-[.14em] uppercase text-secondary">02 / Vision</span><h3 className="mt-[70px] mb-4 text-[clamp(28px,2.6vw,43px)] leading-[1.13] font-semibold tracking-[-.055em] max-[767px]:mt-10">Be the team behind what runs next.</h3><p className="max-w-[650px] text-[15px] leading-[1.75] text-muted">{company.vision}</p></article>
          </div>
        </Container>
      </section>

      <section className="bg-[color-mix(in_srgb,var(--primary)_4%,white)] py-[clamp(90px,8vw,140px)] max-[480px]:py-[82px]" aria-labelledby="about-timeline-title">
        <Container className="grid grid-cols-[minmax(0,.8fr)_minmax(0,1.2fr)] gap-[10%] max-[767px]:grid-cols-1 max-[767px]:gap-11">
          <div className="sticky top-[130px] self-start max-[767px]:static">
            <p className="text-[11px] font-bold tracking-[.18em] uppercase text-secondary">03 / Our evolution</p>
            <h2 className="mt-6 max-w-[560px] text-[clamp(48px,5.1vw,82px)] leading-[1.04] font-semibold tracking-[-.07em] max-[767px]:text-[clamp(44px,8vw,70px)]" id="about-timeline-title">How the practice expanded.</h2>
            <p className="mt-7 max-w-[440px] text-base leading-[1.7] text-muted">Our work spans data centre delivery, enterprise IT and authorized product portfolios.</p>
          </div>
          <ol className="m-0 list-none border-t border-border p-0">
            {timeline.map((item, index) => <li className="grid grid-cols-[43px_minmax(0,1fr)_22px] items-start gap-5 border-b border-border py-7" key={item.year}>
              <span className="pt-1 text-[11px] font-bold text-secondary">0{index + 1}</span>
              <div><p className="mb-3 text-[11px] font-bold tracking-[.13em] uppercase text-secondary">{item.year}</p><h3 className="mb-3 text-[clamp(21px,2vw,31px)] leading-[1.2] font-semibold tracking-[-.045em]">{item.title}</h3><span className="block max-w-[620px] text-sm leading-[1.7] text-muted">{item.description}</span></div>
              <ArrowUpRight className="text-secondary" size={20} aria-hidden="true" />
            </li>)}
          </ol>
        </Container>
      </section>

      <section className="bg-white py-[clamp(90px,8vw,140px)] max-[480px]:py-[82px]" aria-labelledby="about-values-title">
        <Container>
          <div className="mb-16 grid grid-cols-[minmax(0,1fr)_minmax(0,2fr)] gap-12.5 max-[767px]:mb-11 max-[767px]:block">
            <p className="text-[11px] font-bold tracking-[.18em] uppercase text-secondary">04 / What we stand for</p>
            <h2 className="m-0 max-w-[970px] text-[clamp(48px,5.4vw,88px)] leading-[1.04] font-semibold tracking-[-.07em] max-[767px]:mt-5 max-[767px]:text-[clamp(44px,8vw,70px)]" id="about-values-title">What we refuse to compromise.</h2>
          </div>
          <div className="grid grid-cols-2 gap-x-[8%] border-t border-border max-[767px]:grid-cols-1">
            {values.map((value, index) => <article className="grid min-h-[250px] grid-cols-[44px_minmax(0,1fr)] content-start gap-x-5.5 border-b border-border py-8 max-[767px]:min-h-0 max-[480px]:grid-cols-[35px_minmax(0,1fr)]" key={value.id}>
              <span className="text-[11px] font-bold tracking-[.14em] uppercase text-secondary">0{index + 1}</span>
              <h3 className="text-[clamp(24px,2.3vw,38px)] leading-[1.18] font-semibold tracking-[-.05em]">{value.title}</h3>
              <p className="col-start-2 mt-4 max-w-[570px] text-sm leading-[1.75] text-muted">{value.description}</p>
            </article>)}
          </div>
        </Container>
      </section>

      <GlobalPresence />
      <CTASection />
    </div>
  );
}
