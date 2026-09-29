import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import Badge from "../ui/Badge";
import ProductVisual from "./ProductVisual";

export default function ProductCard({ item, categorySlug, categoryName }) {
  return (
    <Link
      to={`/products/${categorySlug}/${item.slug}`}
      className="group glass glow-border flex h-full flex-col overflow-hidden rounded-2xl transition duration-300 hover:-translate-y-1 hover:border-accent"
    >
      <ProductVisual seed={item.slug} image={item.image} />
      <div className="flex flex-1 flex-col p-5">
        <p className="text-[11px] font-semibold uppercase tracking-widest text-accent">{categoryName}</p>
        <h3 className="mt-2 text-lg font-semibold text-foreground">{item.name}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{item.short}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {(item.highlights || []).slice(0, 3).map((tag) => (
            <Badge key={tag}>{tag}</Badge>
          ))}
        </div>
        <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-accent">
          View solution <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
        </span>
      </div>
    </Link>
  );
}
