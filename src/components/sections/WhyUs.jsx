import { values } from "../../data/company";
import Section from "../ui/Section";

export default function WhyUs() {
  return (
    <Section
      className="bg-[color-mix(in_srgb,var(--primary)_4%,white)]"
      eyebrow="Why Coreflowtech"
      title="India delivery, DC build, and complete IT"
      subtitle="Coreflowtech delivers data centres and enterprise IT across India, with authorized KAYTUS, CxTEK, and AFS supply as an official line."
    >
      <div className="grid grid-cols-2 gap-x-[7%] max-[767px]:grid-cols-1">
        {values.map((value, index) => (
          <article className="grid min-h-[200px] grid-cols-[42px_1fr] gap-x-6 border-t border-border py-7" key={value.id}>
            <span className="text-[11px] font-bold tracking-[.14em] text-secondary">0{index + 1}</span>
            <h3 className="text-[clamp(22px,2.1vw,34px)] font-semibold tracking-[-.045em]">{value.title}</h3>
            <p className="col-start-2 mt-2 max-w-[550px] text-sm leading-[1.7] text-muted">{value.description}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
