import { Link } from "react-router-dom";
import { services } from "../../data/services";
import Section from "../ui/Section";
import { ArrowUpRight } from "lucide-react";

export default function ServicesGrid() {
  return (
    <Section
      id="services"
      className="bg-secondary text-white"
      dark
      eyebrow="Services"
      title="From design and supply to on-site support"
      subtitle="Data centre build, IT deployment, commissioning, AMC, and authorized KAYTUS, CxTEK, and AFS supply across India."
    >
      <div className="grid grid-cols-2 gap-x-[7%] border-t border-white/40 max-[767px]:grid-cols-1">
        {services.map((service, index) => (
          <Link key={service.slug} to="/contact" className="grid min-h-[145px] grid-cols-[38px_1fr_26px] items-start gap-5 border-b border-white/40 py-6.5 text-white">
            <span className="text-[11px] font-bold text-white/70">0{index + 1}</span>
            <div><h3 className="text-[clamp(22px,2vw,31px)] font-medium tracking-[-.045em]">{service.name}</h3><p className="mt-2.5 max-w-[560px] text-sm leading-[1.65] text-white/80">{service.short}</p></div>
            <ArrowUpRight className="rotate-45" size={22} aria-hidden="true" />
          </Link>
        ))}
      </div>
    </Section>
  );
}
