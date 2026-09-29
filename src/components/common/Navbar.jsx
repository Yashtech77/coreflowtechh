import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { navigation } from "../../data/navigation";
import { cn } from "../../utils/cn";
import Logo from "./Logo";
import Button from "../ui/Button";
import Container from "../ui/Container";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
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
            {navigation.map((item) => (
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
            <Button to="/contact" className="mt-4 w-full" onClick={() => setOpen(false)}>
              Get in touch
            </Button>
          </Container>
        </div>
      )}
    </header>
  );
}
