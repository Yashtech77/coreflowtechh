import Section from "../ui/Section";
import FadeIn from "../animations/FadeIn";

export default function GlobalPresence() {
  return (
    <Section
      id="presence"
      eyebrow="India presence"
      title="Based in India. Delivered across the country."
      subtitle="Data centre projects, IT infrastructure, and authorized KAYTUS support nationwide."
    >
      <FadeIn>
        <div className="glass relative overflow-hidden rounded-3xl p-8 sm:p-12">
          <WorldMarks />
          <div className="relative grid gap-6 sm:grid-cols-3">
            <PresenceStat label="Authorization" value="Authorized KAYTUS distributor, India" />
            <PresenceStat label="Coverage" value="Pan-India delivery & support" />
            <PresenceStat label="Focus" value="Data centre & IT infrastructure" />
          </div>
        </div>
      </FadeIn>
    </Section>
  );
}

function PresenceStat({ label, value }) {
  return (
    <div>
      <p className="text-xs uppercase tracking-[0.18em] text-accent">{label}</p>
      <p className="mt-2 text-lg font-semibold text-foreground">{value}</p>
    </div>
  );
}

function WorldMarks() {
  return (
    <svg viewBox="0 0 800 220" className="pointer-events-none absolute inset-0 h-full w-full opacity-30" aria-hidden="true">
      {Array.from({ length: 18 }).map((_, i) => (
        <circle
          key={i}
          cx={40 + ((i * 97) % 760)}
          cy={40 + ((i * 53) % 160)}
          r="3"
          fill="var(--accent)"
        />
      ))}
      <path
        d="M80 120 C 200 40, 320 180, 500 90 S 720 40, 760 110"
        stroke="var(--accent)"
        strokeWidth="1"
        fill="none"
      />
    </svg>
  );
}
