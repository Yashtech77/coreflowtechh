import { Cpu, Building2, Network } from "lucide-react";
import Section from "../ui/Section";
import FadeIn from "../animations/FadeIn";

const pillars = [
  {
    icon: Building2,
    title: "Data centre solutions",
    body: "Design, build, power, cooling, containment, cabling, and DC operations for Indian halls and server rooms.",
  },
  {
    icon: Network,
    title: "IT infrastructure",
    body: "Generic enterprise servers, storage, networking, structured cabling, racks, PDU, and UPS — supplied as standard IT.",
  },
  {
    icon: Cpu,
    title: "Authorized KAYTUS",
    body: "Official KAYTUS GPU/AI servers, enterprise servers, storage, networking, cooling, and management — distributed in India by Coreflowtech.",
  },
];

export default function AIFactoryOverview() {
  return (
    <Section
      eyebrow="What we do"
      title="What Coreflowtech delivers"
      subtitle="Data centre solutions and complete IT infrastructure for India, plus authorized KAYTUS supply when you need that official range."
    >
      <div className="grid gap-5 md:grid-cols-3">
        {pillars.map((pillar, index) => (
          <FadeIn key={pillar.title} delay={index * 0.08}>
            <article className="glass flex h-full gap-4 rounded-2xl p-6">
              <pillar.icon className="mt-1 h-6 w-6 shrink-0 text-accent" />
              <div>
                <h3 className="text-lg font-semibold text-foreground">{pillar.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{pillar.body}</p>
              </div>
            </article>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
