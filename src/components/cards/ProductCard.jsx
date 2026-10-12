import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import ProductVisual from "./ProductVisual";

export default function ProductCard({ item, categorySlug, categoryName }) {
  return (
    <Link to={`/products/${categorySlug}/${item.slug}`} className="group flex h-full flex-col border-t border-border pt-4.5 text-primary hover:border-secondary">
      <div className="relative bg-[color-mix(in_srgb,var(--primary)_4%,white)]">
        <ProductVisual seed={item.slug} image={item.image} alt={item.name} manufacturer={!!item.kind}/>
        {item.brand && <span className="absolute top-3 left-3 bg-white px-2 py-1 text-[10px] font-bold text-secondary">{item.brand}</span>}
      </div>
      <div className="flex flex-1 flex-col pt-5">
        <p className="text-[10px] font-bold tracking-[.08em] uppercase text-secondary">{categoryName}</p>
        <h3 className="mt-2 text-xl font-semibold tracking-[-.035em]">{item.name}</h3>
        <p className="mt-3 flex-1 text-sm leading-[1.7] text-muted">{item.short}</p>
        <div className="mt-5 flex flex-wrap gap-1.5">{(item.highlights || []).filter((tag) => tag !== item.brand).slice(0, 2).map((tag) => <span className="border border-border px-2 py-1 text-[10px] text-secondary" key={tag}>{tag}</span>)}</div>
        <span className="mt-5 flex items-center justify-between border-t border-border pt-4 text-xs font-semibold text-secondary">{item.kind === "family" ? "Explore solution" : "View details"}<ArrowUpRight size={17}/></span>
      </div>
    </Link>
  );
}
