export default function ValueCard({ value }) {
  return (
    <article className="glass h-full rounded-2xl p-6">
      <h3 className="text-lg font-semibold text-foreground">{value.title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-muted">{value.description}</p>
    </article>
  );
}
