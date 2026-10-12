import Section from "../ui/Section";
import FadeIn from "../animations/FadeIn";

const pillars = [
  {
    title: "Data centre solutions",
    body: "Design, build, power, cooling, containment, cabling, and DC operations for Indian halls and server rooms.",
  },
  {
    title: "IT infrastructure",
    body: "Generic enterprise servers, storage, networking, structured cabling, racks, PDU, and UPS — supplied as standard IT.",
  },
  {
    title: "Authorized KAYTUS",
    body: "Official KAYTUS servers, storage, MotusAI, KSManage, and liquid cooling — distributed in India by Coreflowtech.",
  },
  {
    title: "Authorized CxTEK",
    body: "Official CxTEK switches, servers, NAS, routers, and Wi-Fi 6 — distributed in India by Coreflowtech.",
  },
  {
    title: "Authorized AFS",
    body: "Advanced Fiber Solutions enclosures, cable assemblies, adapters, attenuators, FTTH products, and splitters — distributed in India by Coreflowtech.",
  },
];

export default function AIFactoryOverview() {
  return (
    <Section
      className="bg-white"
      eyebrow="What we do"
      title="What Coreflowtech delivers"
      subtitle="Data centre solutions and complete IT infrastructure for India, plus authorized KAYTUS, CxTEK, and AFS supply when you need that official range."
    >
      <div className="border-t border-border">
        {pillars.map((pillar, index) => (
          <FadeIn key={pillar.title} delay={index * 0.08}>
            <article className="grid grid-cols-[70px_minmax(0,.9fr)_minmax(0,1.1fr)] items-start gap-7.5 border-b border-border py-7 max-[767px]:grid-cols-[40px_1fr] max-[767px]:gap-x-4">
              <span className="text-[11px] font-bold tracking-[.14em] text-secondary">0{index + 1}</span>
              <h3 className="text-[clamp(22px,2.2vw,36px)] font-semibold tracking-[-.045em]">{pillar.title}</h3>
              <p className="mt-1 max-w-[660px] text-[15px] leading-[1.7] text-muted max-[767px]:col-start-2">{pillar.body}</p>
            </article>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
