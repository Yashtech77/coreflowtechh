import { Link } from "react-router-dom";
import { company } from "../../data/company";
import { footerLinks } from "../../data/navigation";
import Container from "../ui/Container";
import Logo from "./Logo";
import Badge from "../ui/Badge";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface/60">
      <Container className="grid gap-10 py-16 sm:grid-cols-2 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <Logo />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">{company.description}</p>
          <div className="mt-6">
            <Link to="/products?group=kaytus">
              <Badge className="border-accent px-3 py-1.5 text-xs">Authorized KAYTUS Distributor in India</Badge>
            </Link>
          </div>
        </div>

        <FooterColumn title="Company" links={footerLinks.company} />
        <FooterColumn title="Solutions" links={footerLinks.solutions} />
        <FooterColumn title="Services" links={footerLinks.services} />
      </Container>

      <div className="border-t border-border">
        <Container className="flex flex-col gap-3 py-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {company.legalName}. All rights reserved.</p>
          <p>Data centre solutions · IT infrastructure · Authorized KAYTUS distributor</p>
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
