import { Link } from "react-router-dom";
import Container from "../ui/Container";
import Badge from "../ui/Badge";
import FadeIn from "../animations/FadeIn";

export default function PageHero({ eyebrow, title, subtitle, badges = [] }) {
  return (
    <div className="relative overflow-hidden border-b border-border pt-28 pb-16 sm:pt-32 sm:pb-20">
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-70" />
      <div
        className="orb -top-24 right-10 h-72 w-72 opacity-50"
        style={{ background: "color-mix(in srgb, var(--accent) 28%, transparent)" }}
      />
      <Container className="relative">
        <FadeIn>
          {eyebrow && (
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-accent">{eyebrow}</p>
          )}
          <h1 className="max-w-4xl text-[1.75rem] font-semibold leading-tight tracking-tight text-foreground sm:text-4xl md:text-5xl lg:text-6xl">
            {title}
          </h1>
          {subtitle && <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">{subtitle}</p>}
          {badges.length > 0 && (
            <div className="mt-6 flex flex-wrap gap-2">
              {badges.map((badge) => (
                <Badge key={badge}>{badge}</Badge>
              ))}
            </div>
          )}
          <div className="mt-8 text-sm text-muted">
            <Link to="/" className="hover:text-accent">
              Home
            </Link>
            <span className="mx-2 text-border">/</span>
            <span className="text-foreground">{eyebrow || title}</span>
          </div>
        </FadeIn>
      </Container>
    </div>
  );
}
