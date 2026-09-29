import { Link } from "react-router-dom";
import { services } from "../../data/services";
import Section from "../ui/Section";
import ServiceCard from "../cards/ServiceCard";

export default function ServicesGrid() {
  return (
    <Section
      id="services"
      eyebrow="Services"
      title="From design and supply to on-site support"
      subtitle="Data centre build, IT deployment, commissioning, AMC, and authorized KAYTUS supply across India."
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <Link key={service.slug} to="/contact" className="block h-full">
            <ServiceCard service={service} />
          </Link>
        ))}
      </div>
    </Section>
  );
}
