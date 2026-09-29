export default function IndustryCard({ industry }) {
  return (
    <article className="group relative overflow-hidden rounded-2xl border border-border bg-surface p-6 transition hover:border-accent">
      <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-accent/10 transition group-hover:bg-accent/20" />
      <h3 className="relative text-lg font-semibold text-foreground">{industry.name}</h3>
      <p className="relative mt-2 text-sm leading-relaxed text-muted">{industry.description}</p>
    </article>
  );
}
