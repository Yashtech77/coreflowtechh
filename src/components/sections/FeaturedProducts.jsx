import ActionButton from "../ui/ActionButton";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { getFeaturedProducts } from "../../data/products";
import Section from "../ui/Section";
import ProductCard from "../cards/ProductCard";

export default function FeaturedProducts() {
  const featured = getFeaturedProducts();

  return (
    <Section
      className="bg-white"
      eyebrow="Portfolio"
      title="Featured Coreflowtech solutions"
      subtitle="Explore Coreflowtech solutions alongside authorized KAYTUS, CxTEK, and AFS products."
    >
      <div className="grid grid-cols-4 gap-x-4.5 gap-y-7 max-[1100px]:grid-cols-3 max-[767px]:grid-cols-2 max-[480px]:grid-cols-1">
        {featured.map(({ item, category }) => (
          <ProductCard
            key={item.slug}
            item={item}
            categorySlug={category.slug}
            categoryName={category.name}
          />
        ))}
      </div>
      <div className="mt-12">
        <ActionButton className="min-w-[265px] max-w-full whitespace-normal" variant="outline" to="/products" icon={<ArrowUpRight size={20} aria-hidden="true" />}>View full products & services</ActionButton>
      </div>
    </Section>
  );
}
