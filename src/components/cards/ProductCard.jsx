import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import ProductVisual from "./ProductVisual";

export default function ProductCard({ item, categorySlug, categoryName }) {
  return (
    <Link to={`/products/${categorySlug}/${item.slug}`} className="product-catalog-card">
      <div className="product-card-media">
        <ProductVisual seed={item.slug} image={item.image} alt={item.name} manufacturer={!!item.kind}/>
        {item.brand && <span className="product-card-brand">{item.brand}</span>}
      </div>
      <div className="product-card-content">
        <p className="product-card-category">{categoryName}</p>
        <h3>{item.name}</h3>
        <p className="product-card-description">{item.short}</p>
        <div className="product-card-tags">{(item.highlights || []).filter((tag) => tag !== item.brand).slice(0, 2).map((tag) => <span key={tag}>{tag}</span>)}</div>
        <span className="product-card-link">{item.kind === "family" ? "Explore solution" : "View details"}<ArrowUpRight size={17}/></span>
      </div>
    </Link>
  );
}
