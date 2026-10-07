import { Link, useParams } from "react-router-dom";
import { ArrowUpRight, Check, FileText, ArrowRight } from "lucide-react";
import { getProduct, getAllProducts } from "../../data/products";
import Seo from "../../components/common/Seo";
import ProductCard from "../../components/cards/ProductCard";
import ProductVisual from "../../components/cards/ProductVisual";
import Button from "../../components/ui/Button";
import CTASection from "../../components/sections/CTASection";
import Container from "../../components/ui/Container";
import NotFound from "../NotFound/NotFound";

export default function ProductDetail() {
  const { categorySlug, productSlug } = useParams();
  const { category, product } = getProduct(categorySlug, productSlug);
  if (!category || !product) return <NotFound />;
  const siblings = getAllProducts().filter((item) => item.categorySlug === category.slug && item.slug !== product.slug);
  const models = product.kind === "family" ? siblings.filter((item) => item.family === product.family && item.kind !== "family") : [];
  const sameFamily = siblings.filter((item) => !product.family || item.family === product.family);
  const related = (sameFamily.length ? sameFamily : siblings).slice(0, 3);
  const quote = `/contact?interest=${encodeURIComponent(category.slug)}&product=${encodeURIComponent(product.name)}`;
  return <div className={`catalog-page brand-${category.group}`}>
    <Seo title={product.name} description={product.short} path={`/products/${category.slug}/${product.slug}`}/>
    <div className="product-detail-breadcrumb catalog-breadcrumb"><Container><Link to="/">Home</Link><span>/</span><Link to={`/products?group=${category.group}`}>{product.brand || "Products"}</Link><span>/</span><Link to={`/products/${category.slug}`}>{category.name}</Link><span>/</span><span>{product.name}</span></Container></div>
    <section className="product-detail-hero"><Container className="product-detail-hero-inner">
      <div><p className="catalog-eyebrow">{product.family || category.name}</p><h1>{product.name}</h1><p className="catalog-intro">{product.short}</p><div className="product-detail-tags">{product.highlights?.map((tag) => <span key={tag}>{tag}</span>)}</div><div className="product-detail-actions"><Button to={quote}>Request a quote <ArrowUpRight size={17}/></Button><a href="#specifications">{product.specTables?.length ? "View specifications" : "Explore capabilities"} <ArrowRight size={17}/></a></div></div>
      <div className="product-detail-image"><ProductVisual key={product.slug} seed={product.slug} image={product.image} alt={product.name} manufacturer={!!product.kind}/></div>
    </Container></section>
    <nav className="product-section-nav" aria-label="Product sections"><Container><a href="#overview">Overview</a><a href="#specifications">{product.specTables?.length ? "Technical specifications" : "Capabilities"}</a>{models.length > 0 && <a href="#models">Product range</a>}{product.sourceUrl && <a href="#resources">Resources</a>}<Link to={quote}>Enquire now <ArrowUpRight size={15}/></Link></Container></nav>
    <Container>
      <section id="overview" className="product-detail-section"><div className="product-section-heading"><p className="catalog-eyebrow">OVERVIEW</p><h2>{product.kind === "family" ? "Built around your requirements." : "Get to know the platform."}</h2></div><div><p className="product-overview-copy">{product.description}</p><div className="product-capability-grid">{product.specs.slice(0,6).map((spec) => <div key={spec}><Check size={18}/><span>{spec}</span></div>)}</div></div></section>
      <section id="specifications" className="product-spec-section"><p className="catalog-eyebrow">{product.specTables?.length ? "THE DETAILS" : "CAPABILITIES"}</p><h2>{product.specTables?.length ? "Technical specifications" : "Product capabilities"}</h2>
        {product.specTables?.length ? <>{product.specTables.map((rows, index) => <SpecTable key={index} rows={rows} caption={`${product.name} — ${index ? `additional specifications ${index + 1}` : "technical specifications"}`}/>)}<p className="product-source-note">Specifications vary by configuration. Confirm the final bill of materials with our team.{product.sourceUrl && <> <a href={product.sourceUrl} target="_blank" rel="noopener noreferrer">Manufacturer reference <ArrowUpRight size={13}/></a></>}</p></> : <div className="product-capabilities">{product.specs.map((spec, i) => <div key={spec}><span>{String(i+1).padStart(2,"0")}</span><p>{spec}</p></div>)}</div>}
        {product.specificationNote && <p className="product-source-note mt-5">{product.specificationNote}</p>}
      </section>
      {models.length > 0 && <section id="models" className="product-model-section"><p className="catalog-eyebrow">EXPLORE THE RANGE</p><h2>Models & configurations</h2><div className="catalog-grid">{models.map((item) => <ProductCard key={item.slug} item={item} categorySlug={category.slug} categoryName={item.family}/>)}</div></section>}
      {product.sourceUrl && <section id="resources" className="product-resource-section"><div><p className="catalog-eyebrow">RESOURCES</p><h2>Continue exploring.</h2><p>Manufacturer information and product documentation.</p></div><div className="product-resources">{[{label: `${product.brand || "Manufacturer"} product information`,url:product.sourceUrl},...(product.resources || [])].map((resource) => <a key={resource.url} href={resource.url} target="_blank" rel="noopener noreferrer"><FileText size={22}/><span>{resource.label}</span><ArrowUpRight size={18}/></a>)}</div></section>}
      {!models.length && related.length > 0 && <section className="product-model-section"><p className="catalog-eyebrow">ALSO EXPLORE</p><h2>More in this range</h2><div className="catalog-grid">{related.map((item) => <ProductCard key={item.slug} item={item} categorySlug={category.slug} categoryName={item.family || category.name}/>)}</div></section>}
    </Container>
    <CTASection />
  </div>;
}

function SpecTable({ rows, caption }) {
  const columns = Math.max(...rows.map((row) => row.length));
  const header = columns > 2 || /^(description|value)$/i.test(rows[0]?.[1] || "");
  const cells = (row, isHeader) => {
    const merged = [];
    row.forEach((text) => { const previous = merged.at(-1); if (previous?.text === text) previous.span++; else merged.push({text,span:1}); });
    return merged.map((cell, i) => { const Tag = isHeader || i === 0 ? "th" : "td"; return <Tag key={i} scope={isHeader ? "col" : i === 0 ? "row" : undefined} colSpan={cell.span + (i === merged.length - 1 ? columns - row.length : 0)}>{cell.text}</Tag>; });
  };
  return <div className="product-spec-scroll" role="region" aria-label={caption} tabIndex={0}><table className="product-spec-table"><caption className="sr-only">{caption}</caption>{header && <thead><tr>{cells(rows[0],true)}</tr></thead>}<tbody>{rows.slice(header ? 1 : 0).map((row,i) => <tr key={i}>{cells(row,false)}</tr>)}</tbody></table></div>;
}
