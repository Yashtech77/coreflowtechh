import { ArrowRight, ArrowUpRight, Check, FileText } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import Seo from "../../components/common/Seo";
import ProductCard from "../../components/cards/ProductCard";
import { getAllProducts, getProduct } from "../../data/products";
import NotFound from "../NotFound/NotFound";

const shell = "mx-auto w-full max-w-[1520px] px-6 max-[767px]:px-4 max-[480px]:px-3";
const eyebrow = "m-0 text-[11px] font-bold tracking-[.18em] uppercase text-secondary";
const section = "scroll-mt-40 py-[clamp(88px,8vw,135px)] max-[767px]:py-20";
const heading = "text-[clamp(45px,4.5vw,76px)] leading-[1.04] font-semibold tracking-[-.07em] text-primary max-[480px]:text-[42px]";

export default function ProductDetail() {
  const { categorySlug, productSlug } = useParams();
  const { category, product } = getProduct(categorySlug, productSlug);
  if (!category || !product) return <NotFound />;

  const siblings = getAllProducts().filter((item) => item.categorySlug === category.slug && item.slug !== product.slug);
  const models = product.kind === "family" ? siblings.filter((item) => item.family === product.family && item.kind !== "family") : [];
  const sameFamily = siblings.filter((item) => !product.family || item.family === product.family);
  const related = (sameFamily.length ? sameFamily : siblings).slice(0, 3);
  const quote = `/contact?interest=${encodeURIComponent(category.slug)}&product=${encodeURIComponent(product.name)}`;
  const cutout = Boolean(product.kind && /\.png$/i.test(product.image || ""));
  const cardGrid = "grid grid-cols-3 gap-x-4.5 gap-y-8 max-[1100px]:grid-cols-2 max-[480px]:grid-cols-1";

  return <div className="bg-white text-primary">
    <Seo title={product.name} description={product.short} path={`/products/${category.slug}/${product.slug}`} />
    <div className="pt-[106px] text-[11px] text-secondary max-[1023px]:pt-24 max-[480px]:pt-[84px]">
      <div className={`${shell} flex flex-wrap items-center gap-2.5 py-3`}>
        <Link className="hover:text-primary" to="/">Home</Link><span>/</span>
        <Link className="hover:text-primary" to={`/products?group=${category.group}`}>{product.brand || "Products"}</Link><span>/</span>
        <Link className="hover:text-primary" to={`/products/${category.slug}`}>{category.name}</Link><span>/</span>
        <span className="text-primary" aria-current="page">{product.name}</span>
      </div>
    </div>

    <section className="border-b border-border py-[70px] max-[767px]:py-12">
      <div className={`${shell} grid min-h-[520px] grid-cols-[minmax(0,1.05fr)_minmax(0,.95fr)] items-center gap-[6%] max-[767px]:min-h-0 max-[767px]:grid-cols-1 max-[767px]:gap-10`}>
        <div className="min-w-0">
          <p className={eyebrow}>{product.family || category.name}</p>
          <h1 className="mt-6 max-w-[800px] text-[clamp(58px,5.8vw,96px)] leading-[.99] font-semibold tracking-[-.075em] wrap-break-word max-[767px]:text-[clamp(43px,8vw,68px)]">{product.name}</h1>
          <p className="mt-7 max-w-[660px] text-[clamp(16px,1.35vw,20px)] leading-[1.7] text-muted">{product.short}</p>
          {product.highlights?.length > 0 && <div className="mt-6 flex flex-wrap gap-2">{product.highlights.map((tag) => <span className="border border-border px-2 py-1 text-[10px] text-secondary" key={tag}>{tag}</span>)}</div>}
          <div className="mt-8 flex flex-wrap items-center gap-6">
            <Link className="group inline-flex min-h-14 cursor-pointer items-stretch border border-primary bg-primary pl-5 text-[13px] font-bold text-white transition-colors hover:border-secondary hover:bg-secondary" to={quote}>
              <span className="self-center py-2.5">Request a quote</span><span className="ml-7 grid w-14 place-items-center border-l border-white/40"><ArrowUpRight className="rotate-45 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:rotate-0" size={18} aria-hidden="true" /></span>
            </Link>
            <a className="group inline-flex min-h-11 cursor-pointer items-center gap-3 border-b border-current text-[13px] font-bold text-primary transition-colors hover:text-secondary" href="#specifications">
              {product.specTables?.length ? "View specifications" : "Explore capabilities"}<ArrowRight className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:-rotate-45" size={17} aria-hidden="true" />
            </a>
          </div>
        </div>
        <div className="min-w-0 bg-[color-mix(in_srgb,var(--primary)_4%,white)]">
          <img className={`block h-[430px] w-full ${cutout ? "object-contain p-6" : "object-cover"} max-[767px]:h-[300px]`} src={product.image} alt={product.name} decoding="async" />
        </div>
      </div>
    </section>

    <nav className="sticky top-[82px] z-20 border-y border-border bg-white max-[1023px]:top-[72px] max-[480px]:top-[66px]" aria-label="Product sections">
      <div className={`${shell} flex items-center gap-8 overflow-x-auto whitespace-nowrap [scrollbar-width:none] [&::-webkit-scrollbar]:hidden`}>
        <a className="py-5 text-xs hover:text-secondary" href="#overview">Overview</a>
        <a className="py-5 text-xs hover:text-secondary" href="#specifications">{product.specTables?.length ? "Technical specifications" : "Capabilities"}</a>
        {models.length > 0 && <a className="py-5 text-xs hover:text-secondary" href="#models">Product range</a>}
        {product.sourceUrl && <a className="py-5 text-xs hover:text-secondary" href="#resources">Resources</a>}
        <Link className="group ml-auto inline-flex items-center gap-2 py-5 text-xs font-semibold text-secondary" to={quote}>Enquire now <ArrowUpRight className="rotate-45 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:rotate-0" size={15} aria-hidden="true" /></Link>
      </div>
    </nav>

    <section id="overview" className={`${section} border-b border-border`}>
      <div className={`${shell} grid grid-cols-[minmax(0,.7fr)_minmax(0,1fr)] gap-[7%] max-[767px]:grid-cols-1 max-[767px]:gap-9`}>
        <div><p className={eyebrow}>Overview</p><h2 className={`${heading} mt-5`}>{product.kind === "family" ? "Built around your requirements." : "Get to know the platform."}</h2></div>
        <div><p className="max-w-[780px] text-[clamp(20px,1.7vw,27px)] leading-[1.55]">{product.description}</p><div className="mt-8 grid grid-cols-2 gap-5 max-[480px]:grid-cols-1">{product.specs.slice(0, 6).map((spec) => <div className="flex items-start gap-2.5 border-t border-border pt-4 text-[13px] leading-[1.7]" key={spec}><Check className="mt-0.5 shrink-0 text-secondary" size={18} aria-hidden="true" /><span>{spec}</span></div>)}</div></div>
      </div>
    </section>

    <section id="specifications" className={`${section} bg-[color-mix(in_srgb,var(--primary)_4%,white)]`}>
      <div className={shell}>
        <p className={eyebrow}>{product.specTables?.length ? "The details" : "Capabilities"}</p>
        <h2 className={`${heading} mt-5 mb-12`}>{product.specTables?.length ? "Technical specifications" : "Product capabilities"}</h2>
        {product.specTables?.length ? <>
          {product.specTables.map((rows, index) => <SpecTable key={index} rows={rows} caption={`${product.name} — ${index ? `additional specifications ${index + 1}` : "technical specifications"}`} />)}
          <p className="mt-6 text-xs leading-[1.9] text-muted">Specifications vary by configuration. Confirm the final bill of materials with our team.{product.sourceUrl && <> <a className="ml-1 inline-flex items-center gap-1 font-semibold text-secondary hover:underline" href={product.sourceUrl} target="_blank" rel="noopener noreferrer">Manufacturer reference <ArrowUpRight size={13} aria-hidden="true" /></a></>}</p>
        </> : <div className="grid grid-cols-2 gap-x-8 max-[480px]:grid-cols-1">{product.specs.map((spec, index) => <div className="grid grid-cols-[32px_minmax(0,1fr)] items-baseline gap-3.5 border-t border-border py-5.5" key={spec}><span className="text-xs text-secondary">{String(index + 1).padStart(2, "0")}</span><p className="m-0 text-base leading-normal">{spec}</p></div>)}</div>}
        {product.specificationNote && <p className="mt-5 text-xs leading-[1.9] text-muted">{product.specificationNote}</p>}
      </div>
    </section>

    {models.length > 0 && <section id="models" className={section}><div className={shell}><p className={eyebrow}>Explore the range</p><h2 className={`${heading} mt-5 mb-12`}>Models & configurations</h2><div className={cardGrid}>{models.map((item) => <ProductCard key={item.slug} item={item} categorySlug={category.slug} categoryName={item.family} />)}</div></div></section>}

    {product.sourceUrl && <section id="resources" className={`${section} border-t border-border`}><div className={`${shell} grid grid-cols-2 gap-[7%] max-[767px]:grid-cols-1 max-[767px]:gap-9`}><div><p className={eyebrow}>Resources</p><h2 className={`${heading} mt-5`}>Continue exploring.</h2><p className="mt-5 max-w-[450px] text-sm leading-7 text-muted">Manufacturer information and product documentation.</p></div><div className="border-t border-border">{[{ label: `${product.brand || "Manufacturer"} product information`, url: product.sourceUrl }, ...(product.resources || [])].map((resource) => <a className="flex items-center gap-5 border-b border-border py-5.5 text-[13px] text-secondary hover:text-primary" key={resource.url} href={resource.url} target="_blank" rel="noopener noreferrer"><FileText className="shrink-0" size={22} aria-hidden="true" /><span className="flex-1">{resource.label}</span><ArrowUpRight size={18} aria-hidden="true" /></a>)}</div></div></section>}

    {!models.length && related.length > 0 && <section className={`${section} border-t border-border`}><div className={shell}><p className={eyebrow}>Also explore</p><h2 className={`${heading} mt-5 mb-12`}>More in this range</h2><div className={cardGrid}>{related.map((item) => <ProductCard key={item.slug} item={item} categorySlug={category.slug} categoryName={item.family || category.name} />)}</div></div></section>}

    <section className="bg-primary py-[clamp(85px,8vw,135px)] text-white"><div className={shell}><p className="m-0 text-[11px] font-bold tracking-[.18em] uppercase">Next step / 11</p><div className="mt-9 flex items-end justify-between gap-15 max-[767px]:block"><div><h2 className="max-w-[900px] text-[clamp(54px,7vw,116px)] leading-none font-medium tracking-[-.078em]">Let’s build what comes next.</h2><p className="mt-6 max-w-[590px] text-base leading-[1.7] text-white/80">Share your data centre scope, IT infrastructure list, or authorized KAYTUS, CxTEK or AFS requirement. We’ll help define a clear delivery plan.</p></div><Link className="group mt-9 inline-flex min-h-14 min-w-[255px] shrink-0 cursor-pointer items-stretch justify-between border border-white bg-white pl-5 text-[13px] font-bold text-primary transition-colors hover:bg-transparent hover:text-white max-[480px]:w-full" to="/contact"><span className="self-center py-2.5">Start a conversation</span><span className="ml-7 grid w-14 place-items-center border-l border-current/40"><ArrowUpRight className="rotate-45 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:rotate-0" size={22} aria-hidden="true" /></span></Link></div></div></section>
  </div>;
}

function SpecTable({ rows, caption }) {
  const columns = Math.max(...rows.map((row) => row.length));
  const header = columns > 2 || /^(description|value)$/i.test(rows[0]?.[1] || "");
  const cells = (row, isHeader) => {
    const merged = [];
    row.forEach((value) => { const previous = merged.at(-1); if (previous?.value === value) previous.span++; else merged.push({ value, span: 1 }); });
    return merged.map((cell, index) => { const Tag = isHeader || index === 0 ? "th" : "td"; return <Tag className={`${index === 0 ? "w-[23%] font-semibold" : ""} min-w-[135px] border-b border-border px-5.5 py-4 text-left text-[13px] leading-[1.8] whitespace-pre-line text-primary max-[767px]:min-w-[100px] max-[767px]:p-3`} key={index} scope={isHeader ? "col" : index === 0 ? "row" : undefined} colSpan={cell.span + (index === merged.length - 1 ? columns - row.length : 0)}>{cell.value}</Tag>; });
  };
  return <div className="mb-6 w-full overflow-x-auto border-t border-border" role="region" aria-label={caption} tabIndex={0}><table className="w-full border-collapse text-left"><caption className="sr-only">{caption}</caption>{header && <thead><tr>{cells(rows[0], true)}</tr></thead>}<tbody>{rows.slice(header ? 1 : 0).map((row, index) => <tr key={index}>{cells(row, false)}</tr>)}</tbody></table></div>;
}
