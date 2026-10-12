import { ArrowRight, ArrowUpRight, Grid2X2, List, Search, X } from "lucide-react";
import { Link, useParams, useSearchParams } from "react-router-dom";
import { productGroups, getGroup, getCategory, getCategoriesByGroup } from "../../data/products";
import { services } from "../../data/services";
import Seo from "../../components/common/Seo";
import Container from "../../components/ui/Container";
import ProductCard from "../../components/cards/ProductCard";
import ProductVisual from "../../components/cards/ProductVisual";
import CatalogSelect from "../../components/ui/CatalogSelect";
import CatalogCTA from "../../components/sections/CatalogCTA";
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
  const visible = items.filter((item) => (!family || item.family === family) && (!kind || (kind === "models" ? ["model", "configuration", "platform"].includes(item.kind) : item.kind === "family")) && words.every((word) => `${item.name} ${item.short} ${item.family || ""} ${item.brand || ""} ${(item.specs || []).join(" ")}`.toLowerCase().includes(word)));
  const title = active?.name || (group ? `${group.label} products & solutions` : "Products and services for your infrastructure.");
  const subtitle = active?.summary || group?.summary || "Explore Coreflowtech solutions and authorized KAYTUS, CxTEK and AFS portfolios, with deployment and support services across India.";
  const update = (key, value) => setParams((current) => { const next = new URLSearchParams(current); value ? next.set(key, value) : next.delete(key); return next; }, { replace: true });
  const clear = () => setParams((current) => { const next = new URLSearchParams(current); ["q", "family", "kind"].forEach((key) => next.delete(key)); return next; });

  if (categorySlug && !active) return <NotFound />;

  return (
    <div className="bg-white text-primary">
      <Seo title={title} description={subtitle} path={active ? `/products/${active.slug}` : "/products"} />

      <div className="border-b border-border bg-white pt-[82px] text-[11px] text-secondary max-[1023px]:pt-[72px] max-[480px]:pt-[66px]"><Container className="flex flex-wrap gap-2.5 py-6"><Link to="/">Home</Link><span>/</span><Link to="/products">Products & services</Link>{group && <><span>/</span><Link to={`/products?group=${group.id}`}>{group.label}</Link></>}{active && <><span>/</span><span>{active.name}</span></>}</Container></div>

      <section className="border-b border-border bg-white pt-7 pb-[82px] max-[767px]:pb-15" aria-labelledby="catalog-title">
        <Container className="grid min-h-[430px] grid-cols-[minmax(0,1.28fr)_minmax(0,.72fr)] items-end gap-[9%] max-[767px]:min-h-0 max-[767px]:grid-cols-1 max-[767px]:gap-12">
          <div>
            <p className="text-[11px] font-bold tracking-[.17em] uppercase text-secondary">01 / Products & services</p>
            <h1 className="mt-6 max-w-[920px] text-[clamp(56px,6vw,100px)] leading-none font-semibold tracking-[-.075em] max-[767px]:text-[clamp(47px,9vw,72px)]" id="catalog-title">{title}</h1>
            <p className="mt-7 max-w-[690px] text-[clamp(16px,1.35vw,20px)] leading-[1.7] text-muted">{subtitle}</p>
            <a href="#catalog" className="mt-7 inline-flex items-center gap-4 border-b border-primary pb-2 text-[13px] font-bold text-primary hover:border-secondary hover:text-secondary">Explore the portfolio <ArrowRight size={18} aria-hidden="true" /></a>
          </div>
          <div className="self-end border-t border-border" aria-label="From selection to support">
            <p className="my-5 text-[10px] font-bold tracking-[.16em] text-secondary">ONE TEAM / FULL SCOPE</p>
            {["Specify", "Supply", "Deploy", "Support"].map((step, index) => <div className="grid grid-cols-[40px_1fr] items-baseline gap-4 border-b border-border py-3" key={step}><span className="text-[10px] font-bold text-secondary">0{index + 1}</span><strong className="text-[clamp(20px,1.8vw,28px)] font-medium tracking-[-.04em]">{step}</strong></div>)}
          </div>
        </Container>
      </section>

      <nav className="sticky top-[82px] z-30 border-b border-border bg-white max-[1023px]:top-[72px] max-[480px]:top-[66px]" aria-label="Product portfolios"><Container className="flex gap-[clamp(20px,3vw,50px)] overflow-x-auto">
        <Link className={`block border-b-2 px-0 py-5 text-[13px] font-semibold whitespace-nowrap ${!group ? "border-secondary text-secondary" : "border-transparent hover:border-secondary hover:text-secondary"}`} to="/products" aria-current={!group ? "page" : undefined}>All portfolios</Link>
        {productGroups.map((entry) => <Link className={`block border-b-2 px-0 py-5 text-[13px] font-semibold whitespace-nowrap ${group?.id === entry.id ? "border-secondary text-secondary" : "border-transparent hover:border-secondary hover:text-secondary"}`} key={entry.id} to={`/products?group=${entry.id}`} aria-current={group?.id === entry.id ? "page" : undefined}>{entry.label}</Link>)}
      </Container></nav>

      <Container className="grid grid-cols-[245px_minmax(0,1fr)] gap-[clamp(40px,5vw,85px)] pt-[70px] pb-[110px] max-[1100px]:grid-cols-[210px_minmax(0,1fr)] max-[1100px]:gap-9 max-[767px]:grid-cols-1 max-[767px]:gap-9 max-[767px]:pt-11">
        <aside className="sticky top-[156px] max-h-[calc(100dvh-176px)] self-start overflow-auto max-[1023px]:top-[146px] max-[767px]:static max-[767px]:flex max-[767px]:max-h-none max-[767px]:items-center max-[767px]:gap-2 max-[767px]:overflow-x-auto max-[767px]:overflow-y-hidden max-[767px]:pb-2.5" aria-label="Product categories">
          <p className="mb-5 text-[11px] font-bold tracking-[.17em] uppercase text-secondary max-[767px]:hidden">Browse categories</p>
          <Link className={`flex justify-between gap-3 py-2.5 text-[13px] leading-normal hover:text-secondary max-[767px]:shrink-0 max-[767px]:border max-[767px]:border-border max-[767px]:px-3 ${!active ? "font-bold text-secondary" : ""}`} to={group ? `/products?group=${group.id}` : "/products"} aria-current={!active ? "page" : undefined}>All {group?.label || "products"}<ArrowRight size={15} aria-hidden="true" /></Link>
          {productGroups.filter((entry) => !group || group.id === entry.id).map((entry) => <div className="border-b border-border py-3.5 max-[767px]:contents" key={entry.id}>
            {!group && <p className="my-2 text-[10px] font-bold tracking-[.12em] uppercase text-secondary max-[767px]:hidden">{entry.label}</p>}
            {getCategoriesByGroup(entry.id).map((category) => <Link className={`flex justify-between gap-3 py-2.5 text-[13px] leading-normal hover:text-secondary max-[767px]:shrink-0 max-[767px]:border max-[767px]:border-border max-[767px]:px-3 ${active?.slug === category.slug ? "font-bold text-secondary max-[767px]:border-secondary" : ""}`} key={category.slug} to={`/products/${category.slug}`} aria-current={active?.slug === category.slug ? "page" : undefined}>{category.name.replace(/^(KAYTUS|CxTEK|AFS) /, "")}<span className="text-[11px] text-secondary">{category.items.length}</span></Link>)}
          </div>)}
          <div className="mt-8 border-t border-border pt-5 max-[767px]:hidden"><p className="text-xl font-semibold tracking-[-.04em]">Need a shortlist?</p><span className="my-3 block text-xs leading-[1.7] text-muted">Share your workload or bill of materials and we’ll help narrow the options.</span><Link className="inline-flex items-center gap-2 text-xs font-bold text-secondary" to="/contact">Talk to our team <ArrowUpRight size={16} aria-hidden="true" /></Link></div>
        </aside>

        <section id="catalog" className="min-w-0 scroll-mt-36" aria-label="Product catalog">
          <div className="mb-7 flex items-end justify-between gap-6 max-[480px]:block"><div><p className="text-[11px] font-bold tracking-[.17em] uppercase text-secondary">The portfolio</p><h2 className="mt-3 text-[clamp(38px,3.7vw,64px)] leading-[1.08] font-semibold tracking-[-.06em]">{active?.name || "Explore the range."}</h2></div>{group?.website && <a className="inline-flex items-center gap-2 border-b border-secondary pb-1 text-xs font-bold whitespace-nowrap text-secondary max-[480px]:mt-5" href={group.website} target="_blank" rel="noopener noreferrer">Manufacturer website <ArrowUpRight size={15} aria-hidden="true" /></a>}</div>
          <div className="flex flex-wrap gap-2.5">
            <label className="flex min-h-[50px] flex-[1_1_300px] items-center gap-3 border border-border px-4 text-secondary focus-within:border-secondary"><Search size={18} aria-hidden="true" /><input className="w-full bg-transparent py-3 text-[13px] text-primary outline-none placeholder:text-muted" aria-label="Search products" placeholder="Search model, technology, or keyword" value={query} onChange={(event) => update("q", event.target.value)} />{query && <button className="cursor-pointer p-1" type="button" aria-label="Clear search" onClick={() => update("q", "")}><X size={16} /></button>}</label>
            {families.length > 0 && <CatalogSelect label="Product family" value={family} options={[{ value: "", label: "All product families" }, ...families.map((name) => ({ value: name, label: name }))]} onChange={(value) => update("family", value)} />}
            {items.some((item) => item.kind) && <CatalogSelect label="Product type" value={kind} options={[{ value: "", label: "All types" }, { value: "models", label: "Models & configurations" }, { value: "family", label: "Families & solutions" }]} onChange={(value) => update("kind", value)} />}
          </div>
          <div className="my-6 flex items-center justify-between gap-4 border-b border-border pb-4"><p className="flex flex-wrap items-center gap-1 text-xs text-secondary" role="status" aria-live="polite"><strong className="font-bold text-primary">{visible.length}</strong> {visible.length === 1 ? "result" : "results"}{(query || family || kind) && <button className="ml-3 inline-flex cursor-pointer items-center gap-1 text-secondary" type="button" onClick={clear}>Clear filters <X size={13} /></button>}</p><div className="flex border border-border"><button className={`grid min-h-9 min-w-9 cursor-pointer place-items-center p-2 ${view === "grid" ? "bg-primary text-white" : "text-secondary"}`} type="button" aria-label="Grid view" aria-pressed={view === "grid"} onClick={() => update("view", "")}><Grid2X2 size={18}/></button><button className={`grid min-h-9 min-w-9 cursor-pointer place-items-center p-2 ${view === "list" ? "bg-primary text-white" : "text-secondary"}`} type="button" aria-label="List view" aria-pressed={view === "list"} onClick={() => update("view", "list")}><List size={18}/></button></div></div>
          {visible.length ? view === "grid" ? <div className="grid grid-cols-3 gap-x-4.5 gap-y-8 max-[1100px]:grid-cols-2 max-[480px]:grid-cols-1">{visible.map((item) => <ProductCard key={`${item.categorySlug}/${item.slug}`} item={item} categorySlug={item.categorySlug} categoryName={item.family || item.categoryName}/>)}</div> : <div className="border-t border-border">{visible.map((item) => <Link key={`${item.categorySlug}/${item.slug}`} to={`/products/${item.categorySlug}/${item.slug}`} className="grid grid-cols-[150px_minmax(0,1fr)_22px] items-center gap-6 border-b border-border py-5 max-[480px]:grid-cols-[94px_minmax(0,1fr)_18px] max-[480px]:gap-3"><ProductVisual seed={item.slug} image={item.image} alt={item.name} manufacturer={!!item.kind} compact/><div><span className="text-[10px] font-bold text-secondary">{item.family || item.categoryName}</span><h3 className="my-2 text-lg font-semibold text-primary max-[480px]:text-sm">{item.name}</h3><p className="text-xs leading-[1.6] text-muted">{item.short}</p></div><ArrowUpRight className="text-secondary" size={20} aria-hidden="true" /></Link>)}</div> : <div className="flex min-h-[300px] flex-col items-center justify-center gap-3 border border-border p-8 text-center text-secondary"><Search size={30} aria-hidden="true"/><h3 className="text-xl font-semibold text-primary">No matching products</h3><p className="text-sm text-muted">Try a model name, a broader keyword, or clear the filters.</p><button className="cursor-pointer underline" type="button" onClick={clear}>Reset filters</button></div>}
        </section>
      </Container>

      <section id="services" className="bg-[color-mix(in_srgb,var(--primary)_4%,white)] py-[110px] max-[480px]:py-20" aria-labelledby="catalog-services-title">
        <Container >
          <div className="mb-11 grid grid-cols-[minmax(0,1.2fr)_minmax(260px,.8fr)] items-end gap-x-[8%] max-[767px]:block"><p className="col-span-full mb-5 text-[11px] font-bold tracking-[.17em] uppercase text-secondary">02 / Services</p><h2 className="max-w-[760px] text-[clamp(42px,4.7vw,78px)] leading-[1.05] font-semibold tracking-[-.065em]" id="catalog-services-title">The work behind the hardware.</h2><p className="max-w-[430px] text-base leading-[1.7] text-muted max-[767px]:mt-5">From the first scope conversation through commissioning and support, our services help turn products into working infrastructure.</p></div>
          <div className="grid grid-cols-2 gap-x-[7%] border-t border-border max-[767px]:grid-cols-1">{services.map((service, index) => <Link key={service.slug} to="/contact?interest=services" className="grid min-h-[145px] grid-cols-[38px_1fr_22px] items-start gap-5 border-b border-border py-7 text-primary"><span className="text-[11px] font-bold text-secondary">0{index + 1}</span><div><h3 className="text-[clamp(22px,2vw,31px)] font-semibold tracking-[-.045em]">{service.name}</h3><p className="mt-2.5 max-w-[530px] text-sm leading-[1.65] text-muted">{service.short}</p></div><ArrowUpRight className="text-secondary" size={21} aria-hidden="true" /></Link>)}</div>
        </Container>
      </section>
      <CatalogCTA />
    </div>
  );
}
