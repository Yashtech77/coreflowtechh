import { ArrowRight, Cpu, Droplets, Network } from "lucide-react";
import { company } from "../../data/company";
import Button from "../ui/Button";
import Container from "../ui/Container";
import Badge from "../ui/Badge";
import FadeIn from "../animations/FadeIn";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-28 pb-16 sm:pt-32 sm:pb-24">
      <div className="pointer-events-none absolute inset-0 grid-bg" />
      <div
        className="orb -left-16 top-10 h-80 w-80 opacity-60"
        style={{ background: "color-mix(in srgb, var(--primary) 55%, transparent)" }}
      />
      <div
        className="orb right-0 top-32 h-96 w-96 opacity-40"
        style={{ background: "color-mix(in srgb, var(--accent) 45%, transparent)" }}
      />

      <Container className="relative grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <FadeIn>
          <Badge className="max-w-full whitespace-normal leading-5">Authorized KAYTUS Distributor · India</Badge>
          <h1 className="mt-5 text-[1.75rem] font-semibold leading-tight tracking-tight text-foreground sm:text-4xl md:text-5xl lg:text-6xl">
            Data centre and IT infrastructure for <span className="text-accent">Indian</span> enterprises
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">{company.description}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Button to="/products" className="w-full sm:w-auto">
              Explore solutions <ArrowRight className="h-4 w-4" />
            </Button>
            <Button to="/contact" variant="outline" className="w-full sm:w-auto">
              Talk to us
            </Button>
          </div>
          <div className="mt-10 flex flex-wrap gap-6 text-sm text-muted">
            <span className="inline-flex items-center gap-2">
              <Droplets className="h-4 w-4 text-accent" /> Data centre
            </span>
            <span className="inline-flex items-center gap-2">
              <Network className="h-4 w-4 text-accent" /> IT infrastructure
            </span>
            <span className="inline-flex items-center gap-2">
              <Cpu className="h-4 w-4 text-accent" /> Authorized KAYTUS
            </span>
          </div>
        </FadeIn>

        <FadeIn delay={0.15} className="relative">
          <HeroRack />
        </FadeIn>
      </Container>
    </section>
  );
}

function HeroRack() {
  return (
    <div className="glass glow-border relative overflow-hidden rounded-3xl p-6">
      <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-accent">What we deliver in India</p>
      <div className="space-y-2">
        {["DATA CENTRE BUILD", "IT INFRASTRUCTURE", "AUTHORIZED KAYTUS", "COMMISSIONING", "WARRANTY / AMC"].map(
          (row, i) => (
            <div
              key={row}
              className="flex items-center justify-between rounded-xl border border-border bg-background/50 px-4 py-3"
              style={{ animationDelay: `${i * 120}ms` }}
            >
              <span className="font-mono text-xs text-foreground sm:text-sm">{row}</span>
              <span className="h-2 w-2 rounded-full bg-accent shadow-[0_0_12px_var(--accent)]" />
            </div>
          )
        )}
      </div>
      <div className="mt-6 grid grid-cols-3 gap-3 text-center">
        <Mini metric="DC" label="Solutions" />
        <Mini metric="IT" label="Infrastructure" />
        <Mini metric="KAYTUS" label="Authorized" />
      </div>
    </div>
  );
}

function Mini({ metric, label }) {
  return (
    <div className="rounded-xl bg-background/60 px-2 py-3">
      <p className="text-lg font-semibold text-accent">{metric}</p>
      <p className="text-[11px] text-muted">{label}</p>
    </div>
  );
}
