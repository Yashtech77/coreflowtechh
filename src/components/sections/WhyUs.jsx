import { values } from "../../data/company";
import Section from "../ui/Section";
import ValueCard from "../cards/ValueCard";

export default function WhyUs() {
  return (
    <Section
      eyebrow="Why Coreflowtech"
      title="India delivery, DC build, and complete IT"
      subtitle="Coreflowtech delivers data centres and enterprise IT across India, with authorized KAYTUS, CxTEK, and AFS supply as an official line."
    >
      <div className="grid gap-5 md:grid-cols-2">
        {values.map((value) => (
          <ValueCard key={value.id} value={value} />
        ))}
      </div>
    </Section>
  );
}
