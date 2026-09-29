import CountUp from "../animations/CountUp";

export default function StatCard({ stat }) {
  return (
    <article className="glass rounded-2xl px-5 py-6 text-center">
      <p className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
        <CountUp value={stat.value} suffix={stat.suffix} />
      </p>
      <p className="mt-2 text-sm text-muted">{stat.label}</p>
    </article>
  );
}
