import { company } from "../../data/company";
import Container from "../ui/Container";
import StatCard from "../cards/StatCard";

export default function StatsStrip() {
  return (
    <section className="border-b border-border bg-white py-9" aria-label="Coreflowtech at a glance">
      <Container>
        <div className="grid grid-cols-4 max-[767px]:grid-cols-2">
          {company.stats.map((stat) => (
            <StatCard key={stat.id} stat={stat} />
          ))}
        </div>
      </Container>
    </section>
  );
}
