import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { footerLinks } from "../../data/navigation";
import Container from "../ui/Container";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-white text-primary">
      <Container>
        <div className="grid grid-cols-[minmax(0,1.2fr)_minmax(0,.8fr)] gap-[7%] border-t border-border pt-[75px] pb-[90px] max-[900px]:grid-cols-1 max-[900px]:gap-[65px] max-[600px]:pt-[55px] max-[600px]:pb-[65px]">
          <div className="[&>p]:mt-12 [&>p]:mb-[30px] [&>p]:max-w-[690px] [&>p]:text-[clamp(30px,3.5vw,56px)] [&>p]:font-medium [&>p]:leading-[1.13] [&>p]:tracking-[-.055em] max-[600px]:[&>p]:mt-[35px]">
            <Link to="/" aria-label="Coreflowtech home"><Logo variant="footer" /></Link>
            <p>Data centre and IT infrastructure, delivered in India.</p>
            <Link className="group inline-flex items-center gap-[18px] border-b border-primary pb-2 text-[13px] font-bold hover:border-secondary hover:text-secondary [&>svg]:rotate-45 [&>svg]:transition-transform group-hover:[&>svg]:rotate-0 motion-reduce:[&>svg]:transition-none" to="/contact">Discuss your requirement <ArrowUpRight size={19} aria-hidden="true" /></Link>
          </div>
          <div className="grid grid-cols-3 items-start gap-[22px] max-[600px]:grid-cols-2 max-[600px]:gap-x-5 max-[600px]:gap-y-[35px]">
            <FooterColumn title="Company" links={footerLinks.company} />
            <FooterColumn title="Solutions" links={footerLinks.solutions} />
            <FooterColumn title="Services" links={footerLinks.services} />
          </div>
        </div>
        <div className="flex justify-between gap-[25px] border-t border-border py-[22px] text-[11px] text-muted max-[600px]:flex-col max-[600px]:gap-2">
          <p>© {new Date().getFullYear()} Coreflowtech. All rights reserved.</p>
          <p>Data centre solutions · IT infrastructure · Authorized KAYTUS, CxTEK & AFS supply</p>
        </div>
      </Container>
    </footer>
  );
}

function FooterColumn({ title, links }) {
  return (
    <div>
      <h2 className="mb-[22px] text-[11px] font-bold uppercase tracking-[.15em] text-secondary">{title}</h2>
      <ul className="grid gap-[13px]">
        {links.map((link) => <li key={link.path + link.label}><Link className="text-[13px] leading-[1.5] text-primary hover:text-secondary" to={link.path}>{link.label}</Link></li>)}
      </ul>
    </div>
  );
}
