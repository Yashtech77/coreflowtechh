import { Navigate, useParams } from "react-router-dom";
import { Check } from "lucide-react";
import { getProduct, getAllProducts } from "../../data/products";
import Seo from "../../components/common/Seo";
import PageHero from "../../components/common/PageHero";
import Section from "../../components/ui/Section";
import ProductCard from "../../components/cards/ProductCard";
import ProductVisual from "../../components/cards/ProductVisual";
import Button from "../../components/ui/Button";
import Badge from "../../components/ui/Badge";
import CTASection from "../../components/sections/CTASection";
import Container from "../../components/ui/Container";

export default function ProductDetail() {
  const { categorySlug, productSlug } = useParams();
  const { category, product } = getProduct(categorySlug, productSlug);

  if (!category || !product) {
    return <Navigate to="/products" replace />;
  }

  const related = getAllProducts()
    .filter((item) => item.categorySlug === category.slug && item.slug !== product.slug)
    .slice(0, 3);

  return (
    <>
      <Seo
        title={product.name}
        description={product.short}
        path={`/products/${category.slug}/${product.slug}`}
      />
      <PageHero
        eyebrow={category.name}
        title={product.name}
        subtitle={product.short}
        badges={product.highlights}
      />

      <section className="py-16">
        <Container className="grid items-start gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <div className="overflow-hidden rounded-3xl border border-border">
              <ProductVisual seed={product.slug} image={product.image} />
            </div>
            <p className="mt-8 text-lg leading-relaxed text-muted">{product.description}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {(product.highlights || []).map((tag) => (
                <Badge key={tag}>{tag}</Badge>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button to="/contact">Request a quote</Button>
              <Button to={`/products/${category.slug}`} variant="outline">
                Back to {category.name}
              </Button>
            </div>
          </div>

          <aside className="glass rounded-3xl p-6 sm:p-8">
            <h2 className="text-lg font-semibold text-foreground">Technical highlights</h2>
            <ul className="mt-5 space-y-3">
              {product.specs.map((spec) => (
                <li key={spec} className="flex items-start gap-3 text-sm text-muted">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  {spec}
                </li>
              ))}
            </ul>
          </aside>
        </Container>
      </section>

      {related.length > 0 && (
        <Section eyebrow="Related" title="More in this category">
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {related.map((item) => (
              <ProductCard
                key={item.slug}
                item={item}
                categorySlug={item.categorySlug}
                categoryName={item.categoryName}
              />
            ))}
          </div>
        </Section>
      )}

      <CTASection />
    </>
  );
}
