import { company } from "../../data/company";
import Container from "../ui/Container";
import StatCard from "../cards/StatCard";
import StaggerChildren, { StaggerItem } from "../animations/StaggerChildren";

export default function StatsStrip() {
  return (
    <section className="relative pb-8">
      <Container>
        <StaggerChildren className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {company.stats.map((stat) => (
            <StaggerItem key={stat.id}>
              <StatCard stat={stat} />
            </StaggerItem>
          ))}
        </StaggerChildren>
      </Container>
    </section>
  );
}
