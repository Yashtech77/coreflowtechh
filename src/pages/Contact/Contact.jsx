import { ShieldCheck } from "lucide-react";
import { faqs } from "../../data/faqs";
import Seo from "../../components/common/Seo";
import PageHero from "../../components/common/PageHero";
import Section from "../../components/ui/Section";
import ContactForm from "../../components/forms/ContactForm";
import Accordion from "../../components/ui/Accordion";
import Container from "../../components/ui/Container";
import Badge from "../../components/ui/Badge";
import Button from "../../components/ui/Button";

export default function Contact() {
  return (
    <>
      <Seo
        title="Contact us"
        description="Talk to Coreflowtech about data centre solutions, IT infrastructure, or authorized KAYTUS / CxTEK / AFS supply in India."
        path="/contact"
      />
      <PageHero
        eyebrow="Contact"
        title="Talk to Coreflowtech"
        subtitle="Share your data centre scope, IT infrastructure list, or authorized KAYTUS / CxTEK / AFS requirement. We will come back with a clear India delivery plan."
      />

      <section className="py-16">
        <Container className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <article className="glass glow-border flex h-fit flex-col gap-4 rounded-2xl p-6 sm:p-8">
            <Badge>Authorization</Badge>
            <div className="flex gap-3">
              <ShieldCheck className="mt-0.5 h-6 w-6 shrink-0 text-accent" />
              <div>
                <h2 className="text-xl font-semibold text-foreground">Authorized KAYTUS, CxTEK & AFS distributor in India</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  Coreflowtech supplies the official KAYTUS, CxTEK, and AFS ranges in India, alongside our own AI software and data centre solutions.
                </p>
              </div>
            </div>
            <Button to="/products" variant="outline" className="mt-2 w-full sm:w-auto">
              View authorized portfolio
            </Button>
          </article>
          <ContactForm />
        </Container>
      </section>

      <Section eyebrow="FAQ" title="Common questions">
        <Accordion items={faqs} />
      </Section>
    </>
  );
}
