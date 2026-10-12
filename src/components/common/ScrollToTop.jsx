import { useLayoutEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname, search, hash } = useLocation();
  const previousLocation = useRef(null);

  useLayoutEffect(() => {
    const previous = previousLocation.current;
    previousLocation.current = { pathname, search };

    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        return;
      }
    }

    const isCatalogListing = (path) => /^\/products(?:\/[^/]+)?$/.test(path);
    const groupChanged = new URLSearchParams(previous?.search).get("group") !== new URLSearchParams(search).get("group");
    if (previous && isCatalogListing(previous.pathname) && isCatalogListing(pathname) && (previous.pathname !== pathname || groupChanged)) {
      const page = document.querySelector(".catalog-page");
      const hero = page?.querySelector(".catalog-hero");
      if (hero) {
        const headerHeight = parseFloat(getComputedStyle(page).getPropertyValue("--catalog-header-height")) || 82;
        window.scrollTo({ top: window.scrollY + hero.getBoundingClientRect().bottom - headerHeight, behavior: "instant" });
        return;
      }
    }

    if (previous?.pathname === pathname) return;
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname, search, hash]);

  return null;
}
