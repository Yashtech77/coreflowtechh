import { industries } from "../../data/industries";
import Section from "../ui/Section";
import IndustryCard from "../cards/IndustryCard";
import StaggerChildren, { StaggerItem } from "../animations/StaggerChildren";

export default function Industries() {
  return (
    <Section
      eyebrow="Industries"
      title="Where we deliver in India"
      subtitle="Enterprises, government, campuses, healthcare, telco, and plants — data centres, IT infrastructure, and authorized supply."
    >
      <StaggerChildren className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {industries.map((industry) => (
          <StaggerItem key={industry.slug}>
            <IndustryCard industry={industry} />
          </StaggerItem>
        ))}
      </StaggerChildren>
    </Section>
  );
}
