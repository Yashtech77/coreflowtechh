import ActionButton from "../ui/ActionButton";
import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { ArrowUpRight, ChevronDown, Menu, X } from "lucide-react";
import { navigation } from "../../data/navigation";
import { productGroups, getCategoriesByGroup } from "../../data/products";
import Logo from "./Logo";
import Container from "../ui/Container";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMobileOpen(false);
    setProductsOpen(false);
  }, [location.pathname, location.search]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        setMobileOpen(false);
        setProductsOpen(false);
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <header
      className="pointer-events-none fixed inset-x-0 top-0 z-50 pt-[env(safe-area-inset-top)]"
      onBlur={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) setProductsOpen(false); }}
    >
      <div className={`pointer-events-auto relative z-[2] border-b bg-white animate-[site-header-enter_.45s_cubic-bezier(.22,1,.36,1)_both] motion-reduce:animate-none ${scrolled ? "border-secondary/35" : "border-border"}`}>
        <Container className="flex h-[82px] items-center justify-between gap-6 bg-white max-[1023px]:h-[72px] max-[480px]:h-[66px]">
          <Link className="inline-flex shrink-0 items-center" to="/" aria-label="Coreflowtech home" onClick={() => setMobileOpen(false)}><Logo /></Link>

          <nav className="flex h-full flex-1 items-center justify-center gap-[clamp(16px,2.25vw,38px)] max-[1023px]:hidden" aria-label="Main navigation">
            {navigation.map((item) => (
              <div className="relative flex h-full items-center" key={item.path}>
                <NavLink to={item.path} className={({ isActive }) => `group relative inline-flex h-full items-center whitespace-nowrap text-[13px] font-semibold transition-colors duration-200 ${isActive ? "text-primary" : "text-muted hover:text-primary"}`}>
                  <span>{item.label}</span><span className="absolute inset-x-0 bottom-[15px] h-0.5 origin-left scale-x-0 rounded-sm bg-secondary transition-transform duration-[280ms] group-hover:scale-x-100 group-aria-[current=page]:scale-x-100" aria-hidden="true" />
                </NavLink>
                {item.path === "/products" && (
                  <button type="button" className={`ml-0.5 grid h-9 w-[30px] cursor-pointer place-items-center text-secondary [&>svg]:transition-transform [&>svg]:duration-200 ${productsOpen ? "[&>svg]:rotate-180" : ""}`} aria-label="Browse product portfolios" aria-expanded={productsOpen} aria-controls="product-portfolios" onClick={() => setProductsOpen((value) => !value)}>
                    <ChevronDown size={15} aria-hidden="true" />
                  </button>
                )}
              </div>
            ))}
          </nav>

          <ActionButton className="min-h-[46px] shrink-0 max-[1023px]:hidden [&>span:last-child]:ml-5 [&>span:last-child]:w-[46px]" to="/contact" icon={<ArrowUpRight size={18} aria-hidden="true" />}>Get in touch</ActionButton>

          <button type="button" className="relative hidden h-[42px] w-[42px] shrink-0 cursor-pointer place-items-center text-primary max-[1023px]:grid" aria-label={mobileOpen ? "Close menu" : "Open menu"} aria-expanded={mobileOpen} aria-controls="site-mobile-menu" onClick={() => { setMobileOpen((value) => !value); setProductsOpen(false); }}>
            <Menu className={`absolute transition-[opacity,transform] duration-200 ${mobileOpen ? "rotate-90 opacity-0" : "opacity-100"}`} size={21} aria-hidden="true" />
            <X className={`absolute transition-[opacity,transform] duration-200 ${mobileOpen ? "rotate-0 opacity-100" : "-rotate-90 opacity-0"}`} size={21} aria-hidden="true" />
          </button>
        </Container>
      </div>

      <button type="button" className={`fixed inset-0 z-0 w-full cursor-default bg-primary/10 transition-[opacity,visibility] duration-200 max-[1023px]:hidden ${productsOpen ? "visible pointer-events-auto opacity-100" : "invisible pointer-events-none opacity-0"}`} aria-label="Close product portfolios" tabIndex={productsOpen ? 0 : -1} aria-hidden={!productsOpen} onClick={() => setProductsOpen(false)} />
      <div id="product-portfolios" className={`relative z-[2] transition-[opacity,transform,visibility] duration-200 max-[1023px]:hidden ${productsOpen ? "visible pointer-events-auto translate-y-0 opacity-100" : "invisible pointer-events-none -translate-y-2.5 opacity-0"}`} inert={!productsOpen}>
        <Container className="grid grid-cols-4 gap-[35px] border-b border-border bg-white pt-[34px] pb-[38px]">
          {productGroups.map((group) => (
            <div className="flex min-w-0 flex-col items-start border-l border-border pl-[30px] first:border-l-0 first:pl-0 [&>h2]:mb-[15px] [&>h2]:text-[15px] [&>h2]:font-bold [&>h2]:text-primary [&>a]:block [&>a]:py-[7px] [&>a]:text-xs [&>a]:leading-[1.4] [&>a]:text-muted [&>a]:transition-colors [&>a:hover]:text-secondary" key={group.id}>
              <h2>{group.label}</h2>
              {getCategoriesByGroup(group.id).map((category) => <Link key={category.slug} to={`/products/${category.slug}`}>{category.name.replace(/^(KAYTUS|CxTEK|AFS) /, "")}</Link>)}
              <Link className="mt-auto! inline-flex! items-center gap-[7px] pt-5! font-bold! text-secondary!" to={`/products?group=${group.id}`}>Explore {group.label} <ArrowUpRight size={15} aria-hidden="true" /></Link>
            </div>
          ))}
        </Container>
      </div>

      <div id="site-mobile-menu" className={`relative z-[2] max-h-0 overflow-auto border-b-0 border-border bg-white transition-[max-height,opacity,transform,visibility] duration-[280ms] ${mobileOpen ? "visible pointer-events-auto max-h-[calc(100dvh-100px)] translate-y-0 border-b opacity-100" : "invisible pointer-events-none -translate-y-2.5 opacity-0"}`} inert={!mobileOpen}>
        <Container className="pt-4 pb-[22px]">
          <nav aria-label="Mobile navigation">
            {navigation.map((item, index) => (
              <NavLink key={item.path} to={item.path} className={({ isActive }) => `flex items-center justify-between gap-4 border-b border-border py-[14px] text-lg font-semibold [&>span:last-child]:text-[11px] [&>span:last-child]:font-bold [&>span:last-child]:text-secondary ${isActive ? "text-secondary" : "text-primary"}`} onClick={() => setMobileOpen(false)}>
                <span>{item.label}</span><span>0{index + 1}</span>
              </NavLink>
            ))}
          </nav>
          <div className="py-[21px] [&>p]:mb-[11px] [&>p]:text-[10px] [&>p]:font-bold [&>p]:uppercase [&>p]:tracking-[.14em] [&>p]:text-secondary [&>div]:flex [&>div]:flex-wrap [&>div]:gap-2 [&_a]:rounded [&_a]:border [&_a]:border-border [&_a]:px-3 [&_a]:py-2 [&_a]:text-xs [&_a]:font-semibold [&_a]:text-primary">
            <p>Authorized portfolios</p>
            <div>{productGroups.filter((group) => group.id !== "coreflowtech").map((group) => <Link key={group.id} to={`/products?group=${group.id}`} onClick={() => setMobileOpen(false)}>{group.label}</Link>)}</div>
          </div>
          <ActionButton className="w-full" to="/contact" onClick={() => setMobileOpen(false)} icon={<ArrowUpRight size={18} aria-hidden="true" />}>Get in touch</ActionButton>
        </Container>
      </div>
    </header>
  );
}
