import { partners } from "../../data/partners";
import Container from "../ui/Container";

export default function PartnersMarquee() {
  const loop = [...partners, ...partners];

  return (
    <section className="border-y border-border py-10">
      <Container>
        <p className="mb-6 text-center text-xs font-semibold uppercase tracking-[0.22em] text-muted">
          Data centre solutions, IT infrastructure, and authorized KAYTUS supply
        </p>
        <div className="overflow-hidden">
          <div className="marquee-track">
            {loop.map((partner, index) => (
              <div
                key={`${partner.id}-${index}`}
                className="flex min-w-44 items-center justify-center rounded-full border border-border px-5 py-2.5"
              >
                <div className="text-center">
                  <p className="text-sm font-semibold text-foreground">{partner.name}</p>
                  <p className="text-[11px] text-muted">{partner.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
