import { ArrowRight } from "lucide-react";
import Container from "../ui/Container";
import Button from "../ui/Button";

export default function CTASection() {
  return (
    <section className="pb-20">
      <Container>
        <div className="glass glow-border relative overflow-hidden rounded-3xl px-6 py-12 text-center sm:px-12">
          <div
            className="orb left-1/2 top-0 h-40 w-40 -translate-x-1/2 opacity-50"
            style={{ background: "color-mix(in srgb, var(--accent) 40%, transparent)" }}
          />
          <p className="relative text-xs font-semibold uppercase tracking-[0.22em] text-accent">Next step</p>
          <h2 className="relative mx-auto mt-3 max-w-2xl text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Talk to Coreflowtech about your data centre or IT requirement
          </h2>
          <p className="relative mx-auto mt-4 max-w-xl text-muted">
            Share your data centre scope, IT infrastructure list, or authorized KAYTUS / CxTEK / AFS requirement. We will come back with a clear India delivery plan.
          </p>
          <div className="relative mt-8 flex justify-center">
            <Button to="/contact">
              Start a conversation <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
