import { ArrowRight, ArrowUpRight, Grid2X2, List, Search, X } from "lucide-react";
import { Link, useParams, useSearchParams } from "react-router-dom";
import { productGroups, getGroup, getCategory, getCategoriesByGroup } from "../../data/products";
import Seo from "../../components/common/Seo";
import Container from "../../components/ui/Container";
import ProductCard from "../../components/cards/ProductCard";
import ProductVisual from "../../components/cards/ProductVisual";
import CTASection from "../../components/sections/CTASection";
import NotFound from "../NotFound/NotFound";

export default function Products() {
  const { categorySlug } = useParams();
  const [params, setParams] = useSearchParams();
  const active = categorySlug ? getCategory(categorySlug) : null;
  const group = getGroup(active?.group || params.get("group"));
  const categories = active ? [active] : getCategoriesByGroup(group?.id);
  const query = params.get("q") || "";
  const family = params.get("family") || "";
  const kind = params.get("kind") || "";
  const view = params.get("view") === "list" ? "list" : "grid";
  const items = categories.flatMap((category) => category.items.map((item) => ({ ...item, categorySlug: category.slug, categoryName: category.name }))).sort((a, b) => Number(a.kind === "family") - Number(b.kind === "family"));
  const families = [...new Set(items.map((item) => item.family).filter(Boolean))];
  const words = query.toLowerCase().trim().split(/\s+/).filter(Boolean);
  const visible = items.filter((item) => (!family || item.family === family) && (!kind || (kind === "models" ? ["model", "configuration", "platform"].includes(item.kind) : item.kind === "family")) && words.every((word) => `${item.name} ${item.short} ${item.family || ""} ${item.brand || ""} ${item.specs.join(" ")}`.toLowerCase().includes(word)));
  const title = active?.name || (group ? `${group.label} products & solutions` : "Infrastructure for every ambition.");
  const subtitle = active?.summary || group?.summary || "Explore enterprise computing, intelligent networks, and the infrastructure behind your next project. One catalog. Specialist portfolios for compute, networking, and fibre connectivity.";
  const hero = items.find((item) => item.kind === "model" && item.image) || items.find((item) => item.image);
  const update = (key, value) => setParams((current) => { const next = new URLSearchParams(current); value ? next.set(key, value) : next.delete(key); return next; }, { replace: true });
  const clear = () => setParams((current) => { const next = new URLSearchParams(current); ["q", "family", "kind"].forEach((key) => next.delete(key)); return next; });

  if (categorySlug && !active) return <NotFound />;

  return (
    <div className={`catalog-page brand-${group?.id || "coreflowtech"}`}>
      <Seo title={title} description={subtitle} path={active ? `/products/${active.slug}` : "/products"} />
      <section className="catalog-hero">
        <Container className="catalog-hero-inner">
          <div>
            <p className="catalog-eyebrow">PRODUCTS & SOLUTIONS</p>
            <h1>{title}</h1>
            <p className="catalog-intro">{subtitle}</p>
            <a href="#catalog" className="catalog-hero-link">Explore the portfolio <ArrowRight size={18} /></a>
          </div>
          <div className="catalog-hero-visual" aria-hidden="true">
            <span className="catalog-orbit" />
            {hero ? <img src={hero.image} alt="" /> : <img src="/product-images/high-density-gpu-rack.png" alt="" />}
            <span className="catalog-visual-caption">{group?.label || "COMPUTE · NETWORK · INFRASTRUCTURE"}</span>
          </div>
        </Container>
      </section>
      <div className="catalog-breadcrumb"><Container><Link to="/">Home</Link><span>/</span><Link to="/products">Products & solutions</Link>{group && <><span>/</span><Link to={`/products?group=${group.id}`}>{group.label}</Link></>}{active && <><span>/</span><span>{active.name}</span></>}</Container></div>
      <div className="catalog-brandbar"><Container>
        <Link to="/products" aria-current={!group ? "page" : undefined}>All portfolios</Link>
        {productGroups.map((entry) => <Link key={entry.id} to={`/products?group=${entry.id}`} aria-current={group?.id === entry.id ? "page" : undefined}>{entry.label}</Link>)}
      </Container></div>
      <Container className="catalog-body" >
        <aside className="catalog-sidebar" aria-label="Product categories">
          <p className="catalog-eyebrow">EXPLORE BY CATEGORY</p>
          <Link className="catalog-category-link" to={group ? `/products?group=${group.id}` : "/products"} aria-current={!active ? "page" : undefined}>All {group?.label || "products"}<ArrowRight size={15}/></Link>
          {productGroups.filter((entry) => !group || group.id === entry.id).map((entry) => <div key={entry.id} className="catalog-category-group">
            {!group && <p>{entry.label}</p>}
            {getCategoriesByGroup(entry.id).map((category) => <Link className="catalog-category-link" key={category.slug} to={`/products/${category.slug}`} aria-current={active?.slug === category.slug ? "page" : undefined}>{category.name.replace(/^(KAYTUS|CxTEK|AFS) /, "")}<span>{category.items.length}</span></Link>)}
          </div>)}
          <div className="catalog-help"><p>Find the right fit.</p><span>Share your workload and let us help with product selection.</span><Link to="/contact">Talk to our team <ArrowUpRight size={16}/></Link></div>
        </aside>
        <section id="catalog" className="catalog-results" aria-label="Product catalog">
          <div className="catalog-heading"><div><p className="catalog-eyebrow">THE PORTFOLIO</p><h2>{active?.name || "Discover our products"}</h2></div>{group?.website && <a href={group.website} target="_blank" rel="noopener noreferrer">Manufacturer website <ArrowUpRight size={15}/></a>}</div>
          <div className="catalog-tools">
            <label className="catalog-search"><Search size={19}/><input aria-label="Search products" placeholder="Search model, technology, or keyword…" value={query} onChange={(event) => update("q", event.target.value)} />{query && <button aria-label="Clear search" onClick={() => update("q", "")}><X size={16}/></button>}</label>
            {families.length > 0 && <select aria-label="Product family" value={family} onChange={(event) => update("family", event.target.value)}><option value="">All product families</option>{families.map((name) => <option key={name}>{name}</option>)}</select>}
            {items.some((item) => item.kind) && <select aria-label="Product type" value={kind} onChange={(event) => update("kind", event.target.value)}><option value="">All types</option><option value="models">Models & configurations</option><option value="family">Families & solutions</option></select>}
          </div>
          <div className="catalog-resultbar"><p role="status" aria-live="polite"><strong>{visible.length}</strong> {visible.length === 1 ? "result" : "results"}{(query || family || kind) && <button onClick={clear}>Clear filters <X size={13}/></button>}</p><div className="catalog-view"><button aria-label="Grid view" aria-pressed={view === "grid"} onClick={() => update("view", "")}><Grid2X2 size={18}/></button><button aria-label="List view" aria-pressed={view === "list"} onClick={() => update("view", "list")}><List size={18}/></button></div></div>
          {visible.length ? view === "grid" ? <div className="catalog-grid">{visible.map((item) => <ProductCard key={`${item.categorySlug}/${item.slug}`} item={item} categorySlug={item.categorySlug} categoryName={item.family || item.categoryName}/>)}</div> : <div className="catalog-list">{visible.map((item) => <Link key={`${item.categorySlug}/${item.slug}`} to={`/products/${item.categorySlug}/${item.slug}`} className="catalog-list-row"><ProductVisual seed={item.slug} image={item.image} alt={item.name} manufacturer={!!item.kind}/><div><span>{item.family || item.categoryName}</span><h3>{item.name}</h3><p>{item.short}</p></div><ArrowUpRight size={20}/></Link>)}</div> : <div className="catalog-empty"><Search size={32}/><h3>No matching products</h3><p>Try a model name, a broader keyword, or clear the filters.</p><button onClick={clear}>Reset filters</button></div>}
        </section>
      </Container>
      <CTASection />
    </div>
  );
}
