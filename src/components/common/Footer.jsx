import { Link } from "react-router-dom";
import { company } from "../../data/company";
import { footerLinks } from "../../data/navigation";
import { productGroups } from "../../data/products";
import Container from "../ui/Container";
import Logo from "./Logo";
import Badge from "../ui/Badge";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface/60">
      <Container className="grid gap-10 py-16 sm:grid-cols-2 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <Link to="/" aria-label="Coreflow Technologies home" className="inline-block max-w-full">
            <Logo variant="footer" />
          </Link>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">{company.description}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {productGroups.filter((group) => group.website).map((group) => (
              <Link key={group.id} to={`/products?group=${group.id}`}>
                <Badge className="border-accent px-3 py-1.5 text-xs">Authorized {group.label} Distributor in India</Badge>
              </Link>
            ))}
          </div>
        </div>

        <FooterColumn title="Company" links={footerLinks.company} />
        <FooterColumn title="Solutions" links={footerLinks.solutions} />
        <FooterColumn title="Services" links={footerLinks.services} />
      </Container>

      <div className="border-t border-border">
        <Container className="flex flex-col gap-3 py-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {company.legalName}. All rights reserved.</p>
          <p>AI software · Data centre solutions · Authorized KAYTUS, CxTEK & AFS distributor</p>
        </Container>
      </div>
    </footer>
  );
}

function FooterColumn({ title, links }) {
  return (
    <div>
      <p className="mb-4 text-sm font-semibold text-foreground">{title}</p>
      <ul className="space-y-2.5">
        {links.map((link) => (
          <li key={link.path + link.label}>
            <Link to={link.path} className="text-sm text-muted transition hover:text-accent">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
