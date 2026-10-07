import { getFeaturedProducts } from "../../data/products";
import Section from "../ui/Section";
import ProductCard from "../cards/ProductCard";
import Button from "../ui/Button";

export default function FeaturedProducts() {
  const featured = getFeaturedProducts();

  return (
    <Section
      eyebrow="Portfolio"
      title="Featured Coreflowtech solutions"
      subtitle="Explore Coreflowtech solutions alongside authorized KAYTUS, CxTEK, and AFS products."
    >
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {featured.map(({ item, category }) => (
          <ProductCard
            key={item.slug}
            item={item}
            categorySlug={category.slug}
            categoryName={category.name}
          />
        ))}
      </div>
      <div className="mt-10 text-center">
        <Button to="/products" variant="outline">
          View full products & services
        </Button>
      </div>
    </Section>
  );
}
