import ActionButton from "../ui/ActionButton";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import Container from "../ui/Container";

export default function CTASection() {
  return (
    <section className="border-b border-border bg-primary py-[clamp(85px,8vw,135px)] text-white" aria-labelledby="home-cta-title">
      <Container>
        <p className="text-[11px] font-bold tracking-[.18em] uppercase">Next step / 11</p>
        <div className="mt-9 flex items-end justify-between gap-15 max-[767px]:block">
          <div>
            <h2 className="max-w-[900px] text-[clamp(54px,7vw,116px)] leading-none font-medium tracking-[-.078em]" id="home-cta-title">Let’s build what comes next.</h2>
            <p className="mt-6 max-w-[590px] text-base leading-[1.7] text-white/80">Share your data centre scope, IT infrastructure list, or authorized KAYTUS, CxTEK or AFS requirement. We’ll help define a clear delivery plan.</p>
          </div>
          <ActionButton className="mt-9 min-w-[255px] shrink-0 max-[480px]:w-full" variant="inverse" to="/contact" icon={<ArrowUpRight size={22} aria-hidden="true" />}>Start a conversation</ActionButton>
        </div>
      </Container>
    </section>
  );
}
