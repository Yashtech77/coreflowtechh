import ActionButton from "../ui/ActionButton";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import Container from "../ui/Container";

export default function CatalogCTA() {
  return (
    <section className="bg-primary py-[100px] text-white" aria-labelledby="catalog-cta-title">
      <Container >
        <p className="text-[11px] font-bold tracking-[.17em] uppercase">Next step</p>
        <div className="mt-8 flex items-end justify-between gap-14 max-[767px]:block">
          <div>
            <h2 className="max-w-[850px] text-[clamp(52px,6.2vw,100px)] leading-none font-medium tracking-[-.075em]" id="catalog-cta-title">Find the right fit for your site.</h2>
            <p className="mt-6 max-w-[630px] text-base leading-[1.7] text-white/80">Share your workload, equipment list, or project scope. We’ll help identify the right products and delivery services.</p>
          </div>
          <ActionButton className="mt-9 shrink-0 max-[480px]:w-full" variant="inverse" to="/contact" icon={<ArrowUpRight size={20} aria-hidden="true" />}>Discuss your requirement</ActionButton>
        </div>
      </Container>
    </section>
  );
}
