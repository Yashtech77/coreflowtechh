import { industries } from "../../data/industries";
import Section from "../ui/Section";

export default function Industries() {
  return (
    <Section
      className="bg-white"
      eyebrow="Industries"
      title="Where we deliver in India"
      subtitle="Enterprises, government, campuses, healthcare, telco, and plants — data centres, IT infrastructure, and authorized supply."
    >
      <div className="grid grid-cols-3 gap-x-[4%] max-[767px]:grid-cols-2 max-[480px]:grid-cols-1">
        {industries.map((industry, index) => (
          <article className="min-h-[235px] border-t border-border pt-6 pb-7" key={industry.slug}>
            <span className="text-[11px] font-bold tracking-[.14em] text-secondary">0{index + 1}</span>
            <h3 className="mt-10 mb-2.5 text-[clamp(23px,2vw,33px)] font-semibold tracking-[-.045em]">{industry.name}</h3>
            <p className="max-w-[430px] text-sm leading-[1.65] text-muted">{industry.description}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
