import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, ArrowUpRight, ChevronDown } from "lucide-react";
import { navigation } from "../../data/navigation";
import { productGroups, getCategoriesByGroup } from "../../data/products";
import { cn } from "../../utils/cn";
import Logo from "./Logo";
import Button from "../ui/Button";
import Container from "../ui/Container";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
    setProductsOpen(false);
  }, [location.pathname, location.search]);

  useEffect(() => {
    const close = (event) => { if (event.key === "Escape") { setProductsOpen(false); setOpen(false); } };
    document.addEventListener("keydown", close);
    return () => document.removeEventListener("keydown", close);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50" onBlur={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) setProductsOpen(false); }}>
      <div className="glass border-b border-border pt-[env(safe-area-inset-top)]">
        <Container className="flex h-14 min-w-0 items-center justify-between gap-2 sm:h-16 sm:gap-4">
          <Link
            to="/"
            aria-label="Coreflowtech home"
            onClick={() => setOpen(false)}
            className="min-w-0 shrink"
          >
            <Logo />
          </Link>

          <nav className="hidden items-center gap-8 lg:flex">
            {navigation.map((item) => item.path === "/products" ? (
              <div key={item.path} className="flex items-center gap-1">
                <NavLink to={item.path} className={({ isActive }) => cn("text-sm font-medium text-muted hover:text-foreground", isActive && "text-accent")}>{item.label}</NavLink>
                <button type="button" aria-label="Browse product portfolios" aria-expanded={productsOpen} aria-controls="product-portfolios" className="p-2 text-muted" onClick={() => setProductsOpen((value) => !value)}><ChevronDown size={15}/></button>
              </div>
            ) : (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  cn(
                    "text-sm font-medium text-muted transition hover:text-foreground",
                    isActive && "text-accent"
                  )
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden items-center gap-4 lg:flex">
            <Button to="/contact">
              Get in touch <ArrowUpRight className="h-4 w-4" />
            </Button>
          </div>

          <button
            type="button"
            className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-border text-foreground lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </Container>
      </div>

      {productsOpen && <>
        <button className="fixed inset-0 top-16 -z-10 hidden bg-black/10 lg:block" aria-label="Close product portfolios" onClick={() => setProductsOpen(false)}/>
        <div id="product-portfolios" className="product-mega-menu hidden lg:block"><Container>
          {productGroups.map((group) => <div key={group.id}><h2>{group.label}</h2>{getCategoriesByGroup(group.id).map((category) => <Link key={category.slug} to={`/products/${category.slug}`}>{category.name.replace(/^(KAYTUS|CxTEK|AFS) /, "")}</Link>)}<Link className="mega-all-link" to={`/products?group=${group.id}`}>Explore {group.label} →</Link></div>)}
        </Container></div>
      </>}

      {open && (
        <div className="glass max-h-[min(100dvh-3.5rem,32rem)] overflow-y-auto border-b border-border lg:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {navigation.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  cn(
                    "rounded-xl px-3 py-3 text-base font-medium text-muted",
                    isActive && "bg-surface text-accent"
                  )
                }
              >
                {item.label}
              </NavLink>
            ))}
            <div className="my-2 border-y border-border py-3">
              <p className="px-3 pb-2 text-xs font-semibold uppercase tracking-wider text-muted">Product portfolios</p>
              {productGroups.map((group) => <Link key={group.id} to={`/products?group=${group.id}`} className="block rounded-lg px-3 py-2 text-sm text-foreground" onClick={() => setOpen(false)}>{group.label}</Link>)}
            </div>
            <Button to="/contact" className="mt-4 w-full" onClick={() => setOpen(false)}>
              Get in touch
            </Button>
          </Container>
        </div>
      )}
    </header>
  );
}
