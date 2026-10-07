import { company, values } from "../../data/company";
import { timeline } from "../../data/timeline";
import Seo from "../../components/common/Seo";
import PageHero from "../../components/common/PageHero";
import Section from "../../components/ui/Section";
import ValueCard from "../../components/cards/ValueCard";
import CTASection from "../../components/sections/CTASection";
import GlobalPresence from "../../components/sections/GlobalPresence";
import StatsStrip from "../../components/sections/StatsStrip";
import FadeIn from "../../components/animations/FadeIn";

export default function About() {
  return (
    <>
      <Seo
        title="About us"
        description="Coreflowtech delivers data centre solutions and IT infrastructure across India, and is an authorized KAYTUS, CxTEK, and AFS distributor."
        path="/about"
      />
      <PageHero
        eyebrow="About us"
        title="Data centre and IT infrastructure for India."
        subtitle={company.story}
        badges={["Data centre", "IT infrastructure", "Authorized KAYTUS", "Authorized CxTEK", "Authorized AFS"]}
      />
      <StatsStrip />

      <Section eyebrow="Story" title="DC and IT first, with authorized brand supply">
        <div className="grid gap-8 lg:grid-cols-2">
          <FadeIn>
            <article className="glass rounded-2xl p-6 sm:p-8">
              <h3 className="text-xl font-semibold text-foreground">Mission</h3>
              <p className="mt-3 leading-relaxed text-muted">{company.mission}</p>
            </article>
          </FadeIn>
          <FadeIn delay={0.1}>
            <article className="glass rounded-2xl p-6 sm:p-8">
              <h3 className="text-xl font-semibold text-foreground">Vision</h3>
              <p className="mt-3 leading-relaxed text-muted">{company.vision}</p>
            </article>
          </FadeIn>
        </div>
      </Section>

      <Section eyebrow="Timeline" title="How the practice scaled">
        <ol className="relative space-y-6 border-l border-border pl-8">
          {timeline.map((item, index) => (
            <FadeIn key={item.year} delay={index * 0.05}>
              <li className="relative">
                <span className="absolute -left-[39px] top-1.5 h-3 w-3 rounded-full bg-accent shadow-[0_0_12px_var(--accent)]" />
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">{item.year}</p>
                <h3 className="mt-1 text-lg font-semibold text-foreground">{item.title}</h3>
                <p className="mt-1 text-sm text-muted">{item.description}</p>
              </li>
            </FadeIn>
          ))}
        </ol>
      </Section>

      <Section eyebrow="Values" title="What we refuse to compromise">
        <div className="grid gap-5 md:grid-cols-2">
          {values.map((value) => (
            <ValueCard key={value.id} value={value} />
          ))}
        </div>
      </Section>

      <GlobalPresence />
      <CTASection />
    </>
  );
}
