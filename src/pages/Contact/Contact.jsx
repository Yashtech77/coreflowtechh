import TextAction from "../../components/ui/TextAction";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { faqs } from "../../data/faqs";
import Seo from "../../components/common/Seo";
import Container from "../../components/ui/Container";
import ContactForm from "../../components/forms/ContactForm";
import Accordion from "../../components/ui/Accordion";

const areas = [
  { label: "Data centre", detail: "Hall design, power, cooling and commissioning." },
  { label: "IT infrastructure", detail: "Servers, storage, networking, cabling and deployment." },
  { label: "Authorized supply", detail: "KAYTUS, CxTEK and AFS portfolios for India." },
];

export default function Contact() {
  return (
    <div className="contact-page bg-white text-primary">
      <Seo
        title="Contact us"
        description="Talk to Coreflowtech about data centre solutions, IT infrastructure, or authorized KAYTUS / CxTEK / AFS supply in India."
        path="/contact"
      />

      <section className="border-b border-border" aria-labelledby="contact-title">
        <Container className="grid min-h-[600px] grid-cols-[minmax(0,1.3fr)_minmax(0,.7fr)] items-end gap-[8%] pt-[145px] pb-[100px] max-[1100px]:gap-[5%] max-[767px]:min-h-0 max-[767px]:grid-cols-1 max-[767px]:gap-13 max-[767px]:pt-[135px] max-[767px]:pb-[75px] max-[480px]:pt-[110px] max-[480px]:pb-[65px]">
          <div>
            <p className="text-[11px] font-bold tracking-[.18em] uppercase text-secondary">01 / Start a conversation</p>
            <h1 className="mt-7 max-w-[990px] text-[clamp(60px,6.6vw,110px)] leading-[.99] font-semibold tracking-[-.078em] max-[1100px]:text-[clamp(58px,6vw,80px)] max-[767px]:text-[clamp(52px,9vw,76px)] max-[480px]:text-[clamp(48px,12vw,64px)]" id="contact-title">Tell us what you need to <em className="block not-italic text-secondary">build next.</em></h1>
          </div>
          <div className="border-t border-border pt-6 max-[767px]:max-w-[660px]">
            <p className="max-w-[510px] text-[clamp(16px,1.35vw,20px)] leading-[1.7] text-muted">Share your data centre scope, IT infrastructure list or product requirement. Give us the context, and we can discuss the right delivery path.</p>
            <TextAction href="#enquiry" className="mt-7" icon={<ArrowRight size={18} aria-hidden="true" />}>Send an enquiry</TextAction>
          </div>
        </Container>
      </section>

      <section id="enquiry" className="scroll-mt-[110px] py-[clamp(86px,8vw,135px)]" aria-labelledby="contact-enquiry-title">
        <Container className="grid grid-cols-[minmax(0,.82fr)_minmax(0,1.18fr)] items-start gap-[clamp(55px,9vw,150px)] max-[1100px]:gap-12.5 max-[767px]:grid-cols-1">
          <div className="sticky top-[125px] max-[767px]:static">
            <p className="text-[11px] font-bold tracking-[.18em] uppercase text-secondary">02 / Your requirement</p>
            <h2 className="mt-5 max-w-[650px] text-[clamp(47px,4.9vw,80px)] leading-[1.05] font-semibold tracking-[-.07em] max-[767px]:text-[clamp(44px,8vw,70px)]" id="contact-enquiry-title">From first brief to delivery plan.</h2>
            <p className="mt-6 max-w-[570px] text-base leading-[1.7] text-muted">Tell us about the site, workload or bill of materials. Select the closest product area so your enquiry has the right context.</p>
            <div className="mt-11 border-t border-border">
              {areas.map((area, index) => <div className="grid grid-cols-[35px_1fr] gap-4.5 border-b border-border py-4" key={area.label}><span className="text-[11px] font-bold text-secondary">0{index + 1}</span><div><h3 className="text-lg font-semibold tracking-[-.03em]">{area.label}</h3><p className="mt-1 text-xs leading-[1.55] text-muted">{area.detail}</p></div></div>)}
            </div>
            <div className="mt-8 border-t border-border pt-5"><span className="text-[11px] font-bold tracking-[.15em] uppercase text-secondary">Authorized distribution</span><p className="mt-3 mb-4 max-w-[480px] text-sm leading-[1.6]">Official KAYTUS, CxTEK and AFS product ranges, supplied in India.</p><Link className="inline-flex items-center gap-2 border-b border-secondary pb-1 text-[13px] font-bold text-secondary" to="/products">Explore the portfolio <ArrowUpRight size={17} aria-hidden="true" /></Link></div>
          </div>
          <ContactForm />
        </Container>
      </section>

      <section className="bg-[color-mix(in_srgb,var(--primary)_4%,white)] py-[clamp(90px,8vw,140px)]" aria-labelledby="contact-faq-title">
        <Container className="grid grid-cols-[minmax(0,.75fr)_minmax(0,1.25fr)] gap-[10%] max-[767px]:grid-cols-1 max-[767px]:gap-12">
          <div><p className="text-[11px] font-bold tracking-[.18em] uppercase text-secondary">03 / Before you ask</p><h2 className="mt-5 text-[clamp(50px,5.1vw,82px)] leading-[1.04] font-semibold tracking-[-.07em] max-[767px]:text-[clamp(44px,8vw,70px)]" id="contact-faq-title">Common questions.</h2><p className="mt-6 max-w-[400px] text-base leading-[1.7] text-muted">Quick answers about our scope, authorized supply and delivery coverage.</p></div>
          <Accordion items={faqs} />
        </Container>
      </section>
    </div>
  );
}
