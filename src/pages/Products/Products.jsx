import { Link, useParams, useSearchParams } from "react-router-dom";
import {
  productGroups,
  getCategory,
  getCategoriesByGroup,
} from "../../data/products";
import { services } from "../../data/services";
import Seo from "../../components/common/Seo";
import PageHero from "../../components/common/PageHero";
import Section from "../../components/ui/Section";
import ProductCard from "../../components/cards/ProductCard";
import ServiceCard from "../../components/cards/ServiceCard";
import CTASection from "../../components/sections/CTASection";
import { cn } from "../../utils/cn";

const groupCopy = {
  "data-centre": {
    title: "Data centre solutions",
    subtitle: "Design, build, power, cooling, containment, and DC operations for Indian sites.",
    badges: ["Design", "Build", "Operations"],
  },
  "it-infrastructure": {
    title: "IT infrastructure",
    subtitle: "Generic enterprise servers, storage, networking, cabling, racks, PDU, and UPS.",
    badges: ["Servers", "Network", "Power"],
  },
  kaytus: {
    title: "Authorized KAYTUS portfolio",
    subtitle:
      "Official KAYTUS GPU servers, enterprise servers, storage, networking, cooling, and management — supplied in India by Coreflowtech as authorized distributor.",
    badges: ["Authorized", "KAYTUS", "India"],
  },
};

const allCopy = {
  title: "Data centre, IT infrastructure, and authorized KAYTUS",
  subtitle:
    "Coreflowtech data centre solutions and generic enterprise IT, plus the official KAYTUS range as authorized distributor in India.",
  badges: ["Data centre", "IT infrastructure", "Authorized KAYTUS"],
};

export default function Products() {
  const { categorySlug } = useParams();
  const [searchParams] = useSearchParams();
  const groupParam = searchParams.get("group");
  const active = categorySlug ? getCategory(categorySlug) : null;
  const validGroup = productGroups.some((group) => group.id === groupParam) ? groupParam : null;
  const activeGroup = active?.group || validGroup || null;
  const categories = active ? [active] : getCategoriesByGroup(activeGroup);
  const categoryPills = getCategoriesByGroup(activeGroup);
  const copy = active
    ? { title: active.name, subtitle: active.summary, badges: active.highlights }
    : activeGroup
      ? groupCopy[activeGroup]
      : allCopy;

  return (
    <>
      <Seo
        title={active ? active.name : copy.title}
        description={copy.subtitle}
        path={active ? `/products/${active.slug}` : activeGroup ? `/products?group=${activeGroup}` : "/products"}
      />
      <PageHero
        eyebrow="Products & services"
        title={copy.title}
        subtitle={copy.subtitle}
        badges={copy.badges}
      />

      <Section>
        <div className="-mx-4 mb-4 flex gap-2 overflow-x-auto px-4 pb-1 sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0">
          <FilterPill to="/products" active={!active && !activeGroup}>
            All
          </FilterPill>
          {productGroups.map((group) => (
            <FilterPill
              key={group.id}
              to={`/products?group=${group.id}`}
              active={activeGroup === group.id}
            >
              {group.label}
            </FilterPill>
          ))}
        </div>

        <div className="-mx-4 mb-10 flex gap-2 overflow-x-auto px-4 pb-1 sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0">
          {categoryPills.map((category) => (
            <FilterPill
              key={category.slug}
              to={`/products/${category.slug}`}
              active={category.slug === categorySlug}
            >
              {category.name}
            </FilterPill>
          ))}
        </div>

        <div className="space-y-16">
          {categories.map((category) => (
            <div key={category.slug} id={category.slug}>
              <div className="mb-6">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">{category.headline}</p>
                <h2 className="mt-2 text-2xl font-semibold text-foreground">{category.name}</h2>
              </div>
              <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                {category.items.map((item) => (
                  <ProductCard
                    key={item.slug}
                    item={item}
                    categorySlug={category.slug}
                    categoryName={category.name}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {!active && (
        <Section
          eyebrow="Services"
          title="Supply, deploy, and support"
          subtitle="Data centre delivery, IT deployment, commissioning, AMC, and authorized KAYTUS supply across India."
        >
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Link key={service.slug} to="/contact" className="block h-full">
                <ServiceCard service={service} />
              </Link>
            ))}
          </div>
        </Section>
      )}

      <CTASection />
    </>
  );
}

function FilterPill({ to, active, children }) {
  return (
    <Link
      to={to}
      className={cn(
        "shrink-0 whitespace-nowrap rounded-full border px-4 py-2 text-sm transition",
        active
          ? "border-accent bg-primary text-white"
          : "border-border text-muted hover:border-accent hover:text-foreground"
      )}
    >
      {children}
    </Link>
  );
}
