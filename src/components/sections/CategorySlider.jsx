import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { getHomeCatalogue } from "../../data/products";
import Section from "../ui/Section";

export default function CategorySlider() {
  const catalogue = getHomeCatalogue();

  return (
    <Section
      className="bg-[color-mix(in_srgb,var(--primary)_4%,white)]"
      eyebrow="Catalogue"
      title="Coreflowtech solutions"
      subtitle="Data centre, generic IT infrastructure, and authorized KAYTUS, CxTEK, and AFS supply."
    >
      <div className="grid grid-cols-2 border-t border-l border-border max-[767px]:grid-cols-1">
        {catalogue.map((category, index) => (
          <Link to={category.href} className="group flex min-h-[350px] flex-col justify-between border-r border-b border-border p-[clamp(25px,3vw,48px)] text-primary transition-colors hover:bg-white max-[767px]:min-h-[310px]" key={category.slug}>
            <div className="flex justify-between text-[11px] font-bold tracking-[.13em] text-secondary"><span>0{index + 1} / {String(catalogue.length).padStart(2, "0")}</span><ArrowUpRight className="rotate-45" size={23} aria-hidden="true" /></div>
            <div className="mt-12.5">
              <p className="mb-2.5 text-[11px] font-bold tracking-[.14em] uppercase text-secondary">{category.items.length} solutions</p>
              <h3 className="max-w-[600px] text-[clamp(29px,3vw,48px)] leading-[1.1] font-semibold tracking-[-.06em]">{category.name}</h3>
              <span className="mt-4 block max-w-[570px] text-sm leading-[1.65] text-muted">{category.summary}</span>
            </div>
            <div className="mt-6 flex flex-wrap gap-2">{category.highlights.map((tag) => <small className="border-r border-border pr-2.5 text-[11px] font-semibold text-secondary last:border-r-0" key={tag}>{tag}</small>)}</div>
          </Link>
        ))}
      </div>
    </Section>
  );
}
