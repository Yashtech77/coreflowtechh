import { ArrowUpRight } from "lucide-react";

export default function ServiceCard({ service }) {
  return (
    <article className="glass h-full rounded-2xl p-6 transition duration-300 hover:-translate-y-1 hover:border-accent">
      <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary/20 text-sm font-bold text-accent">
        {service.name.charAt(0)}
      </div>
      <h3 className="text-lg font-semibold text-foreground">{service.name}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted">{service.short}</p>
      <p className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-accent">
        Learn more <ArrowUpRight className="h-4 w-4" />
      </p>
    </article>
  );
}
